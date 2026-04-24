# Implementation Plan: Digital Marketing Strategy Course Materials

Version: 1.0
Last updated: 2026-04-24
Task path: .maister/tasks/development/2026-04-24-digital-marketing-strategy-course/

---

## Overview

Total Task Groups: 9
Total Steps: ~68
Expected Review Checks: 44 acceptance criteria across 4 deliverables
Deliverables: 9 Markdown files (1 diagram spec, 1 keynote spec, 4 Canva specs, 4 facilitator guides)

This is a content creation task. There are no code tests. "Review checks" in this plan mean structured verification passes against the acceptance criteria in spec.md: slide field completeness, Polish language presence, timing totals summing to 8 hours, terminology consistency against Appendix B, and word count minimums.

---

## Primary Source Reference

All content is drawn from:
- `implementation/spec.md` — authoritative deliverable requirements and acceptance criteria
- `research/2026-04-24-digital-marketing-strategy-course/outputs/research-report.md` — primary content source

Section-to-deliverable mapping:
- Section 1 (Agenda) → [TIME] fields for all slides; facilitator guide timing
- Section 2 (Introduction/CVP) → [SAY] scripts slides 46–57
- Section 3 (SOSTAC) → [SAY] scripts slides 7–19; Exercise 1 materials
- Section 4 (RACE) → [SAY] scripts slides 24–35; Exercise 2 materials
- Section 5 (Case Studies) → [SAY] examples across all lecture blocks
- Section 6 (Market Data) → statistics embedded in [SAY] fields across deck
- Section 7 (Exercises) → Canva specs + facilitator guides 1–4
- Section 8 (Keynote Structure) → slide outline scaffold for keynote-spec.md
- Appendix B → Polish terminology applied uniformly
- Appendix D → incorporated into each facilitator guide header

---

## Implementation Steps

### Task Group 1: Framework Hierarchy Diagram Spec
**Dependencies:** None — foundational visual, required before writing any slide scripts
**Estimated Steps:** 6
**Output file:** `implementation/hierarchy-diagram-spec.md`

- [x] 1.0 Complete the framework hierarchy diagram specification
  - [x] 1.1 Review checks to run after completion:
    - All 5 levels present with Polish primary labels and sub-labels
    - Color hex codes specified for all 5 boxes
    - Arrow specification defined (weight, color, arrowhead style)
    - Three variants specified (Slide 6 equal weight; Slide 46 foundation emphasis; Slide 77 annotated)
    - Variant 2 specifies which levels fade and to what opacity (30%)
    - Variant 3 specifies callout text for all 5 levels
  - [x] 1.2 Write box specifications table
  - [x] 1.3 Write arrow specification
  - [x] 1.4 Write Variant 1 (Slide 6 — equal weight)
  - [x] 1.5 Write Variant 2 (Slide 46 — foundation emphasis)
  - [x] 1.6 Write Variant 3 (Slide 77 — annotated)
  - [x] 1.7 Confirm all 6 review checks pass — ALL PASS

**Acceptance Criteria:**
- All 6 review checks in step 1.1 confirmed
- No design decision left ambiguous (any designer can reproduce without asking questions)
- Version header block present in file

---

### Task Group 2: Opening Block Slides (Slides 1–6) + Icebreaker
**Dependencies:** Group 1 (hierarchy diagram variant references needed for Slide 6)
**Estimated Steps:** 7
**Output file:** `implementation/keynote-spec.md` (initial section)

- [x] 2.0 Complete opening block slides 1–6 in keynote-spec.md
  - [x] 2.1 Review checks — all 6 PASS
  - [x] 2.2 Write Slides 1–3 (Title, Agenda, How Today Works)
  - [x] 2.3 Write Slides 4–5 (Icebreaker instruction + debrief)
  - [x] 2.4 Write Slide 6 (Framework Hierarchy — Variant 1)
  - [x] 2.5 Add file header and version block to keynote-spec.md
  - [x] 2.6 Add "## Do aktualizacji (co rok)" section stub to keynote-spec.md
  - [x] 2.7 Confirm all 6 review checks in 2.1 pass — ALL PASS

**Acceptance Criteria:**
- Slides 1–6 complete with all required fields
- Slide 6 names the hierarchy diagram variant unambiguously
- [TIME] targets align with 09:00–09:45 agenda window
- File header and Do aktualizacji stub present

---

### Task Group 3: SOSTAC Lecture Slides (Slides 7–22) + Workshop 1
**Dependencies:** Group 2 (keynote-spec.md file established; Slide 6 hierarchy diagram is visual reference)
**Estimated Steps:** 9
**Output file:** `implementation/keynote-spec.md` (appended)

- [x] 3.0 Complete SOSTAC lecture block and Workshop 1 in keynote-spec.md
  - [x] 3.1 Review checks — all 7 PASS
  - [x] 3.2 Write Slides 7–10
  - [x] 3.3 Write Slides 11–15
  - [x] 3.4 Write Slides 16–19
  - [x] 3.5 Write Slides 20–22 (Workshop 1)
  - [x] 3.6 Add statistics to Do aktualizacji section
  - [x] 3.7 Confirm all 7 review checks — ALL PASS

**Acceptance Criteria:**
- Slides 7–22 complete with all required fields
- Single-brand rule stated in Slide 21
- Workshop slides 20–22 carry [SETUP], [DEBRIEF], [EXTENSION]
- Statistics 1–4 embedded with source attributions
- [TIME] targets within 09:45–11:00 window

---

### Task Group 4: RACE Lecture Slides (Slides 23–38) + Workshop 2
**Dependencies:** Group 3 (SOSTAC block complete; RACE builds on SOSTAC integration established in Slide 16/34)
**Estimated Steps:** 9
**Output file:** `implementation/keynote-spec.md` (appended)

- [x] 4.0 Complete RACE lecture block and Workshop 2 in keynote-spec.md
  - [x] 4.1 Review checks for this block:
    - Slide 23 is a break slide (minimal content required)
    - Slides 24–35 each have all required fields; [SAY] minimum 60 words per lecture slide
    - RACE color coding present in visual descriptions: Reach=blue, Act=green, Convert=orange, Engage=purple
    - Statistics 5–16 from research-report.md Section 6 embedded at correct RACE-stage slides
    - IKEA case study appears in Slide 29; Zalando in Slide 31; Spotify in Slide 33
    - Slides 36–38 (workshop) additionally have [SETUP], [DEBRIEF], [EXTENSION]
    - [TIME] targets fall within 11:00–12:30 window
    - Single-brand continuity reminder visible in Slide 36 or 37
  - [x] 4.2 Write Slide 23 (Break) and Slide 24 (Welcome back — RACE context)
  - [x] 4.3 Write Slides 25–27 (RACE overview, Reach component, Polish Reach market)
  - [x] 4.4 Write Slides 28–29 (Act component + IKEA example)
  - [x] 4.5 Write Slides 30–31 (Convert component + Zalando example)
  - [x] 4.6 Write Slides 32–33 (Engage component + Spotify Wrapped example)
  - [x] 4.7 Write Slides 34–35 (SOSTAC-RACE integration table + KPI dashboard)
  - [x] 4.8 Write Slides 36–38 (Workshop 2: transition, instruction, example)
  - [x] 4.9 Add Statistics 5–16 to Do aktualizacji section
  - [x] 4.10 Confirm all 8 review checks — ALL PASS

**Acceptance Criteria:**
- Slides 23–38 complete with all required fields
- RACE color coding present in every slide that covers a RACE stage
- Statistics 5–16 embedded with source and data year
- Workshop slides 36–38 carry [SETUP], [DEBRIEF], [EXTENSION]
- [TIME] targets within 11:00–12:30 window

---

### Task Group 5: Canva Exercise 1 (SOSTAC) + Facilitator Guide 1
**Dependencies:** Group 3 (SOSTAC lecture content finalized; Workshop 1 instruction slides written)
**Estimated Steps:** 8
**Output files:**
- `implementation/canva-exercise-1-sostac.md`
- `implementation/facilitator-guide-1-sostac.md`

- [x] 5.0 Complete Canva Exercise 1 spec and Facilitator Guide 1
  - [x] 5.1 Review checks — all 7 PASS
  - [x] 5.2 Write canva-exercise-1-sostac.md — Layout and Color Table
  - [x] 5.3 Write canva-exercise-1-sostac.md — Single-Brand Continuity + Pre-Fill (Żabka, not Allegro)
  - [x] 5.4 Write canva-exercise-1-sostac.md — Participant Instructions (Polish)
  - [x] 5.5 Write facilitator-guide-1-sostac.md — Header and Informacje ogólne
  - [x] 5.6 Write facilitator-guide-1-sostac.md — Opis szablonu + Kroki facilitacji
  - [x] 5.7 Write facilitator-guide-1-sostac.md — Problems, Debrief, Extension, Do aktualizacji
  - [x] 5.8 Confirm all 7 review checks — ALL PASS

**Acceptance Criteria:**
- Both files complete with all required sections
- Pre-fill uses Żabka (not Allegro) as the worked example
- Single-brand rule present in Exercise 1 — first occurrence in the deliverable series
- Facilitator guide usable without any additional briefing

---

### Task Group 6: Canva Exercise 2 (RACE) + Facilitator Guide 2
**Dependencies:** Group 4 (RACE lecture content finalized; Workshop 2 slides written)
**Estimated Steps:** 7
**Output files:**
- `implementation/canva-exercise-2-race.md`
- `implementation/facilitator-guide-2-race.md`

- [x] 6.0 Complete Canva Exercise 2 spec and Facilitator Guide 2
  - [x] 6.1 Review checks — all 8 PASS (incl. gallery walk logistics, KPI layer, B2B extension)
  - [x] 6.2 Write canva-exercise-2-race.md — Overview, single-brand REMINDER, Layout, Color Table
  - [x] 6.3 Write canva-exercise-2-race.md — Żappka Pre-Fill (12 sticky notes) + Participant Instructions
  - [x] 6.4 Write facilitator-guide-2-race.md — Header + Kroki facilitacji (5 steps incl. gallery walk)
  - [x] 6.5 Write facilitator-guide-2-race.md — Problems, Debrief, Extension, Do aktualizacji
  - [x] 6.6 Confirm all review checks — ALL PASS

**Acceptance Criteria:**
- Both files complete with all required sections
- Single-brand continuity reminder present at top of canva spec
- Pre-fill uses Żappka across all four RACE lanes
- Gallery walk logistics included in facilitator guide

---

### Task Group 7: Re-energizer + Brand Strategy + CVP Slides (Slides 39–60) + Workshop 3 Slides
**Dependencies:** Groups 3 and 4 (SOSTAC and RACE lecture blocks finalized; slide numbering confirmed)
**Estimated Steps:** 10
**Output file:** `implementation/keynote-spec.md` (appended)

- [x] 7.0 Complete lunch, re-energizer, brand strategy/CVP lecture, and Workshop 3 slides
  - [x] 7.1 Review checks for this block:
    - Slide 39 is lunch slide with brand reminder prompt
    - Slides 40–45: re-energizer instruction + 5 campaigns (CD Projekt Red TikTok, mBank email, Żabka landing, InPost influencer, Allegro SEO)
    - Slide 46 references hierarchy-diagram-spec.md Variant 2 explicitly; SOSTAC+RACE faded; Brand Strategy+Digital Strategy emphasized
    - Slides 47–57 each have all required fields; [SAY] minimum 60 words per lecture slide
    - Statistics 17–19 from research-report.md Section 6 embedded at appropriate slides
    - Slides 58–60 (workshop) additionally have [SETUP], [DEBRIEF], [EXTENSION]
    - All 10 case studies: Allegro in Slide 49, CD Projekt Red in Slides 41+51, mBank in Slides 42+47, Duolingo in Slide 51, Spotify in Slides 33+55, InPost in Slide 56, Zalando in Slides 31+54
    - [TIME] targets fall within 12:30–15:15 window
    - Slide 46 [SAY] explicitly acknowledges pedagogical inversion rationale
  - [x] 7.2 Write Slide 39 (Lunch) and Slide 40 (Re-energizer instruction)
    - Slide 39: "Do zobaczenia o 13:30 — proszę wrócić z jedną marką którą chcesz dziś przeanalizować"
    - Slide 40: Re-energizer instruction — "Dobra czy zła kampania?" quickfire; 5 images, 30 seconds each
    - [TIME] targets: 12:30, 13:30
  - [x] 7.3 Write Slides 41–45 (Five re-energizer campaign slides)
    - Source: spec.md "Re-Energizer Slides (41–45) Content"
    - Slide 41: CD Projekt Red TikTok — Cyberpunk 2077 Phantom Liberty community post
    - Slide 42: mBank email — retention/engagement email with gamification element
    - Slide 43: Żabka landing page — Żappka app promotion
    - Slide 44: InPost influencer post — Paczkomat convenience messaging
    - Slide 45: Allegro SEO listing — organic search result for competitive category
    - Each [SAY]: one sentence context + "Dobra czy zła kampania? Macie 30 sekund."
    - No definitive answer scripted — facilitator harvests responses
    - [TIME] targets: 13:32, 13:36, 13:40, 13:44, 13:48
  - [x] 7.4 Write Slide 46 (Hierarchy Variant 2 — Foundation Emphasis)
    - Source: spec.md "Variant 2"; hierarchy-diagram-spec.md Variant 2
    - Visual field: reference hierarchy-diagram-spec.md Variant 2 explicitly
    - [SAY]: Must acknowledge pedagogical inversion — "Uczyliśmy się SOSTAC i RACE jako pierwszych, bo to najbardziej namacalne narzędzia — ale w praktyce zawodowej definiujesz strategię marki zanim wypełnisz SOSTAC."
    - Caption: "Zbudowaliśmy plan (SOSTAC) i mapę egzekucji (RACE). Teraz: fundament strategiczny."
    - [TIME] target: 13:50
  - [x] 7.5 Write Slides 47–50 (Three-level comparison, Brand Strategy components, Brand Purpose, Brand Positioning)
    - Source: research-report.md Section 2 "Key Definitions and Distinctions"; Section 5 Allegro case study
    - Slide 47: Three-level comparison table — Digital Strategy (mBank example) vs. Digital Marketing Strategy (Allegro example) vs. Brand Strategy (CD Projekt Red example)
    - Slide 48: Brand Strategy components — Purpose / Positioning / Promise / Identity
    - Slide 49: Brand Purpose — "Start with Why"; Allegro Christmas films; embed Statistic 18 (Allegro brand awareness/market share)
    - Slide 50: Brand Positioning — positioning statement formula + perceptual map concept
    - [TIME] targets: 13:53, 13:57, 14:01, 14:05
  - [x] 7.6 Write Slides 51–53 (Brand Identity, Aaker Model, Brand Pyramid)
    - Source: research-report.md Section 2; Section 5 CD Projekt Red, Duolingo
    - Slide 51: Brand Identity — visual + verbal system; Duolingo TikTok as personality example; CD Projekt Red as values example
    - Slide 52: Aaker Brand Equity Model — 5 dimensions with digital metrics equivalents
    - Slide 53: Brand Pyramid — attributes to essence; Nike example
    - [TIME] targets: 14:09, 14:13, 14:17
  - [x] 7.7 Write Slides 54–57 (CVP definition, VPC overview, CVP examples, CVP drives decisions)
    - Source: research-report.md Section 2 "CVP" definition; Section 7 Exercise 3 intro; Section 5 InPost
    - Slide 54: CVP definition + CVP vs. USP table; talking point from research: "CVP to nie hasło reklamowe..."
    - Slide 55: Value Proposition Canvas overview — Customer Profile + Value Map + Fit principle; embed Statistic 19 (Spotify user count)
    - Slide 56: CVP examples — InPost ("Twoja paczka, na Twoich zasadach..."), Żabka, Spotify, Airbnb, Slack
    - Slide 57: How CVP drives digital decisions — content, channels, messaging
    - [TIME] targets: 14:17, 14:20, 14:23, 14:25 (tight — transition to workshop immediately after)
  - [x] 7.8 Write Slides 58–60 (Workshop 3: transition, instruction, example)
    - Source: research-report.md Section 7, Exercise 3; spec.md "Workshop 3"
    - Slide 58: Transition — dark background, high contrast, "Czas na ćwiczenia"
    - Slide 59: Workshop 3 instruction — TASK / TIME (50 min) / OUTPUT / TOOLS
    - Include single-brand continuity reminder; note "DO NOT START HERE" rule for Value Map
    - Include [SETUP] (confirm "DO NOT START HERE" label visible), [DEBRIEF] (3 questions), [EXTENSION]
    - Slide 60: Example — partially completed InPost VPC (Customer Profile visible, Value Map covered)
    - [TIME] targets: 14:25, 14:27, 14:32
  - [x] 7.9 Add Statistics 17–19 to Do aktualizacji section
  - [x] 7.10 Confirm all 8 review checks in 7.1 pass — ALL PASS

**Acceptance Criteria:**
- Slides 39–60 complete with all required fields
- All 5 re-energizer campaigns present by name in slides 41–45
- Slide 46 references Variant 2 and contains pedagogical inversion rationale
- Workshop slides 58–60 carry [SETUP], [DEBRIEF], [EXTENSION]
- [TIME] targets within 12:30–15:15 window

---

### Task Group 8: Canva Exercise 3 (VPC) + Facilitator Guide 3
**Dependencies:** Group 7 (Brand Strategy/CVP lecture finalized; Workshop 3 slides written)
**Estimated Steps:** 7
**Output files:**
- `implementation/canva-exercise-3-vpc.md`
- `implementation/facilitator-guide-3-vpc.md`

- [x] 8.0 Complete Canva Exercise 3 spec and Facilitator Guide 3
  - [x] 8.1 Review checks for this group:
    - Canva spec has single-brand continuity reminder at top of file
    - Layout uses Polish VPC zone names from Appendix B: Profil Klienta, Zadania Klienta, Bóle, Korzyści, Mapa Wartości, Produkty i Usługi, Uśmierzacze Bólu, Kreatory Korzyści
    - "DO NOT START HERE" label specified for Value Map side
    - Color table matches spec: Jobs=yellow, Pains=red, Gains=green, Products&Services=grey, Pain Relievers=orange, Gain Creators=blue
    - Pre-fill uses InPost persona (online shopper in Warsaw, misses home deliveries) — 2 sticky notes per Customer Profile sub-zone
    - Facilitator guide entirely in Polish
    - Guide has prominent warning about Customer Profile → Value Map order (in Opis szablonu AND in Krok 3)
  - [x] 8.2 Write canva-exercise-3-vpc.md — Overview, single-brand reminder, Layout, Color Table
    - Source: spec.md "Exercise 3: Value Proposition Canvas"; research-report.md Section 7, Exercise 3 setup
    - Single-brand continuity reminder at top: "Kontynuujecie pracę z marką wybraną w Ćwiczeniu 1."
    - Layout: classic Osterwalder VPC — Customer Profile circle (right) + Value Map square (left)
    - "DO NOT START HERE" label: specify it covers the entire Value Map side until Step 5
    - All zone labels in Polish per Appendix B
    - Color table as specified
  - [x] 8.3 Write canva-exercise-3-vpc.md — InPost Pre-Fill + Participant Instructions
    - Source: research-report.md Section 7 Exercise 3; spec.md pre-fill specification
    - Pre-fill: InPost Customer Profile — 2 sticky notes per sub-zone (Jobs, Pains, Gains) — 6 notes total in Polish
    - Persona: "Klient online w Warszawie, który nie odbiera paczek w domu"
    - Participant instructions in Polish — 7 steps matching research facilitation script
    - QR placeholder + Do aktualizacji (InPost metrics to verify annually)
  - [x] 8.4 Write facilitator-guide-3-vpc.md — Header sections + Opis szablonu with warning
    - Source: research-report.md Section 2 (CVP) + Section 7 Exercise 3
    - Informacje ogólne: 50 minutes, 3–5 per group, position 14:25–15:15
    - Opis szablonu: plain-language description — prominently state the Customer Profile first rule
    - Warning must be visually distinct (bold or boxed): "UWAGA: Grupy muszą wypełnić cały Profil Klienta zanim dotkną Mapy Wartości."
  - [x] 8.5 Write facilitator-guide-3-vpc.md — Kroki facilitacji z czasem
    - 7 steps: explain+model, choose segment, Customer Profile solo, rank/prioritize, Value Map solo, gap analysis, share
    - Each step has Czas (minutes), Opis, Co powiedzieć (exact Polish opening phrase)
    - Krok 3 repeats the Customer Profile first warning
  - [x] 8.6 Write facilitator-guide-3-vpc.md — Problems, Debrief, Extension, Do aktualizacji
    - Common problems: groups starting with Value Map (trigger: reveal warning); groups listing generic jobs not specific segment; groups confusing Gains with Gain Creators
    - Pytania do debriefingu: 3 questions from research-report.md Section 7 Exercise 3 debrief
    - Pytanie dla grup zaawansowanych: translate canvas to one CVP statement
    - Do aktualizacji: InPost market share, Paczkomat count, persona update
  - [x] 8.7 Confirm all 7 review checks in 8.1 pass — ALL PASS

**Acceptance Criteria:**
- Both files complete with all required sections
- Customer Profile → Value Map order warning appears in both Opis szablonu and Krok 3
- Polish VPC terminology from Appendix B used throughout
- InPost pre-fill present with 2 Polish sticky notes per Customer Profile sub-zone

---

### Task Group 9: Channel Mix + Polish Market Slides (Slides 61–75) + Workshop 4 Slides + Canva Exercise 4 + Facilitator Guide 4
**Dependencies:** Groups 3, 4, and 7 (all lecture blocks finalized; slide numbering confirmed up to Slide 60)
**Estimated Steps:** 12
**Output files:**
- `implementation/keynote-spec.md` (appended)
- `implementation/canva-exercise-4-budget.md`
- `implementation/facilitator-guide-4-budget.md`

- [x] 9.0 Complete channel mix lecture, Workshop 4 slides, Canva Exercise 4, and Facilitator Guide 4
  - [x] 9.1 Review checks for this group:
    - Slide 61 is a break slide
    - Slides 62–72 each have all required fields; [SAY] minimum 60 words per lecture slide
    - Statistic 20 (AI adoption 89%) embedded in Slide 68 [SAY] with global caveat and Polish uncertainty flag
    - Slide 65 [WATCH] field flags IAB Polska channel-level data as "szacunkowe"
    - Slides 73–75 (workshop) additionally have [SETUP], [DEBRIEF], [EXTENSION]
    - [TIME] targets fall within 15:15–16:35 window
    - Canva spec has single-brand continuity reminder at top
    - Canva spec displays 200,000 PLN starting budget prominently
    - Canva spec flags channel-level Polish spend data as "szacunkowe" in facilitator notes
    - Exercise 4 pre-fill: one row — Email Marketing (all 4 columns filled)
    - Facilitator guide entirely in Polish
    - Guide includes instruction on adjusting 200,000 PLN budget for different cohort contexts
  - [x] 9.2 Write Slide 61 (Break) and Slide 62 (Welcome back — channels intro)
    - Slide 61: "Przerwa 15 minut — do zobaczenia o 15:30"
    - Slide 62: "Ostatni blok wykładowy: przekładamy strategię na decyzje kanałowe"
    - [TIME] targets: 15:15, 15:30
  - [x] 9.3 Write Slides 63–65 (Polish digital market, platform comparison, e-commerce specifics)
    - Source: research-report.md Section 6 "Top 20 Statistics" + Polish-specific figures
    - Slide 63: Polish digital market overview — 34.5M internet users, 9.2B PLN digital ad spend (Statistic 3)
    - Slide 64: Polish platform comparison table — YouTube/TikTok/Facebook/Instagram/LinkedIn reach + time-on-site + advertising effectiveness
    - LinkedIn caveat: present both 8.20M (DataReportal) and ~5M (Gemius) figures with source note
    - Slide 65: Polish e-commerce specifics — BLIK 68% (Statistic 12), Paczkomat 81% (Statistic 13), top categories
    - [WATCH] field for Slide 65: flag that IAB Polska channel-level breakdown is "szacunkowe" — prompt facilitator to verify
    - [TIME] targets: 15:33, 15:37, 15:42
  - [x] 9.4 Write Slides 66–68 (Owned/earned/paid model, Channel ROI benchmarks, AI in digital marketing)
    - Source: research-report.md Section 6; Statistic 15 (email ROI), Statistic 8 (influencer ROI), Statistic 20 (AI adoption)
    - Slide 66: Owned/earned/paid media model — definitions + examples from Polish brands
    - Slide 67: Channel ROI benchmarks — email $36–50 (Statistic 15), influencer 2–3x, organic search sustained ROI
    - Slide 68: AI in digital marketing — embed Statistic 20 (89% globally) with explicit caveat for Polish audience
    - [TIME] targets: 15:46, 15:50, 15:54
  - [x] 9.5 Write Slides 69–72 (RACE-mapped channel matrix, Budget allocation, Measurement, 90-day cycle)
    - Source: research-report.md Section 4 (RACE integration) + Section 3 (Control/90-day cycle)
    - Slide 69: RACE-mapped channel matrix — preview of Workshop 4 exercise; channels mapped to stages
    - Slide 70: Budget allocation principles — strategic priorities drive channel spend; Zalando example
    - Slide 71: Measurement and attribution — key concepts; multi-touch attribution
    - Slide 72: 90-day review cycle — SOSTAC Control applied to channel planning; feedback loop
    - [TIME] targets: 15:55 (transition to workshop immediately after)
    - Note: research-report.md Slide 69 maps to spec.md Slide 69; Slide 72 maps to spec.md Slide 72; use spec.md numbering
  - [x] 9.6 Write Slides 73–75 (Workshop 4: transition, instruction, budget grid)
    - Source: research-report.md Section 7, Exercise 4; spec.md "Workshop 4"
    - Slide 73: Transition — dark background, high contrast
    - Slide 74: Workshop 4 instruction — TASK (200,000 PLN allocation) / TIME (40 min) / OUTPUT / TOOLS
    - Single-brand continuity reminder; 9 channel rows listed
    - Include [SETUP], [DEBRIEF] (3 questions), [EXTENSION] (50K PLN reduction question)
    - Slide 75: Empty budget grid reference — matrix layout visible for groups to follow
    - [TIME] targets: 15:55, 15:57, 16:02
  - [x] 9.7 Write canva-exercise-4-budget.md — Overview, single-brand reminder, Layout
    - Source: spec.md "Exercise 4: Budget Challenge / Digital Channel Matrix"
    - Single-brand continuity reminder at top
    - Starting budget: 200,000 PLN — in large type above matrix; note adjustability in Do aktualizacji
    - Layout: table/matrix — 9 channel rows × 4 columns (Etap RACE, Budżet PLN, Priorytet, Główny KPI)
    - Channel rows: SEO/content, Google Ads, Paid Social/Meta, TikTok, Email Marketing, Marketing Influencerów, Display/Programmatic, Website CRO, Inne
    - No color coding for rows; use High/Medium/Low priority text labels
  - [x] 9.8 Write canva-exercise-4-budget.md — Pre-Fill + Facilitator Notes + Instructions
    - Pre-fill: one completed row — Email Marketing: Etap Engage, 20,000 PLN, Priorytet Wysoki, KPI: Wskaźnik powtórnych zakupów
    - Facilitator notes: "Dane o podziale budżetu reklamowego na kanały w Polsce (IAB Polska) są szacunkowe — zaktualizuj przed każdą edycją kursu."
    - Participant instructions in Polish — 5 steps: brief, group work, present and justify, facilitator synthesis, reflection
    - QR placeholder + Do aktualizacji
  - [x] 9.9 Write facilitator-guide-4-budget.md — Header sections + Kroki facilitacji
    - Source: research-report.md Section 7, Exercise 4; spec.md "Facilitator Guide 4"
    - Language: entirely Polish
    - Informacje ogólne: 40 minutes, 3–5 per group, position 15:55–16:35
    - Kroki facilitacji z czasem: 5 steps with Co powiedzieć for each
    - Include instruction for circulating and challenging groups (suggested challenge questions in Polish)
  - [x] 9.10 Write facilitator-guide-4-budget.md — Problems, Debrief, Extension, Do aktualizacji
    - Common problems: groups allocating 70%+ to paid social without justification; groups ignoring email (lowest ROI awareness); groups skipping RACE stage column
    - Pytania do debriefingu: 3 questions (under-budgeted RACE stage; confidence vs. capability; 50K PLN cut)
    - Pytanie dla grup zaawansowanych: 50K PLN reduction question — what stays?
    - Do aktualizacji: How to adjust 200,000 PLN budget (up for corporate cohort, down for solopreneur/startup cohort); "szacunkowe" caveat for Polish channel-level data; CPC/CPM benchmarks to verify quarterly
  - [x] 9.11 Add Statistic 20 and Polish market statistics to Do aktualizacji in keynote-spec.md
  - [x] 9.12 Confirm all 11 review checks in 9.1 pass — ALL PASS

**Acceptance Criteria:**
- Slides 61–75 complete with all required fields
- Slide 65 [WATCH] flags "szacunkowe" IAB data
- Statistic 20 embedded with Polish caveat
- Workshop slides 73–75 carry [SETUP], [DEBRIEF], [EXTENSION]
- [TIME] targets within 15:15–16:35 window
- Canva spec: 200,000 PLN budget prominent; "szacunkowe" flag present
- Facilitator guide: budget adjustment instructions present

---

### Task Group 10: Synthesis + Close Slides (Slides 76–85) + Final Review Pass
**Dependencies:** All previous groups (all lecture blocks, workshop blocks, and structural anchor slides must be numbered and finalized)
**Estimated Steps:** 9
**Output file:** `implementation/keynote-spec.md` (final section + full-deck review)

- [x] 10.0 Complete synthesis block and run full acceptance criteria review across all deliverables
  - [x] 10.1 Review checks for synthesis block:
    - Slide 76: "Welcome back" transition visual
    - Slide 77: references hierarchy-diagram-spec.md Variant 3 explicitly; all 5 callout texts present
    - Slides 78–85: all required fields; [SAY] minimum 60 words per lecture slide
    - Slide 83 (reflection sticky note): [SETUP] and [DEBRIEF] present
    - Total slide count: exactly 85 (verify count; note any additions with content justification comment)
    - Do aktualizacji section in keynote-spec.md is complete: lists all 20 statistics, 5 case study financial metrics, campaign example prompts, platform reach figures
  - [x] 10.2 Write Slide 76 (Welcome back — synthesis intro) and Slide 77 (Hierarchy Variant 3)
    - Slide 76: "Witamy z powrotem — zbierzmy to wszystko razem"
    - Slide 77: Framework hierarchy — all levels annotated with exercise callouts
    - Visual: reference hierarchy-diagram-spec.md Variant 3 explicitly
    - Caption: "Teraz znacie całą hierarchię — i potraficie ją zastosować."
    - [SAY]: Brief spoken connection linking each level to what students did today
    - [TIME] targets: 16:35, 16:37
  - [x] 10.3 Write Slides 78–80 (Key takeaways, Three frameworks in one sentence, Next steps)
    - Slide 78: 5 key takeaways from the day — synthesis bullets in Polish
    - Slide 79: Three frameworks in one sentence each — SOSTAC / RACE / CVP one-liners
    - Slide 80: What to do next week — conduct a SOSTAC audit for your own brand/organization
    - [TIME] targets: 16:41, 16:46, 16:50
  - [x] 10.4 Write Slides 81–82 (Polish resources, International resources)
    - Slide 81: Polish digital marketing resources — Marketing przy Kawie, Sprawny Marketing, IAB Polska, Gemius
    - Slide 82: International resources — Smart Insights, Dave Chaffey, PR Smith, Strategyzer, DataReportal
    - [TIME] targets: 16:53, 16:55
  - [x] 10.5 Write Slides 83–85 (Reflection round, Q&A, Thank you)
    - Slide 83: "Dodaj jedną karteczkę: Co zastosujesz jako pierwsze, zaczynając w najbliższy poniedziałek?"
    - Include [SETUP] (Canva open), [DEBRIEF] (harvest 2–3 responses)
    - Slide 84: Q&A slide — visual only, minimal text, open invite
    - Slide 85: Thank you + contact placeholder + course materials download link placeholder
    - [TIME] targets: 16:57, 17:00 (Q&A runs until 17:00)
  - [x] 10.6 Complete and finalize "## Do aktualizacji (co rok)" section in keynote-spec.md
    - List all 20 statistics by name, source, and verification URL
    - List the 5 case study financial metrics that need IR verification (Nike revenue, Spotify MAU, Zalando revenue, Allegro GMV, InPost parcels)
    - Add current campaign example prompt with sources: marketingprzykawie.pl, Marketer+
    - Add LinkedIn reach discrepancy note (DataReportal 8.20M vs. Gemius ~5M)
    - Add budget exercise amount note
  - [x] 10.7 Run full acceptance criteria review — Deliverable 1 (Keynote spec): all 11 criteria
    - Count slides: exactly 85
    - Check all workshop slides (12 total: slides 20, 21, 22, 36, 37, 38, 58, 59, 60, 73, 74, 75) have [SETUP], [DEBRIEF], [EXTENSION]
    - Verify all 20 statistics present in [SAY] fields with source and data year
    - Verify all 10 case studies appear in at least one [SAY] field
    - Check RACE color coding in visual descriptions for every RACE-stage slide
    - Confirm Slides 6, 46, 77 reference the hierarchy diagram and specify variant
    - Confirm re-energizer slides 41–45 have all 5 specified campaigns
  - [x] 10.8 Run full acceptance criteria review — Deliverables 2, 3, 4 (Canva specs, Facilitator guides, Diagram spec)
    - Deliverable 2: 4 files; layout spec, color table, Polish pre-fill, Polish participant instructions, QR placeholder, Do aktualizacji per file; single-brand reminder in exercises 2–4; "DO NOT START HERE" in exercise 3; 200K PLN prominent in exercise 4; "szacunkowe" flag in exercise 4
    - Deliverable 3: 4 files entirely in Polish; all 7 sections per guide; Co powiedzieć in every facilitation step; Guide 3 prominent warning; Guide 4 budget adjustment instruction
    - Deliverable 4: 5 levels, Polish labels, hex codes, arrow spec, 3 variants, opacity levels specified, Variant 3 callout texts present
  - [x] 10.9 Spot-check Polish terminology against Appendix B (26 terms)
    - Sample 5 random slides from keynote-spec.md; verify RACE stage terms use Polish translations (Zasięg/Aktywacja/Konwersja/Zaangażowanie) in student-facing content
    - Verify "KPI" used not "KWE" in student-facing content
    - Verify "Paczkomat" used as the generic term for parcel locker
    - Confirm VPC zone names in Exercise 3 match Appendix B table exactly

**Acceptance Criteria:**
- Slides 76–85 complete with all required fields
- Slide 77 references Variant 3 with all 5 callout texts
- Slide 83 has [SETUP] and [DEBRIEF]
- Total slide count confirmed at 85
- All 11 keynote acceptance criteria confirmed
- All Canva, Facilitator Guide, and Diagram acceptance criteria confirmed
- Polish terminology spot-check passed

---

## Execution Order

1. Group 1: Hierarchy Diagram Spec (6 steps, no dependencies) — creates `hierarchy-diagram-spec.md`
2. Group 2: Opening Block Slides 1–6 (7 steps, depends on Group 1) — starts `keynote-spec.md`
3. Group 3: SOSTAC Slides 7–22 (9 steps, depends on Group 2)
4. Group 4: RACE Slides 23–38 (10 steps, depends on Group 3)
5. Group 5: Canva Exercise 1 + Guide 1 (8 steps, depends on Group 3) — can run in parallel with Group 4
6. Group 6: Canva Exercise 2 + Guide 2 (7 steps, depends on Group 4) — can run in parallel with Group 7
7. Group 7: Re-energizer + Brand/CVP Slides 39–60 (10 steps, depends on Groups 3 and 4)
8. Group 8: Canva Exercise 3 + Guide 3 (7 steps, depends on Group 7)
9. Group 9: Channel Slides 61–75 + Canva Exercise 4 + Guide 4 (12 steps, depends on Groups 3, 4, 7)
10. Group 10: Synthesis Slides 76–85 + Full Review Pass (9 steps, depends on all previous groups)

Total parallelism opportunities:
- Group 5 can start as soon as Group 3 is complete (does not need Group 4)
- Group 6 can start as soon as Group 4 is complete (does not need Group 7)
- Group 8 requires Group 7; Group 9 requires Groups 3, 4, and 7

---

## Standards Compliance

No `.maister/docs/standards/` coding standards apply to this content creation task. The applicable standards are the course design standards embedded in the research:

- Adult learning principles (Knowles' andragogy) — from research-report.md methodology section
- 70:20:10 learning model — from research-report.md Section 1
- Canva Whiteboard facilitation conventions — from research-report.md Section 7
- Presenter notes format ([SAY]/[DO]/[WATCH]/[TIME]) — from research-report.md Section 8
- Polish terminology standard — Appendix B of research-report.md (26 terms)
- Statistics labeling standard — source name + data year required on every statistic

---

## File Reference Map

| File | Content | Created in Group |
|------|---------|-----------------|
| `implementation/hierarchy-diagram-spec.md` | Framework hierarchy visual spec (3 variants) | 1 |
| `implementation/keynote-spec.md` | 85-slide Keynote spec with full Polish presenter notes | 2, 3, 4, 7, 9, 10 |
| `implementation/canva-exercise-1-sostac.md` | Canva SOSTAC 6-column grid build spec | 5 |
| `implementation/canva-exercise-2-race.md` | Canva RACE swim-lane journey map build spec | 6 |
| `implementation/canva-exercise-3-vpc.md` | Canva Value Proposition Canvas build spec | 8 |
| `implementation/canva-exercise-4-budget.md` | Canva budget matrix build spec | 9 |
| `implementation/facilitator-guide-1-sostac.md` | Polish facilitator guide — SOSTAC exercise | 5 |
| `implementation/facilitator-guide-2-race.md` | Polish facilitator guide — RACE exercise | 6 |
| `implementation/facilitator-guide-3-vpc.md` | Polish facilitator guide — VPC exercise | 8 |
| `implementation/facilitator-guide-4-budget.md` | Polish facilitator guide — Budget exercise | 9 |

---

## Notes

- Content, not code: This plan uses "review checks" (not unit tests). Each group's review step lists the specific acceptance criteria items to confirm before marking the group complete.
- Incremental verification: Run only the review checks for the current group after completing it — do not re-check all prior slides every time.
- Mark progress: Check off steps as completed using the [ ] checkboxes.
- Reuse first: All content is synthesized from the research-report.md sections indicated. Do not create new research — draw from the specified source sections.
- Statistics placement: Statistics are embedded in [SAY] fields at the slide where they provide persuasive evidence, not in a front-loaded data dump slide. The Do aktualizacji section lists all 20 for annual verification.
- Single-brand continuity rule: First occurrence is in Group 5 (Exercise 1 canva spec and facilitator guide). Subsequent occurrences in Groups 6, 8, 9 (exercises 2, 3, 4) are reminders. Slide 21 (Group 3) is the in-deck instruction to students.
- Polish language: [SAY] fields and all facilitator guides are entirely in Polish. Technical spec documents (hierarchy-diagram-spec.md, Canva build specs) may be in English with Polish strings for all user-visible content.
