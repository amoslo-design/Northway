import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/case-studies", "/case-studies/kindred-clinic", "/services", "/about", "/insights", "/insights/how-we-price-a-fixed-project", "/contact", "/privacy", "/terms", "/cookies", "/missing-page"];

test("all public layouts pass overflow, accessibility, copy and touch checks", async ({ page }) => {
  test.setTimeout(240000);
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(route === "/missing-page" ? 404 : 200);
      await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${route} at ${width}`).toBe(true);
      expect(await page.locator("body").innerText(), route).not.toMatch(/—|\b(unlock|elevate|leverage|empower|seamless|holistic|synergy)\b/i);
      const small = await page.locator("a, button").evaluateAll(nodes => nodes.filter(node => {
        const r = node.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && (r.width < 43.9 || r.height < 43.9) && !(node instanceof HTMLElement && node.classList.contains("skip-link"));
      }).map(node => `${node.textContent?.trim() || node.getAttribute("aria-label")}`));
      expect(small, `${route} targets at ${width}`).toEqual([]);
      if ([390, 1440].includes(width)) {
        const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"]).analyze();
        expect(axe.violations, `${route} accessibility at ${width}`).toEqual([]);
      }
    }
  }
});

test("Home preserves the three asks, distinct type roles and quiet navigation", async ({ page }) => {
  for (const width of [390, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("main .button")).toHaveCount(3);
    await expect(page.getByRole("link", { name: "Tell us about your brief", exact: true })).toBeInViewport({ ratio: 1 });
    await expect(page.locator(".briefing-price > a")).toBeInViewport({ ratio: 1 });
    await expect(page.locator(".excerpt")).toHaveCount(1);
    await expect(page.getByText("They made the next step obvious.", { exact: false })).toHaveCount(1);
    await expect(page.getByText("Patients knew who the clinic was for, and booked a first visit from the site.", { exact: true })).toHaveCount(1);
    const quote = await page.locator(".excerpt-quote").evaluate(node => { const s = getComputedStyle(node); return [s.fontSize, s.lineHeight, s.fontWeight]; });
    expect(quote).toEqual(["32px", "38.4px", "500"]);
    const sizes = await page.locator("main").evaluate(node => [getComputedStyle(node.querySelector("h1")!).fontSize, getComputedStyle(node.querySelector(".cta-inner h2")!).fontSize].map(parseFloat));
    expect(sizes[1]).toBeGreaterThan(sizes[0]);
    for (const target of [".home-work", ".price-tablet", ".home-faq", ".cta-band"]) {
      await page.locator(target).scrollIntoViewIfNeeded();
      await expect(page.locator(".desktop-cta .nav-enquiry")).toHaveAttribute("data-primary", "false");
    }
    if (width === 390) {
      const first = await page.locator(".tablet-row").evaluateAll(nodes => nodes.reduce((a, b) => a.getBoundingClientRect().top < b.getBoundingClientRect().top ? a : b).id);
      expect(first).toBe("grow");
    }
  }
});

test("focus uses the right contrast on pine, white and the enquiry sheet", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator(".briefing .button");
  await hero.focus();
  expect(await hero.evaluate(node => getComputedStyle(node).outlineColor)).toBe("rgb(247, 247, 244)");
  await page.goto("/contact?service=brand");
  const input = page.getByLabel("Name", { exact: true });
  await input.focus();
  expect(await input.evaluate(node => getComputedStyle(node).outlineColor)).toBe("rgb(31, 58, 46)");
  await expect(page.getByLabel("Service", { exact: true })).toHaveValue("brand");
});

test("case endings, Services and aliases retain the intended journeys", async ({ page, request }) => {
  await page.goto("/case-studies/kindred-clinic");
  await expect(page.locator("main .button")).toHaveCount(1);
  await expect(page.getByRole("link", { name: "Next case: Holloway Advisors" })).toHaveAttribute("href", "/case-studies/holloway-advisors");
  await expect(page.getByText("They made the next step obvious.")).toHaveCount(0);
  await page.goto("/services");
  await expect(page.locator("main .button")).toHaveCount(1);
  await expect(page.locator("main .text--meta")).toHaveCount(1);
  await page.getByRole("link", { name: "Ask about Position", exact: true }).click();
  await expect(page.getByLabel("Service", { exact: true })).toHaveValue("position");
  const alias = await request.get("/work/kindred-clinic", { maxRedirects: 0 });
  expect(alias.status()).toBe(301);
  expect(alias.headers().location).toBe("/case-studies/kindred-clinic");
});
