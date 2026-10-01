# Portfolio redesign models

**Objective:** Three minimalist, professional redesign models of the homepage, viewable side by side, before choosing one.
**Problem:** Current home uses card-heavy dark slate UI with glow/gradient chrome; owner wants a quieter, more professional look.
**Scope (authorized):** New preview routes only under `src/pages/rediseno/`. `index.astro`, `/listoagent*`, `data.json` untouched. No commits without owner approval.
**Constraints:** Content from `src/data/data.json` + existing copy only; no invented claims. Spanish copy. `noindex` on previews. Responsive to 375px. Audience: hiring + consulting equally (PRODUCT.md).
**TDD:** off (no test runner in project). Checks: `npm run build`, detector, desktop+mobile screenshots.

## Tasks
- [x] T1 Capture PRODUCT.md (inline)
- [x] T2 Build 3 models + index at `/rediseno` (delegated writer: 2+ non-trivial files)
  - Evidence: `src/pages/rediseno/{index,datasheet,especificacion,suizo}.astro`; B font swapped Geist → Atkinson Hyperlegible Next/Mono after detector flag.
- [x] T3 Verify build, detector, screenshots
  - Evidence: `npm run build` → 8 pages, Complete; detector `[]`; 375px scrollWidth=clientWidth on all 3; screenshots 1440/375 in session scratchpad `shots/`. Not committed.
- [x] T4 Owner picks a model → DESIGN.md + replace home (owner chose C, 2026-10-01; delegated writer)
  - Owner additions: full title "Technical Leader & Full Stack Developer"; Taly (TalentPitch AI agent: agentic, RAG, tools, skills) in hero description, meta description, and first achievement of the 2025-Presente entry.
  - Evidence: `src/pages/index.astro` (Swiss, via Layout), `src/layouts/Layout.astro` (+`fontsHref`, `themeColor` props, defaults unchanged), `src/data/data.json` (+Taly achievement), `DESIGN.md`. `npm run build` → 8 pages, Complete; detector `[]`; `/` 0 console errors; 375px scrollWidth=clientWidth; `/listoagent` still DM Sans + dark slate. Shots: scratchpad `shots/home-*.png`. Not committed.
  - Added scope: ListoAgent experience entry (2026 — Presente, `url` field → external link with ↗ on home only); top nav ListoAgent → https://www.listoagent.net/; footer keeps listoagent.net + /listoagent + privacidad + eliminación de datos. A concurrent edit had already inserted the same entry; duplicate removed, the concurrent wording kept. DESIGN.md type ramp extended (body-sm 15px, caption 13px, link-lg 17px, display-mobile) → detector `[]`. Rebuild 8 pages, `/` 0 console errors.

## Directions
- A `/rediseno/datasheet` — component datasheet (white, black, signal orange, mono specs tables)
- B `/rediseno/especificacion` — RFC/spec document (graphite dark, numbered sections)
- C `/rediseno/suizo` — Swiss grid poster CV (concrete gray, black, one red)

## Delivery
- PR #7 `Feat/SwissRedesign` → main, merged 2026-10-01 (commit f869839, merge 307ae95).
- Previews `src/pages/rediseno/` intentionally not shipped.

## Follow-up
- [x] T5 OG image in Swiss style (1200×630), meta width/height/alt updated (inline: 1 asset + mechanical meta edit). Rendered from HTML with headless Chrome; visually checked.
- [x] T6 Sharper OG image: re-rendered at 2x (2400×1260, JPEG q95), larger labels, flex bottom row to avoid overlap. Reason: Facebook preview looked blurry at 1200×630.
