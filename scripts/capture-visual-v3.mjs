import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const baseURL = process.env.NORTHWAY_BASE_URL || 'http://127.0.0.1:3002';
const directory = 'v2/review/visual-v3/screenshots';
const routes = { home: '/', case: '/case-studies/kindred-clinic', services: '/services', contact: '/contact', cases: '/case-studies', insights: '/insights', about: '/about', article: '/insights/how-we-price-a-fixed-project' };
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 1000 }, deviceScaleFactor: 1 });
    for (const [name, route] of Object.entries(routes)) {
      const errors = [];
      const onError = error => errors.push(error.message);
      page.on('pageerror', onError);
      const response = await page.goto(`${baseURL}${route}`);
      if (response?.status() !== 200) throw new Error(`${route}: ${response?.status()}`);
      await page.getByRole('heading', { level: 1 }).waitFor();
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${directory}/${name}-${width}.png`, fullPage: true });
      page.off('pageerror', onError);
      if (errors.length) throw new Error(`${route}: ${errors.join(', ')}`);
      console.log(`Captured ${name}-${width}`);
    }
    await page.goto(`${baseURL}/#faq`);
    await page.getByRole('button', { name: /How does a project start/ }).click();
    await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${directory}/faq-open-${width}.png`, fullPage: true });
    if (width === 1440) {
      await page.goto(`${baseURL}/`);
      await page.locator('.briefing .button').hover();
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${directory}/hero-hover-1440.png` });
    } else {
      await page.goto(`${baseURL}/`);
      await page.getByRole('button', { name: 'Menu', exact: true }).click();
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `${directory}/menu-open-390.png` });
    }
    await page.close();
  }
} finally { await browser.close(); }
