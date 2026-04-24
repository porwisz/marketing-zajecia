# Specification: Digital Marketing Strategy Course Materials

## Goal

Create four categories of Markdown-format course materials for an 8-hour postgraduate digital marketing strategy workshop: a slide-by-slide Keynote specification with full Polish presenter scripts, four Canva Whiteboard exercise build specs, four standalone Polish facilitator guides, and a reusable framework hierarchy diagram spec. All materials must be self-documenting enough for any instructor to deliver the course without a briefing.

---

## User Stories

- As an instructor using these materials for the first time, I want each facilitator guide to be fully self-contained so that I can run any exercise without needing to ask the course author for context.
- As the course author, I want the slide scripts to be written out in full Polish so that I can speak naturally without improvising during delivery.
- As a returning instructor, I want the market statistics to be clearly labeled by source and date so that I know exactly what to update before each new cohort.
- As a student, I want all exercise instructions and whiteboard content to be in Polish so that terminology is immediately applicable in my professional context.
- As any instructor, I want a single-brand continuity rule enforced across all four exercises so that students end the day with a near-complete digital marketing plan as a tangible artifact.

---

## Core Requirements

1. Produce a 85-slide Keynote specification in Markdown, with each slide containing: title, visual content description, full Polish [SAY] script, [DO] actions, [WATCH] observations, and [TIME] target clock time.
2. Workshop instruction slides (12 slides: 3 per workshop × 4 workshops) must additionally carry [SETUP], [DEBRIEF], and [EXTENSION] fields.
3. Follow the 8-hour agenda exactly: 09:00–09:15 welcome, 09:15–09:45 icebreaker, 09:45–11:00 SOSTAC block + Workshop 1, 11:00–11:15 break, 11:15–12:30 RACE block + Workshop 2, 12:30–13:30 lunch, 13:30–13:50 re-energizer, 13:50–15:15 Brand Strategy + CVP block + Workshop 3, 15:15–15:30 break, 15:30–16:35 channels block + Workshop 4, 16:35–17:00 synthesis.
4. Produce four Canva Whiteboard exercise Markdown build specs (one per workshop), each specifying: zone/column/swim-lane layout, sticky note color table, Polish pre-fill content using Allegro as the worked example, and step-by-step participant instructions in Polish.
5. Produce four standalone Polish facilitator guides (one per exercise), each containing: a plain-language template description, numbered facilitation steps with time targets, a common problems and fixes table, and a set of debrief questions in Polish.
6. Produce a visual spec for the Framework Hierarchy Diagram covering layout, shape types, colors, label text (Polish), arrow direction, and the three emphasis variants used on slides 6, 46, and 77.
7. Apply single-brand continuity: Exercise 1 must instruct groups to choose a brand and commit to it for all four exercises; this rule must be restated at the top of exercises 2, 3, and 4.
8. Apply Polish terminology from research-report.md Appendix B uniformly across all deliverables.
9. Label all market statistics with source name and data year; statistics that cannot be verified at channel-level for Poland must be flagged as "szacunkowe" (estimated).
10. Structure every deliverable so that updateable sections (market statistics, case study figures, current campaign examples) are clearly separated from stable structural content for annual revision.

---

## Visual Design

No instructor-facing mockups exist. The spec defines visual requirements textually.

**Keynote deck design rules** (from research-report.md Section 8):
- Maximum 3 key points per slide; minimum 30pt font for any on-screen text.
- Prefer diagrams, icons, and framework visuals over bullet lists.
- Consistent RACE stage color coding throughout the entire deck: Reach = blue, Act = green, Convert = orange, Engage = purple. Every slide that references a RACE stage must use the assigned color for that stage's label, icon, or sticky note.
- White space is required — slides must not compete with the presenter's voice.
- All framework diagrams must use the same visual style every time they appear to build visual familiarity.

**Canva Whiteboard design rules**:
- One color per analytical category; colors are fixed and specified per exercise (not left to participants).
- Exercise 1 (SOSTAC): Situation = blue, Objectives = green, Strategy = yellow, Tactics = orange, Actions = pink, Control = purple.
- Exercise 2 (RACE): Reach = blue, Act = green, Convert = orange, Engage = red.
- Exercise 3 (Value Proposition Canvas): Jobs = yellow, Pains = red, Gains = green; Products & Services = grey, Pain Relievers = orange, Gain Creators = blue.
- Exercise 4 (Budget Matrix): no color coding for rows; use High/Medium/Low priority text labels.

---

## Reusable Components

### Existing Content to Leverage

All content below comes from the research package at `.maister/tasks/research/2026-04-24-digital-marketing-strategy-course/outputs/research-report.md`. No new research is required.

| Content | Source Location | Use In |
|---|---|---|
| 85-slide outline with titles and purposes | research-report.md Section 8, "Complete Slide-by-Slide Outline" | Keynote spec scaffold — every slide title and sequence |
| Full-day agenda (09:00–17:00) with durations | research-report.md Section 1, "Full Day Schedule" | [TIME] fields for all slides; facilitator guide timing |
| SOSTAC component definitions and talking points (Polish sentences) | research-report.md Section 3 | [SAY] scripts for slides 7–22 |
| RACE component definitions, KPIs, and talking points | research-report.md Section 4 | [SAY] scripts for slides 23–38 |
| Brand Strategy, Digital Strategy, and CVP definitions and distinctions | research-report.md Section 2 | [SAY] scripts for slides 46–60 |
| Channel mix content and market data | research-report.md Section 6 | [SAY] scripts for slides 62–75 |
| 10 case studies with framework linkage, metrics, and discussion questions | research-report.md Section 5 | [SAY] case examples throughout; debrief questions |
| 20 market statistics with sources and module tags | research-report.md Section 6, "Top 20 Statistics" | Embedded in [SAY] scripts at relevant moments |
| Exercise 1 SOSTAC setup, facilitation steps, debrief questions, common problems | research-report.md Section 7, "Exercise 1" | Canva spec + Facilitator Guide 1 |
| Exercise 2 RACE setup, facilitation steps, debrief questions, extension | research-report.md Section 7, "Exercise 2" | Canva spec + Facilitator Guide 2 |
| Exercise 3 Value Proposition Canvas setup, facilitation steps, debrief | research-report.md Section 7, "Exercise 3" | Canva spec + Facilitator Guide 3 |
| Exercise 4 Budget Matrix setup, facilitation steps, debrief questions | research-report.md Section 7, "Exercise 4" | Canva spec + Facilitator Guide 4 |
| Appendix B Polish terminology table (26 terms) | research-report.md Appendix B | Applied uniformly across all deliverables |
| Pre-session setup checklist | research-report.md Section 7, "Pre-Session Setup Checklist" | Facilitator guides header section |
| Appendix D Facilitator Checklist | research-report.md Appendix D | Incorporated into each facilitator guide |
| Framework hierarchy diagram text description | research-report.md Section 2 and synthesis.md Section 5.1 | Framework hierarchy diagram spec |
| Re-energizer campaigns (5 specific) | requirements.md Technical Considerations | Slides 40–45 content |
| Module sequencing rationale | research-report.md Section 1 and synthesis.md Insight 1 | Content architecture section; [SAY] transition scripts |

### New Components Required

**Deliverable 1 — Full Polish [SAY]/[DO]/[WATCH]/[TIME] scripts per slide**: The research-report.md provides framework theory, talking points, and short example sentences in Polish, but does not write complete presenter scripts for each of the 85 slides. These must be composed. The [SAY] blocks for each slide are new content drawn from the research — they are not copy-paste, they are synthesis into complete Polish first-person delivery scripts.
Justification: research-report.md Section 8 notes "write out the first 2–3 sentences in full" but does not contain the completed scripts.

**Deliverable 2 — Canva build instructions in Markdown format**: The research specifies what each exercise should contain but not how to translate that into Canva-specific layout instructions (zone dimensions, layer naming, element placement, QR code placement conventions). These Markdown build instructions are new. Justification: the research-report.md Section 7 describes exercise design; Canva-specific build syntax is not available in any existing file.

**Deliverable 3 — Polish-language facilitator guides as standalone documents**: The research embeds facilitation guidance in English within exercise descriptions. The standalone Polish guides must restructure and translate this content into a format any instructor can follow independently. Justification: no standalone Polish facilitator documents exist; translation and restructuring are required.

**Deliverable 4 — Framework Hierarchy Diagram formal visual spec**: The hierarchy exists as a text diagram in the research-report.md but has no formal visual specification defining shapes, colors, font sizes, arrow styles, and the three slide-specific emphasis variants. Justification: the diagram must be consistently reproducible by any designer or instructor using Keynote's built-in tools.

---

## Technical Approach

### Content Architecture: Framework Hierarchy

The entire course — and therefore all materials — is organized around a single upstream-to-downstream hierarchy. Every deliverable must make this hierarchy legible. The diagram appears in three forms:

- **Slide 6 (Introduction)**: All five levels shown with equal visual weight. No emphasis. Context: "This is the map for the day."
- **Slide 46 (Post-lunch transition)**: Brand Strategy and Digital Strategy levels are visually emphasized (bold outline, full color). SOSTAC and RACE are shown faded/muted. Context: "We have built the plan. Now the foundation."
- **Slide 77 (Synthesis)**: All levels shown with equal weight again, but now annotated: each level has a small callout linking it to the exercise that applied it. Context: "You have lived all of this today."

```
BRAND STRATEGY
"Kim jesteśmy i co reprezentujemy?" (5–10+ lat)
        |
        v
STRATEGIA CYFROWA
"Jak technologie cyfrowe transformują naszą organizację?" (wieloletnia)
        |
        v
STRATEGIA MARKETINGU CYFROWEGO
"Jak używamy technologii cyfrowych do pozyskiwania, konwersji i utrzymania klientów?" (roczna)
        |
        v
SOSTAC — FRAMEWORK PLANOWANIA
(Jak budujemy plan?)
        |
        v
RACE — FRAMEWORK EGZEKUCJI
(Jak realizujemy plan na całej ścieżce klienta?)
```

### Module Sequencing Rationale

SOSTAC is taught first (morning) despite being logically downstream of Brand Strategy because it provides the most immediately actionable scaffold. Students understand abstract brand concepts better after they have worked with the concrete planning tool. The transition back to the hierarchy at slide 46 explicitly acknowledges this pedagogical inversion: "We learned SOSTAC and RACE first because they are the most tangible tools — but in professional practice you define your brand strategy before you fill in SOSTAC."

### Single-Brand Continuity Rule

Each group chooses one brand during the icebreaker or at the start of Workshop 1. That brand is used for all four exercises. Brand options suggested to groups: InPost, Żabka, mBank, Zalando Poland, or a brand from their own industry. Allegro is reserved as the facilitated worked example (pre-fill content) — groups should not choose Allegro as their working brand. This rule must appear:
- In the Workshop 1 instruction (slide 21)
- At the top of facilitator guides 1, 2, 3, and 4
- At the top of Canva exercise specs 2, 3, and 4 as a reminder

### Statistics Embedding Strategy

Statistics do not appear in a front-loaded "data dump" slide. Each statistic from the Top 20 list (research-report.md Section 6) is embedded at the slide where it provides persuasive evidence for a specific decision. This is specified in the [SAY] field of the relevant slide and noted in the slide's visual content description.

### Updateability Structure

Each deliverable must contain a clearly marked section titled "## Do aktualizacji (co rok)" listing:
- Which statistics to verify and where to find updated data
- Which case study financial figures need to be checked against current IR reports
- A prompt to add 1–2 current Polish campaign examples from marketingprzykawie.pl or Marketer+
- Any platform reach figures that require annual verification from Gemius/PBI Mediapanel

---

## Deliverable 1: Keynote Specification (Markdown)

### Structure

The Keynote spec is a single Markdown file: `implementation/keynote-spec.md`.

Each slide entry follows this template:

```
### Slide [N]: [Title]

**Block**: [Block name, e.g., "Lecture Block 1: SOSTAC"]
**Visual**: [Description of what appears on screen: layout, diagram, image, text elements, any color coding]

[SAY]: [Full Polish spoken script — complete sentences for the opening 2–3 sentences; bullet talking points for the rest. Minimum 60 words per lecture slide.]

[DO]: [Click, animation, reveal, or physical action. Include which elements animate and in what order.]

[WATCH]: [What to observe in the room. Signs of confusion, engagement, expertise. How to adapt if you see each sign.]

[TIME]: Target: [HH:MM]
```

Workshop instruction/example/timer slides additionally include:

```
[SETUP]: [Last-minute checks before opening the exercise]
[DEBRIEF]: [2–3 specific questions to use during share-out]
[EXTENSION]: [One question for groups that finish early]
```

### Slide Sequence and Block Assignments

| Slides | Block | Content Area |
|---|---|---|
| 1–5 | Opening | Title, agenda, "how today works", icebreaker instruction, icebreaker debrief |
| 6 | Structural anchor | Framework hierarchy diagram — all levels, equal weight |
| 7–19 | Lecture Block 1 | SOSTAC: why it matters, overview, all 6 components, integration, Żabka worked example, Nike CDA, common mistakes |
| 20–22 | Workshop 1 | Instruction slide, example slide (partial SOSTAC board), active/QR/timer slide |
| 23 | Break | Break slide |
| 24–35 | Lecture Block 2 | RACE: overview, all 4 stages with KPIs and statistics, IKEA Act example, Zalando Convert example, Spotify Wrapped Engage example, SOSTAC-RACE integration table, KPI dashboard template |
| 36–38 | Workshop 2 | Instruction slide, example slide (partial Żappka journey map), active/QR/timer slide |
| 39 | Lunch | Lunch slide with brand reminder prompt |
| 40 | Re-energizer | Instruction — "Dobra czy zła kampania?" quickfire |
| 41–45 | Re-energizer | Five campaign slides: CD Projekt Red TikTok; mBank email; Żabka landing page; InPost influencer post; Allegro SEO listing |
| 46 | Structural anchor | Framework hierarchy — Brand Strategy + Digital Strategy emphasized; SOSTAC + RACE faded |
| 47–57 | Lecture Block 3 | Three-level comparison, brand strategy components (Purpose/Positioning/Promise/Identity), Aaker Brand Equity Model, Brand Pyramid, CVP definition and CVP vs. USP, Value Proposition Canvas overview, CVP examples (InPost, Żabka, Spotify, Airbnb, Slack), CVP driving digital decisions |
| 58–60 | Workshop 3 | Instruction slide, example slide (partial InPost VPC), active/QR/timer slide |
| 61 | Break | Break slide |
| 62–72 | Lecture Block 4 | Polish digital market overview, platform comparison, Polish e-commerce specifics (BLIK/Paczkomat), owned/earned/paid model, channel ROI benchmarks, AI in digital marketing, RACE-mapped channel matrix, budget allocation principles, measurement and attribution, 90-day review cycle |
| 73–75 | Workshop 4 | Instruction slide, empty budget grid reference, active/QR/timer slide |
| 76 | Structural anchor | "Welcome back — let's bring it all together" |
| 77 | Structural anchor | Framework hierarchy — all levels with exercise callout annotations |
| 78–85 | Synthesis and Close | Key takeaways (5 points), three frameworks in one sentence each, next steps (SOSTAC audit), Polish digital resources, international resources, reflection sticky note round, Q&A, thank you + contact |

**Slide count**: 85 slides. Growth is permitted organically if content warrants it; padding slides to reach a round number is not permitted.

### Presenter Notes Language and Style

- [SAY] field: full Polish, first-person delivery voice. Written as the exact words to speak, not as a description of what to say.
- Complete opening sentences: the first 2–3 sentences of every [SAY] block must be written out verbatim. These give the presenter a confident launch point on every slide.
- Talking points: after the complete opening sentences, bullet-form Polish phrases are acceptable for the rest of the slide.
- [DO]/[WATCH]/[TIME] fields: Polish is acceptable but not required. Clarity is the priority.

### Re-Energizer Slides (41–45) Content

Each re-energizer slide shows one campaign screenshot or description and the following prompt: "Dobra czy zła kampania? Macie 30 sekund." (Good or bad campaign? You have 30 seconds.) The five campaigns:
1. CD Projekt Red TikTok — Cyberpunk 2077 Phantom Liberty community post
2. mBank email — retention/engagement email (gamification element visible)
3. Żabka landing page — Żappka app promotion
4. InPost influencer post — Paczkomat convenience messaging
5. Allegro SEO listing — organic search result for a competitive category

The [SAY] field for each: brief context (1 sentence) and the question for the class. No definitive answer is scripted — the facilitator harvests responses and connects the campaign to the most recently covered framework.

---

## Deliverable 2: Canva Whiteboard Exercise Markdown Build Specs

### Structure

Four separate files: `implementation/canva-exercise-1-sostac.md` through `canva-exercise-4-budget.md`.

Each file follows this template:

```markdown
# Canva Whiteboard Build Spec: [Exercise Name]

## Overview
[1-paragraph description of what this whiteboard should look like when complete]

## Single-Brand Continuity
[Rule restated for exercises 2–4; for exercise 1: instruction to choose brand and commit]

## Layout Specification
[Detailed description of zones, columns, swim lanes — including approximate relative proportions]

## Color Table
| Category | Sticky Note Color | Hex (if specified) |
|---|---|---|
| [category] | [color name] | [hex or "Canva default [color name]"] |

## Zone Pre-Fill: Allegro Worked Example
[For each zone/column: 1–2 example sticky note texts in Polish, showing format and depth]

## Participant Instructions (Polish)
[Step-by-step numbered instructions as they would appear on the slide or in a handout — 
in Polish, present tense, imperative or second person plural]

## QR Code Placeholder
[Instruction: insert QR code linking to this whiteboard here — update before each cohort]

## Do aktualizacji (co rok)
[What specifically to check and update in this exercise before reuse]
```

### Exercise 1: SOSTAC Situation Audit

**Duration**: 30 minutes | **Position**: 10:30–11:00

Layout: 6 columns labeled S / O / S / T / A / C. For a 30-minute session, the Situation (S) column is the primary work area; columns O through C are present but lightly filled.

Pre-fill zone: Situation column — 4 pre-filled Żabka sticky notes: one Customer insight, one Competitor note, one Company capability note, one PESTEL factor. Format model: "Klient: [observation] — źródło: [where you'd find this data]."

### Exercise 2: RACE Customer Journey Mapping

**Duration**: 40 minutes | **Position**: 11:50–12:30

Layout: 4 horizontal swim lanes — Reach / Act / Convert / Engage. Within each lane: three sub-zones — Kanały (Channels Used), Emocje klienta (Customer Emotions), Punkty tarcia (Friction Points).

Pre-fill zone: All four lanes — Żappka (Żabka app) worked example. One sticky per lane per sub-zone.

Single-brand continuity reminder at top of spec.

### Exercise 3: Value Proposition Canvas

**Duration**: 50 minutes | **Position**: 14:25–15:15

Layout: Classic Osterwalder VPC — Customer Profile circle on the right (Jobs / Pains / Gains), Value Map square on the left (Products & Services / Pain Relievers / Gain Creators). A "DO NOT START HERE" label covers the Value Map until Step 5 of facilitation.

Pre-fill zone: Customer Profile — InPost worked example with a persona "online shopper in Warsaw who misses home deliveries." 2 sticky notes per sub-zone (Jobs, Pains, Gains) in Polish.

Single-brand continuity reminder at top of spec.

Polish terminology labels used for all zone headings (from Appendix B): Profil Klienta, Zadania Klienta, Bóle, Korzyści, Mapa Wartości, Produkty i Usługi, Uśmierzacze Bólu, Kreatory Korzyści.

### Exercise 4: Budget Challenge / Digital Channel Matrix

**Duration**: 40 minutes | **Position**: 15:55–16:35

Layout: Table/matrix. Rows = 9 channels (SEO/content, Paid Search/Google Ads, Paid Social/Meta, TikTok, Email Marketing, Marketing Influencerów, Display/Programmatic, Website CRO, Inne). Columns = Etap RACE (Reach/Act/Convert/Engage), Budżet PLN, Priorytet (Wysoki/Średni/Niski), Główny KPI.

Starting budget: 200,000 PLN for a 6-month campaign. Printed in large type above the matrix.

Pre-fill zone: One pre-filled example row — Email Marketing: Etap Engage, 20,000 PLN, Priorytet Wysoki, KPI: Wskaźnik powtórnych zakupów.

"Szacunkowe" flag: channel-level Polish advertising spend data is flagged as estimated in the facilitator notes for this exercise.

Single-brand continuity reminder at top of spec.

---

## Deliverable 3: Facilitator Guides

### Structure

Four separate files: `implementation/facilitator-guide-1-sostac.md` through `facilitator-guide-4-budget.md`.

Each guide is a standalone document. It must be usable by an instructor who has never attended a briefing. Structure per guide:

```markdown
# Przewodnik Prowadzącego: [Exercise Name in Polish]
### Informacje ogólne
[Duration, group size, position in day, required tools, pre-session prep items]

### Opis szablonu Canva
[Plain-language description of what is on the whiteboard: zones, colors, pre-filled content]

### Kroki facilitacji z czasem
| Krok | Czas | Opis | Co powiedzieć |
|---|---|---|---|
[Numbered steps; "Co powiedzieć" = exact Polish opening phrase for each step]

### Typowe problemy i rozwiązania
| Problem | Rozwiązanie |
|---|---|
[At least 3 problems; solutions as prompts the facilitator can use verbatim]

### Pytania do debriefingu
[3–5 Polish-language questions, numbered. Can be asked in sequence or selectively.]

### Pytanie dla grup zaawansowanych
[One extension question for groups that finish early]

### Do aktualizacji (co rok)
[What to check before each reuse: brand examples, statistics, budget amounts]
```

### Facilitator Guide 1: SOSTAC Situation Audit

Key content drawn from: research-report.md Section 3 (facilitation notes, watch-points, extension) and Section 7 (Exercise 1 complete facilitation script).

Three common problems from research-report.md directly applicable:
- Groups stuck on Control: use the Monday morning metrics prompt.
- Groups treating Strategy as a tactics list: use the "big bets" redirect prompt.
- Groups too slow: use the "breadth not depth" reminder.

### Facilitator Guide 2: RACE Customer Journey Mapping

Key content drawn from: research-report.md Section 4 (RACE teaching guide) and Section 7 (Exercise 2 facilitation).

Includes: gallery walk logistics, KPI layer instruction, B2B extension question for advanced groups.

### Facilitator Guide 3: Value Proposition Canvas

Key content drawn from: research-report.md Section 2 (CVP definitions), Section 7 (Exercise 3 facilitation including the "DO NOT START HERE" rule and all facilitation steps).

Critical facilitation rule must be prominent: groups must complete the Customer Profile in full before touching the Value Map. This must be stated in the Opis szablonu section AND restated as a warning in Krok 3 of the facilitation steps.

### Facilitator Guide 4: Budget Challenge

Key content drawn from: research-report.md Section 7 (Exercise 4 facilitation) and Section 6 (channel ROI data).

Includes: instructions for adjusting the 200,000 PLN budget amount up or down for different cohort contexts (noted in Do aktualizacji section), and the "szacunkowe" caveat for Polish channel-level data.

---

## Deliverable 4: Framework Hierarchy Diagram Spec

### File

`implementation/hierarchy-diagram-spec.md`

### Visual Specification

**Structure**: Five stacked boxes connected by downward arrows. Boxes are top-to-bottom in the logical order: Brand Strategy at top, RACE at bottom.

**Box specifications**:

| Level | Polish Label (primary) | Polish Sub-label | Fill Color | Border | Font |
|---|---|---|---|---|---|
| Brand Strategy | Strategia Marki | "Kim jesteśmy?" (5–10+ lat) | Deep blue (#1A3A5C or equivalent dark brand color) | None | White, bold, 24pt+ |
| Digital Strategy | Strategia Cyfrowa | "Jak technologia transformuje organizację?" (wieloletnia) | Medium blue (#2D6A9F) | None | White, bold, 24pt+ |
| Digital Marketing Strategy | Strategia Marketingu Cyfrowego | "Jak przyciągamy, konwertujemy i utrzymujemy klientów?" (roczna) | Medium teal (#1A7A8A) | None | White, bold, 24pt+ |
| SOSTAC | SOSTAC | "Framework Planowania" | Dark green (#2D7A4F) | None | White, bold, 24pt+ |
| RACE | RACE | "Framework Egzekucji" | Charcoal (#3A3A3A) | None | White, bold, 24pt+ |

**Arrow specification**: Single downward-pointing arrow between each consecutive level. Solid line, 2–3pt weight, color matching the source box's fill color. No arrowhead at top; chevron arrowhead at bottom.

**Overall dimensions**: Proportioned for a Keynote 16:9 slide occupying approximately 40% of slide width (centered), full height with modest top/bottom padding.

**White space**: Each box height approximately equal; spacing between boxes equal to 1/3 of box height.

### Variant 1: Slide 6 (Introduction — All Equal Weight)

All five boxes rendered at full opacity and full color as specified above. No emphasis, no fading. Caption below diagram: "Dziś będziemy poruszać się przez całą tę hierarchię — od dołu do góry."

### Variant 2: Slide 46 (Post-Lunch — Foundation Emphasis)

Brand Strategy and Digital Strategy boxes: full opacity, full color, box border added (white, 3pt, to create visual lift). Digital Marketing Strategy, SOSTAC, and RACE boxes: reduced to 30% opacity (greyed out). Caption: "Zbudowaliśmy plan (SOSTAC) i mapę egzekucji (RACE). Teraz: fundament strategiczny."

### Variant 3: Slide 77 (Synthesis — Annotated)

All five boxes at full opacity, full color (as Variant 1). Each box has a small callout annotation on the right side — a short bracket + text connecting the level to the exercise that applied it:

| Level | Callout Text |
|---|---|
| Brand Strategy | "→ Ćwiczenie 3: Kanwa Propozycji Wartości" |
| Digital Strategy | "(kontekst organizacyjny — omówiony w bloku 1)" |
| Digital Marketing Strategy | "→ Cały dzień: wybrana marka" |
| SOSTAC | "→ Ćwiczenie 1: Audyt Sytuacyjny" |
| RACE | "→ Ćwiczenie 2: Mapa Ścieżki Klienta" |

Caption: "Teraz znacie całą hierarchię — i potraficie ją zastosować."

---

## Content Architecture Summary

### Five Frameworks and Their Relationships

All five frameworks form a deliberate upstream-to-downstream hierarchy. They are not alternatives or interchangeable tools — they are sequential layers, each answering a successively more operational question. This hierarchy is the structural spine of all materials.

The pedagogical sequencing (SOSTAC and RACE taught before Brand Strategy and CVP) is intentional and counterintuitive. The [SAY] scripts for slide 46 must explicitly acknowledge this inversion and explain why it was chosen.

### Case Study Assignment

Each case study is assigned to a primary teaching moment. Cases are not used exhaustively; they are embedded as brief evidence (2–3 minutes) or discussion anchors (10–15 minutes) at the specific point in the agenda where they provide the most persuasive illustration.

| Case Study | Primary Slide | Role |
|---|---|---|
| Allegro "English for Beginners" | 5 (icebreaker debrief) and 49 (brand purpose) | Emotional brand strategy; earned Reach |
| Żabka Żappka | 17 (SOSTAC worked example), Ex.1 pre-fill, Ex.2 pre-fill | Full SOSTAC; RACE Engage |
| InPost Paczkomat | 56 (CVP examples), Ex.3 pre-fill | Product-led CVP; VPC worked example |
| CD Projekt Red | 51 (brand identity), Slide 41 (re-energizer) | Values-based brand strategy; community |
| mBank | 47 (digital strategy comparison), Slide 42 (re-energizer) | Digital strategy pioneer |
| Nike CDA | 18 (SOSTAC applied) and 27 (RACE Reach trade-off) | Full SOSTAC; RACE Reach sacrifice |
| Spotify Wrapped | 33 (RACE Engage), 55 (CVP overview) | Engage→Reach cycle; data-driven CVP |
| IKEA | 29 (RACE Act) | Act-stage barrier removal |
| Duolingo | 51 (brand personality) | Aaker personality dimensions; TikTok Reach |
| Zalando | 31 (RACE Convert) and 70 (budget principles) | Convert-stage CVP; platform economics |

### Statistics Placement

Statistics are not front-loaded. Each of the 20 statistics from research-report.md Section 6 is tagged to its assigned slide in the [SAY] field of that slide. Statistics with Polish-specific equivalents (YouTube 24.4M Gemius/PBI; BLIK 68%; Paczkomat 81%) are used in preference to global equivalents wherever Polish context is available.

The IAB Polska channel-level breakdown is flagged as "szacunkowe" in the Exercise 4 facilitator guide and in the [WATCH] field of slide 65. The facilitator is prompted to verify this data before each cohort.

---

## Language and Terminology

### Polish Language Requirements

- All student-facing content (slides, exercise instructions, whiteboard zone labels, sticky note pre-fills) must be in Polish.
- All [SAY] scripts must be in Polish.
- Facilitator guides must be entirely in Polish.
- The [DO], [WATCH], [TIME], [SETUP], [DEBRIEF], [EXTENSION] fields in the Keynote spec may be in Polish or English — clarity is the priority.
- The diagram spec and the Canva build specs are technical documents; they may be in English with Polish strings for all user-visible text.

### Terminology Standard

Appendix B of research-report.md (26-term Polish/English table) is the authoritative terminology reference. Key rules:
- "KPI" is used as the standard acronym — "KWE" is not used in any student-facing content.
- "RACE stages" use Polish translations on slides: Zasięg (Reach), Aktywacja (Act), Konwersja (Convert), Zaangażowanie (Engage). English acronym (RACE) is retained as the framework name.
- "Content marketing" and "social media" may be used as loanwords (standard in Polish marketing practice).
- "Influencer marketing" and "omnichannel" are used as loanwords per Appendix B.
- "Paczkomat" is used as a generic Polish term for parcel locker (Appendix B).

---

## Implementation Guidance

### Creation Order

Following the gap-analysis recommended order:
1. `hierarchy-diagram-spec.md` — visual anchor; required before writing slide scripts
2. `keynote-spec.md` — written block-by-block following the 85-slide sequence
3. `canva-exercise-N.md` — written after the corresponding lecture block's keynote section is complete
4. `facilitator-guide-N.md` — written last, drawing from keynote notes and canva specs

### Testing Approach

This is a content creation task; there are no code tests. Verification is by structured review against acceptance criteria. Recommended review approach: assign 2–6 acceptance criteria checks per deliverable review pass, not all at once. For each pass, confirm the specific items listed in the Acceptance Criteria section below before marking the pass complete.

### Standards Compliance

No `.maister/docs/standards/` files are applicable to this content creation task — no code is being written. The applicable standards are the course design standards documented in research-report.md (Knowles' andragogy, 70:20:10 model, Canva facilitation principles) and the presenter notes format specified in research-report.md Section 8.

---

## Acceptance Criteria

### Deliverable 1: Keynote Specification

- [ ] Exactly 85 slide entries present (growth permitted if each additional slide has content justification in a comment)
- [ ] Every slide entry contains all required fields: title, visual description, [SAY], [DO], [WATCH], [TIME]
- [ ] Every workshop instruction/example/timer slide (12 total) additionally contains [SETUP], [DEBRIEF], [EXTENSION]
- [ ] Every [SAY] block opens with complete Polish sentences (minimum 2 sentences, minimum 60 words total)
- [ ] [TIME] fields follow the 8-hour agenda timeline with no slide assigned a time outside its block window
- [ ] RACE stage color coding (Reach=blue, Act=green, Convert=orange, Engage=purple) is referenced in visual descriptions for every slide that covers a RACE stage
- [ ] All 20 statistics from research-report.md Section 6 appear in the [SAY] field of an appropriate slide, each with source and data year
- [ ] All 10 case studies appear in at least one slide's [SAY] field
- [ ] Slides 6, 46, and 77 reference the framework hierarchy diagram and specify which variant to use
- [ ] Re-energizer slides 41–45 contain the five specified campaigns (CD Projekt Red TikTok, mBank email, Żabka landing, InPost influencer, Allegro SEO)
- [ ] "Do aktualizacji" section present listing statistics, case study figures, and currency-of-examples items

### Deliverable 2: Canva Exercise Specs

- [ ] Four separate files, one per exercise
- [ ] Each file contains: layout spec, color table, Polish pre-fill content (Allegro worked example for Exercise 1; Żabka for Exercise 2; InPost for Exercise 3; one row example for Exercise 4)
- [ ] Exercises 2, 3, and 4 contain the single-brand continuity reminder at the top of the file
- [ ] Participant instructions are written in Polish
- [ ] Exercise 3 specifies the "DO NOT START HERE" label on the Value Map side
- [ ] Exercise 4 displays 200,000 PLN starting budget prominently and flags channel-level Polish data as "szacunkowe"
- [ ] Polish VPC zone names from Appendix B used in Exercise 3 zone headers
- [ ] QR code placeholder included in each spec
- [ ] "Do aktualizacji" section present in each file

### Deliverable 3: Facilitator Guides

- [ ] Four separate files, one per exercise, entirely in Polish
- [ ] Each guide contains all required sections: Informacje ogólne, Opis szablonu, Kroki facilitacji z czasem (table), Typowe problemy i rozwiązania (table, minimum 3 rows), Pytania do debriefingu, Pytanie dla grup zaawansowanych, Do aktualizacji
- [ ] Each step in Kroki facilitacji includes a "Co powiedzieć" phrase in Polish
- [ ] Guide 3 has a prominent warning about the Customer Profile → Value Map order
- [ ] No guide requires any briefing or additional context document to be useful
- [ ] Guide 4 includes instruction on how to adjust the 200,000 PLN budget amount

### Deliverable 4: Framework Hierarchy Diagram Spec

- [ ] All five levels present with Polish labels and Polish sub-labels
- [ ] Color specifications present for all five boxes
- [ ] Arrow specification defined (weight, color, arrowhead style)
- [ ] Three variants specified: Slide 6 (equal weight), Slide 46 (foundation emphasis), Slide 77 (annotated)
- [ ] Variant 2 specifies which levels fade and to what opacity
- [ ] Variant 3 specifies the callout text for each level

---

## Out of Scope

- Actual Keynote (.key) files — the spec is a Markdown document; the presenter builds the deck from it
- Actual Canva Whiteboard files — the spec is build instructions; the facilitator creates the whiteboards manually
- Student handouts, take-home materials, or printed reference cards
- Video recordings, screen recordings, or any recorded media
- LMS/e-learning adaptations, online delivery format, or asynchronous versions
- Translation of existing research-report.md into Polish — the research report remains as a source document in English
- SOSTAC components O, S (Strategy), T, A, C for Workshop 1 in depth — the 30-minute format focuses on the Situation column; remaining columns are labeled but only lightly filled
- B2B-specific RACE examples as primary content (B2B is acknowledged as an extension question in facilitator guides only)
- Current 2026 Polish campaign examples — the facilitator adds these before each cohort per the "Do aktualizacji" instructions; they are not part of the spec deliverables
- Pricing benchmarks for Google Ads/Meta Ads in Poland — these change quarterly and are excluded from static spec content

---

## Reusability Notes

### Annual Update Protocol

Each deliverable contains a "## Do aktualizacji (co rok)" section. Before each cohort, the instructor should:

1. **Statistics verification** (30 min): Check the 8 statistics tagged as annually variable (platform reach, e-commerce market size, digital ad spend, BLIK adoption). Primary sources: DataReportal Digital Poland (January release), Gemius/PBI Mediapanel, IAB Polska Raport Strategiczny.
2. **Case study figures** (20 min): Verify revenue figures for Nike, Spotify, Zalando, Allegro, InPost against their most recent annual reports or IR pages. Update [SAY] scripts in the affected slides.
3. **Current campaign examples** (20 min): Add 1–2 fresh Polish campaigns from the previous 6 months. Primary source: marketingprzykawie.pl or Marketer+ (marketerplus.pl). Replace one re-energizer campaign slide with a current example if available.
4. **Budget exercise amount** (5 min): Adjust the 200,000 PLN budget in Exercise 4 if the cohort's industry context warrants a different scale.
5. **LinkedIn reach figure** (5 min): Verify current DataReportal and Gemius/PBI figures; update slide 64 with both and note the discrepancy.

### Version Control Recommendation

Each deliverable file should include a header block:

```
Version: 1.0
Last updated: 2026-04-24
Next review: before next cohort
Changed by: [instructor name]
Changes: [what was updated]
```

This enables multiple instructors to track which version of the materials they used and what changes were made for each cohort.

### Structural Stability

The following elements are stable and do not require annual review:
- Framework definitions (SOSTAC, RACE, CVP, Brand Strategy, Digital Strategy)
- Framework hierarchy structure and the pedagogical sequencing rationale
- Exercise formats and facilitation steps
- Polish terminology table (Appendix B standard)
- Presenter notes format ([SAY]/[DO]/[WATCH]/[TIME])
- The single-brand continuity rule
- Case study narratives (only their financial metrics need updating)

---

## Success Criteria

- An instructor who has never attended a briefing can pick up any facilitator guide and run the corresponding exercise within its allocated time with no additional context.
- An instructor preparing the Keynote deck can construct any slide from the spec without making content decisions — every element (visual, spoken word, timing, interaction) is specified.
- The framework hierarchy diagram can be reproduced identically by any designer using only the visual spec, in all three variants.
- All Polish terminology matches Appendix B of research-report.md with no inconsistencies across deliverables.
- A first-time reader of the Canva build spec can construct any exercise whiteboard in Canva in under 30 minutes with no prior Canva training beyond basic familiarity.
- Before each new cohort, the annual update can be completed in under 90 minutes following the Do aktualizacji checklists.
