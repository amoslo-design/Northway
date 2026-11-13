import { test, expect } from "@playwright/test";

test("v3 disclosure replaces item badges and builder notes on public pages", async ({ page }) => {
  for (const route of ["/", "/case-studies", "/case-studies/kindred-clinic", "/services", "/insights", "/insights/how-we-price-a-fixed-project", "/about", "/contact"]) {
    await page.goto(route);
    await expect(page.getByText("Northway is a demonstration studio that ships with this template.", { exact: true })).toHaveCount(1);
    await expect(page.locator(".sample-badge")).toHaveCount(0);
    expect(await page.locator("body").innerText()).not.toMatch(/Sample result|for demo only|\(sample\)|editable|Sample process/);
  }
});

test("price and primary action are visible in the desktop first view", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator(".briefing h1")).toBeInViewport({ ratio: 1 });
  await expect(page.locator(".briefing-price > a")).toBeInViewport({ ratio: 1 });
  await expect(page.locator(".briefing [data-primary-action]")).toBeInViewport({ ratio: 1 });
  await expect(page.locator(".desktop-cta .nav-enquiry")).toHaveAttribute("data-primary", "false");
  await page.locator('.tablet-row[data-typical="true"]').scrollIntoViewIfNeeded();
  await expect(page.locator(".desktop-cta .nav-enquiry")).toHaveAttribute("data-primary", "false");
  await expect(page.locator('.price-tablet .button')).toHaveCount(1);
  await expect(page.locator('.price-tablet .button')).toHaveAttribute("href", "/contact?service=grow");
});

test("no-JS reduced motion preserves the result, Excerpt and process", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(`${baseURL}/`);
  await expect(page.locator(".briefing h1")).toBeVisible();
  await expect(page.locator(".briefing .excerpt")).toBeVisible();
  await expect(page.locator(".home-process-path li")).toHaveCount(4);
  expect(await page.locator(".briefing h1").evaluate(node => getComputedStyle(node).opacity)).toBe("1");
  await context.close();
});

test("grain has a Save-Data fallback", async ({ request }) => {
  const normal = await request.get("/assets/grain.svg");
  expect(normal.status()).toBe(200);
  const reduced = await request.get("/assets/grain.svg", { headers: { "Save-Data": "on" } });
  expect(reduced.status()).toBe(204);
});

