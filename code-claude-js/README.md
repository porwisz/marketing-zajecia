# Strategia Marketingu Cyfrowego — Generator

8-godzinna prezentacja warsztatowa (85 slajdów, 6 plików PPTX) generowana
programowo z JavaScript przez `pptxgenjs`. Każdy blok to niezależny skrypt
używający wspólnej biblioteki designu (`build.js`).

## Architektura

```
source/
├── build.js        # design system — tokens, pomocniki, "drawery"
├── block1.js       # Otwarcie (slajdy 1–6)    → 01-otwarcie.pptx
├── block2.js       # SOSTAC + W1 (7–22)       → 02-sostac.pptx
├── block3.js       # RACE + W2 (23–38)        → 03-race.pptx
├── block4.js       # Strategia Marki + CVP + W3 (39–60) → 04-brand-cvp.pptx
├── block5.js       # Kanały + Budżet + W4 (61–75) → 05-kanaly-budzet.pptx
└── block6.js       # Synteza + Zakończenie (76–85) → 06-synteza.pptx
```

Pliki PPTX wynikowe leżą w katalogu nadrzędnym `outputs/`.

## Wymagania

- Node.js 18+ (testowane na 22)
- `pptxgenjs` jako jedyna zależność

```bash
npm init -y
npm install pptxgenjs
```

Umieść wszystkie pliki `.js` w tym samym katalogu co `node_modules/`.

## Regeneracja

Każdy blok generuje się niezależnie:

```bash
node block1.js        # zapisuje 01-otwarcie.pptx obok
node block2.js        # 02-sostac.pptx
# ...
node block6.js        # 06-synteza.pptx
```

Albo wszystkie naraz:

```bash
for i in 1 2 3 4 5 6; do node block$i.js; done
```

Jeśli chcesz wygenerować PDF do podglądu (wymaga LibreOffice):

```bash
soffice --headless --convert-to pdf 01-otwarcie.pptx
```

## Jak edytować treść

Treść slajdów jest **wpisana bezpośrednio w kod** — nie jest ładowana
z pliku Markdown. Każdy slajd to blok kodu w stylu:

```javascript
// =====================================================================
// Slide 7 (1/16): Dlaczego SOSTAC?
// =====================================================================
n++;
L.makeTitleSlide(pres, {
  eyebrow: "LECTURE BLOCK 1 · SOSTAC",
  title: "Dlaczego SOSTAC?",
  subtitle: "SOSTAC",
  meta: "PR Smith, lata 90.",
  time: "09:45 · Slajd 7 / 85",
  say: "...",      // [MÓWIĘ] — scenariusz ustny
  doIt: "...",     // [ROBIĘ] — akcja prowadzącego
  watch: "...",    // [OBSERWUJĘ] — sygnały z sali
  debrief: "...",  // [DEBRIEF] — pytania po ćwiczeniu
}, n, TOTAL);
```

Żeby zmienić tekst: edytuj odpowiedni `blockN.js` i uruchom ponownie `node blockN.js`.

Żeby zmienić wygląd (kolor, font, odstęp): edytuj `build.js`.
Najważniejsze sekcje:

- `const C = { ... }` — paleta (C.navy, C.teal, C.amber, kolory RACE/SOSTAC)
- `FONT_H` / `FONT_B` — font headline / body (obecnie "Calibri")
- `W = 13.3, H = 7.5` — wymiary slajdu w calach (LAYOUT_WIDE)

## Główne pomocniki w `build.js`

Do budowy standardowych slajdów:

- `makeTitleSlide(pres, data, n, total)` — jasne lub ciemne tło, tytuł + napis
- `makeContentSlide(pres, data, n, total, drawer)` — standardowy slajd z eyebrow,
  tytułem, podtytułem i przestrzenią na treść (rysowaną przez callback `drawer`)
- `makeBreakSlide(pres, data, n, total)` — slajd przerwy (ciemny)
- `addNotes(s, data)` — dodaje notatki prowadzącego w formacie `[CZAS]/[MÓWIĘ]/...`
- `slideNum(s, n, total, darkMode)` — numer strony (jasny lub ciemny)
- `footerBrand(s)` — stopka "Strategia Marketingu Cyfrowego"

Do treści w slajdach:

- `drawTwoCol(s, pres, data)` — dwukolumnowy układ
- `drawGrid(s, pres, data)` — 2×2 lub 3×2 siatka kart
- `drawStats(s, pres, data)` — 3–4 duże liczby w rzędzie
- `drawTable(s, pres, data)` — tabela z kolorowymi nagłówkami
- `drawWorkshopInstruction(s, pres, data)` — pełnoekranowy brief warsztatowy
  (ciemne tło, 3–4 bloki + opcjonalne ostrzeżenie)
- `drawNumberedList(s, pres, items)` — ponumerowana lista
- `drawQuote(s, pres, text, author)` — duży cytat

Specjalistyczne diagramy:

- `drawSOSTACCircle(s, pres)` — diagram kołowy 6 etapów SOSTAC (slajd 8)
- `drawRACECycle(s, pres)` — cykl RACE 4 etapów (slajd 25)
- `drawHierarchy(s, pres, variant)` — diagram hierarchii 5 poziomów,
  warianty 1 (równy), 2 (fundamenty podkreślone), 3 (z anotacjami ćwiczeń)

## Konwencje projektowe (ustalone w toku pracy)

- Numeracja slajdów w prawym dolnym rogu na `y = H - 0.45`
- Marka "Strategia Marketingu Cyfrowego" w lewym dolnym rogu w tym samym wierszu
- Podpisy źródeł na `y = H - 0.75` (nigdy na `H - 0.45` — koliduje ze stopką)
- Slajdy ciemne (przerwy, transitiony, warsztaty): numer strony ręcznie
  z `slideNum(s, n, TOTAL, true)`, stopki nie ma
- Instrukcje warsztatowe: maksymalnie 4 bloki po 0.85" + warning 0.9"
  mieszczą się nad numerem strony
- Jedno źródło na slajd, skonsolidowane w jednej linii stopki (nie per-karta)
- Hasła sekcji (eyebrow): 11pt bold charSpacing=3, kolor `C.teal`
- Tytuł: 30pt bold, kolor `C.ink`
- Nigdy nie stosować podkreśleń ani linii akcentowych pod tytułami

## Ograniczenia

- **Spec nie jest źródłem prawdy.** Tekst slajdów, notatki prowadzącego, dane
  liczbowe — wszystko siedzi w kodzie JS, nie w `keynote-spec.md`. Aktualizacja
  `.md` niczego nie regeneruje. Jeśli chcesz systemu driven-by-spec, trzeba
  napisać parser Markdown.
- **Placeholdery do wstawienia ręcznie w PowerPoint/Keynote:**
  - QR kody na slajdach warsztatowych: Block 1/4, Block 2/15, Block 3/15,
    Block 4/21, Block 5/13
  - Zrzuty kampanii na Block 4 slajdach 3–7 (quickfire)
  - Dane kontaktowe na Block 6 slajdzie 10
- **`≠` w LibreOffice** może renderować się jako `/` (font fallback).
  W PowerPoint i Keynote renderuje się poprawnie. Weryfikowalne przez
  ekstrakcję tekstu z `.pptx` (tekst jest poprawny w XML).

## Gdyby chcieć w przyszłości zrobić driven-by-Markdown

Obecnie każdy slajd to blok imperatywnego kodu JS. Dałoby się to przepisać na:

1. Parser Markdown → obiekty `{eyebrow, title, subtitle, say, doIt, ...}`
2. "Dispatcher" rozpoznający typ slajdu po metadanych YAML frontmatter
   (`type: title | content | break | workshop-instruction`)
3. Każdy typ wywołuje odpowiednią funkcję z `build.js`

Koszt pracy: prawdopodobnie 1–2 dni jednorazowo. Korzyść: redaktor zmienia
tekst w `.md`, nie w JS. Decyzja zależy od tego, czy przewidujesz wiele
edycji tekstu vs. wizualnych zmian.
