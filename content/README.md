> V2: the internal `sample` metadata remains for the launch checklist, while public pages disclose the fictional studio once in the footer. Images remain optional; a Folio provides the designed no-image treatment.

# Editing Northway content

Studio settings live in `settings.json`. Collections live in `projects`, `posts`, `services` and `faqs`. Each Markdown record starts with a JSON object between `---` lines. Posts then have a plain paragraph body, separated by blank lines.

Keep slugs unique within each collection and preserve the documented field names. Every supplied record is fictional Sample content. Replace the names, outcomes, dates, service details and article copy before launch. The project dates only establish the demo's sorting order; they are not evidence of real work.

Settings control `workLabel`, `ctaLabel`, `showPrices`, `showInsights`, `showPrinciples` and `showCredit`. When a collection is empty, leave its directory present. Empty posts hide Insights, while empty projects retain the case-study empty state and move services up on Home. An empty result can fall back to a quote with a name; empty lead fields leave just the hero heading and lede.

The case cards and hero have optional image fields (`src`, `alt`, `width`, `height`). The demo supplies none. Add a real asset only when it belongs to the record, and keep its internal sample metadata with the record. No placeholder image frames are rendered.

Development reads these files locally. Rebuild the app after editing content for a production preview. The current legal pages are explicitly sample notices and require proper replacement before a public launch.
