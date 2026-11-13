import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home follows the approved v2 structure and has working destinations", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Patients knew who the clinic was for, and booked a first visit from the site.");
  const sections = await page.locator("main > section").evaluateAll(nodes => nodes.map(node => node.getAttribute("id") || node.getAttribute("aria-label") || node.getAttribute("aria-labelledby")));
  expect(sections).toEqual(["home-heading", "case-studies", "insights", "price-tablet", "process", "studio", "faq", "cta-heading"]);
  await expect(page.locator(".case-card")).toHaveCount(4);
  await expect(page.locator(".post-card")).toHaveCount(3);
  await expect(page.locator(".service-card")).toHaveCount(3);
  await expect(page.locator(".home-hero img")).toHaveCount(0);
  const destinations = await page.locator('a[href^="/"]').evaluateAll(nodes => [...new Set(nodes.map(node => node.getAttribute("href")!))]);
  for (const href of destinations) expect((await request.get(href)).status(), href).toBe(200);
  expect((await request.get("/case-studies/not-a-case")).status()).toBe(404);
  const redirect = await request.get("/work", { maxRedirects: 0 });
  expect(redirect.status()).toBe(301);
});

test("FAQ supports keyboard expansion without height animation", async ({ page }) => {
  await page.goto("/#faq");
  const trigger = page.getByRole("button", { name: /How does a project start/ });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("region", { name: /How does a project start/ })).toBeVisible();
  await page.keyboard.press("Space");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});

test("mobile navigation traps focus, closes on Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  await menu.click();
  const dialog = page.getByRole("dialog", { name: "Main navigation" });
  await expect(dialog).toBeVisible();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await dialog.getByRole("button", { name: "Close", exact: true }).focus();
  await page.keyboard.press("Shift+Tab");
  expect(await dialog.evaluate(node => node.contains(document.activeElement))).toBe(true);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(menu).toBeFocused();
  await menu.click();
  await dialog.getByRole("link", { name: "Services", exact: true }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("homepage stays within each viewport and passes accessibility checks", async ({ page }) => {
  test.setTimeout(60000);
  for (const width of [320, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `width ${width}`).toBe(true);
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(result.violations).toEqual([]);
    if (width === 1440) await page.screenshot({ path: "test-results/northway-homepage-desktop.png", fullPage: true });
    if (width === 320) await page.screenshot({ path: "test-results/northway-homepage-mobile.png", fullPage: true });
  }
});

test("service enquiry preselects the package and retains input on delivery failure", async ({ page }) => {
  await page.goto("/contact?service=grow");
  await expect(page.getByLabel("Service", { exact: true })).toHaveValue("grow");
  await page.getByRole("button", { name: "Send the brief" }).click();
  await expect(page.getByRole("alert").first()).toContainText("Check the highlighted fields");
  await page.getByLabel("Name", { exact: true }).fill("Sample visitor");
  await page.getByLabel("Email", { exact: true }).fill("hello@northway.example");
  await page.route("**/api/enquiry", route => route.fulfill({ status: 503, json: { error: "Delivery is not configured." } }));
  await page.getByRole("button", { name: "Send the brief" }).click();
  await expect(page.locator(".enquiry-error")).toContainText("couldn't confirm");
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue("Sample visitor");
  await expect(page.getByRole("heading", { name: /Thanks/ })).toHaveCount(0);
});
