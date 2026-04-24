// Block 3: RACE + Workshop 2 — Slides 23-38 (11:00-12:30)
const pptxgen = require("pptxgenjs");
const L = require("./build");
const { C, W, H, FONT_H, FONT_B } = L;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Strategia Marketingu Cyfrowego — Blok 3: RACE";

const TOTAL = 16;
let n = 0;

// =====================================================================
// Slide 23 (1/16): Przerwa 15 minut
// =====================================================================
n++;
L.makeBreakSlide(pres, {
  title: "Przerwa 15 minut",
  subtitle: "Do zobaczenia o 11:15",
  footer: "Wróćcie z marką wybraną w Ćwiczeniu 1 — będzie potrzebna od razu po przerwie.",
  time: "11:00 · Slajd 23 / 85",
  say: "Zasłużona przerwa — macie piętnaście minut. Wróćcie o jedenastej piętnastej.",
  doIt: "Wyświetl slajd. Ustaw timer na 15 minut widoczny dla uczestników. W czasie przerwy przejrzyj wyniki Warsztatu 1 na Canva Whiteboard — wypisz 2–3 interesujące obserwacje, które możesz przytoczyć po przerwie.",
  watch: "Obserwuj, czy grupy kończą porządkować swoje plansze SOSTAC przed wyjściem. Jeśli jakaś grupa jest daleko w tyle, zachęć do uzupełnienia podczas przerwy.",
}, n, TOTAL);

// =====================================================================
// Slide 24 (2/16): Witamy po Przerwie — Kontekst RACE
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "LECTURE BLOCK 2 · RACE",
  title: "Witajcie z powrotem — od planowania do egzekucji",
  subtitle: "SOSTAC mówi JAK planować. RACE mówi JAK egzekwować plan na ścieżce klienta.",
  time: "11:15 · Slajd 24 / 85",
  say: "Witajcie z powrotem. Przed przerwą zbudowaliście szkielet planu marketingowego dla waszej marki, korzystając z SOSTAC. Teraz poznamy narzędzie, które pozwala wam wypełnić kolumnę Taktyki w SOSTAC treścią — czyli RACE. RACE to framework egzekucji stworzony przez dr. Dave'a Chaffey'a. Stoi za pytaniem: jak dokładnie realizujemy plan marketingowy na całej ścieżce klienta — od pierwszego kontaktu do długoterminowej lojalności? Nazwa RACE to akronim od czterech etapów: Reach (Zasięg), Act (Aktywacja), Convert (Konwersja), Engage (Zaangażowanie).",
  doIt: "Wyświetl slajd. Wskaż strzałkę SOSTAC → RACE. Przypomnij uczestnikom o slajdzie 13 — kolumnie Taktyki.",
  watch: "Czy uczestnicy pamiętają kolumnę Taktyki ze slajdu 13? Jeśli nie — powtórz: 'Taktyki to kanały przypisane do etapów RACE'.",
}, n, TOTAL, (s, pres) => {
  // Two panels: SOSTAC and RACE, with arrow between them
  const y0 = 2.2;
  const panelH = 3.2;
  // Left — SOSTAC
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.4, h: panelH,
    fill: { color: C.offWhite }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.4, h: 0.6,
    fill: { color: C.green }, line: { type: "none" },
  });
  s.addText("SOSTAC", {
    x: 0.75, y: y0, w: 5.1, h: 0.6,
    fontFace: FONT_H, fontSize: 22, bold: true, color: C.white, valign: "middle", margin: 0,
  });
  s.addText("Jak planujemy?", {
    x: 0.75, y: y0 + 0.75, w: 5.1, h: 0.4,
    fontFace: FONT_B, fontSize: 16, italic: true, color: C.ink, margin: 0,
  });
  s.addText("Sytuacja → Cele → Strategia → Taktyki → Działania → Kontrola", {
    x: 0.75, y: y0 + 1.2, w: 5.1, h: 0.5,
    fontFace: FONT_B, fontSize: 13, color: C.inkMute, margin: 0,
  });
  s.addText("Rano: zbudowaliście swój szkielet planu — diagnoza, cele, strategia, dashboard.", {
    x: 0.75, y: y0 + 1.8, w: 5.1, h: 1.2,
    fontFace: FONT_B, fontSize: 14, color: C.ink, valign: "top", margin: 0,
  });

  // Arrow
  s.addShape(pres.shapes.RIGHT_TRIANGLE, {
    x: 6.15, y: y0 + panelH / 2 - 0.35, w: 0.7, h: 0.7,
    fill: { color: C.amber }, line: { type: "none" }, rotate: 90,
  });
  s.addText("→", {
    x: 6.05, y: y0 + panelH / 2 - 0.4, w: 0.9, h: 0.8,
    fontFace: FONT_H, fontSize: 48, bold: true, color: C.amber,
    align: "center", valign: "middle", margin: 0,
  });

  // Right — RACE
  s.addShape(pres.shapes.RECTANGLE, {
    x: 7.3, y: y0, w: W - 7.9, h: panelH,
    fill: { color: C.offWhite }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 7.3, y: y0, w: W - 7.9, h: 0.6,
    fill: { color: C.charcoal }, line: { type: "none" },
  });
  s.addText("RACE", {
    x: 7.45, y: y0, w: W - 8.1, h: 0.6,
    fontFace: FONT_H, fontSize: 22, bold: true, color: C.white, valign: "middle", margin: 0,
  });
  s.addText("Jak egzekwujemy plan na ścieżce klienta?", {
    x: 7.45, y: y0 + 0.75, w: W - 8.1, h: 0.4,
    fontFace: FONT_B, fontSize: 16, italic: true, color: C.ink, margin: 0,
  });
  s.addText("Zasięg → Aktywacja → Konwersja → Zaangażowanie", {
    x: 7.45, y: y0 + 1.2, w: W - 8.1, h: 0.5,
    fontFace: FONT_B, fontSize: 13, color: C.inkMute, margin: 0,
  });
  s.addText("Za chwilę: kanały, KPI, polskie dane i przykłady firm, które stosują RACE w praktyce.", {
    x: 7.45, y: y0 + 1.8, w: W - 8.1, h: 1.2,
    fontFace: FONT_B, fontSize: 14, color: C.ink, valign: "top", margin: 0,
  });

  // Callback
  s.addText("Pamiętacie kolumnę Taktyki z SOSTAC (slajd 13)? Tu właśnie RACE wchodzi do gry.", {
    x: 0.6, y: H - 1.1, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, fontSize: 14, italic: true, color: C.inkMute, align: "center",
  });
});

// =====================================================================
// Slide 25 (3/16): RACE — Cykl, Nie Lejek
// =====================================================================
n++;
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addText("LECTURE BLOCK 2 · RACE", {
    x: 0.6, y: 0.35, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.teal, margin: 0,
  });
  s.addText("RACE — to cykl, nie lejek", {
    x: 0.6, y: 0.65, w: W - 1.2, h: 0.85,
    fontFace: FONT_H, fontSize: 30, bold: true, color: C.ink, margin: 0,
  });
  L.drawRACECycle(s, pres);
  // Caption below circle, pushed safely below bottom box
  s.addText("Zaangażowani klienci = nowy Zasięg. Strzałka z Engage wraca do Reach — to nie lejek, to pętla wzrostu.", {
    x: 0.6, y: H - 1.0, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, fontSize: 14, italic: true, color: C.inkMute, align: "center",
  });
  L.footerBrand(s);
  L.slideNum(s, n, TOTAL);
  L.addNotes(s, {
    time: "11:18 · Slajd 25 / 85",
    say: "Pierwsza i najważniejsza rzecz: RACE to nie lejek. Tradycyjny lejek jest liniowy i jednostronny — klient przechodzi przez świadomość, zainteresowanie, zakup i znika. RACE zakłada coś innego: etap Zaangażowanie nie kończy cyklu — on go zasila. Zaangażowani, lojalni klienci stają się ambasadorami marki, którzy organicznie rozszerzają etap Zasięg. Polecają, dzielą się treściami, piszą recenzje. To fundamentalna różnica: zamiast 'sprzedaj i zapomnij', RACE pyta 'jak zbudować relację, która sama generuje nowych klientów?' Zapamiętajcie kolory: Zasięg niebieski, Aktywacja zielona, Konwersja pomarańczowa, Zaangażowanie fioletowe — pojawią się przez resztę prezentacji i w Canva.",
    doIt: "Odsłaniaj etapy kolejno — Zasięg, Aktywacja, Konwersja, Zaangażowanie. Ostatnim elementem odsłoń strzałkę powrotną. Zatrzymaj się 5 sekund bez mówienia.",
    watch: "Czy uczestnicy reagują zaskoczeniem na strzałkę powrotną? Jeśli ktoś mówi 'to jak pętla lojalnościowa' — potwierdź: to temat slajdu 33 (Spotify Wrapped).",
  });
}

// =====================================================================
// Slide 26 (4/16): R — Zasięg (Reach)
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "R — REACH",
  eyebrowColor: C.reach,
  title: "Zasięg — jak budujemy widoczność marki",
  subtitle: "Praca, która dzieje się ZANIM klient trafi na waszą stronę",
  time: "11:23 · Slajd 26 / 85",
  say: "Pierwszy etap RACE to Zasięg. Odpowiada na pytanie: jak budujemy widoczność i świadomość, zanim klient nas w ogóle rozważy? Kanały: SEO, kampanie płatne w wyszukiwarce i social, działania PR, influencer marketing, partnerstwa. KPI na poziomie Zasięgu mierzą, czy w ogóle jesteśmy widoczni: ruch organiczny, impresje, share of voice, wzrost obserwujących. Dwie statystyki: ruch organiczny z wyszukiwania generuje 53% całego mierzalnego ruchu na stronach — więcej niż reklamy płatne, social i direct łącznie. W Polsce YouTube ma 24,4 mln miesięcznych użytkowników, TikTok 13,8 mln z 53-minutową sesją dzienną.",
  doIt: "Odsłoń najpierw kanały, potem KPI, na końcu pasek statystyk. Podkreśl kontrast: 53% organicznie vs reszta płatnie/społecznościowo.",
  watch: "Czy ktoś pyta o 'share of voice'? Wyjaśnij: procent wzmianek o marce w ogóle wzmianek o kategorii. Obserwuj reakcje na zasięg TikTok w Polsce.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  // Left: channels
  s.addText("KANAŁY", {
    x: 0.6, y: y0, w: 5.5, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.reach, margin: 0,
  });
  const channels = ["SEO", "PPC / Google Ads", "Social Media (organic)", "PR", "Influencer Marketing", "Partnerstwa"];
  channels.forEach((ch, i) => {
    const y = y0 + 0.5 + i * 0.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y + 0.05, w: 0.1, h: 0.3,
      fill: { color: C.reach }, line: { type: "none" },
    });
    s.addText(ch, {
      x: 0.85, y, w: 5, h: 0.4,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
  // Right: KPIs
  s.addText("KPI", {
    x: 7.0, y: y0, w: 5.6, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.reach, margin: 0,
  });
  const kpis = ["Ruch organiczny", "Impresje / Reach", "Share of Voice", "Wzrost obserwujących", "Pozycje słów kluczowych"];
  kpis.forEach((k, i) => {
    const y = y0 + 0.5 + i * 0.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.0, y: y + 0.05, w: 0.1, h: 0.3,
      fill: { color: C.reach }, line: { type: "none" },
    });
    s.addText(k, {
      x: 7.25, y, w: 5.3, h: 0.4,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
  // Stats bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.9,
    fill: { color: C.reach }, line: { type: "none" },
  });
  s.addText("53% ruchu = organiczny (BrightEdge)   ·   YouTube PL: 24,4 mln   ·   TikTok PL: 13,8 mln, 53 min/dzień", {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.9,
    fontFace: FONT_H, fontSize: 16, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("Źródła: BrightEdge Research · Gemius/PBI Mediapanel 2024", {
    x: 0.6, y: H - 0.65, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 27 (5/16): Zasięg — Porównanie Platform w Polsce
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "R — REACH · POLSKA",
  eyebrowColor: C.reach,
  title: "Porównanie platform — który kanał dla Zasięgu?",
  subtitle: "Zasięg ≠ zaangażowanie. Wybór kanału to decyzja strategiczna, nie default.",
  time: "11:27 · Slajd 27 / 85",
  say: "Przyjrzyjmy się polskiemu rynkowi. YouTube ma największy surowy zasięg — 24,4 mln miesięcznie. Facebook — porównywalny, ale ze starszą demografią i niższym organicznym zasięgiem marek. TikTok — 13,8 mln, ale najwyższy czas sesji: 53 min dziennie. Użytkownicy TikToka są głębiej zanurzeni w treściach niż na jakiejkolwiek innej platformie. LinkedIn: DataReportal podaje 8,2 mln, Gemius ~5 mln — podaję obie liczby, bo różnica metodologiczna sama w sobie jest informacją. Kluczowe pytanie: której platformy demografia najlepiej odpowiada waszej personie? 'Największy zasięg' i 'najlepszy zasięg dla mojej marki' to dwie różne rzeczy.",
  doIt: "Odsłoń tabelę kolumna po kolumnie. Zatrzymaj się przy TikToku i podkreśl 53 min. Następnie przy LinkedIn — obie liczby są wiarygodne, mierzą co innego.",
  watch: "Reakcje na czas sesji TikTok? Obserwuj dociekliwość przy LinkedIn — zachęć do sprawdzenia źródeł.",
}, n, TOTAL, (s, pres) => {
  L.drawTable(s, pres, {
    tableY: 2.1,
    tableH: 3.4,
    headers: ["Platforma", "Zasięg miesięczny PL", "Sesja / dzień", "Najmocniejsza rola"],
    colColors: [C.reach, C.reach, C.reach, C.reach],
    colWs: [3.0, 3.0, 2.5, 3.6],
    rows: [
      ["YouTube", "24,4 mln (75,6% reach reklamowy)", "~40 min", "Największy Reach — wideo długie + krótkie"],
      ["Facebook", "~19,1 mln", "~33 min", "Szeroki Reach, demografia 35+"],
      ["TikTok", "13,8 mln", "53 min ⚡", "Reach młody + najgłębsze zanurzenie"],
      ["Instagram", "~10,3 mln", "~32 min", "Wizualny brand building"],
      ["LinkedIn", "8,2 mln (DR) / ~5 mln (Gemius)", "—", "B2B / employer branding"],
    ],
    footerNote: "YouTube = największy zasięg  ·  TikTok = najwyższe zaangażowanie czasowe",
    source: "Źródło: Gemius/PBI Mediapanel 2024 · DataReportal Digital 2025 Poland",
  });
});

// =====================================================================
// Slide 28 (6/16): A — Aktywacja (Act)
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "A — ACT",
  eyebrowColor: C.act,
  title: "Aktywacja — co robi odwiedzający, zanim kupi?",
  subtitle: "Etap, który większość firm dramatycznie zaniedbuje",
  time: "11:31 · Slajd 28 / 85",
  say: "Drugi etap — Aktywacja. Pyta: co robi odwiedzający, zanim dokona zakupu? To etap między 'słyszałem o tej marce' a 'rozważam zakup' — dramatycznie zaniedbany przez większość firm, które skupiają się tylko na Zasięgu i Konwersji. Kanały: artykuły blogowe i treści edukacyjne, sekwencje emailowe, landing pages z konkretną obietnicą, lead magnety — darmowe e-booki, kalkulatory, narzędzia interaktywne. KPI mierzą głębokość interakcji, nie sam fakt wizyty. Statystyka niepokojąca: 93% marketerów potwierdza, że personalizacja poprawia konwersje. Ale tylko 13% stosuje zaawansowane techniki. Ogromna większość wie, co powinna robić, ale tego nie robi — przewaga konkurencyjna dla tych, którzy wdrożą.",
  doIt: "Odsłoń kanały, potem KPI, na końcu statystykę 93%/13%. Zatrzymaj się i zapytaj: 'Co się dzieje z tym 80% różnicy?'",
  watch: "Czy ktoś pyta o 'zaawansowaną personalizację'? Podaj przykład: nie 'Drogi Janie' ale rekomendacje na bazie historii + dynamiczna treść strony per lifecycle.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  s.addText("KANAŁY", {
    x: 0.6, y: y0, w: 5.5, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.act, margin: 0,
  });
  const channels = ["Content Marketing", "Email Nurture", "Landing Pages", "Lead magnety (e-book, kalkulator)", "Webinary", "Narzędzia interaktywne"];
  channels.forEach((ch, i) => {
    const y = y0 + 0.5 + i * 0.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y + 0.05, w: 0.1, h: 0.3,
      fill: { color: C.act }, line: { type: "none" },
    });
    s.addText(ch, {
      x: 0.85, y, w: 5, h: 0.4,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
  s.addText("KPI", {
    x: 7.0, y: y0, w: 5.6, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.act, margin: 0,
  });
  const kpis = ["Czas spędzony na stronie", "Strony na sesję", "CTR emaila", "Pobrania lead magnetu", "Zapisy na newsletter"];
  kpis.forEach((k, i) => {
    const y = y0 + 0.5 + i * 0.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.0, y: y + 0.05, w: 0.1, h: 0.3,
      fill: { color: C.act }, line: { type: "none" },
    });
    s.addText(k, {
      x: 7.25, y, w: 5.3, h: 0.4,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
  // Stat bar — personalization gap
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.9,
    fill: { color: C.act }, line: { type: "none" },
  });
  s.addText([
    { text: "93% ", options: { bold: true, fontSize: 24 } },
    { text: "marketerów mówi, że personalizacja działa  ·  ", options: { fontSize: 16 } },
    { text: "13% ", options: { bold: true, fontSize: 24 } },
    { text: "stosuje zaawansowaną personalizację", options: { fontSize: 16 } },
  ], {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.9,
    fontFace: FONT_H, color: C.white, align: "center", valign: "middle", margin: 0,
  });
  s.addText("Źródło: Litmus / HubSpot Email Marketing Stats 2024", {
    x: 0.6, y: H - 0.65, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 29 (7/16): Aktywacja — IKEA AR
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "A — ACT · CASE STUDY",
  eyebrowColor: C.act,
  title: "IKEA: AR usuwa barierę Aktywacji",
  subtitle: "Rozwiązanie nie było promocją. Było produktem.",
  time: "11:35 · Slajd 29 / 85",
  say: "IKEA to największy sprzedawca mebli na świecie — 504 sklepy i 4,6 miliarda wizyt na stronie rocznie. Ogromny Zasięg. Problem: te miliardy wizyt nie przekładały się na zakupy online, bo klienci mieli fundamentalny problem na etapie Aktywacji — nie potrafili sobie wyobrazić mebli w swoim domu. To nie jest problem cenowy ani logistyczny — to problem wizualizacji i pewności decyzji. Odpowiedź: IKEA Place (2017) i IKEA Kreativ (2022) — AR pozwala skanować pokój telefonem i wirtualnie ustawiać meble przed zakupem. Nie obniżono cen. Nie zwiększono zasięgu. Usunięto tarcie na etapie interakcji, które blokowało decyzję. Udział e-commerce: ~7% (szacunek — IKEA nie publikuje precyzyjnych danych).",
  doIt: "Odsłoń problem (lewa), potem rozwiązanie (prawa), na końcu insight. Podkreśl: rozwiązanie nie było promocją — było produktem.",
  watch: "Czy uczestnicy używają aplikacji IKEA? Zachęć do podzielenia się doświadczeniem. Pytanie o dlaczego e-commerce tak małe mimo zasięgu — ilustracja bariery Aktywacji.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Left — Problem
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.8, h: 3.2,
    fill: { color: "FFF0E4" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 0.15, h: 3.2,
    fill: { color: C.red }, line: { type: "none" },
  });
  s.addText("PROBLEM AKTYWACJI", {
    x: 0.85, y: y0 + 0.2, w: 5.3, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.red, margin: 0,
  });
  s.addText("4,6 mld wizyt rocznie. Ale trudno wyobrazić sobie meble we własnym domu — bez tego nie ma decyzji zakupowej.", {
    x: 0.85, y: y0 + 0.7, w: 5.3, h: 2.2,
    fontFace: FONT_B, fontSize: 17, color: C.ink, valign: "top", margin: 0,
  });
  // Right — Solution
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.9, y: y0, w: 5.8, h: 3.2,
    fill: { color: "E8F5EA" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.9, y: y0, w: 0.15, h: 3.2,
    fill: { color: C.act }, line: { type: "none" },
  });
  s.addText("ROZWIĄZANIE — AR", {
    x: 7.15, y: y0 + 0.2, w: 5.3, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.act, margin: 0,
  });
  s.addText("IKEA Place (2017) + IKEA Kreativ (2022). Skanujesz pokój telefonem — wirtualnie ustawiasz meble w prawdziwej przestrzeni, przed zakupem.", {
    x: 7.15, y: y0 + 0.7, w: 5.3, h: 2.2,
    fontFace: FONT_B, fontSize: 17, color: C.ink, valign: "top", margin: 0,
  });
  // Insight banner
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.8,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText('"IKEA usunęła barierę Aktywacji cyfrowo — nie sprzedażą ani rabatem."', {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.8,
    fontFace: FONT_H, fontSize: 18, italic: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("IKEA: 504 sklepy · €45,1B sprzedaży 2024 · e-commerce ~7% (szacunkowe)  ·  Źródło: IKEA / FourWeekMBA", {
    x: 0.6, y: H - 0.65, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 30 (8/16): C — Konwersja (Convert)
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "C — CONVERT",
  eyebrowColor: C.convert,
  title: "Konwersja — gdy zainteresowanie staje się transakcją",
  subtitle: "W Polsce: mobile-first, BLIK, Paczkomat — nie dodatki, fundamenty",
  time: "11:40 · Slajd 30 / 85",
  say: "Trzeci etap — Konwersja. Moment, w którym zainteresowanie zamienia się w transakcję. Większość firm tu skupia najwięcej uwagi — bo wyniki są tu najłatwiejsze do zmierzenia. Ale bez Zasięgu i Aktywacji nie ma kogo konwertować. Kanały: optymalizacja strony zakupowej, retargeting, bramki płatności, opcje dostawy, promocje. W Polsce trzy czynniki mają szczególne znaczenie. Mobile: 77% wizyt w e-commerce to urządzenia mobilne — jeśli sklep nie jest zoptymalizowany, tracicie większość konwersji. BLIK: 68% kupujących online, +5pp r/r — to oczekiwany standard, nie dodatek. Paczkomaty: 81% woli odbiór przez paczkomat, 84% deklaruje większą skłonność do zakupu jeśli dostępny. To nie są dodatki — to fundamenty doświadczenia.",
  doIt: "Odsłoń kanały, KPI, pasek trzech polskich statystyk. Każdą podkreśl osobno.",
  watch: "Ktoś z B2B czuje się wykluczony? Zasygnalizuj: RACE działa w B2B z dłuższym cyklem i wieloma decydentami.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  s.addText("KANAŁY", {
    x: 0.6, y: y0, w: 5.5, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.convert, margin: 0,
  });
  const channels = ["CRO — optymalizacja strony", "Retargeting", "Bramki płatności (BLIK!)", "Opcje dostawy (Paczkomat!)", "Promocje / kody rabatowe"];
  channels.forEach((ch, i) => {
    const y = y0 + 0.5 + i * 0.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y + 0.05, w: 0.1, h: 0.3,
      fill: { color: C.convert }, line: { type: "none" },
    });
    s.addText(ch, {
      x: 0.85, y, w: 5, h: 0.4,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
  s.addText("KPI", {
    x: 7.0, y: y0, w: 5.6, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.convert, margin: 0,
  });
  const kpis = ["Współczynnik konwersji", "Średnia wartość koszyka (AOV)", "Koszt pozyskania klienta (CPA)", "Porzucone koszyki", "ROAS"];
  kpis.forEach((k, i) => {
    const y = y0 + 0.5 + i * 0.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.0, y: y + 0.05, w: 0.1, h: 0.3,
      fill: { color: C.convert }, line: { type: "none" },
    });
    s.addText(k, {
      x: 7.25, y, w: 5.3, h: 0.4,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
  // Stats — three Polish numbers
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.9,
    fill: { color: C.convert }, line: { type: "none" },
  });
  const stats = ["77% wizyt = mobile", "68% BLIK w e-commerce (+5pp r/r)", "81% Polaków woli Paczkomat"];
  stats.forEach((st, i) => {
    const sw = (W - 1.2) / 3;
    s.addText(st, {
      x: 0.6 + i * sw, y: H - 1.6, w: sw, h: 0.9,
      fontFace: FONT_H, fontSize: 15, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
  });
  s.addText("Źródła: Shopify/Statista 2025 · Gemius/PBI/IAB Polska E-commerce 2024", {
    x: 0.6, y: H - 0.65, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 31 (9/16): Konwersja — Zalando
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "C — CONVERT · CASE STUDY",
  eyebrowColor: C.convert,
  title: "Zalando: darmowe zwroty jako architektura konwersji",
  subtitle: "Decyzja produktowa, nie promocja. Od 2008 roku.",
  time: "11:44 · Slajd 31 / 85",
  say: "Zalando — 10,6 miliarda euro przychodów w 2024, 51 mln aktywnych użytkowników w 25 krajach — zbudowało pozycję na jednej decyzji: darmowe zwroty od pierwszego dnia, od 2008, zanim stało się to standardem. Skąd? Bo bariera konwersji w modzie online jest fundamentalna: klient nie może przymierzyć ubrania. Ryzyko złego rozmiaru blokuje decyzję. Zalando skalkulowało: wysoki wskaźnik zwrotów — 30–50% w europejskiej modzie — to nie koszt do minimalizowania, to koszt pozyskania klienta do zaakceptowania. Wolę płacić za zwrot niż tracić sprzedaż. To nie promocja 'darmowe zwroty przez miesiąc'. To decyzja architektury produktu. Zalando nie obniżyło cen. Usunęło ryzyko. Różnica między myśleniem taktycznym a myśleniem na poziomie etapu RACE.",
  doIt: "Odsłoń ikonę zwrotu, potem trzy bloki, na końcu insight. Zatrzymaj się przy 'infrastruktura konwersji = inwestycja strategiczna' — powtórz głośno dwa razy.",
  watch: "Ktoś pyta o rentowność modelu zwrotów? Odpowiedź: Zalando traktuje wskaźnik konwersji per użytkownik jako główny KPI, nie koszt zwrotu.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Problem block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: W - 1.2, h: 0.9,
    fill: { color: "FFF0E4" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 0.15, h: 0.9,
    fill: { color: C.red }, line: { type: "none" },
  });
  s.addText("PROBLEM  ·  ", {
    x: 0.85, y: y0, w: 2.2, h: 0.9,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.red,
    valign: "middle", margin: 0,
  });
  s.addText("Klient w modzie online nie wie, czy rozmiar pasuje. Ryzyko zwrotu blokuje decyzję zakupową.", {
    x: 2.2, y: y0, w: W - 2.8, h: 0.9,
    fontFace: FONT_B, fontSize: 16, color: C.ink, valign: "middle", margin: 0,
  });
  // Solution block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0 + 1.1, w: W - 1.2, h: 0.9,
    fill: { color: "E8F5EA" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0 + 1.1, w: 0.15, h: 0.9,
    fill: { color: C.act }, line: { type: "none" },
  });
  s.addText("ROZWIĄZANIE  ·  ", {
    x: 0.85, y: y0 + 1.1, w: 2.7, h: 0.9,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.act,
    valign: "middle", margin: 0,
  });
  s.addText("Darmowe zwroty od 2008 — eliminują ryzyko. Konwersja rośnie.", {
    x: 2.7, y: y0 + 1.1, w: W - 3.3, h: 0.9,
    fontFace: FONT_B, fontSize: 16, color: C.ink, valign: "middle", margin: 0,
  });
  // Insight
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0 + 2.3, w: W - 1.2, h: 1.1,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText('"Infrastruktura konwersji = inwestycja strategiczna, nie koszt."', {
    x: 0.6, y: y0 + 2.3, w: W - 1.2, h: 1.1,
    fontFace: FONT_H, fontSize: 22, italic: true, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  // Stats
  s.addText("Zalando: €10,6B przychodów (2024) · 51M+ aktywnych użytkowników · 25 rynków europejskich", {
    x: 0.6, y: H - 1.0, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, color: C.ink, align: "center",
  });
  s.addText("Źródło: Zalando / FourWeekMBA", {
    x: 0.6, y: H - 0.65, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 32 (10/16): E — Zaangażowanie (Engage)
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "E — ENGAGE",
  eyebrowColor: C.engage,
  title: "Zaangażowanie — co dzieje się PO zakupie?",
  subtitle: "Większość firm traktuje Engage jak 'miły dodatek'. To jeden z najkosztowniejszych błędów.",
  time: "11:48 · Slajd 32 / 85",
  say: "Czwarty etap — Zaangażowanie. Odpowiada: co robimy, gdy klient już kupił? Jak budujemy relację, która sprawia, że kupuje ponownie, poleca znajomym, zostaje na długo? KPI: Customer Lifetime Value, NPS, wskaźnik powtórnych zakupów, churn rate. Kanały: email automatyczny, programy lojalnościowe, budowanie społeczności, systemy feedbacku. Email zasługuje na wyróżnienie: Litmus State of Email 2025 — ROI do 50 dolarów na każdego zainwestowanego dolara; 30% liderów marketingu raportuje zwrot 36–50 $/$1. Najwyższy ROI wśród wszystkich kanałów cyfrowych. I wróćmy do strzałki ze slajdu 25: Zaangażowanie zamyka pętlę RACE. Lojalni klienci organicznie rozszerzają Zasięg — polecają, dzielą się, recenzują. RACE jako cykl, nie lejek.",
  doIt: "Odsłoń kanały, KPI, pasek ROI + strzałka E → R. Przy strzałce odwołaj się do slajdu 25.",
  watch: "Reakcje na ROI emaila ($36–$50/$1)? Podkreśl: niedoceniany zasób. Ktoś komentuje CLV? Zachęć do rozwinięcia.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  s.addText("KANAŁY", {
    x: 0.6, y: y0, w: 5.5, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.engage, margin: 0,
  });
  const channels = ["Email Automation (retencja)", "Program lojalnościowy", "Budowanie społeczności", "Treści ekskluzywne dla klientów", "NPS / feedback loop"];
  channels.forEach((ch, i) => {
    const y = y0 + 0.5 + i * 0.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y + 0.05, w: 0.1, h: 0.3,
      fill: { color: C.engage }, line: { type: "none" },
    });
    s.addText(ch, {
      x: 0.85, y, w: 5, h: 0.4,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
  s.addText("KPI", {
    x: 7.0, y: y0, w: 5.6, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.engage, margin: 0,
  });
  const kpis = ["Customer Lifetime Value (CLV)", "Net Promoter Score (NPS)", "Wskaźnik powtórnych zakupów", "Churn rate", "Open rate + CTR retencyjnych"];
  kpis.forEach((k, i) => {
    const y = y0 + 0.5 + i * 0.45;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.0, y: y + 0.05, w: 0.1, h: 0.3,
      fill: { color: C.engage }, line: { type: "none" },
    });
    s.addText(k, {
      x: 7.25, y, w: 5.3, h: 0.4,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
  // Bottom bar with ROI + arrow
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.9,
    fill: { color: C.engage }, line: { type: "none" },
  });
  s.addText([
    { text: "Email ROI: $36–$50 zwrotu na każdy $1  ", options: { bold: true, fontSize: 17 } },
    { text: "→  ", options: { fontSize: 20, color: "FFD4A8" } },
    { text: "Zaangażowanie tworzy nowy Zasięg (pętla RACE)", options: { italic: true, fontSize: 15 } },
  ], {
    x: 0.6, y: H - 1.6, w: W - 1.2, h: 0.9,
    fontFace: FONT_H, color: C.white, align: "center", valign: "middle", margin: 0,
  });
  s.addText("Źródło: Litmus State of Email 2025", {
    x: 0.6, y: H - 0.65, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 33 (11/16): Zaangażowanie — Spotify Wrapped
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "E — ENGAGE · CASE STUDY",
  eyebrowColor: C.engage,
  title: "Spotify Wrapped — Engage tworzy Zasięg",
  subtitle: "12 miesięcy słuchania → 1 wydarzenie tożsamościowe → 1,2M+ postów",
  time: "11:52 · Slajd 33 / 85",
  say: "Spotify Wrapped — etap Zaangażowanie w absolutnie najczystszej formie. I najelegantszy przykład, jak Zaangażowanie przekształca się w nowy Zasięg. Spotify działa na rynku, gdzie wszystkie platformy oferują ten sam katalog. Apple Music, Tidal, YouTube Music — ta sama muzyka, podobne ceny. Jak Spotify buduje lojalność? Przez dane. Każdy użytkownik generuje przez rok ogromną ilość danych o preferencjach. Spotify przekształca je w spersonalizowaną narrację: 'Twoje top 5 artystów, twój najdłuższy dzień słuchania.' To nie statystyka — to lustro tożsamości. I użytkownicy to dzielą. Grudzień 2019: ponad 1,2 mln postów na samym Twitterze — organicznie, bez płatnej dystrybucji. Żaden budżet nie kupiłby takiego zasięgu. Wrapped nie jest kampanią wizerunkową — jest architekturą pętli wzrostu.",
  doIt: "Odsłoń grafikę Wrapped, bloki po prawej, strzałkę Engage → Reach. Odwołaj się do slajdów 25 i 32 — zamknij pętlę wizualnie.",
  watch: "Kto udostępniał Wrapped? Ręce w górę = żywy dowód mechanizmu.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Left — mechanic
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.8, h: 3.0,
    fill: { color: "F3E8FA" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 0.15, h: 3.0,
    fill: { color: C.engage }, line: { type: "none" },
  });
  s.addText("MECHANIKA", {
    x: 0.85, y: y0 + 0.2, w: 5.3, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.engage, margin: 0,
  });
  s.addText("12 miesięcy słuchania → 1 wydarzenie tożsamościowe.", {
    x: 0.85, y: y0 + 0.6, w: 5.3, h: 0.7,
    fontFace: FONT_H, fontSize: 20, bold: true, color: C.ink, valign: "top", margin: 0,
  });
  s.addText("Personalizacja danych słuchacza jako treść do publicznego udostępnienia. To nie statystyka — to lustro tożsamości.", {
    x: 0.85, y: y0 + 1.5, w: 5.3, h: 1.3,
    fontFace: FONT_B, fontSize: 14, color: C.inkMute, valign: "top", margin: 0,
  });
  // Right — result
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.9, y: y0, w: 5.8, h: 3.0,
    fill: { color: C.engage }, line: { type: "none" },
  });
  s.addText("EFEKT  ·  grudzień 2019", {
    x: 7.15, y: y0 + 0.2, w: 5.3, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: "F3E8FA", margin: 0,
  });
  s.addText("1,2 mln+", {
    x: 7.15, y: y0 + 0.7, w: 5.3, h: 1.2,
    fontFace: FONT_H, fontSize: 70, bold: true, color: C.white, margin: 0,
  });
  s.addText("postów na Twitterze — organicznie, bez płatnej dystrybucji", {
    x: 7.15, y: y0 + 1.9, w: 5.3, h: 0.9,
    fontFace: FONT_B, fontSize: 14, color: "F3E8FA", valign: "top", margin: 0,
  });
  // Arrow + loop
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.5, w: W - 1.2, h: 0.7,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("Engage → Reach: lojalni klienci = nowy zasięg. RACE w pełnym cyklu.", {
    x: 0.6, y: H - 1.5, w: W - 1.2, h: 0.7,
    fontFace: FONT_H, fontSize: 16, bold: true, italic: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("Spotify: 713M MAU · 281M płatnych subskrybentów (Q3 2025)  ·  Źródło: Backlinko Spotify Statistics 2025", {
    x: 0.6, y: H - 0.65, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 34 (12/16): Integracja SOSTAC i RACE
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "SOSTAC × RACE",
  title: "Jak SOSTAC i RACE się łączą",
  subtitle: '"SOSTAC to framework planowania. RACE to mapa egzekucji w ramach tego planu." — Dave Chaffey',
  time: "11:56 · Slajd 34 / 85",
  say: "Najważniejszy slajd łączący oba frameworki. SOSTAC to framework planowania — 'jak zbudować plan?'. RACE to mapa egzekucji — 'jak realizować plan na ścieżce klienta?'. Nie można robić SOSTAC porządnie bez RACE — bo kolumna Taktyki staje się losową listą kanałów. I nie można robić RACE bez SOSTAC — bo etapy stają się aktywnościami bez kierunku. Tabela pokazuje jak każdy z sześciu etapów SOSTAC wprost przekłada się na RACE: Sytuacja = audyt wydajności na wszystkich 4 etapach RACE. Cele = co najmniej 1 KPI na etap. Strategia = które etapy priorytetyzujemy. Taktyki = kanały przypisane do etapów. Działania = budżety i właściciele per etap. Kontrola = dashboard per etap. Pełna integracja — dokładnie to, co budujecie w Ćwiczeniu 2 za kilka minut.",
  doIt: "Odsłoń tabelę wierszami — po jednym etapie SOSTAC naraz. Podkreśl wiersz 'Taktyki → etapy RACE' — bezpośredni powrót do slajdu 13.",
  watch: "Test: 'W której kolumnie SOSTAC pojawia się RACE po raz pierwszy?' Prawidłowa: Sytuacja i Cele. Ktoś robi notatki? Materiał trafia.",
}, n, TOTAL, (s, pres) => {
  L.drawTable(s, pres, {
    tableY: 2.1,
    tableH: 4.3,
    headers: ["Etap SOSTAC", "Implikacja dla RACE"],
    colColors: [C.navy, C.teal],
    colWs: [3.2, W - 1.2 - 3.2],
    rows: [
      ["Sytuacja (S)", "Audyt bieżącej wydajności na każdym z 4 etapów RACE — gdzie dziś mamy największe luki?"],
      ["Cele (O)", "Wyznacz ≥1 KPI na każdy etap RACE — nie tylko cel sprzedażowy"],
      ["Strategia (S)", "Zdecyduj, które etapy RACE priorytetyzujesz i jak się różnicujesz"],
      ["Taktyki (T)", "Przypisz konkretne kanały i treści do każdego etapu RACE"],
      ["Działania (A)", "Wyznacz właścicieli i budżety dla taktyk każdego etapu RACE"],
      ["Kontrola (C)", "Zbuduj dashboard śledzący KPI dla każdego etapu RACE"],
    ],
    source: "Źródło: Dave Chaffey / Smart Insights",
  });
});

// =====================================================================
// Slide 35 (13/16): Dashboard KPI RACE — szablon referencyjny
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "DASHBOARD REFERENCYJNY",
  title: "RACE KPI Dashboard — szablon do zabrania",
  subtitle: "Jeden KPI na etap, mierzony razem — nie osobno. Zróbcie zdjęcie lub zaznaczcie.",
  time: "12:00 · Slajd 35 / 85",
  say: "Ten slajd to szablon do zabrania — po to tu jest. Podsumowuje dla każdego z czterech etapów RACE przykładowe KPI i narzędzia pomiaru. To nie jest wyczerpująca lista — to punkt wyjścia. Każda organizacja będzie miała swój zestaw KPI zależny od celów i modelu biznesowego. Ale każdy dashboard, który nie zawiera co najmniej jednego KPI per etap RACE, jest z definicji niekompletny. Zasięg bez Aktywacji? Mierzysz widoczność, ale nie wiesz, czy ktoś reaguje. Konwersja bez Zaangażowania? Mierzysz transakcje, ale nie wiesz, czy klient wraca. Idealne minimum: 1 KPI na etap, mierzony regularnie, raportowany razem.",
  doIt: "Wyświetl tabelę w całości. Powiedz wyraźnie: 'Ten slajd będzie dostępny — zróbcie zdjęcie.' Przejdź przez kolumny wskaźnikiem.",
  watch: "Uczestnicy robią zdjęcia? Dobry znak. Ktoś pyta o narzędzia dla małej firmy bez CRM — odpowiedź: GA4 + Google Sheets wystarczą na start.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const colW = (W - 1.2) / 4;
  const stages = [
    {
      label: "Zasięg (Reach)",
      color: C.reach,
      kpis: ["Ruch organiczny", "Impresje", "Share of Voice", "Wzrost obserwujących"],
      tools: "Google Analytics · SEMrush",
    },
    {
      label: "Aktywacja (Act)",
      color: C.act,
      kpis: ["Czas na stronie", "Strony / sesja", "CTR emaila", "Pobrania lead magnetu"],
      tools: "GA4 · platforma email",
    },
    {
      label: "Konwersja (Convert)",
      color: C.convert,
      kpis: ["Współczynnik konwersji", "AOV", "CPA", "Porzucone koszyki"],
      tools: "GA4 · platforma e-commerce",
    },
    {
      label: "Zaangażowanie (Engage)",
      color: C.engage,
      kpis: ["CLV", "NPS", "Wskaźnik powtórnych zakupów", "Churn rate"],
      tools: "CRM · NPS tool",
    },
  ];
  stages.forEach((st, i) => {
    const x = 0.6 + i * colW;
    // Header
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: colW - 0.1, h: 0.7,
      fill: { color: st.color }, line: { type: "none" },
    });
    s.addText(st.label, {
      x: x + 0.15, y: y0, w: colW - 0.4, h: 0.7,
      fontFace: FONT_H, fontSize: 15, bold: true, color: C.white,
      valign: "middle", margin: 0,
    });
    // KPI list
    st.kpis.forEach((k, ki) => {
      const ky = y0 + 0.85 + ki * 0.55;
      s.addShape(pres.shapes.RECTANGLE, {
        x, y: ky, w: colW - 0.1, h: 0.45,
        fill: { color: C.offWhite }, line: { type: "none" },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x, y: ky, w: 0.08, h: 0.45,
        fill: { color: st.color }, line: { type: "none" },
      });
      s.addText(k, {
        x: x + 0.2, y: ky, w: colW - 0.3, h: 0.45,
        fontFace: FONT_B, fontSize: 13, color: C.ink, valign: "middle", margin: 0,
      });
    });
    // Tools
    s.addText("NARZĘDZIE", {
      x, y: y0 + 3.3, w: colW - 0.1, h: 0.25,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: st.color, margin: 0,
    });
    s.addText(st.tools, {
      x, y: y0 + 3.55, w: colW - 0.1, h: 0.5,
      fontFace: FONT_B, fontSize: 12, italic: true, color: C.inkMute, valign: "top", margin: 0,
    });
  });
  // Footer takeaway
  s.addText("Zabierz ten slajd — to punkt wyjścia do dashboardu KPI dla waszej marki z Ćwiczenia 2.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.teal, align: "center",
  });
});

// =====================================================================
// Slide 36 (14/16): Przejście do Warsztatu 2
// =====================================================================
n++;
L.makeTitleSlide(pres, {
  eyebrow: "WARSZTAT 2 · 40 MIN",
  title: "Czas na ćwiczenia",
  subtitle: "Mapa Podróży Klienta RACE — dla waszej marki",
  accent: C.amber,
  meta: "Ta sama marka, co w Warsztacie 1 · Kontynuacja przez cały dzień",
  time: "12:03 · Slajd 36 / 85",
  say: "Mamy za sobą cały framework RACE. Teraz czas, żeby go zastosować do marki, którą wybraliście w Ćwiczeniu 1. Przez czterdzieści minut zmapujecie ścieżkę klienta przez wszystkie cztery etapy RACE — z kanałami, emocjami klienta i punktami tarcia. Ważne: kontynuujecie pracę z tą samą marką. To element ciągłości — na koniec każda grupa będzie miała prawie kompletny plan marketingowy.",
  doIt: "Wyświetl slajd. Daj grupom 20 sekund ciszy na przygotowanie — otwarcie Canva. Następnie przejdź do slajdu 37.",
  watch: "Czy grupy pamiętają swoją wybraną markę? Jeśli skład się zmienił od Warsztatu 1, upewnij się, że nowi znają markę.",
}, n, TOTAL);

// =====================================================================
// Slide 37 (15/16): Warsztat 2 — Instrukcja
// =====================================================================
n++;
{
  const s = pres.addSlide();
  L.drawWorkshopInstruction(s, pres, {
    eyebrow: "WARSZTAT 2 · 40 MIN · CANVA WHITEBOARD",
    title: "Mapa Podróży Klienta RACE",
    blocks: [
      { label: "ZADANIE", accent: C.reach, content: "Zmapujcie ścieżkę klienta dla waszej marki przez 4 etapy RACE (Reach → Act → Convert → Engage) — w każdym: kanały, emocje klienta, punkty tarcia." },
      { label: "CZAS / OUTPUT", accent: C.act, content: "40 minut · do 12:30. Wynik: 4 swim lanes × 3 pod-strefy (Kanały · Emocje · Tarcie) + 1 KPI na etap." },
      { label: "NARZĘDZIE", accent: C.convert, content: "Canva Whiteboard — poziome swim lanes w kolorach RACE. Wejdź przez QR kod." },
      { label: "PERSONA", accent: C.engage, content: "Zdefiniujcie personę ZANIM zaczniecie: imię, wiek, miasto, kontekst. Bez tego mapa jest zbyt ogólna, żeby być użyteczna." },
    ],
    warning: "Kontynuujcie pracę z marką wybraną w Ćwiczeniu 1 — ta sama marka przez cały dzień.",
  });
  // Manual slide number for dark slide
  s.addText(`${n} / ${TOTAL}`, {
    x: W - 1.4, y: H - 0.45, w: 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 10, color: C.inkFaint, align: "right",
  });
  L.addNotes(s, {
    time: "12:05 · Slajd 37 / 85",
    setup: "Potwierdź aktywne swim lanes na tablicy Canva z etykietami Zasięg/Aktywacja/Konwersja/Zaangażowanie w kolorach RACE. Każda grupa ma własną strefę. QR kod czytelny z tyłu. Przykład Żappka na slajdzie 38, nie na tablicy grup. Timer 40 min.",
    say: "Instrukcja do Warsztatu drugiego. Wasze zadanie: zmapujcie ścieżkę klienta dla waszej marki przez cztery etapy RACE. Dla każdego etapu: kanały (przez które klient się styka z marką), emocje klienta (co czuje, czego pragnie, czego się boi) i punkty tarcia (co może go zatrzymać). Jeśli zostanie czas — dodajcie 1 KPI per etap. 40 minut, do 12:30. Pracujcie w swoich grupowych strefach — wejdźcie przez QR kod. Tablica ma poziome swim lanes w kolorach RACE. Kontynuujecie pracę z tą samą marką z Ćwiczenia 1.",
    doIt: "Wyświetl slajd. QR kod, potem timer. Chodź między grupami z promptami: Zasięg: 'Jak persona pierwszy raz usłyszała o tej marce?'; Aktywacja: 'Co robiła między odkryciem a zakupem?'; Konwersja: 'Co ją przekonało, co mogło ją zatrzymać?'; Zaangażowanie: 'Co zrobiła firma po zakupie?'",
    watch: "Grupy wypełniają wszystkie 3 pod-strefy w każdym swim lane? Częsty błąd: skupiają się tylko na kanałach. Interwencja: 'Co czuje klient w momencie Zasięgu?' Zwróć uwagę na Zaangażowanie — najczęściej pomijany etap.",
    debrief: "Który etap RACE jest najsłabszy w waszej marce? Jakie macie dowody? Gdzie największe tarcie — cyfrowe czy fizyczne? Jeśli tylko 1 etap do inwestycji, który dałby najwyższy ROI?",
    extension: "B2B: jak zmieniłaby się mapa, gdyby klientem był zespół zakupowy (procurement + CFO + end-user) zamiast 1 osoby?",
  });
}

// =====================================================================
// Slide 38 (16/16): Warsztat 2 — Przykład Żappka RACE Journey
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "WARSZTAT 2 · PRZYKŁAD ROBOCZY",
  title: "Żappka — mapa RACE dla persony Ani",
  subtitle: "Persona: Ania, 32 lata, Warszawa, zakupy w Żabce ~4x/tydzień. Wzór formatu dla waszej pracy.",
  time: "12:10 · Slajd 38 / 85",
  setup: "Potwierdź, że timer 40 min jest uruchomiony. Przykład Żappki tylko na slajdzie, nie nadpisuje stref grup.",
  say: "Przykład dla Żappki i persony Ani — 32-latki z Warszawy. Każdy swim lane ma trzy warstwy: kanały (skąd klient wie/gdzie działa), emocje (co czuje) i punkty tarcia (co może zatrzymać). Uwaga: jedna karteczka per pod-strefa — wasz cel to 3–5 per pod-strefa. Jedna to orientacja, nie granica. Startujcie — 40 minut.",
  doIt: "Wyświetl. Wskaż po jednej karteczce w każdym swim lane, czytaj + komentuj format. Podkreśl trzy warstwy. Sygnał do startu.",
  watch: "Grupy zaczynają od persony? Jeśli nie, zatrzymaj: 'Kogo mapujecie? 2 zdania.' Monitoruj równomierność — Engage często pomijany.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  const boardH = H - y0 - 1.2;
  const stages = [
    {
      l: "Zasięg",
      c: C.reach,
      ch: "TikTok reklamy Żappki, witryny Żabki przy przystankach, polecenie znajomego",
      em: "Ciekawość — 'czy to naprawdę tańsze?'",
      fr: "Nie znam aplikacji — po co kolejna?",
    },
    {
      l: "Aktywacja",
      c: C.act,
      ch: "Strona www Żappka, Instagram Żabki, powiadomienia push po instalacji",
      em: "Zainteresowanie — 'oferty wyglądają OK'",
      fr: "Nie lubię dawać dostępu do lokalizacji",
    },
    {
      l: "Konwersja",
      c: C.convert,
      ch: "Aplikacja przy kasie (kod QR), płatność BLIK",
      em: "Satysfakcja — 'ubiłam dobry deal'",
      fr: "Kolejka w sklepie gdy szukam kodu",
    },
    {
      l: "Zaangażowanie",
      c: C.engage,
      ch: "Spersonalizowane push: 'Twój ulubiony jogurt -30%'",
      em: "Lojalność — 'aplikacja zna moje nawyki'",
      fr: "Za dużo powiadomień → wyłączam je",
    },
  ];
  const laneH = boardH / stages.length - 0.08;
  stages.forEach((st, i) => {
    const ly = y0 + i * (laneH + 0.08);
    // Stage header
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: ly, w: 2.0, h: laneH,
      fill: { color: st.c }, line: { type: "none" },
    });
    s.addText(st.l, {
      x: 0.6, y: ly, w: 2.0, h: laneH,
      fontFace: FONT_H, fontSize: 14, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    // Three sub-zones
    const zones = [
      { label: "KANAŁY", txt: st.ch },
      { label: "EMOCJE", txt: st.em },
      { label: "TARCIE", txt: st.fr },
    ];
    const zoneW = (W - 1.2 - 2.1) / 3;
    zones.forEach((z, zi) => {
      const zx = 0.6 + 2.1 + zi * (zoneW + 0.05);
      s.addShape(pres.shapes.RECTANGLE, {
        x: zx, y: ly, w: zoneW, h: laneH,
        fill: { color: C.offWhite }, line: { type: "none" },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: zx, y: ly, w: 0.06, h: laneH,
        fill: { color: st.c }, line: { type: "none" },
      });
      s.addText(z.label, {
        x: zx + 0.15, y: ly + 0.08, w: zoneW - 0.2, h: 0.25,
        fontFace: FONT_B, fontSize: 9, bold: true, charSpacing: 2, color: st.c, margin: 0,
      });
      s.addText(z.txt, {
        x: zx + 0.15, y: ly + 0.32, w: zoneW - 0.2, h: laneH - 0.4,
        fontFace: FONT_B, fontSize: 11, color: C.ink, valign: "top", margin: 0,
      });
    });
  });
  s.addText("Wasza plansza: ta sama struktura, wasza marka, wasza persona — startujcie.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, italic: true, bold: true, color: C.teal, align: "center",
  });
});

pres.writeFile({ fileName: "/home/claude/decks/03-race.pptx" })
  .then((fn) => console.log("Wrote:", fn));
