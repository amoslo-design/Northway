import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("keyboard skip link targets the main content", async ({ page }) => {
  await page.goto("/components");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
});

test("field errors are associated, announced and recoverable", async ({ page }) => {
  await page.goto("/components#fields");
  const form = page.getByRole("form", { name: "Email validation preview" });
  const email = form.getByLabel("Email", { exact: true });
  await email.fill("hello@");
  await form.getByRole("button", { name: "Check email" }).click();
  await expect(email).toHaveAttribute("aria-invalid", "true");
  await expect(email).toHaveAccessibleDescription("Enter a valid email address.");
  await expect(email).toBeFocused();
  await email.fill("hello@northway.example");
  await form.getByRole("button", { name: "Check email" }).click();
  await expect(email).not.toHaveAttribute("aria-invalid");
  await expect(form.getByRole("status")).toContainText("Email format looks right.");
  await expect(email).toHaveValue("hello@northway.example");
});

test("filters and icon buttons expose their selected state", async ({ page }) => {
  await page.goto("/components#tags");
  const filters = page.getByRole("group", { name: "Preview sector filters" });
  await filters.getByRole("button", { name: "Health", exact: true }).click();
  await expect(filters.getByRole("button", { name: "Health", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(filters.getByRole("button", { name: "All", exact: true })).toHaveAttribute("aria-pressed", "false");
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await expect(page.getByRole("button", { name: "Close", exact: true })).toHaveAttribute("aria-pressed", "true");
});

test("loading preserves button width and disabled links cannot navigate", async ({ page }) => {
  await page.goto("/components#buttons");
  const button = page.getByRole("button", { name: "Preview loading" });
  const before = await button.boundingBox();
  await button.click();
  await expect(button).toHaveAttribute("aria-busy", "true");
  await expect(button).toBeDisabled();
  const after = await button.boundingBox();
  expect(after?.width).toBe(before?.width);
  await expect(button).toBeEnabled();
  const link = page.getByRole("link", { name: "Disabled link" });
  await expect(link).toHaveAttribute("aria-disabled", "true");
  await link.evaluate(node => (node as HTMLElement).click());
  await expect(page).toHaveURL(/#buttons$/);
});

test("responsive examples remain within the viewport and pass axe", async ({ page }) => {
  for (const width of [320, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/components");
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow, `horizontal overflow at ${width}px`).toBe(false);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"]).analyze();
    expect(results.violations).toEqual([]);
  }
});

test("reduced motion remains readable before hydration", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(`${baseURL}/components`);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const animation = await page.locator(".button__spinner").first().evaluate(node => getComputedStyle(node).animationName);
  expect(animation).toBe("none");
  await context.close();
});
