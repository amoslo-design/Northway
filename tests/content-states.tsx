import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect } from "@playwright/test";
import { test } from "node:test";
import assert from "node:assert/strict";
import { getContent } from "../src/lib/content";
import { Hero } from "../src/components/organisms/Hero";
import { InsightsTeaser, SelectedCases, ServicesTeaser, StudioShort } from "../src/components/organisms/HomeSections";
import { ComparisonTable } from "../src/components/organisms/ComparisonTable";

test("price-off and empty collections render complete states", async () => {
  const { settings, services } = await getContent();
  const hidden = { ...settings, showPrices: false };
  const markup = renderToStaticMarkup(<><Hero settings={hidden} /><ServicesTeaser settings={hidden} services={services} /><ComparisonTable services={services} showPrices={false} /></>);
  assert.doesNotMatch(markup, /\$8,000|\$16,000|\$28,000|From \$/);
  expect(markup).toContain("6 weeks");
  expect(markup).toContain("10 weeks");
  expect(renderToStaticMarkup(<SelectedCases projects={[]} settings={settings} />)).toBe("");
  expect(renderToStaticMarkup(<InsightsTeaser posts={[]} />)).toBe("");
  expect(renderToStaticMarkup(<ServicesTeaser services={[]} settings={settings} />)).toBe("");
  expect(renderToStaticMarkup(<StudioShort settings={{ ...settings, studioBody: "" }} />)).toBe("");
});

test("hero falls back from result to named quote to the approved heading", async () => {
  const { settings } = await getContent();
  const quote = renderToStaticMarkup(<Hero settings={{ ...settings, heroResult: "", heroQuote: "They made the next step obvious.", heroQuoteName: "Amira Mendez" }} />);
  expect(quote).toContain("They made the next step obvious.");
  expect(quote).toContain("Amira Mendez");
  const fallback = renderToStaticMarkup(<Hero settings={{ ...settings, heroResult: "", heroQuote: "", heroQuoteName: "" }} />);
  expect(fallback).toContain(settings.heroHeading);
  expect(fallback).not.toContain("folio-link");
});

test("Excerpt needs a featured case with distinct, attributed proof", async () => {
  const { settings, projects } = await getContent();
  const project = projects[0];
  const normal = renderToStaticMarkup(<Hero settings={settings} project={project} />);
  assert.match(normal, /class="excerpt"/);
  assert.equal(normal.split("They made the next step obvious.").length - 1, 1);
  for (const item of [{ ...project, featured: false }, { ...project, quoteName: "", hero: undefined }]) {
    assert.doesNotMatch(renderToStaticMarkup(<Hero settings={settings} project={item} />), /excerpt-target/);
  }
  assert.doesNotMatch(renderToStaticMarkup(<Hero settings={{ ...settings, heroResult: project.quote! }} project={project} />), /excerpt-target/);
});
