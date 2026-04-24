# Requirements — Digital Marketing Strategy Course Materials

**Date**: 2026-04-24

---

## Initial Description

Create full-day (8h) course materials on Digital Marketing Strategy and Execution for postgraduate e-marketing students. Deliverables: Keynote presentation Markdown spec (slide-by-slide with full Polish presenter notes in [SAY]/[DO]/[WATCH]/[TIME] format), and 4 Canva Whiteboard exercise templates with facilitator guides. All student-facing content in Polish. Covers: SOSTAC, RACE, Digital Strategy, Brand Strategy, Customer Value Proposition.

---

## Q&A

**Q: Kto będzie używać tych materiałów?**
A: Autor (Wojciech) + inni wykładowcy. Materiały muszą być wystarczająco samodokumentujące, aby inny wykładowca mógł przeprowadzić zajęcia bez briefingu.

**Q: Czy zajęcia będą powtarzane?**
A: Tak, wielokrotnie. Spec musi być wersjonowalna i łatwa do aktualizacji (np. wymiana danych rynkowych co rok, nowe case studies).

**Q: Materiały referencyjne?**
A: Brak — bazuj wyłącznie na research-report.md i standardach z badań.

---

## Functional Requirements

### FR1 — Keynote Specification (Markdown)
- 85 slajdów (z możliwością organicznego wzrostu, nie padding do 90+)
- Każdy slajd: tytuł, opis wizualny, [SAY] pełny skrypt, [DO] akcja, [WATCH] obserwacja sali, [TIME] godzina
- Slajdy workshopowe (12 slajdów: 3 × 4 warsztaty): dodatkowo [SETUP]/[DEBRIEF]/[EXTENSION]
- Język notatek prezentera: polski
- Spójne z 8-godzinnym harmonogramem (agenda z research-report.md Section 1)

### FR2 — Canva Whiteboard Exercise Templates (4 × Markdown spec)
- Format: Markdown build instructions wykonywalne ręcznie w Canva
- Każda specyfikacja zawiera: opis stref/kolumn, kolory sticky notes, polskie pre-fill (przykład wykonany), instrukcje dla studentów po polsku
- Ćwiczenia używają tej samej marki przez całą grupę (single-brand continuity)
- Pre-fill: 1-2 przykładowe sticky notes per sekcja (zbudowane na marce Allegro jako worked example)

### FR3 — Facilitator Guides (4 × Polski przewodnik)
- Standalone dokument per ćwiczenie
- Zawiera: opis szablonu Canva, kroki facilitacji z czasem, typowe problemy + rozwiązania, pytania debriefingowe
- Język: polski
- Na tyle samodokumentujący, że nowy wykładowca może prowadzić bez żadnego briefingu

### FR4 — Framework Hierarchy Diagram Spec
- Specyfikacja wizualna diagramu Brand Strategy → Digital Strategy → Digital Marketing Strategy → SOSTAC → RACE
- Diagram pojawia się na slajdach 6, 46, 77 (z różnymi akcentami na każdym module)
- Opis kolorów, etykiet, strzałek, formatowania

---

## Similar Features / Reuse Opportunities

- **research-report.md Section 7**: Gotowe opisy ćwiczeń Canva — direct input do FR2 i FR3
- **research-report.md Section 8**: Gotowy 85-slajdowy konspekt — direct scaffold do FR1
- **research-report.md Appendix B**: Polska terminologia — applied throughout all deliverables
- **research-report.md Sections 2–6**: Treść merytoryczna do [SAY] skryptów

---

## Scope Boundaries

**In scope**:
- Markdown spec Keynote (85 slajdów, pełny skrypt PL)
- 4 Canva exercise Markdown build specs
- 4 facilitator guides (PL)
- Framework hierarchy diagram spec

**Out of scope**:
- Faktyczne pliki Keynote (.key) lub Canva
- Handouty dla studentów
- Nagrania wideo
- Materiały online (LMS, e-learning)

---

## Non-Functional Requirements

- **Updatability**: Dane rynkowe (statystyki) w wydzielonych sekcjach łatwych do zastąpienia rocznie
- **Self-contained**: Każdy facilitator guide musi być zrozumiały bez żadnego briefingu
- **Consistency**: Polska terminologia z Appendix B stosowana jednolicie
- **Single-brand continuity**: Wyraźnie zaznaczone w Exercise 1 i powtarzane w 2-4

---

## Technical Considerations

- Język: polski (student-facing), format: Markdown
- IAB Polska AdEx data gap → "szacunkowe" labeling w Exercise 4
- Re-energizer (slides 41–45): CD Projekt Red TikTok, mBank email, Żabka landing, InPost influencer, Allegro SEO
- Diagram hierarchy recurs on slide 6, 46, 77 with different emphasis each time
