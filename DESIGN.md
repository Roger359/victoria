# Design — Victoria

<!-- impeccable:design-schema 1 -->

Built from the shipped code in `src/` (code-led, no comps). World: committed-purple calm continuity on warm paper. Brief: `src/pages/index.astro` surface brief (`.impeccable/surfaces/src-pages-index-astro.md`), direction seed `1516fe70` (brief-pinned; six dealt challengers declined with raises recorded in the brief).

## Tokens

```json
{
  "palette": {
    "paper": "#faf8fe",
    "paperDeep": "#f3edfd",
    "ink": "#2a1245",
    "inkSoft": "#5d4a7a",
    "primary": "#5b21b6",
    "deep": "#3b1470",
    "deepInk": "#f5efff",
    "lilac": "#ede9fe",
    "lilac2": "#ddd0fa",
    "gold": "#c9a227",
    "line": "#e2d8f5",
    "card": "#ffffff"
  }
}
```

Full token file: `.impeccable/design.json`.

- **Color strategy:** Committed. Purple carries the hero field (~100% of first viewport) and the drenched footer; paper ground elsewhere with lilac tints for quiet cards. Gold reserved for one mark (hero seal, progress bar, focus ring).
- **Type:** Display `Sora` 700/800 (headings, nav, buttons, meta actions); reading `Source Serif 4` 400/600/italic (body, article). Self-hosted via `@fontsource` (no external requests). Body measure ≤72ch; display max ~3.9rem; tabular numerals for dates/reading meta.
- **Shape:** Radius 16px cells, 20px cards, arched hero plate (999px top). One corner language everywhere.
- **Depth:** Offset + blur shadows only (e.g. `0 2px 6px rgba(42,18,69,.14), 0 14px 34px -12px rgba(59,20,112,.35)`).
- **Light:** Daylight scene (home/school reading). Light ground, dark text; contrast ≥4.5:1 body.

## Components

- **Nav:** Sticky, blurred paper, brand seal (purple radial dot) + wordmark; pill links, active route filled primary. Anchor `Galería` → `/#galeria`.
- **Hero:** Two-column (copy + 3-plate collage with arched portrait, gold “Esto pasará también” seal), wave transition into paper. No eyebrow/kicker; heading carries weight.
- **Blog cards:** Cover 16/9, title, excerpt, tabular meta, arrow link; hover lift + cover zoom; tactile press scale. Dashed quiet card marks the empty state (“Más entradas en camino”).
- **Gallery collage:** Dense 4-col grid (2-col mobile), mixed tall/wide spans, 18 local photos, lazy + async decode.
- **Article:** 46rem measure, standfirst, tabular meta, cover, sectioned prose with bold thesis / italic voices, gold scroll-progress bar, footer back-links.
- **Footer:** Drenched deep purple, calm summary with gold italic refrain.

## Motion

One authored moment: hero plates `rise` (translateY + fade, `cubic-bezier(0.16,0.84,0.3,1)`); cover zoom on card hover; gold progress bar on article scroll. Content visible by default; `prefers-reduced-motion` disables all motion.

## States & browser surfaces

Hover/active/focus-visible (gold ring), sticky nav, lazy gallery, honest empty-state card. Themed `::selection`, caret, scrollbar, underline offset. Spanish copy throughout; controls name their action.

## Responsive

1440px full-bleed hero grid → single column ≤56rem; collage 4→2 columns; type clamps. Verified captures: `.impeccable/review/desktop.png`, `mobile.png`, `blog-desktop.png`, `post-desktop.png`.

## Provenance

No generated rasters. All 18 shipping images are user-supplied personal photographs, pre-existing in `images/`, copied verbatim to `public/images/` for static serving (origin: sourced/pre-existing, not generated — `embed-prompt --scan` correctly reports no generation prompts for them). No stock, no external URLs (verified: no `http` image refs in `src/`).
