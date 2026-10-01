---
name: Paul Werner Osinga — Portfolio
description: Swiss International Style CV poster. The grid is the design.
colors:
  ground: "oklch(0.93 0.004 250)"
  ink: "oklch(0.17 0.005 250)"
  ink-2: "oklch(0.42 0.006 250)"
  rule-soft: "oklch(0.17 0.005 250 / 0.22)"
  red: "oklch(0.58 0.21 27)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 11.4vw, 10.5rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.045em"
  numeral:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  role:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.5
  display-mobile:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 15.5vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.045em"
  link-lg:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.5
  body-sm:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0"
spacing:
  gutter: "24px"
  gutter-tablet: "16px"
  margin: "40px"
  margin-tablet: "24px"
  margin-mobile: "16px"
components:
  red-marker:
    backgroundColor: "{colors.red}"
    rounded: "{rounded.none}"
    width: "88px"
  status-label:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design

## Overview
A Swiss International Style CV poster (Müller-Brockmann lineage). The 12-column grid, the type scale and empty space carry the whole page. It refuses the developer-portfolio defaults: card stacks, icon tiles, glow, gradients, dark slate. Source of truth: `src/pages/index.astro`. Earlier preview models live in `src/pages/rediseno/` and are not authoritative.

The `/listoagent*` routes keep their own older dark visual system (`src/styles/global.css`, DM Sans). This DESIGN.md governs the home and any future portfolio surfaces, not ListoAgent.

## Colors
Restrained: a cool concrete gray ground, near-black ink, a secondary gray ink for supporting text, and one Swiss red.
- **Red is singular.** One red element owns each viewport: the hero square, and the small square before "Disponible". Red also serves as the focus ring. Never use it for text, backgrounds of regions, or decoration.
- Rules are ink: 2px for section heads and footer, 1px for list/table dividers, `rule-soft` between experience rows.
- Contrast: `ink-2` on `ground` passes AA for body text; do not lighten it further.

## Typography
One family only: Schibsted Grotesk (400/500/700/800), loaded through Layout's `fontsHref` prop. Flush-left, ragged-right, never centered, never justified.
- Display name and numerals are set tight (negative tracking, sub-1 line height) at poster scale.
- Hierarchy comes from size and weight jumps, not color or ornament.
- Labels are 13–14px, weight 700, sentence case. No tracked uppercase, no monospace.

## Layout
- `.grid`: 12 columns, `minmax(0, 1fr)`, max-width 1440px, margin 40px, gutter 24px.
- ≤1000px: margin 24px, gutter 16px; hero summary, numerals and contact column stack full width.
- ≤640px: margin 16px; everything spans 12 columns; achievements sit under the role with a 1px left rule.
- Experience rows read left to right: period/type (cols 1–3), role/company/description (4–8), achievements (9–12).
- More space above a section head than below it. Sections open with a full-width 2px rule.
- No horizontal scroll at 375px.

## Elevation & Depth
None. Flat paper. No shadows, no blur, no translucency layers, no z-stacked chrome.

## Shapes
Right angles only (`rounded.none`). The only filled shapes are red squares.

## Components
- **Links:** inherit ink; hover draws a 1px underline from left (background-size transition, 220ms, `cubic-bezier(0.16, 1, 0.3, 1)`). Focus: 2px red outline, 2px offset.
- **Nav (top bar):** name (cols 1–4), city (5–8), section links + ListoAgent (9–12). Plain text links, wraps on mobile.
- **Metrics:** `<dl>` with giant numeral above a small gray label, under a 1px rule.
- **Contact list:** stacked rows, small gray channel label over a 17px link, separated by 1px ink rules.
- **Footer:** copyright (1–4), domain (5–8), ListoAgent links (9–12) under a 2px rule.

## Do's and Don'ts
- Do let type size and the grid create hierarchy.
- Do keep content in `src/data/data.json`; the page only renders it.
- Do respect `prefers-reduced-motion` (smooth scroll and link transitions off).
- Don't add cards, borders around blocks, radii, shadows, gradients, icons, or badges.
- Don't introduce a second accent color or a second typeface.
- Don't center text blocks or use more than one red element per viewport.
