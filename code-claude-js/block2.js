// Block 2: SOSTAC + Workshop 1 — Slides 7-22 (09:45-11:00)
const pptxgen = require("pptxgenjs");
const L = require("./build");
const { C, W, H, FONT_H, FONT_B } = L;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Strategia Marketingu Cyfrowego — Blok 2: SOSTAC + Warsztat 1";
pres.author = "Prowadzący";

const TOTAL = 16;
let n = 0;

// =====================================================================
// Slide 7 (1/16): Dlaczego SOSTAC?
// =====================================================================
{
  n++;
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.2, h: H, fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText("LECTURE BLOCK 1 · SOSTAC", {
    x: 0.8, y: 0.5, w: W - 1.6, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 4, color: C.amber,
  });
  s.addText("Dlaczego SOSTAC?", {
    x: 0.8, y: 1.0, w: W - 1.6, h: 1.0,
    fontFace: FONT_H, fontSize: 48, bold: true, color: C.white,
  });
  s.addText("SOSTAC", {
    x: 0.8, y: 2.6, w: 6.0, h: 1.6,
    fontFace: FONT_H, fontSize: 110, bold: true, color: C.amber, charSpacing: 6,
  });
  s.addText("PR Smith, lata 90.", {
    x: 0.8, y: 4.3, w: 6.0, h: 0.5,
    fontFace: FONT_B, fontSize: 20, italic: true, color: "B0B8C4",
  });
  s.addText("Situation · Objectives · Strategy · Tactics · Actions · Control", {
    x: 0.8, y: 4.8, w: 6.0, h: 0.5,
    fontFace: FONT_B, fontSize: 13, color: "8A94A6",
  });
  const facts = [
    "Stosowany w 50+ krajach",
    "Certyfikowani praktycy na całym świecie",
    "Najpopularniejszy framework planowania marketingowego",
  ];
  facts.forEach((f, i) => {
    const y = 2.6 + i * 1.15;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.5, y, w: 5.2, h: 0.95, fill: { color: "1A2F4F" }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.5, y, w: 0.1, h: 0.95, fill: { color: C.amber }, line: { type: "none" },
    });
    s.addText(f, {
      x: 7.75, y, w: 4.9, h: 0.95,
      fontFace: FONT_B, fontSize: 16, color: C.white, valign: "middle", margin: 0,
    });
  });
  L.slideNum(s, n, TOTAL, true);
  L.addNotes(s, {
    time: "09:48 · Slajd 7 / 85 (ogólnie)",
    say: "Pierwszym narzędziem, które dziś poznamy, jest SOSTAC — framework planowania marketingowego stworzony przez PR Smitha w latach 90. i stosowany dziś przez profesjonalistów w ponad pięćdziesięciu krajach. Nazwa to akronim od sześciu etapów planowania: Situation, Objectives, Strategy, Tactics, Actions, Control — po polsku: Sytuacja, Cele, Strategia, Taktyki, Działania, Kontrola. Dlaczego warto go znać? Bo to jeden z niewielu frameworków, który jest jednocześnie kompletny i praktyczny — nie brakuje w nim żadnego krytycznego etapu, a każdy etap przekłada się bezpośrednio na decyzje i działania, które możecie wdrożyć od jutra. PR Smith opracował go jako odpowiedź na najczęstszy problem planowania marketingowego: organizacje przeskakują od analizy prosto do taktyk, pomijając trzy krytyczne etapy — cele, strategię i kontrolę. SOSTAC wymusza dyscyplinę planistyczną, która odróżnia profesjonalne podejście od improwizacji.",
    doIt: "Wyświetl slajd. Użyj wskaźnika, aby zaznaczyć mapę świata i liczbę 50+ krajów. Następnie powoli przejdź wzrokiem do listy po prawej stronie, wymieniając każdy punkt.",
    watch: "Czy uczestnicy znają już SOSTAC? Jeśli kilka osób kiwa głowami — zapytaj krótko: 'Kto używał SOSTAC w pracy?'. Jeśli nikt nie zna — zostań na tym slajdzie dodatkowe 30 sekund i podkreśl globalny zasięg.",
  });
}

// =====================================================================
// Slide 8 (2/16): SOSTAC — Przegląd sześciu etapów
// =====================================================================
{
  n++;
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addText("LECTURE BLOCK 1 · SOSTAC", {
    x: 0.6, y: 0.35, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.teal, margin: 0,
  });
  s.addText("SOSTAC — to pętla, nie lista kroków", {
    x: 0.6, y: 0.65, w: W - 1.2, h: 0.85,
    fontFace: FONT_H, fontSize: 30, bold: true, color: C.ink, margin: 0,
  });
  L.drawSOSTACCircle(s, pres);
  L.footerBrand(s);
  L.slideNum(s, n, TOTAL);
  L.addNotes(s, {
    time: "09:53 · Slajd 8 / 85",
    say: "SOSTAC składa się z sześciu etapów planowania — ale uwaga: to nie jest lista kroków do wykonania po kolei i zapomniana. To pętla. Kontrola — ostatni etap — nie kończy procesu planowania, lecz go zasila. Wyniki z etapu Kontrola wracają bezpośrednio do etapu Sytuacja i uruchamiają kolejny cykl planistyczny. Dlatego na diagramie widzicie strzałki tworzące zamknięty pierścień, a nie prostą linię od początku do końca. Sześć etapów po polsku: Sytuacja — gdzie jesteśmy teraz? Cele — gdzie chcemy być? Strategia — jak tam dotrzemy na poziomie ogólnym? Taktyki — jakimi konkretnymi narzędziami? Działania — kto, co i kiedy robi? Kontrola — jak wiemy, że to działa? Każde z tych pytań odpowiada na inny poziom problemu planistycznego. Pominięcie któregokolwiek z nich prowadzi do przewidywalnych błędów — do których wrócimy na slajdzie 19.",
    doIt: "Odsłaniaj segmenty diagramu jeden po jednym — zgodnie z ruchem wskazówek zegara, od Sytuacja do Kontrola. Na końcu odsłoń strzałkę powrotną z Kontrola do Sytuacja i powiedz: 'To jest najważniejsza strzałka na tym diagramie.'",
    watch: "Czy uczestnicy kopiują diagram do notatek? — to dobry znak zaangażowania. Jeśli ktoś pyta o różnicę między Strategia a Taktyki — powiedz, że do tego wrócimy na slajdach 12 i 13, bo to najczęstsze źródło zamieszania.",
  });
}

// =====================================================================
// Slide 9 (3/16): S — Sytuacja (Situation Analysis)
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "S — SITUATION ANALYSIS",
  eyebrowColor: C.sit,
  title: "Sytuacja — gdzie jesteśmy teraz?",
  subtitle: '"Analiza sytuacyjna powinna stanowić 50% całego wysiłku planistycznego" — PR Smith',
  time: "09:58 · Slajd 9 / 85",
  say: "Analiza sytuacyjna to fundament całego planu. PR Smith szacuje, że powinna zajmować połowę całego wysiłku planistycznego. Dlaczego aż połowę? Bo zły plan oparty na dobrej diagnozie można poprawić — dobry plan oparty na złej diagnozie skończy się katastrofą, i to z doskonałym wykonaniem. Sytuacja obejmuje cztery obszary: analizę klienta, konkurencji, firmy oraz PESTEL. W kontekście cyfrowym do klasycznej analizy dochodzą dodatkowe warstwy: dane z Google Analytics, audyt mediów społecznościowych, analiza SEO, benchmarking cyfrowy konkurencji. Pomyślcie o marce InPost — w 2009 roku polska e-commerce rosła, ale dostawy do domu były frustrujące: przegapione okna czasowe, awizacje, konieczność bycia w domu. Ta jedna obserwacja sytuacyjna była fundamentem całej strategii Paczkomat.",
  doIt: "Odsłaniaj ćwiartki gridu jedna po jednej. Przy PESTEL powiedz: 'W środowisku cyfrowym PESTEL uzupełniają cztery dodatkowe warstwy danych, które za chwilę zobaczycie.' Cytat PR Smitha zostaw widoczny.",
  watch: "Czy ktoś pyta, czym różni się analiza klienta w kontekście cyfrowym od tradycyjnej? — dobry sygnał do krótkiego wzmocnienia roli analytics. Czy uczestnicy patrzą na cytat 50% z niedowierzaniem? — to normalna reakcja; wzmocnij przykładem InPost.",
}, n, TOTAL, (s, pres) => {
  L.drawGrid(s, pres, {
    rows: 2, colsN: 2,
    items: [
      { label: "CUSTOMER", title: "Klient", body: "Kto kupuje, dlaczego, jak. Analityka, badania jakościowe, głos klienta (NPS, ankiety).", accent: C.sit },
      { label: "COMPETITOR", title: "Konkurenci", body: "Bezpośredni rywale + nowi gracze cyfrowi. Benchmarking SEO i Share of Voice.", accent: C.sit },
      { label: "COMPANY", title: "Firma", body: "Zasoby, dane historyczne, aktywa cyfrowe, baza first-party, wydajność kanałów.", accent: C.sit },
      { label: "PESTEL", title: "Czynniki zewnętrzne", body: "Polityczne, Ekonomiczne, Społeczne, Technologiczne, Środowiskowe, Prawne.", accent: C.sit },
    ],
  });
});

// =====================================================================
// Slide 10 (4/16): S — Sytuacja: Narzędzia Cyfrowe
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "S — SYTUACJA · NARZĘDZIA CYFROWE",
  eyebrowColor: C.sit,
  title: "Cztery warstwy danych dla audytu cyfrowego",
  subtitle: "Narzędzia przyspieszają analizę — nie zastępują jej. Zacznij od diagnozy, nie od narzędzia.",
  time: "10:03 · Slajd 10 / 85",
  say: "Analiza sytuacyjna w środowisku cyfrowym jest bogatsza niż kiedykolwiek wcześniej — bo dane są dostępne w czasie rzeczywistym i w znacznie większej ilości niż w świecie analogowym. Cztery kluczowe obszary narzędzi: Google Analytics lub GA4 — daje wgląd w ruch na stronie, zachowanie użytkowników, wskaźniki konwersji i źródła ruchu; to punkt startowy każdego audytu cyfrowego. Narzędzia SEO takie jak SEMrush lub Ahrefs — pozwalają ocenić widoczność organiczną w porównaniu z konkurencją, zidentyfikować luki słów kluczowych. Social Listening — narzędzia jak Brand24 monitorują wzmianki o marce, sentymenty i trendy tematyczne — to jakościowy wymiar. Wreszcie NPS i ankiety klienta — bo dane ilościowe nie zastąpią bezpośredniego głosu klienta. Ważna zasada: narzędzia cyfrowe przyspieszają analizę sytuacyjną, ale jej nie zastępują. Dane mają sens tylko w kontekście pytań, które zadajemy. Zacznijcie od diagnozy, nie od narzędzia.",
  doIt: "Przejdź przez cztery bloki narzędzi, używając wskaźnika. Podkreśl, że to nie jest wyczerpująca lista — to minimum, od którego zaczyna się profesjonalny audyt cyfrowy.",
  watch: "Czy uczestnicy znają te narzędzia? Jeśli tak, zapytaj o ich doświadczenia: 'Kto używał SEMrush lub podobnego narzędzia?'. Jeśli nie znają — nie wchodź głębiej; wrócimy do tego w popołudniowym bloku.",
}, n, TOTAL, (s, pres) => {
  L.drawGrid(s, pres, {
    rows: 2, colsN: 2,
    items: [
      { label: "RUCH I KONWERSJE", title: "Google Analytics / GA4", body: "Ruch na stronie, zachowanie użytkowników, wskaźniki konwersji, źródła ruchu. Punkt startowy każdego audytu.", accent: C.sit },
      { label: "SEO", title: "SEMrush / Ahrefs", body: "Widoczność organiczna vs konkurencja, luki słów kluczowych, szacowany ruch organiczny rywali.", accent: C.sit },
      { label: "WZMIANKI", title: "Brand24 / Mention", body: "Monitoring wzmianek o marce, sentyment, trendy tematyczne. Jakościowy wymiar analizy.", accent: C.sit },
      { label: "GŁOS KLIENTA", title: "NPS / ankiety", body: "Satysfakcja, lojalność, feedback bezpośredni. Dane ilościowe nie zastąpią głosu klienta.", accent: C.sit },
    ],
  });
});

// =====================================================================
// Slide 11 (5/16): O — Cele (Objectives)
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "O — OBJECTIVES",
  eyebrowColor: C.obj,
  title: "Cele — gdzie chcemy być?",
  subtitle: "Cele SMART × jeden KPI na każdy etap RACE",
  time: "10:06 · Slajd 11 / 85",
  say: "Etap Cele to odpowiedź na pytanie: gdzie chcemy być? Wszystkie cele muszą być SMART — Specific (konkretne), Measurable (mierzalne), Achievable (osiągalne), Realistic (realistyczne), Time-bound (osadzone w czasie). Ale sama zasada SMART to dopiero połowa sukcesu. Najczęstszy błąd, który popełniają firmy, to stawianie sobie wyłącznie celów sprzedażowych i ignorowanie zasięgu, zaangażowania i lojalności — a potem dziwienie się, dlaczego pipeline się kurczy. Dlatego kluczową praktyką jest ustawienie co najmniej jednego KPI na każdy etap RACE: zasięgowy — na przykład wzrost ruchu organicznego o 30%; aktywacyjny — czas na stronie powyżej 3 minut; konwersyjny — współczynnik konwersji powyżej 2,5%; zaangażowania — retencja 60% po pierwszym zakupie. Kiedy cele pokrywają wszystkie cztery etapy RACE, unikasz budowania planów, które optymalizują jeden etap kosztem pozostałych — pułapka, w którą wpadło wiele znanych marek, w tym Nike.",
  doIt: "Odsłoń najpierw akronim SMART — litera po literze. Następnie odsłoń prawą stronę z etapami RACE. Kolor etapów RACE zgodny z paletą: niebieski, zielony, pomarańczowy, fioletowy.",
  watch: "Czy uczestnicy piszą notatki przy slajdzie SMART? Jeśli ktoś pyta o różnicę między Achievable a Realistic — powiedz, że w praktyce są traktowane zamiennie.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  // LEFT: SMART
  s.addText("SMART", {
    x: 0.6, y: y0, w: 5.5, h: 0.5,
    fontFace: FONT_H, fontSize: 24, bold: true, color: C.obj, margin: 0,
  });
  const smart = [
    { l: "S", t: "Specific", d: "konkretne" },
    { l: "M", t: "Measurable", d: "mierzalne" },
    { l: "A", t: "Achievable", d: "osiągalne" },
    { l: "R", t: "Realistic / Relevant", d: "realistyczne" },
    { l: "T", t: "Time-bound", d: "osadzone w czasie" },
  ];
  smart.forEach((sm, i) => {
    const y = y0 + 0.7 + i * 0.75;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 0.65, h: 0.6,
      fill: { color: C.obj }, line: { type: "none" },
    });
    s.addText(sm.l, {
      x: 0.6, y, w: 0.65, h: 0.6,
      fontFace: FONT_H, fontSize: 24, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(sm.t, {
      x: 1.35, y, w: 2.2, h: 0.6,
      fontFace: FONT_H, fontSize: 16, bold: true, color: C.ink,
      valign: "middle", margin: 0,
    });
    s.addText("— " + sm.d, {
      x: 3.55, y, w: 2.5, h: 0.6,
      fontFace: FONT_B, fontSize: 14, italic: true, color: C.inkMute,
      valign: "middle", margin: 0,
    });
  });
  // RIGHT: RACE KPIs
  s.addText("JEDEN KPI NA KAŻDY ETAP RACE", {
    x: 6.8, y: y0, w: 6.0, h: 0.5,
    fontFace: FONT_H, fontSize: 22, bold: true, color: C.teal, margin: 0,
  });
  const race = [
    { l: "Zasięg (Reach)", k: "+30% ruchu organicznego", c: C.reach },
    { l: "Aktywacja (Act)", k: "Czas na stronie > 3 min", c: C.act },
    { l: "Konwersja (Convert)", k: "Współczynnik konwersji > 2,5%", c: C.convert },
    { l: "Zaangażowanie (Engage)", k: "Retencja 60% po 1. zakupie", c: C.engage },
  ];
  race.forEach((r, i) => {
    const y = y0 + 0.7 + i * 0.95;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 6.8, y, w: 0.14, h: 0.8,
      fill: { color: r.c }, line: { type: "none" },
    });
    s.addText(r.l, {
      x: 7.05, y, w: 5.7, h: 0.4,
      fontFace: FONT_H, fontSize: 15, bold: true, color: r.c, margin: 0,
    });
    s.addText(r.k, {
      x: 7.05, y: y + 0.4, w: 5.7, h: 0.4,
      fontFace: FONT_B, fontSize: 13, color: C.ink, margin: 0,
    });
  });
});

// =====================================================================
// Slide 12 (6/16): S — Strategia
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "S — STRATEGY",
  eyebrowColor: C.strat,
  title: "Strategia to nie lista kanałów",
  subtitle: "To decyzja: co priorytetyzujemy i z czego rezygnujemy",
  time: "10:09 · Slajd 12 / 85",
  say: "Strategia to nie lista kanałów. To decyzja: co priorytetyzujemy i z czego rezygnujemy. To zdanie jest kluczowe i warto je zapamiętać — bo zdecydowana większość dokumentów, które w firmach noszą nazwę 'strategia marketingowa', w rzeczywistości jest listą kanałów i taktyk bez żadnego wyboru strategicznego. Dobra strategia jest z definicji ekskluzywna — mówi 'nie' tylu rzeczom, ile mówi 'tak'. PR Smith proponuje framework TOPPP SEED do budowania strategii cyfrowej: Target, Objectives, Partnerships, Processes, People, Stages, Engagement, Experience, Data. W praktyce jednak najważniejsze jest pytanie: jakie są trzy najważniejsze priorytety strategiczne i co jesteśmy gotowi poświęcić, żeby je osiągnąć? Weźmy Nike — ich strategia Consumer Direct Acceleration brzmiała: 'Przechodzimy z modelu hurtowego na DTC cyfrowy, budujemy program członkowski jako główną propozycję wartości.' To jedna decyzja strategiczna, która wyeliminowała ponad czterdziestu partnerów hurtowych.",
  doIt: "Odsłoń najpierw kontrast lewo-prawo. Następnie odsłoń przykład Nike. Na koniec TOPPP SEED jako dodatek — zaznacz, że nie będziemy go szczegółowo omawiać.",
  watch: "Czy ktoś wygląda na sceptycznego wobec 'lista kanałów to nie strategia'? Zapytaj wprost: 'Czy ktoś z was widział dokument strategiczny, który wyglądał bardziej jak lista kanałów?'. To prawie zawsze wywołuje reakcję.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  // LEFT: NOT (red)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.9, h: 2.3, fill: { color: "FDEDEC" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 0.15, h: 2.3, fill: { color: C.red }, line: { type: "none" },
  });
  s.addShape(pres.shapes.OVAL, {
    x: 0.95, y: y0 + 0.3, w: 0.55, h: 0.55, fill: { color: C.red }, line: { type: "none" },
  });
  s.addText("✕", {
    x: 0.95, y: y0 + 0.3, w: 0.55, h: 0.55,
    fontFace: FONT_H, fontSize: 22, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("NIE JEST", {
    x: 1.65, y: y0 + 0.25, w: 4.6, h: 0.35,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.red, margin: 0,
  });
  s.addText("Strategia to NIE lista kanałów", {
    x: 1.65, y: y0 + 0.55, w: 4.6, h: 0.5,
    fontFace: FONT_H, fontSize: 18, bold: true, color: C.ink, margin: 0,
  });
  s.addText('"Robimy TikToka, Instagrama, influencerów, SEO i email marketing." — to jest lista zakupowa, nie strategia.', {
    x: 0.95, y: y0 + 1.25, w: 5.35, h: 0.95,
    fontFace: FONT_B, fontSize: 13, italic: true, color: C.inkMute, margin: 0,
  });
  // RIGHT: IS (green)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.8, y: y0, w: 5.9, h: 2.3, fill: { color: "E9F5EE" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.8, y: y0, w: 0.15, h: 2.3, fill: { color: C.green }, line: { type: "none" },
  });
  s.addShape(pres.shapes.OVAL, {
    x: 7.15, y: y0 + 0.3, w: 0.55, h: 0.55, fill: { color: C.green }, line: { type: "none" },
  });
  s.addText("✓", {
    x: 7.15, y: y0 + 0.3, w: 0.55, h: 0.55,
    fontFace: FONT_H, fontSize: 22, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("JEST", {
    x: 7.85, y: y0 + 0.25, w: 4.6, h: 0.35,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.green, margin: 0,
  });
  s.addText("Strategia to DECYZJA o priorytetach", {
    x: 7.85, y: y0 + 0.55, w: 4.6, h: 0.5,
    fontFace: FONT_H, fontSize: 18, bold: true, color: C.ink, margin: 0,
  });
  s.addText("Co robimy? Z czego rezygnujemy? Dlaczego? Dobra strategia mówi 'nie' tyle razy, co 'tak'.", {
    x: 7.15, y: y0 + 1.25, w: 5.35, h: 0.95,
    fontFace: FONT_B, fontSize: 13, italic: true, color: C.inkMute, margin: 0,
  });
  // Nike example box (bottom)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.7, w: W - 1.2, h: 1.5, fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("PRZYKŁAD · NIKE CONSUMER DIRECT ACCELERATION", {
    x: 0.9, y: 4.85, w: W - 1.8, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.amber, margin: 0,
  });
  s.addText('"Porzucamy sprzedaż hurtową. Budujemy DTC cyfrowy i ekosystem członkowski jako główną propozycję wartości."', {
    x: 0.9, y: 5.2, w: W - 1.8, h: 0.95,
    fontFace: FONT_H, fontSize: 18, italic: true, color: C.white, valign: "top", margin: 0,
  });
  // TOPPP SEED footer
  s.addText("TOPPP SEED (PR Smith, opcjonalnie): Target · Objectives · Partnerships · Processes · People · Stages · Engagement · Experience · Data", {
    x: 0.6, y: H - 0.9, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, fontSize: 11, italic: true, color: C.inkFaint, align: "left",
  });
});

// =====================================================================
// Slide 13 (7/16): T — Taktyki (Tactics)
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "T — TACTICS",
  eyebrowColor: C.tac,
  title: "Taktyki bez strategii to tylko hałas",
  subtitle: "Każda taktyka przypisana do konkretnego etapu RACE",
  time: "10:12 · Slajd 13 / 85",
  say: "Taktyki to konkretne narzędzia, kanały i formaty treści, których używamy do realizacji strategii. To właśnie na tym etapie SOSTAC łączy się z RACE — każda taktyka przypisana jest do konkretnego etapu cyklu klienta. Taktyki zasięgowe takie jak SEO, PPC czy influencer marketing budują widoczność. Taktyki aktywacyjne — content marketing, strony docelowe, newsletter — skłaniają do głębszej interakcji. Taktyki konwersyjne — retargeting, optymalizacja procesu zakupu — zamieniają zainteresowanie w transakcje. Taktyki zaangażowania — automatyzacja e-mailowa, programy lojalnościowe, budowanie społeczności — budują długoterminowe relacje. Pamiętajcie o modelu mediów: własnych (strona, blog, aplikacja), zarobionych (PR, recenzje) i płatnych (reklamy). Strategia decyduje, który mix mediów i które etapy RACE priorytetyzujemy. Taktyki to tylko wykonanie.",
  doIt: "Odsłoń najpierw cytat 'Taktyki bez strategii to tylko hałas'. Zatrzymaj się 3 sekundy. Następnie odsłoń tabelę mapowania.",
  watch: "Czy uczestnicy kojarzą już RACE ze slajdu 6 i z tego slajdu? Jeśli ktoś pyta, skąd pochodzi RACE — powiedz, że to osobny framework Dave'a Chaffey'a, który omówimy szczegółowo po przerwie.",
}, n, TOTAL, (s, pres) => {
  L.drawTable(s, pres, {
    tableY: 2.1,
    tableH: 3.6,
    headers: ["Zasięg (Reach)", "Aktywacja (Act)", "Konwersja (Convert)", "Zaangażowanie (Engage)"],
    colColors: [C.reach, C.act, C.convert, C.engage],
    rows: [
      ["SEO organiczny", "Content marketing", "CRO (optymalizacja)", "Email automation"],
      ["PPC / Google Ads", "Landing pages", "Retargeting", "Program lojalnościowy"],
      ["Social media organiczny", "Lead magnets", "Promocje / kody", "Community building"],
      ["Influencer marketing", "Newsletter welcome", "Porzucone koszyki", "NPS / feedback loop"],
    ],
  });
  // Owned/Earned/Paid footer
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.3, w: W - 1.2, h: 0.5, fill: { color: C.offWhite }, line: { type: "none" },
  });
  s.addText([
    { text: "OWNED ", options: { bold: true, color: C.teal } },
    { text: "(strona, blog, aplikacja) · ", options: {} },
    { text: "EARNED ", options: { bold: true, color: C.green } },
    { text: "(PR, recenzje, viral) · ", options: {} },
    { text: "PAID ", options: { bold: true, color: C.amber } },
    { text: "(reklamy, influencerzy kontraktowi)", options: {} },
  ], {
    x: 0.8, y: H - 1.3, w: W - 1.6, h: 0.5,
    fontFace: FONT_B, fontSize: 13, color: C.ink, valign: "middle", margin: 0,
  });
});

// =====================================================================
// Slide 14 (8/16): A — Działania (Actions) — 4M framework
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "A — ACTIONS",
  eyebrowColor: C.act2,
  title: "4M — kto, ile, kiedy, jakimi danymi?",
  subtitle: "Plan bez właściciela to życzenie. Strategia bez budżetu to marzenie.",
  time: "10:15 · Slajd 14 / 85",
  say: "Etap Działania odpowiada na pytania: kto, co, kiedy i za ile? To etap, w którym strategia zamienia się w konkretne zobowiązania i harmonogram. Framework 4M porządkuje te pytania w czterech wymiarach. Men and Women — czyli talent: kto jest odpowiedzialny za każdą taktykę? Każda aktywność musi mieć właściciela — nie 'dział marketingu', lecz konkretna osoba z imienia i nazwiska. Money — budżet: jak alokujemy zasoby finansowe między kanały, etapy RACE i kwartały? Minutes — czas: jaki jest harmonogram publikacji, terminy kampanii, cykl raportowania? Megadata — analityka: jakie dane zbieramy, jak często analizujemy i kto odpowiada za interpretację wyników? Plan bez właściciela to życzenie. Strategia bez budżetu to marzenie. Działania to moment, w którym organizacja sprawdza, czy naprawdę wierzy w swój plan. W czwartym warsztacie popołudniu będziecie sami alokować budżet.",
  doIt: "Odsłaniaj cztery pola 4M kolejno — najpierw ikona i nazwa, potem opis. Przy ostatnim polu podkreśl cytat na dole slajdu.",
  watch: "Czy uczestnicy reagują na cytat 'Plan bez właściciela to życzenie'? Zwykle wywołuje uśmiechy wśród osób z doświadczeniem zawodowym.",
}, n, TOTAL, (s, pres) => {
  L.drawGrid(s, pres, {
    rows: 2, colsN: 2, gridY: 2.1, gridYEnd: H - 1.3,
    items: [
      { label: "MEN & WOMEN", title: "Talent", body: "Kto jest właścicielem każdej taktyki? Konkretna osoba z imienia i nazwiska — nie 'dział marketingu'.", accent: C.act2 },
      { label: "MONEY", title: "Budżet", body: "Ile alokujemy i gdzie? Podział między kanały, etapy RACE, kwartały. Dokument, nie intencja.", accent: C.act2 },
      { label: "MINUTES", title: "Czas", body: "Harmonogram publikacji, kalendarz treści, terminy kampanii, cykl raportowania.", accent: C.act2 },
      { label: "MEGADATA", title: "Analityka", body: "Jakie dane zbieramy? Jak często analizujemy? Kto odpowiada za interpretację wyników?", accent: C.act2 },
    ],
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.2, w: W - 1.2, h: 0.5, fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText('Plan bez właściciela to życzenie. Strategia bez budżetu to marzenie.', {
    x: 0.6, y: H - 1.2, w: W - 1.2, h: 0.5,
    fontFace: FONT_H, fontSize: 14, bold: true, italic: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
});

// =====================================================================
// Slide 15 (9/16): C — Kontrola (Control) — loop diagram
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "C — CONTROL",
  eyebrowColor: C.ctrl,
  title: "Kontrola to nie ostatni krok — to pierwszy krok kolejnego planu",
  subtitle: "Model 90-dniowy: Planuj → Wykonaj → Mierz → Dostosuj",
  time: "10:18 · Slajd 15 / 85",
  say: "Kontrola to nie ostatni krok — to pierwszy krok kolejnego planu. To jedno zdanie wyraża istotę etapu Kontrola w SOSTAC i odróżnia organizacje, które uczą się i adaptują, od tych, które planują raz w roku. Kontrola zamyka pętlę SOSTAC, wracając do etapu Sytuacja. Praktycznie obejmuje: ustalenie, które metryki mierzymy — KPI per kanał i per etap RACE; określenie częstotliwości pomiaru — tygodniowy dashboard, miesięczny przegląd, kwartalny plan; oraz zdefiniowanie protokołów reakcji — co się dzieje, kiedy KPI spada poniżej progu? Model 90-dniowy to praktyczna implementacja: SOSTAC działa jako cykl 90-dniowych sprintów. Zamiast statycznego planu rocznego tworzycie żywy system adaptacyjny.",
  doIt: "Odsłoń najpierw centralny cytat. Następnie odsłoń pętlę strzałkową Kontrola → Sytuacja. Na koniec odsłoń listę KPI po lewej i model 90-dniowy po prawej.",
  watch: "Czy uczestnicy doceniają powiązanie Kontrola → Sytuacja? Jeśli nie, wróć do diagramu kołowego ze slajdu 8.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  // LEFT: KPI dashboard checklist
  s.addText("DASHBOARD KPI — CZTERY WARSTWY", {
    x: 0.6, y: y0, w: 5.8, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.ctrl, margin: 0,
  });
  const items = [
    "KPI per kanał (CPM, CTR, ROAS)",
    "KPI per etap RACE (Reach, Act, Convert, Engage)",
    "Dashboard: tygodniowy · miesięczny · kwartalny",
    "Protokół reakcji na odchylenia",
  ];
  items.forEach((it, i) => {
    const y = y0 + 0.6 + i * 0.7;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 5.8, h: 0.55,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 0.1, h: 0.55,
      fill: { color: C.ctrl }, line: { type: "none" },
    });
    s.addText(it, {
      x: 0.85, y, w: 5.45, h: 0.55,
      fontFace: FONT_B, fontSize: 14, color: C.ink, valign: "middle", margin: 0,
    });
  });
  // RIGHT: 90-day loop
  s.addText("CYKL 90-DNIOWY", {
    x: 7.2, y: y0, w: 5.5, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.ctrl, margin: 0,
  });
  const loop = [
    { w: "1", t: "Planuj", c: C.sit },
    { w: "2", t: "Wykonaj", c: C.act2 },
    { w: "3", t: "Mierz", c: C.ctrl },
    { w: "4", t: "Dostosuj", c: C.obj },
  ];
  const cx = 9.9, cy = 4.0, r = 1.35;
  loop.forEach((lp, i) => {
    const ang = (-90 + i * 90) * Math.PI / 180;
    const bx = cx + Math.cos(ang) * r - 0.6;
    const by = cy + Math.sin(ang) * r - 0.35;
    s.addShape(pres.shapes.OVAL, {
      x: bx, y: by, w: 1.2, h: 0.7,
      fill: { color: lp.c }, line: { type: "none" },
    });
    s.addText(lp.t, {
      x: bx, y: by, w: 1.2, h: 0.7,
      fontFace: FONT_H, fontSize: 13, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
  });
  s.addShape(pres.shapes.OVAL, {
    x: cx - 0.6, y: cy - 0.4, w: 1.2, h: 0.8,
    fill: { color: C.darkBg }, line: { type: "none" },
  });
  s.addText("90 dni", {
    x: cx - 0.6, y: cy - 0.4, w: 1.2, h: 0.8,
    fontFace: FONT_H, fontSize: 14, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  // Bottom quote
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.2, w: W - 1.2, h: 0.5, fill: { color: C.ctrl }, line: { type: "none" },
  });
  s.addText('"Kontrola to nie ostatni krok — to pierwszy krok kolejnego planu."', {
    x: 0.6, y: H - 1.2, w: W - 1.2, h: 0.5,
    fontFace: FONT_H, fontSize: 15, bold: true, italic: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
});

// =====================================================================
// Slide 16 (10/16): SOSTAC — Integracja
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "SOSTAC · INTEGRACJA",
  title: "Liniowe plany się nie sprawdzają",
  subtitle: "Najczęstszy błąd: skok od Sytuacji prosto do Taktyk — z pominięciem Celów, Strategii i Kontroli",
  time: "10:21 · Slajd 16 / 85",
  say: "Kiedy patrzymy na SOSTAC jako całość, kluczowe przesłanie jest następujące: etapy SOSTAC nie działają w izolacji. Sytuacja wpływa na Cele, ale wyniki Kontroli mogą zmienić rozumienie Sytuacji jeszcze w trakcie cyklu. Strategia określa, które Taktyki wybieramy, ale dostępność budżetu z etapu Działania może wymusić rewizję Strategii. To żywy, dynamiczny system — nie statyczna lista kroków. Jednak najważniejszy insight praktyczny: większość organizacji, które myślą, że 'robią SOSTAC', w rzeczywistości wykonuje tylko dwa etapy — Sytuację i Taktyki. Przeskakują bezpośrednio od 'gdzie jesteśmy' do 'co robimy', pomijając trzy krytyczne pytania: 'gdzie chcemy być', 'jak tam dotrzemy' i 'jak będziemy wiedzieć, że dotarliśmy'. Właśnie te pominięte pytania są źródłem większości niepotrzebnych wydatków marketingowych.",
  doIt: "Odsłoń diagram z powiązaniami. Użyj wskaźnika, żeby prześledzić typową ścieżkę błędu: od S prosto do T — zaznacz dużym gestem, co zostało pominięte.",
  watch: "Czy uczestnicy kiwają głową przy 'większość organizacji robi tylko Sytuację i Taktyki'? Jeśli nie — zapytaj wprost o ich doświadczenia.",
}, n, TOTAL, (s, pres) => {
  // Show 6 SOSTAC nodes in a row with overlaid "common path" arrow
  const y0 = 2.3;
  const nodes = [
    { l: "S", t: "Sytuacja", c: C.sit },
    { l: "O", t: "Cele", c: C.obj },
    { l: "S", t: "Strategia", c: C.strat },
    { l: "T", t: "Taktyki", c: C.tac },
    { l: "A", t: "Działania", c: C.act2 },
    { l: "C", t: "Kontrola", c: C.ctrl },
  ];
  const nodeW = 1.7, gap = 0.35;
  const totalW = nodes.length * nodeW + (nodes.length - 1) * gap;
  const x0 = (W - totalW) / 2;
  nodes.forEach((nd, i) => {
    const x = x0 + i * (nodeW + gap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: y0, w: nodeW, h: 1.4,
      fill: { color: nd.c }, line: { type: "none" }, rectRadius: 0.1,
    });
    s.addText(nd.l, {
      x, y: y0 + 0.1, w: nodeW, h: 0.7,
      fontFace: FONT_H, fontSize: 36, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(nd.t, {
      x, y: y0 + 0.8, w: nodeW, h: 0.5,
      fontFace: FONT_B, fontSize: 14, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
  });
  // Red "common path" callout — placed BELOW nodes (was colliding with subtitle when above)
  s.addShape(pres.shapes.RECTANGLE, {
    x: x0 + nodeW / 2, y: y0 + 1.55, w: 3 * nodeW + 2 * gap, h: 0.4,
    fill: { color: C.red, transparency: 20 }, line: { type: "none" },
  });
  s.addText("✕ TYPOWA DROGA NA SKRÓTY — pomija Cele + Strategię", {
    x: x0 + nodeW / 2, y: y0 + 1.55, w: 3 * nodeW + 2 * gap, h: 0.4,
    fontFace: FONT_H, fontSize: 12, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  // Central pull quote — pushed down a touch to clear the banner
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.5, w: W - 1.2, h: 1.2, fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText('"SOSTAC to dyscyplina, która wymusza zatrzymanie się na każdym etapie — i to jest jego wartość."', {
    x: 0.9, y: 4.5, w: W - 1.8, h: 1.2,
    fontFace: FONT_H, fontSize: 20, italic: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("Etapy SOSTAC nie działają w izolacji — tworzą żywy, dynamiczny system sprzężeń zwrotnych.", {
    x: 0.6, y: H - 1, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, fontSize: 14, italic: true, color: C.inkMute, align: "center",
  });
});

// =====================================================================
// Slide 17 (11/16): SOSTAC w Praktyce — Żabka
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "SOSTAC W PRAKTYCE",
  title: "Żabka — cyfrowa transformacja sieci convenience",
  subtitle: "10 000+ lokalizacji · 700 mln+ wizyt rocznie · NPS 80+ (średnia branżowa ~50)",
  time: "10:24 · Slajd 17 / 85",
  say: "Przejdźmy teraz przez kompletny przykład SOSTAC na bazie Żabki — sieci, którą wszyscy znacie z codziennego życia w Polsce. Sytuacja: Żabka zarządza ponad dziesięcioma tysiącami lokalizacji i obsługuje rocznie ponad siedemset milionów wizyt klientów — ale była to w całości fizyczna sieć handlowa bez wymiaru cyfrowego. Cele: zwiększenie liczby pobrań aplikacji Żappka i częstotliwości transakcji na klienta, mierzone wskaźnikami aktywnymi użytkowników i NPS. Strategia: budowa cyfrowego ekosystemu opartego na lojalności — 'loyalty-first digital ecosystem' — gdzie aplikacja staje się centrum relacji z klientem. Taktyki: aplikacja Żappka z AI-personalizowanymi promocjami, TikTok, spersonalizowane powiadomienia push. Działania: inwestycja rzędu pięćdziesięciu milionów złotych, dedykowany zespół cyfrowy liczący tysiąc dwieście osób. Kontrola: NPS powyżej osiemdziesięciu — przy średniej branżowej około pięćdziesięciu.",
  doIt: "Przejdź przez każdą kolumnę planszy SOSTAC wskaźnikiem. Zatrzymaj się najdłużej przy kolumnach Strategia ('loyalty-first') i Kontrola (NPS 80+).",
  watch: "Czy uczestnicy rozpoznają Żabkę i Żappkę? Jeśli ktoś ma własne doświadczenie jako użytkownik — zachęć do komentarza.",
}, n, TOTAL, (s, pres) => {
  L.drawTable(s, pres, {
    tableY: 2.1,
    tableH: 4.0,
    headers: ["S — Sytuacja", "O — Cele", "S — Strategia", "T — Taktyki", "A — Działania", "C — Kontrola"],
    colColors: [C.sit, C.obj, C.strat, C.tac, C.act2, C.ctrl],
    rows: [
      [
        "10 000+ lokalizacji",
        "↑ Pobrania Żappka",
        "Loyalty-first",
        "Żappka + AI promo",
        "50 mln PLN inwestycji",
        "NPS 80+",
      ],
      [
        "700 mln+ wizyt/rok",
        "↑ Transakcje/klient",
        "Ekosystem cyfrowy",
        "TikTok Żabka",
        "Zespół cyfrowy 1200 os.",
        "(benchmark: ~50)",
      ],
      [
        "0% cyfrowej obecności",
        "↑ NPS",
        "Aplikacja = centrum",
        "Personalizowany push",
        "Dane first-party",
        "Oceny w app store",
      ],
      [
        "Presja FMCG convenience",
        "↑ Aktywni użytkownicy",
        "Rezygnacja z walki cenowej",
        "Nano — autonomiczne sklepy",
        "Partnerstwa tech",
        "Częstotliwość transakcji",
      ],
    ],
    source: "Źródło: FutureMind / Microsoft Customer Stories · Żabka Group",
  });
});

// =====================================================================
// Slide 18 (12/16): SOSTAC w Praktyce — Nike CDA
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "SOSTAC W PRAKTYCE",
  title: "Nike Consumer Direct Acceleration — sukces i lekcja",
  subtitle: "Trade-off RACE: wzmacniasz Konwersję i Zaangażowanie → poświęcasz Zasięg",
  time: "10:28 · Slajd 18 / 85",
  say: "Drugi przykład — Nike Consumer Direct Acceleration, strategia, która stała się globalnym case study zarówno sukcesów, jak i lekcji. Sytuacja: w 2019 roku Nike sprzedawało ponad 65% produktów przez partnerów hurtowych. Cele: przekroczenie 50% udziału DTC w przychodach, budowa bazy 100M+ członków NikePlus. Strategia: porzucamy model hurtowy, budujemy DTC cyfrowy. Taktyki: cztery własne aplikacje — SNKRS, Nike Training Club, Nike Run Club, Nike.com — plus eliminacja ponad czterdziestu kluczowych kont hurtowych. Kontrola: NIKE Direct osiągnął 21,3 miliarda dolarów w FY2023. Ale tu pojawia się ważna lekcja: całkowite przychody Nike spadły do 46,3 miliarda dolarów w FY2025, minus prawie dziesięć procent r/r. Dlaczego? Bo strategia DTC zoptymalizowała Konwersję i Zaangażowanie, ale poświęciła Zasięg — produkty stały się trudniej dostępne dla klientów, którzy woleli kupować w multibrandowych sklepach.",
  doIt: "Odsłoń górną część (SOSTAC mini) szybko. Następnie odsłoń dolną część z danymi finansowymi. Zostaw slajd chwilę bez komentarza.",
  watch: "Czy ktoś znał już historię Nike CDA? Zapytaj, czy zgadzają się z diagnozą trade-off Zasięg vs Zaangażowanie.",
}, n, TOTAL, (s, pres) => {
  L.drawTable(s, pres, {
    tableY: 2.1,
    tableH: 2.3,
    headers: ["S — Sytuacja", "O — Cele", "S — Strategia", "T — Taktyki", "A — Działania", "C — Kontrola"],
    colColors: [C.sit, C.obj, C.strat, C.tac, C.act2, C.ctrl],
    rows: [
      ["65%+ przez hurt", ">50% udział DTC", "DTC-first", "SNKRS, NRC, NTC app", "Rekrutacja DTC ekspertów", "NIKE Direct $21,3B"],
      ["Słabe dane own", "100M+ NikePlus", "Eliminacja hurtu", "Nike.com + app", "Zerwanie 40+ kontraktów", "(FY2023)"],
    ],
  });
  // Bottom: financial contrast
  const y0 = 4.8;
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: W - 1.2, h: 1.6, fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("KONTEKST FINANSOWY — trade-off pokazuje się w liczbach", {
    x: 0.9, y: y0 + 0.1, w: W - 1.8, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.amber, margin: 0,
  });
  const stats = [
    { big: "$21,3B", sub: "NIKE Direct", caption: "FY2023 — rekord DTC", c: C.act },
    { big: "160M", sub: "członków NikePlus", caption: "cel realizowany", c: C.teal },
    { big: "$46,3B", sub: "całkowite przychody", caption: "FY2025 · −9,84% r/r ⚠", c: C.amber },
  ];
  stats.forEach((st, i) => {
    const x = 0.9 + i * ((W - 1.8) / 3);
    s.addText(st.big, {
      x, y: y0 + 0.45, w: (W - 1.8) / 3, h: 0.6,
      fontFace: FONT_H, fontSize: 32, bold: true, color: st.c,
      align: "left", valign: "middle", margin: 0,
    });
    s.addText(st.sub, {
      x, y: y0 + 0.95, w: (W - 1.8) / 3, h: 0.3,
      fontFace: FONT_B, fontSize: 12, bold: true, color: C.white,
      align: "left", margin: 0,
    });
    s.addText(st.caption, {
      x, y: y0 + 1.2, w: (W - 1.8) / 3, h: 0.3,
      fontFace: FONT_B, fontSize: 11, italic: true, color: "B0B8C4",
      align: "left", margin: 0,
    });
  });
  // Source line — below the dark panel, above footer, right-aligned to avoid brand text on left
  s.addText("Źródło: Nike Investor Relations · StockAnalysis", {
    x: 0.6, y: y0 + 1.75, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 19 (13/16): Najczęstsze Błędy w SOSTAC
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "NAJCZĘSTSZE BŁĘDY",
  title: "Cztery sposoby, żeby SOSTAC nic nie dał",
  subtitle: "Zapamiętaj: zacznij od Sytuacji, nie od Taktyk. Zatrzymaj się na każdym etapie.",
  time: "10:33 · Slajd 19 / 85",
  say: "Zanim przejdziemy do ćwiczenia, podsumujmy cztery błędy, które najczęściej pozbawiają SOSTAC jego wartości. Pierwszy i najpoważniejszy: zaczynanie od taktyk — 'Co robimy na Instagramie?' zamiast 'Gdzie jesteśmy i gdzie chcemy być?'. Drugi błąd: słaby etap Strategia — gdy w rubryce Strategia pojawia się lista kanałów, nie decyzja o priorytetach. Strategia musi zawierać wybory. Trzeci błąd: Kontrola traktowana jako opcja, 'jeśli zostanie czas' — bez zaplanowanych KPI, bez dashboardu. Czwarty błąd: traktowanie SOSTAC jak dokumentu rocznego — SOSTAC jest narzędziem do 90-dniowych cykli adaptacyjnych. Jeśli będziecie pamiętać tylko jedną rzecz z tego bloku — to to: zacznij od Sytuacji, nie od Taktyk. Zatrzymaj się na każdym etapie. I wróć do Sytuacji po każdym cyklu Kontroli.",
  doIt: "Odsłoń cztery bloki błędów sekwencyjnie. Przy każdym zatrzymaj się na 5-8 sekund. Na koniec zostaw wszystkie widoczne i zapowiedz przejście do warsztatu.",
  watch: "Czy uczestnicy kiwnęli głową lub uśmiechnęli się przy którymś z błędów? — to sygnał, że rozpoznają go z własnego doświadczenia.",
}, n, TOTAL, (s, pres) => {
  L.drawGrid(s, pres, {
    rows: 2, colsN: 2, gridY: 2.1, gridYEnd: H - 0.9,
    items: [
      { label: "! BŁĄD #1", title: "Taktyki jako pierwszy krok", body: "'Co robimy na TikToku?' przed 'Gdzie jesteśmy?'. Planujesz trasę bez wiedzy, skąd startujesz.", accent: C.red },
      { label: "! BŁĄD #2", title: "Słaba Strategia = lista kanałów", body: "Strategia musi zawierać wybory: co robimy, czego świadomie odpuszczamy. Lista to nie decyzja.", accent: C.red },
      { label: "! BŁĄD #3", title: "Kontrola jako dodatek", body: "'Zmierzymy, jak będzie czas' = brak Kontroli. KPI i dashboard na początku, nie na końcu.", accent: C.red },
      { label: "! BŁĄD #4", title: "Statyczny plan roczny", body: "SOSTAC to 90-dniowe sprinty, nie dokument raz na rok. Dane napływają — plan musi ewoluować.", accent: C.red },
    ],
  });
});

// =====================================================================
// Slide 20 (14/16): Przejście do Warsztatu 1
// =====================================================================
n++;
{
  const s = L.makeTitleSlide(pres, {
    eyebrow: "WARSZTAT 1 · 30 MIN",
    title: "Czas na ćwiczenia",
    subtitle: "Audyt Sytuacyjny SOSTAC — dla waszej wybranej marki",
    meta: "Ta sama marka przez cały dzień · przez wszystkie cztery ćwiczenia",
    accent: C.amber,
    time: "10:36 · Slajd 20 / 85",
    say: "Dobra — mamy za sobą teorię SOSTAC. Teraz czas, żeby ją zastosować. Przez następne trzydzieści minut każda grupa wykona audyt sytuacyjny dla marki, którą wybierzecie na ćwiczenie otwierające. Na następnym slajdzie zobaczycie dokładne instrukcje i przykład wypełnionej planszy. Jedna ważna informacja zanim zaczniemy: marka, którą wybieracie teraz, będzie waszą marką przez cały dzień. We wszystkich czterech ćwiczeniach będziecie analizować tę samą markę — żebyście na koniec dnia mieli prawie kompletny plan marketingu cyfrowego jako konkretny wynik pracy. Więc dobrze przemyślcie wybór — i zdecydujcie teraz.",
    doIt: "Wyświetl slajd. Daj uczestnikom 30 sekund ciszy — pozwól grupom omówić wybór marki. Następnie przejdź do slajdu 21.",
    watch: "Czy grupy już rozmawiają między sobą o wyborze marki? Jeśli ktoś pyta o markę spoza listy — odpowiedz tak, jeśli to marka znana grupie i mająca cyfrową obecność.",
  }, n, TOTAL);
}

// =====================================================================
// Slide 21 (15/16): Warsztat 1 — Instrukcja
// =====================================================================
n++;
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  s.addText("WARSZTAT 1 · 30 MIN · CANVA WHITEBOARD", {
    x: 0.6, y: 0.4, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 4, color: C.amber,
  });
  s.addText("Audyt Sytuacyjny SOSTAC", {
    x: 0.6, y: 0.7, w: W - 1.2, h: 0.8,
    fontFace: FONT_H, fontSize: 32, bold: true, color: C.white,
  });

  const blocks = [
    { label: "ZADANIE", content: "Uzupełnijcie planszę SOSTAC dla wybranej marki — skupcie się głównie na kolumnie Sytuacja.", accent: C.amber },
    { label: "CZAS / OUTPUT", content: "30 minut · do 11:00. Wynik: plansza SOSTAC z sześcioma sekcjami, z naciskiem na kolumnę Sytuacja.", accent: C.teal },
    { label: "NARZĘDZIE", content: "Canva Whiteboard — wejdźcie przez QR kod poniżej.", accent: C.reach },
  ];
  const blockH = 0.95;
  blocks.forEach((b, i) => {
    const y = 1.8 + i * (blockH + 0.12);
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 8.2, h: blockH,
      fill: { color: "1A2F4F" }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 0.12, h: blockH,
      fill: { color: b.accent }, line: { type: "none" },
    });
    s.addText(b.label, {
      x: 0.85, y: y + 0.08, w: 3.0, h: 0.3,
      fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: b.accent, margin: 0,
    });
    s.addText(b.content, {
      x: 0.85, y: y + 0.35, w: 7.9, h: 0.55,
      fontFace: FONT_B, fontSize: 14, color: C.white, valign: "top", margin: 0,
    });
  });

  // Warning box
  const wy = 1.8 + 3 * (blockH + 0.12) + 0.1;
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: wy, w: 8.2, h: 1.15,
    fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText("WAŻNE · zasada jednej marki", {
    x: 0.85, y: wy + 0.1, w: 7.9, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.darkBg, margin: 0,
  });
  s.addText("Wybierzcie teraz markę. Będziecie jej używać przez cały dzień — we wszystkich czterech ćwiczeniach.", {
    x: 0.85, y: wy + 0.35, w: 7.9, h: 0.75,
    fontFace: FONT_H, fontSize: 15, bold: true, color: C.darkBg, valign: "top", margin: 0,
  });

  // Right side: QR placeholder + brand list
  s.addShape(pres.shapes.RECTANGLE, {
    x: 9.2, y: 1.8, w: 3.5, h: 3.2,
    fill: { color: C.white }, line: { type: "none" },
  });
  s.addText("[ QR KOD\nCanva Whiteboard ]", {
    x: 9.2, y: 1.8, w: 3.5, h: 3.2,
    fontFace: FONT_B, fontSize: 14, italic: true, color: C.inkFaint,
    align: "center", valign: "middle", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 9.2, y: 5.1, w: 3.5, h: 1.55,
    fill: { color: "1A2F4F" }, line: { type: "none" },
  });
  s.addText("PROPOZYCJE MAREK", {
    x: 9.35, y: 5.2, w: 3.3, h: 0.25,
    fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 3, color: C.amber, margin: 0,
  });
  s.addText("InPost · Żabka · mBank · Zalando Poland · lub marka z waszej branży", {
    x: 9.35, y: 5.45, w: 3.3, h: 0.9,
    fontFace: FONT_B, fontSize: 12, color: C.white, valign: "top", margin: 0,
  });
  s.addText("Allegro — zarezerwowane jako przykład roboczy", {
    x: 9.35, y: 6.3, w: 3.3, h: 0.3,
    fontFace: FONT_B, fontSize: 9, italic: true, color: "B0B8C4", margin: 0,
  });

  L.slideNum(s, n, TOTAL, true);
  L.addNotes(s, {
    time: "10:38 · Slajd 21 / 85",
    setup: "Sprawdź, czy link Canva Whiteboard jest aktywny i wyświetla się poprawnie. Czy QR kod jest czytelny z tylnych rzędów? Potwierdź, że plansza ma sześć kolumn z polskimi etykietami i przykład wstępnie wypełniony dla Żabki (kolumna Sytuacja: 2-4 karteczki). Sprawdź, czy każda grupa ma przynajmniej jedno urządzenie. Ustaw widoczny timer na 30 minut.",
    say: "Oto instrukcja do Warsztatu pierwszego. Wasze zadanie to uzupełnienie planszy SOSTAC dla wybranej marki — główny nacisk kładziemy na kolumnę Sytuacja, bo to jest fundament całego planu. Pozostałe pięć kolumn wypełniajcie w miarę możliwości, ale Sytuacja jest priorytetem. Macie trzydzieści minut — do jedenastej. Wejdźcie na tablicę Canva Whiteboard przez QR kod na ekranie. Pamiętajcie: marka, którą wybieracie teraz, będzie waszą marką przez cały dzień. Proponujemy: InPost, Żabka, mBank, Zalando Poland — albo marka, którą dobrze znacie. Allegro jest zarezerwowane jako przykład roboczy — grupy nie wybierają Allegro jako swojej marki roboczej.",
    doIt: "Wyświetl slajd. Wskaż QR kod i poczekaj, aż wszystkie grupy połączą się z tablicą. Uruchom timer widoczny dla uczestników. Chodź między grupami podczas ćwiczenia. Prompty facilitatora: (a) Kontrola: 'Co CEO tej marki sprawdza w poniedziałek rano?'; (b) Strategia: 'Strategia to nie lista kanałów — jakim jednym wielkim zakładem ta marka stawia ponad wszystkie inne?'; (c) Tempo: 'Cel to 3-5 karteczek na sekcję — szukamy szerokości, nie głębokości.'",
    watch: "Czy wszystkie grupy aktywnie dodają karteczki? Czy jakaś grupa zatknęła się na jednej sekcji zbyt długo? Monitoruj równomierność pracy. Notuj interesujące obserwacje o marce do debriefingu.",
    debrief: "'Co było najtrudniejsze do zanalizowania — Klient, Konkurenci, Firma czy PESTEL? Dlaczego?' · 'Jakich informacji brakowało wam do rzetelnej analizy Sytuacji? Skąd byście je pozyskali?' · 'Co diagnoza Sytuacji sugeruje wam o strategii marketingowej tej marki?'",
    extension: "'Gdyby główny cel tej marki przesunął się z pozyskiwania nowych klientów na utrzymanie obecnych — co zmieniłoby się w waszej analizie Sytuacji?'",
  });
}

// =====================================================================
// Slide 22 (16/16): Warsztat 1 — Przykład (Żabka Situation Audit)
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "WARSZTAT 1 · PRZYKŁAD ROBOCZY",
  title: "Żabka — wypełniona kolumna Sytuacja",
  subtitle: "Wzór formatu karteczek dla waszej własnej analizy. Krótkie, konkretne, źródłowane.",
  time: "10:42 · Slajd 22 / 85",
  setup: "Potwierdź jeszcze raz, że timer jest uruchomiony i widoczny. Upewnij się, że przykład Żabki jest widoczny na slajdzie — nie na tablicy Canva (żeby grupy pracowały na własnych sekcjach).",
  say: "To jest przykład, jak powinna wyglądać wypełniona kolumna Sytuacja — w tym przypadku dla Żabki. Zauważcie, że karteczki są konkretne, ale zwięzłe — jedna obserwacja, jedno zdanie. To nie jest miejsce na elaboraty — to miejsce na kluczowe fakty i wnioski, które kształtują resztę planu. Wasze grupy mają teraz dostęp do pustej planszy na tablicy Canva — zróbcie to samo dla swojej marki. Pamiętajcie, że skupiamy się przede wszystkim na kolumnie Sytuacja, ale możecie i powinniście dodawać notatki do pozostałych pięciu kolumn, jeśli macie pomysły. Startujemy — macie trzydzieści minut.",
  doIt: "Wyświetl slajd z przykładem Żabki. Wskaż karteczki w kolumnie Sytuacja, czytając każdą krótko. Podkreśl format: krótkie, konkretne obserwacje z oznaczeniem kategorii (Klient, Konkurenci, Firma, PESTEL). Następnie daj grupom sygnał do startu.",
  watch: "Obserwuj, czy grupy zaczynają kopiować format karteczek z przykładu — to dobry znak. Monitoruj, czy wszystkie grupy pracują na Canva, a nie tylko dyskutują bez wpisywania. Jeśli grupy kończą wcześniej — zadaj pytanie rozszerzające.",
}, n, TOTAL, (s, pres) => {
  // Board: 6 columns, column 1 much wider and filled; rest narrow and mostly empty
  const y0 = 2.1;
  const boardH = H - y0 - 1.2;
  const boardY = y0;
  // Column 1: Sytuacja — wide
  const col1W = 5.2;
  const narrowW = (W - 1.2 - col1W - 0.15 * 4) / 5; // 5 narrow columns
  const gap = 0.15;

  // Column 1 header
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: boardY, w: col1W, h: 0.55,
    fill: { color: C.sit }, line: { type: "none" },
  });
  s.addText("S — SYTUACJA (główna strefa pracy)", {
    x: 0.75, y: boardY, w: col1W - 0.3, h: 0.55,
    fontFace: FONT_H, fontSize: 14, bold: true, color: C.white,
    valign: "middle", margin: 0,
  });
  // Column 1 body: 4 sticky notes
  const notes = [
    { cat: "KLIENT", txt: "700 mln+ wizyt rocznie. Klient szuka wygody i szybkości — coraz częściej oczekuje personalizacji.", src: "Żabka Group / Gemius" },
    { cat: "KONKURENCI", txt: "Biedronka (fizyczna sieć), Delikatesy Centrum, rosnące e-grocery (Lisek, Swyft).", src: "analiza FMCG PL 2024" },
    { cat: "FIRMA", txt: "10 000+ lokalizacji. Żappka: 10M pobrań, 4M aktywnych użytkowników — silna baza danych.", src: "FutureMind case study" },
    { cat: "PESTEL", txt: "Wzrost oczekiwań convenience (T), rosnące koszty pracy (E), regulacje sklepów autonomicznych (P).", src: "Microsoft Customer Stories" },
  ];
  const noteH = (boardH - 0.65) / notes.length - 0.08;
  notes.forEach((nt, i) => {
    const ny = boardY + 0.65 + i * (noteH + 0.08);
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.75, y: ny, w: col1W - 0.3, h: noteH,
      fill: { color: "E3F0FC" }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.75, y: ny, w: 0.08, h: noteH,
      fill: { color: C.sit }, line: { type: "none" },
    });
    s.addText(nt.cat, {
      x: 0.9, y: ny + 0.05, w: col1W - 0.55, h: 0.25,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: C.sit, margin: 0,
    });
    // Body text fills remaining card height — no source line per card (sources consolidated below)
    s.addText(nt.txt, {
      x: 0.9, y: ny + 0.3, w: col1W - 0.55, h: noteH - 0.35,
      fontFace: FONT_B, fontSize: 12, color: C.ink, valign: "top", margin: 0,
    });
  });

  // Columns 2-6: narrow
  const narrowCols = [
    { l: "O — Cele", c: C.obj },
    { l: "S — Strategia", c: C.strat },
    { l: "T — Taktyki", c: C.tac },
    { l: "A — Działania", c: C.act2 },
    { l: "C — Kontrola", c: C.ctrl },
  ];
  let xc = 0.6 + col1W + gap;
  narrowCols.forEach((nc, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: xc, y: boardY, w: narrowW, h: 0.55,
      fill: { color: nc.c }, line: { type: "none" },
    });
    s.addText(nc.l, {
      x: xc, y: boardY, w: narrowW, h: 0.55,
      fontFace: FONT_H, fontSize: 11, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: xc, y: boardY + 0.65, w: narrowW, h: boardH - 0.65,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addText("(wasza praca)", {
      x: xc, y: boardY + 0.65, w: narrowW, h: boardH - 0.65,
      fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint,
      align: "center", valign: "middle", margin: 0,
    });
    xc += narrowW + gap;
  });
  // Consolidated source attribution — single line, above the slide footer
  s.addText("Źródła: Żabka Group · Gemius · FutureMind case study · Microsoft Customer Stories · analiza FMCG PL 2024", {
    x: 0.6, y: H - 0.85, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "left",
  });
});

pres.writeFile({ fileName: "/home/claude/decks/02-sostac.pptx" })
  .then((fn) => console.log("Wrote:", fn));
