// Block 1: Opening — Slides 1-6 (09:00-09:45)
const pptxgen = require("pptxgenjs");
const L = require("./build");
const { C, W, H, FONT_H, FONT_B } = L;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Strategia Marketingu Cyfrowego — Blok 1: Otwarcie";
pres.author = "Prowadzący";

const TOTAL = 6;

// --- Slide 1: Tytuł ---
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  // Decorative color block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: H - 1.2, w: W, h: 1.2, fill: { color: C.teal }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: H - 1.2, w: W, h: 0.05, fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText("Strategia", {
    x: 0.8, y: 1.8, w: W - 1.6, h: 1.4,
    fontFace: FONT_H, fontSize: 80, bold: true,
    color: C.white, align: "left", valign: "middle", margin: 0,
  });
  s.addText("Marketingu Cyfrowego", {
    x: 0.8, y: 3.1, w: W - 1.6, h: 1.4,
    fontFace: FONT_H, fontSize: 80, bold: true,
    color: C.amber, align: "left", valign: "middle", margin: 0,
  });
  s.addText("Warsztat 8-godzinny · Studia podyplomowe · Canva Whiteboard", {
    x: 0.8, y: 4.6, w: W - 1.6, h: 0.5,
    fontFace: FONT_B, fontSize: 18, italic: true,
    color: "B0B8C4", align: "left", valign: "middle", margin: 0,
  });
  s.addText("[Prowadzący: imię i nazwisko]   ·   [Data zajęć]", {
    x: 0.8, y: H - 0.9, w: W - 1.6, h: 0.6,
    fontFace: FONT_B, fontSize: 14,
    color: C.darkBg, align: "left", valign: "middle", margin: 0,
  });
  L.addNotes(s, {
    time: "09:00",
    say: "Dzień dobry. Witamy na zajęciach z Strategii Marketingu Cyfrowego. Dzisiaj przez osiem godzin będziemy razem budować kompletny warsztat strategiczny — od analizy sytuacyjnej do planowania budżetu kanałów cyfrowych. Na koniec dnia każda z grup będzie miała prawie gotowy plan marketingu cyfrowego dla wybranej przez siebie marki — coś konkretnego, co można zabrać ze sobą i od razu zastosować.",
    doIt: "Kliknij, aby wyświetlić slajd. Sprawdź AV — głośność, rozdzielczość projekcji, łączność z systemem dźwiękowym. Potwierdź, że slajd jest widoczny z tylnych rzędów sali.",
    watch: "Sala może jeszcze się wypełniać — uczestnicy przyjeżdżający z dojazdów. Witaj przybyłych z uśmiechem i gestem; nie zaczynaj głównego skryptu, dopóki większość nie zajmie miejsc. Obserwuj napięcie/nastrój.",
  });
  L.slideNum(s, 1, TOTAL, true);
}

// --- Slide 2: Plan Dnia ---
L.makeContentSlide(pres, {
  eyebrow: "PLAN DNIA",
  title: "Oś czasu — od 09:00 do 17:00",
  subtitle: "Cztery bloki wykładowe, cztery sesje warsztatowe, jeden lunch",
  time: "09:02",
  say: "Dzień podzielony jest na cztery bloki wykładowe i cztery sesje warsztatowe. Wykłady zajmują mniej więcej dwie i pół godziny łącznie — reszta dnia to wasze aktywne ćwiczenia. Mamy jedną dłuższą przerwę na lunch o 12:30 i dwie krótsze piętnastominutowe przerwy w ciągu dnia — o 11:00 i o 15:15. Proszę traktować te przerwy poważnie: praca w skupieniu przez 8 godzin wymaga regeneracji, a my potrzebujemy was w pełni aktywnych szczególnie po południu.",
  doIt: "Użyj wskaźnika, aby prześledzić oś czasu od lewej do prawej. Zatrzymaj się na każdym bloku warsztatowym.",
  watch: "Czy uczestnicy spoglądają na zegarki? Czy ktoś pyta o przerwy?",
}, 2, TOTAL, (s, pres) => {
  // Timeline with blocks
  const rows = [
    { time: "09:00–09:45", label: "Otwarcie + Icebreaker", type: "lecture" },
    { time: "09:45–10:36", label: "Wykład 1 — SOSTAC", type: "lecture" },
    { time: "10:36–11:00", label: "Warsztat 1 — Audyt Sytuacyjny", type: "workshop" },
    { time: "11:00–11:15", label: "Przerwa", type: "break" },
    { time: "11:15–12:03", label: "Wykład 2 — RACE", type: "lecture" },
    { time: "12:03–12:30", label: "Warsztat 2 — Mapa Ścieżki Klienta", type: "workshop" },
    { time: "12:30–13:30", label: "Przerwa obiadowa", type: "break" },
    { time: "13:30–13:50", label: "Re-energizer", type: "lecture" },
    { time: "13:50–14:25", label: "Wykład 3 — Strategia Marki + CVP", type: "lecture" },
    { time: "14:25–15:15", label: "Warsztat 3 — Kanwa Propozycji Wartości", type: "workshop" },
    { time: "15:15–15:30", label: "Przerwa", type: "break" },
    { time: "15:30–15:55", label: "Wykład 4 — Miks Kanałów i Budżet", type: "lecture" },
    { time: "15:55–16:35", label: "Warsztat 4 — Wyzwanie Budżetowe", type: "workshop" },
    { time: "16:35–17:00", label: "Synteza i Zakończenie", type: "lecture" },
  ];
  const colors = { lecture: C.blueMid, workshop: C.amber, break: "94A3B8" };
  const y0 = 2.0;
  const rowH = (H - y0 - 1.0) / rows.length;
  rows.forEach((r, i) => {
    const y = y0 + i * rowH;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 2.2, h: rowH * 0.9,
      fill: { color: colors[r.type] }, line: { type: "none" },
    });
    s.addText(r.time, {
      x: 0.6, y, w: 2.2, h: rowH * 0.9,
      fontFace: FONT_B, fontSize: 12, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addText(r.label, {
      x: 3.0, y, w: W - 3.6, h: rowH * 0.9,
      fontFace: FONT_B, fontSize: 14,
      color: C.ink, align: "left", valign: "middle", margin: 0,
    });
  });
  // Legend
  s.addText([
    { text: "■ ", options: { color: C.blueMid, bold: true } },
    { text: "Wykład   ", options: {} },
    { text: "■ ", options: { color: C.amber, bold: true } },
    { text: "Warsztat   ", options: {} },
    { text: "■ ", options: { color: "94A3B8", bold: true } },
    { text: "Przerwa", options: {} },
  ], {
    x: 0.6, y: H - 0.85, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, color: C.inkMute, align: "left",
  });
});

// --- Slide 3: Jak Działamy Dziś ---
L.makeContentSlide(pres, {
  eyebrow: "JAK DZIAŁAMY DZIŚ",
  title: "Wykład + Warsztat — w rytmie przez cały dzień",
  time: "09:08",
  say: "Na każdy blok wykładowy czeka ćwiczenie warsztatowe na tablicy Canva Whiteboard — będziecie pracować w małych grupach. Na koniec dnia każda grupa będzie miała prawie kompletny plan marketingu cyfrowego dla wybranej przez siebie marki. Ważna informacja techniczna: do ćwiczeń warsztatowych będziecie potrzebować urządzenia z przeglądarką. Canva Whiteboard otwiera się przez link lub QR kod — nie trzeba instalować nic dodatkowego.",
  doIt: "Zapytaj, czy wszyscy mają urządzenie z dostępem do przeglądarki. W razie potrzeby dopasuj skład grup.",
  watch: "Czy ktoś nie ma urządzenia? Czy są problemy z WiFi? Rozwiąż to teraz — nie w połowie ćwiczenia.",
}, 3, TOTAL, (s, pres) => {
  L.drawTwoCol(s, pres, {
    cols: [
      {
        header: "WYKŁAD",
        accent: C.blueMid,
        points: [
          "Koncepcje i frameworki",
          "Przykłady z polskiego i światowego rynku",
          "Pytania otwarte — myślenie krytyczne",
          "Krótkie, intensywne — 20–35 minut na blok",
        ],
      },
      {
        header: "WARSZTAT",
        accent: C.amber,
        points: [
          "Praca w małych grupach (3–5 osób)",
          "Jedna wybrana marka przez cały dzień",
          "Cztery ćwiczenia → prawie gotowy plan",
          "Canva Whiteboard — wejście przez QR kod",
        ],
      },
    ],
    footerNote: "Wymagane: urządzenie z przeglądarką (laptop, tablet, telefon) — bez instalacji.",
  });
});

// --- Slide 4: Icebreaker Instrukcja ---
L.makeContentSlide(pres, {
  eyebrow: "ĆWICZENIE OTWIERAJĄCE · 30 MIN",
  title: "Marka, której ufam — Marka, której nie ufam",
  subtitle: "Osobiste, szczere, nieocenzurowane — startujemy od waszego doświadczenia",
  time: "09:15",
  setup: "Potwierdź, że link do Canva Whiteboard jest aktywny; QR kod renderuje się na projektorze; tablica ma dwie kolumny z nagłówkami. Przetestuj QR kod własnym telefonem.",
  say: "Zacznijmy od ćwiczenia otwierającego. Na tablicy Canva Whiteboard macie dwie kolumny: 'Marka, której ufam' i 'Marka, której nie ufam'. Wejdźcie przez QR kod i na karteczkach podajcie po jednej marce do każdej kolumny — i koniecznie napiszcie DLACZEGO. Macie na to 20 minut pracy grupowej, a następnie 10 minut na przejrzenie tego, co zebrała cała sala.",
  doIt: "Wyświetl slajd, wskaż QR kod. Przejdź po sali i upewnij się, że każda grupa pomyślnie połączyła się z tablicą. Ustaw timer na 20 minut.",
  watch: "Czy wszystkie grupy aktywnie dodają karteczki? Monitoruj proporcję polskich vs zagranicznych marek.",
  extension: "Gdybyś był CMO marki z kolumny 'nie ufam' — od czego konkretnie byś zaczął odbudowę zaufania?",
  debrief: "Jakie wzorce widzicie w kolumnie 'ufam' — co łączy te marki? Co łączy marki w kolumnie 'nie ufam'? Czy ktoś wymienił polską markę cyfrową — i dlaczego akurat tę?",
}, 4, TOTAL, (s, pres) => {
  const y0 = 2.1;
  // Left: instruction steps
  s.addText("3 KROKI", {
    x: 0.6, y: y0, w: 6, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 4,
    color: C.teal,
  });
  const steps = [
    { n: "1", t: "Wejdź przez QR kod", d: "Tablica Canva Whiteboard otworzy się w przeglądarce." },
    { n: "2", t: "Dodaj karteczki", d: "Po jednej w każdej kolumnie: Marka, której ufam · Marka, której nie ufam." },
    { n: "3", t: "Napisz DLACZEGO", d: "Nie samo imię marki — uzasadnienie. To najważniejsza część." },
  ];
  steps.forEach((st, i) => {
    const y = y0 + 0.5 + i * 1.35;
    s.addShape(pres.shapes.OVAL, {
      x: 0.6, y: y + 0.05, w: 0.75, h: 0.75,
      fill: { color: C.teal }, line: { type: "none" },
    });
    s.addText(st.n, {
      x: 0.6, y: y + 0.05, w: 0.75, h: 0.75,
      fontFace: FONT_H, fontSize: 26, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addText(st.t, {
      x: 1.55, y, w: 5.5, h: 0.45,
      fontFace: FONT_H, fontSize: 18, bold: true,
      color: C.ink, margin: 0,
    });
    s.addText(st.d, {
      x: 1.55, y: y + 0.5, w: 5.5, h: 0.8,
      fontFace: FONT_B, fontSize: 13,
      color: C.inkMute, margin: 0,
    });
  });
  // Right: QR placeholder + timer
  s.addShape(pres.shapes.RECTANGLE, {
    x: 8.0, y: y0 + 0.3, w: 4.6, h: 4.5,
    fill: { color: C.offWhite }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 8.8, y: y0 + 0.6, w: 3.0, h: 3.0,
    fill: { color: C.white }, line: { color: C.inkFaint, width: 1 },
  });
  s.addText("[ QR KOD\nCanva Whiteboard ]", {
    x: 8.8, y: y0 + 0.6, w: 3.0, h: 3.0,
    fontFace: FONT_B, fontSize: 14, italic: true,
    color: C.inkFaint, align: "center", valign: "middle", margin: 0,
  });
  s.addText("⏱  20 minut pracy + 10 minut debrief", {
    x: 8.0, y: y0 + 3.9, w: 4.6, h: 0.5,
    fontFace: FONT_B, fontSize: 14, bold: true,
    color: C.ink, align: "center", valign: "middle", margin: 0,
  });
});

// --- Slide 5: Debrief ---
L.makeContentSlide(pres, {
  eyebrow: "ĆWICZENIE OTWIERAJĄCE — DEBRIEF",
  title: "Co widzimy? Wzorce, które się pojawiają",
  time: "09:35",
  say: "Spójrzmy razem na to, co się pojawiło. Widzę kilka wyraźnych wzorców — zanim je omówimy, warto wspomnieć o jednym polskim przykładzie. Allegro w 2020 roku — kampania 'English for Beginners' — zdobyła 150 milionów wyświetleń w ciągu tygodnia. Dlaczego? Bo dotknęła czegoś prawdziwego — emocji, wartości, historii. To nie był produkt. To była marka. Ten przykład pokazuje dokładnie to, co dziś będziemy analizować — jaka jest różnica między posiadaniem produktu a posiadaniem strategii marki.",
  doIt: "Prowadź debrief strukturalnie — najpierw daj głos jednemu uczestnikowi z każdej grupy (rotacyjnie), potem dodaj własną obserwację. Wskaż konkretne karteczki. Zrób pomost do slajdu 6.",
  watch: "Czy uczestnicy angażują się, czy czekają biernie? Czy ktoś kwestionuje przykład Allegro? Obserwuj, czy łączą obserwacje z własnym doświadczeniem.",
}, 5, TOTAL, (s, pres) => {
  L.drawTwoCol(s, pres, {
    cols: [
      {
        header: "ZAUFANIE — typowe motywy",
        accent: C.act,
        points: [
          "Stałość obietnicy — marka robi to, co mówi",
          "Transparentność w kryzysach i błędach",
          "Rozpoznawalne wartości, nie tylko logo",
          "Długie relacje, nie pojedyncze transakcje",
        ],
      },
      {
        header: "BRAK ZAUFANIA — typowe motywy",
        accent: C.red,
        points: [
          "Obietnice bez pokrycia — rozjazd komunikacji i produktu",
          "Ukryte koszty i nieczytelne warunki",
          "Obsługa klienta traktowana jak koszt, nie relacja",
          "Komunikacja reklamowa > realne doświadczenie",
        ],
      },
    ],
    footerNote: "Przykład: Allegro 'English for Beginners' (2020) — 150 mln wyświetleń w tydzień. To jest strategia marki w działaniu.",
  });
});

// --- Slide 6: Hierarchy Diagram (Variant 1) ---
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg2 };
  s.addText("MAPA HIERARCHII FRAMEWORKÓW", {
    x: 0.6, y: 0.4, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 4,
    color: C.amber, margin: 0,
  });
  s.addText("To jest mapa na cały dzień", {
    x: 0.6, y: 0.7, w: W - 1.2, h: 0.7,
    fontFace: FONT_H, fontSize: 32, bold: true,
    color: C.white, margin: 0,
  });
  L.drawHierarchy(s, pres, 1);
  s.addText("Dziś poruszamy się przez całą hierarchię — od dołu do góry.", {
    x: 0.6, y: H - 0.9, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, fontSize: 16, italic: true,
    color: C.inkFaint, align: "center",
  });
  L.addNotes(s, {
    time: "09:45",
    say: "Zanim przejdziemy do pierwszego narzędzia, chcę pokazać wam mapę całego dnia. Będziemy poruszać się przez tę hierarchię — od dołu do góry. Zaczniemy od SOSTAC — narzędzia planowania. Potem zobaczycie, jak wszystkie pięć poziomów do siebie pasuje. Na szczycie: Strategia Marki — odpowiedź na pytanie 'kim jesteśmy i po co istniejemy'. Na dole: RACE — framework egzekucji. Między nimi: Strategia Cyfrowa, Strategia Marketingu Cyfrowego i SOSTAC — każdy poziom zadaje inne pytanie. Wracajcie do tego diagramu na początku każdego nowego modułu.",
    doIt: "Zostaw diagram na ekranie przez minimum 30 sekund bez mówienia — daj uczestnikom czas na samodzielne przeczytanie poziomów. Następnie wskaż wskaźnikiem od dołu (RACE) i prowadź wzrok uczestników powoli w górę.",
    watch: "Czy uczestnicy czytają diagram uważnie? Jeśli ktoś wygląda na zdezorientowanego różnicą 'Strategia Cyfrowa' vs 'Strategia Marketingu Cyfrowego' — wyjaśnij: Strategia Cyfrowa to decyzja całej organizacji (CTO, CEO); Strategia Marketingu Cyfrowego to decyzja marketingowa (CMO).",
  });
  L.slideNum(s, 6, TOTAL, true);
}

pres.writeFile({ fileName: "/home/claude/decks/01-otwarcie.pptx" })
  .then((fn) => console.log("Wrote:", fn));
