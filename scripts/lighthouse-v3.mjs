import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const routes = { home: '/', case: '/case-studies/kindred-clinic', services: '/services', contact: '/contact' };
const summary = [];
await mkdir('.cache/lighthouse-v3', { recursive: true });
for (const width of [1440, 390]) {
  for (const [name, route] of Object.entries(routes)) {
    const path = `.cache/lighthouse-v3/${name}-${width}.json`;
    const args = ['exec', '--yes', '--package=lighthouse@13.6.0', '--', 'lighthouse', `http://127.0.0.1:3005${route}`, '--only-categories=accessibility', '--throttling-method=provided', '--chrome-flags=--headless', '--output=json', `--output-path=${path}`, '--quiet', `--screenEmulation.width=${width}`, `--screenEmulation.height=${width === 390 ? 844 : 1000}`, '--screenEmulation.deviceScaleFactor=1', `--screenEmulation.mobile=${width === 390}`, `--form-factor=${width === 390 ? 'mobile' : 'desktop'}`];
    await new Promise((resolve, reject) => {
      const child = spawn('npm', args, { stdio: ['ignore', 'pipe', 'pipe'] });
      let output = '';
      child.stdout.on('data', chunk => { output += chunk; });
      child.stderr.on('data', chunk => { output += chunk; });
      child.on('exit', code => code === 0 ? resolve() : reject(new Error(output)));
    });
    const report = JSON.parse(await readFile(path, 'utf8'));
    const failed = Object.values(report.audits).filter(audit => audit.scoreDisplayMode === 'binary' && audit.score === 0).map(audit => ({ id: audit.id, title: audit.title }));
    summary.push({ page: name, width, lighthouseVersion: report.lighthouseVersion, accessibility: report.categories.accessibility.score * 100, failed });
    console.log(`${name} ${width}: ${report.categories.accessibility.score * 100}, failed ${failed.length}`);
  }
}
await writeFile('v2/review/visual-v3/lighthouse-accessibility.json', JSON.stringify(summary, null, 2) + '\n');
if (summary.some(result => result.failed.length)) process.exitCode = 1;
