// Production delivery check. Starts only local test receivers and owned Next processes.
import assert from 'node:assert/strict';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';
import { writeFile } from 'node:fs/promises';

const deliveries = [];
let releasePending;
const receiver = http.createServer(async (req, res) => {
  let body = '';
  for await (const chunk of req) body += chunk;
  const data = JSON.parse(body);
  deliveries.push(data);
  if (data.message === 'hold-for-pending') await new Promise(resolve => { releasePending = resolve; });
  res.writeHead(data.message === 'simulate-failure' ? 503 : 200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ ok: true }));
});
await new Promise(resolve => receiver.listen(3099, '127.0.0.1', resolve));
const children = [];
async function start(port, endpoint) {
  const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], {
    env: { ...process.env, NODE_ENV: 'production', NORTHWAY_DIST_DIR: '.next-build-v3', FORM_ENDPOINT: endpoint }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  children.push(child);
  let output = '';
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Server ${port} did not start: ${output}`)), 30000);
    child.stdout.on('data', chunk => { output += chunk; if (output.includes('Ready in')) { clearTimeout(timer); resolve(); } });
    child.stderr.on('data', chunk => { output += chunk; });
    child.on('exit', code => { clearTimeout(timer); reject(new Error(`Server ${port} exited ${code}: ${output}`)); });
  });
}
let browser;
const evidence = [];
try {
  await start(3003, 'http://127.0.0.1:3099');
  await start(3004, '');
  browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://127.0.0.1:3003/contact?service=grow');
  assert.equal(await page.getByLabel('Service', { exact: true }).inputValue(), 'grow');
  await page.getByLabel('Name', { exact: true }).fill('Production test visitor');
  await page.getByLabel('Email', { exact: true }).fill('visitor@northway.example');
  await page.getByLabel('Message', { exact: false }).fill('simulate-failure');
  await page.getByRole('button', { name: 'Send the brief' }).click();
  await page.getByRole('alert').filter({ hasText: "couldn't confirm" }).waitFor();
  assert.equal(await page.getByLabel('Name', { exact: true }).inputValue(), 'Production test visitor');
  evidence.push('Browser -> production API -> local receiver rejection -> 502 -> visible failure, values retained.');
  await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: 'v2/review/visual-v3/screenshots/contact-failure-390.png', fullPage: true });
  await page.getByLabel('Message', { exact: false }).fill('hold-for-pending');
  await page.getByRole('button', { name: 'Send the brief' }).click();
  const button = page.getByRole('button', { name: 'Send the brief' });
  await page.waitForFunction(() => document.querySelector('button[type="submit"]')?.getAttribute('aria-busy') === 'true');
  assert.equal(await button.isDisabled(), true);
  await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: 'v2/review/visual-v3/screenshots/contact-pending-390.png', fullPage: true });
  for (let i = 0; i < 100 && !releasePending; i++) await new Promise(resolve => setTimeout(resolve, 10));
  assert.ok(releasePending, 'Receiver got the pending request');
  releasePending();
  await page.getByRole('heading', { name: /Thanks/ }).waitFor();
  assert.equal(await page.getByRole('button', { name: 'Send the brief' }).count(), 0);
  assert.deepEqual(deliveries.at(-1), { name: 'Production test visitor', email: 'visitor@northway.example', service: 'grow', message: 'hold-for-pending' });
  evidence.push('Browser -> production API -> local receiver accepted exact payload -> pending disabled button -> success, form replaced.');
  await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: 'v2/review/visual-v3/screenshots/contact-success-390.png', fullPage: true });
  const valid = { name: 'Test visitor', email: 'visitor@northway.example', service: 'position', message: '' };
  const post = (port, payload) => fetch(`http://127.0.0.1:${port}/api/enquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  assert.equal((await post(3003, { ...valid, service: 'invalid' })).status, 400);
  assert.equal((await post(3003, { ...valid, email: 'invalid' })).status, 400);
  const before = deliveries.length;
  assert.equal((await post(3003, { ...valid, website: 'bot' })).status, 200);
  assert.equal(deliveries.length, before);
  assert.equal((await post(3004, valid)).status, 503);
  evidence.push('Production API rejects invalid service and email (400), accepts honeypot without forwarding, and reports missing FORM_ENDPOINT (503).');
  await writeFile('v2/review/visual-v3/form-verification.json', JSON.stringify({ mode: 'production', externalMessagesSent: 0, receiver: 'loopback-only', evidence }, null, 2) + '\n');
  console.log(evidence.join('\n'));
} finally {
  releasePending?.();
  await browser?.close();
  for (const child of children) child.kill('SIGTERM');
  receiver.closeAllConnections();
  receiver.close();
}
