# Gap Analysis

**Date**: 2026-04-24
**Task**: Digital Marketing Strategy Course — 8h Workshop Day

---

## Current vs. Desired State

| | Current State | Desired State |
|---|---|---|
| Research | ✅ Complete (277 KB, high confidence) | — |
| Keynote spec | ❌ None | Markdown, 85–90 slides, full Polish [SAY]/[DO]/[WATCH]/[TIME] script |
| Canva exercise templates | ❌ None | 4 Markdown build specs with Polish pre-fill content |
| Facilitator guides | ❌ None | 4 standalone Polish guides (one per exercise) |
| Framework hierarchy diagram | ❌ Not yet specified | Visual spec recurring on slides 6, 46, 77 |

---

## Gaps Identified

**Gap 1 — Keynote specification**: Section 8 of research-report.md has 85 slide titles/purposes. Missing: visual content descriptions + full Polish [SAY]/[DO]/[WATCH]/[TIME] notes per slide (~17,000 words of Polish prose).

**Gap 2 — Canva templates**: Section 7 of research-report.md specifies all 4 exercises. Missing: Markdown build instructions with Polish pre-fill content, zone/area descriptions, color tables.

**Gap 3 — Facilitator guides**: Research embeds facilitation in English. Missing: standalone Polish-language guides per exercise.

**Gap 4 — Hierarchy diagram spec**: The central visual (Brand Strategy → Digital Strategy → Digital Marketing Strategy → SOSTAC → RACE) needs a formal visual description before slide writing begins.

**Gap 5 — IAB data (non-blocking)**: Channel-level PLN breakdown unverified. Mitigation: "szacunkowe" labeling in Exercise 4.

---

## Task Characteristics

```yaml
has_reproducible_defect: false
modifies_existing_code: false
creates_new_entities: true
involves_data_operations: false
ui_heavy: false
```

---

## Risk Level: Low

Specification is complete and fully actionable. Main risk is volume management (85 slides of full Polish script). Mitigated by block-by-block creation order.

---

## Decisions Made

| # | Decision | Choice |
|---|---------|--------|
| D1 | Slide count target | Write to 85-slide outline; add organically if content warrants |
| D2 | Canva output format | Markdown build instructions (human executes in Canva) |
| D3 | Re-energizer campaigns | 5 specific campaigns selected from case study material |

---

## Recommended Creation Order

1. Framework hierarchy diagram spec (visual anchor, recurs throughout)
2. Keynote spec block-by-block (follow 85-slide outline from research-report.md Section 8)
3. Canva exercise spec after each corresponding lecture block
4. Facilitator guides (final layer, drawn from Keynote notes + Canva specs)
