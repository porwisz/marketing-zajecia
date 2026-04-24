// Block 5: Kanały + Budżet + Workshop 4 — Slides 61-75 (15:15-16:35)
const pptxgen = require("pptxgenjs");
const L = require("./build");
const { C, W, H, FONT_H, FONT_B } = L;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Strategia Marketingu Cyfrowego — Blok 5: Kanały + Budżet";

const TOTAL = 15;
let n = 0;

// =====================================================================
// Slide 61 (1/15): Przerwa 15 min
// =====================================================================
n++;
L.makeBreakSlide(pres, {
  title: "Przerwa 15 minut",
  subtitle: "Do zobaczenia o 15:30",
  footer: "Ostatni blok: kanały, budżet, i ćwiczenie 4 — największe wyzwanie dnia.",
  time: "15:15 · Slajd 61 / 85",
  say: "Ostatnia przerwa dnia — piętnaście minut. Wróćcie o piętnastej trzydzieści. Po przerwie zajmiemy się kanałami cyfrowymi w polskim kontekście, alokacją budżetu i wieńczącym wszystko ćwiczeniem czwartym — najtrudniejszym, ale też najbardziej wartościowym.",
  doIt: "Wyświetl slajd. Ustaw timer 15 min. Podczas przerwy przejrzyj CVP zbudowane w Ćwiczeniu 3 — wybierz 1-2 najmocniejsze do przywołania po przerwie.",
  watch: "Energia po ćwiczeniu 3 może być wysoka (grupy mają flow) lub zmęczona (bloki popołudniowe). Oceń nastrój — jeśli zmęczenie wyraźne, zaplanuj więcej interakcji w bloku 5.",
}, n, TOTAL);

// =====================================================================
// Slide 62 (2/15): Witamy Po Przerwie — Kanały i Budżet Context
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "LECTURE BLOCK 4 · KANAŁY + BUDŻET",
  title: "Od 'co chcemy powiedzieć' do 'gdzie i za ile'",
  subtitle: "Trzy pytania tego bloku: jakimi kanałami dotrzeć? Jak rozdzielić budżet? Jak wiedzieć, że działa?",
  time: "15:30 · Slajd 62 / 85",
  say: "Witajcie z powrotem. Macie już CVP dla waszej marki — teraz pytanie brzmi: gdzie dotrzeć z tą propozycją i za ile? W tym bloku zajmiemy się trzema pytaniami. Po pierwsze: jakimi kanałami dotrzeć do waszego klienta? Zbudujemy macierz kanał × RACE, gdzie pokażemy, który kanał pracuje na który etap. Po drugie: jak rozdzielić budżet między kanały? Pokażę wam benchmarki ROI dla polskiego rynku — dane z IAB Polska, Smart Insights, raportów branżowych. Po trzecie: jak wiedzieć, że inwestycja działa? Atrybucja, pomiar, 90-dniowy cykl rewizji. Na końcu bloku — ćwiczenie czwarte: macie 200 000 złotych budżetu na kwartał. Rozdzielcie go między cztery etapy RACE dla waszej marki. I uzasadnijcie każdą złotówkę.",
  doIt: "Odsłoń trzy pytania kolejno. Zaznacz: 'To najbardziej praktyczny blok dnia — każdy slajd kończymy pytaniem ''jak to stosuje się do waszej marki?''.'",
  watch: "Czy uczestnicy wracają z ćwiczenia 3 z energią? Jeśli grupy są cicho — uruchom tempo szybko. Jeśli energia wysoka — daj jej przestrzeń.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const questions = [
    { num: "01", label: "KANAŁY", title: "Gdzie dotrzeć do klienta?", body: "Polski rynek cyfrowy: 89,8% penetracji, 34,5 mln użytkowników. Który kanał dla której roli w RACE?", c: C.reach },
    { num: "02", label: "BUDŻET", title: "Jak rozdzielić pieniądze?", body: "ROI benchmarki: email $36–$50, influencer $5,20. 9,2 mld PLN wydatków cyfrowych w PL (IAB 2024).", c: C.convert },
    { num: "03", label: "POMIAR", title: "Jak wiedzieć, że działa?", body: "Atrybucja wieloźródłowa, 90-dniowy cykl rewizji, dashboard per etap RACE.", c: C.engage },
  ];
  const cellW = (W - 1.2 - 0.4) / 3;
  questions.forEach((q, i) => {
    const x = 0.6 + i * (cellW + 0.2);
    const cellH = 3.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: 0.6,
      fill: { color: q.c }, line: { type: "none" },
    });
    s.addText(q.num, {
      x: x + 0.2, y: y0, w: 1.0, h: 0.6,
      fontFace: FONT_H, fontSize: 20, bold: true, color: C.white,
      valign: "middle", margin: 0,
    });
    s.addText(q.label, {
      x: x + cellW - 1.8, y: y0, w: 1.6, h: 0.6,
      fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.white,
      valign: "middle", align: "right", margin: 0,
    });
    s.addText(q.title, {
      x: x + 0.25, y: y0 + 0.85, w: cellW - 0.5, h: 0.9,
      fontFace: FONT_H, fontSize: 20, bold: true, color: C.ink, margin: 0,
    });
    s.addText(q.body, {
      x: x + 0.25, y: y0 + 1.85, w: cellW - 0.5, h: cellH - 2.0,
      fontFace: FONT_B, fontSize: 13, color: C.inkMute, valign: "top", margin: 0,
    });
  });
  s.addText("Na koniec — Ćwiczenie 4: 200 000 PLN budżetu na kwartał. Jak rozdzielicie między etapy RACE?", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 14, italic: true, bold: true, color: C.amber, align: "center",
  });
});

// =====================================================================
// Slide 63 (3/15): Polski Rynek Cyfrowy — Kontekst
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "POLSKI RYNEK CYFROWY · KONTEKST",
  title: "34,5 mln użytkowników · 89,8% penetracji · 62,7% mobile",
  subtitle: "Polska nie jest 'mniejszą wersją Niemiec'. Mobile-first, BLIK-first, paczkomat-first — z własnymi preferencjami platform.",
  time: "15:33 · Slajd 63 / 85",
  say: "Zacznijmy od liczb, które kształtują każdą decyzję kanałową w Polsce. Trzydzieści cztery i pół miliona użytkowników internetu, co daje prawie dziewięćdziesiąt procent penetracji — jeden z najwyższych wskaźników w Europie. Ale co jest istotniejsze: ponad sześćdziesiąt dwa procent ruchu to urządzenia mobilne. Polska nie jest rynkiem 'desktop-first z mobile jako dodatkiem' — jest na odwrót. Jeśli wasz sklep, landing page, email nie są zoptymalizowane mobilnie, tracicie większość klientów. Kolejna rzecz: Polacy spędzają online średnio sześć godzin trzydzieści pięć minut dziennie. To więcej niż średnia europejska. Sklepów online jest ponad osiemdziesiąt osiem tysięcy — konkurencja jest gęsta. To nie jest rynek, który można obsługiwać strategią 'mniejszej wersji Niemiec'. Polska ma własne preferencje: BLIK, Paczkomat, Allegro — o nich za chwilę.",
  doIt: "Odsłaniaj liczby po kolei. Przy mobile podkreśl: 'Desktop-first to dziś luksus, na który nie stać większości marek.' Przy 6h35m spędzonym online — zapytaj uczestników, ile oni spędzają.",
  watch: "Jeśli uczestnicy są zdziwieni liczbami — dobry sygnał, że intuicja się rozmija z danymi. Jeśli przyjmują bez reakcji — zadaj pytanie ''w której branży te liczby zaskakują cię najbardziej?''",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const stats = [
    { big: "34,5 mln", label: "użytkowników internetu", sub: "Gemius/PBI 2024", c: C.reach },
    { big: "89,8%", label: "penetracji populacji", sub: "jedna z najwyższych w UE", c: C.act },
    { big: "62,7%", label: "ruchu = mobile", sub: "mobile-first, nie desktop", c: C.convert },
    { big: "6h 35m", label: "online dziennie", sub: "powyżej średniej europejskiej", c: C.engage },
  ];
  const cellW = (W - 1.2 - 0.3 * 3) / 4;
  stats.forEach((st, i) => {
    const x = 0.6 + i * (cellW + 0.3);
    const cellH = 3.3;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: 0.15,
      fill: { color: st.c }, line: { type: "none" },
    });
    s.addText(st.big, {
      x, y: y0 + 0.5, w: cellW, h: 1.3,
      fontFace: FONT_H, fontSize: 42, bold: true, color: st.c,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(st.label, {
      x: x + 0.2, y: y0 + 1.9, w: cellW - 0.4, h: 0.7,
      fontFace: FONT_H, fontSize: 15, bold: true, color: C.ink,
      align: "center", valign: "top", margin: 0,
    });
    s.addText(st.sub, {
      x: x + 0.2, y: y0 + 2.6, w: cellW - 0.4, h: 0.5,
      fontFace: FONT_B, fontSize: 11, italic: true, color: C.inkMute,
      align: "center", valign: "top", margin: 0,
    });
  });
  s.addText("Konsekwencja: mobile-first to nie opcja. 88 000+ sklepów online — konkurencja gęsta, różnicowanie kluczowe.", {
    x: 0.6, y: H - 1.1, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.teal, align: "center",
  });
  s.addText("Źródła: Gemius/PBI Mediapanel 2024 · DataReportal Digital 2025 Poland · IAB Polska", {
    x: 0.6, y: H - 0.75, w: W - 1.2, h: 0.25,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 64 (4/15): Polski E-commerce — Co Wyróżnia
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "POLSKI E-COMMERCE · 3 FENOMENY",
  title: "BLIK. Paczkomat. Allegro. Każdy wyjątkowo polski.",
  subtitle: 'Tu jesteśmy innowacyjni globalnie — a wielu marketerów traktuje je jak "dodatki".',
  time: "15:36 · Slajd 64 / 85",
  say: "Trzy polskie fenomeny, które każda marka w Polsce musi rozumieć — bo stanowią fundamenty oczekiwań konsumenta, nie luksusowe dodatki. BLIK — sześćdziesiąt osiem procent kupujących online używa BLIK-a, wzrost o pięć punktów procentowych rok do roku. Wielu marketerów nadal traktuje BLIK jako jedną z opcji płatności, obok karty i przelewu. To błąd — brak BLIK-a na stronie to dziś sygnał dla polskiego klienta, że marka nie rozumie rynku. Paczkomat — osiemdziesiąt jeden procent Polaków woli odbiór przez paczkomat, osiemdziesiąt cztery procent deklaruje większą skłonność do zakupu, jeśli dostępny. Nie jest to kwestia preferencji — to kwestia, czy transakcja w ogóle się odbędzie. Allegro — czterdzieści pięć do pięćdziesięciu procent rynku e-commerce w Polsce. Dla porównania: Amazon ma osiemdziesiąt pięć procent. To nie są konkurenci — to są giganty lokalne.",
  doIt: "Odsłaniaj trzy bloki po kolei. Przy każdym zapytaj: 'Ilu z was to uwzględnia w strategii dla waszej marki?'",
  watch: "Jeśli ktoś mówi ''Amazon jest większy'' — ''Owszem, ale nie w Polsce. Tu Allegro ma dominującą pozycję — i bez obecności na Allegro lub konkurowania z Allegro strategia e-commerce dla polskiego klienta jest niekompletna.''",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.3;
  const items = [
    {
      name: "BLIK", stat: "68%", substat: "kupujących online · +5pp r/r",
      body: "Brak BLIK-a na stronie = sygnał dla polskiego klienta, że marka nie rozumie rynku.",
      c: C.convert,
    },
    {
      name: "PACZKOMAT", stat: "81%", substat: "woli odbiór przez paczkomat · 84% kupuje chętniej, jeśli dostępny",
      body: "To nie kwestia preferencji — to kwestia, czy transakcja w ogóle się odbędzie.",
      c: C.act,
    },
    {
      name: "ALLEGRO", stat: "45–50%", substat: "rynku e-commerce w Polsce",
      body: "Bez obecności na Allegro lub świadomego konkurowania z Allegro strategia e-commerce jest niekompletna.",
      c: C.amber,
    },
  ];
  const cellW = (W - 1.2 - 0.4) / 3;
  items.forEach((it, i) => {
    const x = 0.6 + i * (cellW + 0.2);
    const cellH = 4.1;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: 0.6,
      fill: { color: it.c }, line: { type: "none" },
    });
    s.addText(it.name, {
      x, y: y0, w: cellW, h: 0.6,
      fontFace: FONT_H, fontSize: 18, bold: true, charSpacing: 2, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(it.stat, {
      x, y: y0 + 0.85, w: cellW, h: 1.2,
      fontFace: FONT_H, fontSize: 56, bold: true, color: it.c,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(it.substat, {
      x: x + 0.25, y: y0 + 2.15, w: cellW - 0.5, h: 0.7,
      fontFace: FONT_B, fontSize: 12, italic: true, color: C.inkMute,
      align: "center", valign: "top", margin: 0,
    });
    s.addText(it.body, {
      x: x + 0.3, y: y0 + 2.95, w: cellW - 0.6, h: 1.0,
      fontFace: FONT_B, fontSize: 13, color: C.ink,
      align: "center", valign: "top", margin: 0,
    });
  });
  s.addText("Źródła: IAB Polska E-commerce 2024 · Gemius · Statista 2024", {
    x: 0.6, y: H - 0.75, w: W - 1.2, h: 0.25,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 65 (5/15): Model Owned / Earned / Paid
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "OWNED · EARNED · PAID",
  title: "Trzy rodzaje kanałów — trzy ekonomiki, trzy kompetencje",
  subtitle: "Balans między nimi = strategia. Wszystko Paid = koszt bez dźwigni. Wszystko Owned = brak nowego zasięgu.",
  time: "15:39 · Slajd 65 / 85",
  say: "Kanały cyfrowe dzielimy na trzy rodzaje — to fundament alokacji budżetu, którą zaraz zobaczymy. Owned — kanały, nad którymi mamy pełną kontrolę. Strona, blog, aplikacja, baza email, konta w social media. Nie płacimy za dystrybucję. Earned — zasięg, na który zapracowaliśmy jakością. PR, recenzje, organiczne wzmianki, user-generated content, viral. Nie płacimy za dystrybucję, ale musimy zapracować na zaufanie. Paid — media, za które płacimy bezpośrednio. Google Ads, Meta Ads, influencer marketing kontraktowy, display. Płacimy, dostajemy zasięg — ale tylko na czas trwania kampanii. Balans między nimi to strategia. Wszystko Paid — koszt bez dźwigni, żadna trwała wartość. Wszystko Owned — zerowy napływ nowych klientów. Dojrzała strategia używa Paid do generowania Earned, a Owned konwertuje Earned w długoterminową wartość.",
  doIt: "Odsłaniaj trzy panele. Przy każdym pytaj: 'Jaki procent waszego budżetu idzie tu dziś?' Odpowiedzi zapisują się intuicyjnie — zaznacz, że to wraca w ćwiczeniu 4.",
  watch: "Uczestnicy mylą Owned z 'darmowym'? Skoryguj: 'Owned wymaga inwestycji — w content, w infrastrukturę, w ludzi. Ale nie płacisz za dystrybucję.'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const items = [
    {
      tag: "OWNED", title: "Kanały własne",
      examples: "Strona · blog · aplikacja · baza email · konta social",
      eco: "Inwestycja jednorazowa + koszty stałe",
      c: C.act,
    },
    {
      tag: "EARNED", title: "Zarobiony zasięg",
      examples: "PR · recenzje · wzmianki · UGC · viral",
      eco: "Inwestycja w jakość + reputację",
      c: C.engage,
    },
    {
      tag: "PAID", title: "Media płatne",
      examples: "Google Ads · Meta Ads · influencer kontraktowy · display",
      eco: "Zmienny koszt · zasięg = tylko w trakcie kampanii",
      c: C.convert,
    },
  ];
  const cellW = (W - 1.2 - 0.4) / 3;
  items.forEach((it, i) => {
    const x = 0.6 + i * (cellW + 0.2);
    const cellH = 3.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: 0.18, h: cellH,
      fill: { color: it.c }, line: { type: "none" },
    });
    s.addText(it.tag, {
      x: x + 0.35, y: y0 + 0.2, w: cellW - 0.5, h: 0.35,
      fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 4, color: it.c, margin: 0,
    });
    s.addText(it.title, {
      x: x + 0.35, y: y0 + 0.6, w: cellW - 0.5, h: 0.6,
      fontFace: FONT_H, fontSize: 22, bold: true, color: C.ink, margin: 0,
    });
    s.addText("PRZYKŁADY", {
      x: x + 0.35, y: y0 + 1.35, w: cellW - 0.5, h: 0.3,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: C.inkMute, margin: 0,
    });
    s.addText(it.examples, {
      x: x + 0.35, y: y0 + 1.65, w: cellW - 0.6, h: 1.1,
      fontFace: FONT_B, fontSize: 13, color: C.ink, valign: "top", margin: 0,
    });
    s.addText("EKONOMIKA", {
      x: x + 0.35, y: y0 + 2.7, w: cellW - 0.5, h: 0.3,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: C.inkMute, margin: 0,
    });
    s.addText(it.eco, {
      x: x + 0.35, y: y0 + 3.0, w: cellW - 0.6, h: 0.8,
      fontFace: FONT_B, fontSize: 13, italic: true, color: C.ink, valign: "top", margin: 0,
    });
  });
  s.addText("Dojrzała strategia: Paid generuje Earned · Owned konwertuje Earned w długoterminową wartość.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.navy, align: "center",
  });
});

// =====================================================================
// Slide 66 (6/15): ROI Benchmarki Kanałów
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "ROI BENCHMARKI · KANAŁY CYFROWE",
  title: "Nie wszystkie kanały są sobie równe — różnice 10-krotne",
  subtitle: "Email nadal dominuje. Influencer rośnie. Display płaci za zasięg, nie za konwersję.",
  time: "15:43 · Slajd 66 / 85",
  say: "Dane o zwrocie z inwestycji w kanały cyfrowe różnią się dziesięciokrotnie. Email marketing jest wciąż liderem — zwrot od trzydziestu sześciu do pięćdziesięciu dolarów na każdy zainwestowany dolar. Trzydzieści procent liderów marketingu raportuje najwyższe pasma. Dlaczego? Bo email to właśnie kanał Owned — trafiamy do bazy, która wyraziła zgodę, która nas zna. Influencer marketing — średnio pięć dolarów dwadzieścia centów na dolar. To wciąż znacznie lepiej niż display czy banner. SEO i content marketing — ROI zwykle trzy do ośmiu razy wyższy niż PPC w długim okresie, ale z opóźnieniem sześć do dwunastu miesięcy. PPC jest szybki, ale drogi — to dźwignia, nie fundament. Display i banner — najniższy ROI z mierzalnych kanałów, ale pracują na świadomość. Wnioski: jeśli wasz budżet jest mały, zacznijcie od email. Jeśli średni — dodajcie SEO i influencer.",
  doIt: "Odsłaniaj wiersze. Przy email zatrzymaj się dłużej. Zapytaj: 'Czy wasza marka ma strategię email marketingu godną nazwy?' Obserwuj reakcje.",
  watch: "Jeśli ktoś mówi 'email nie działa w mojej branży' — 'W jakiej branży, dla kogo zbieracie email, z jakim contentem? Email nie działa, kiedy nie ma strategii — działa prawie zawsze, kiedy jest dobrze zrobiony.'",
}, n, TOTAL, (s, pres) => {
  L.drawTable(s, pres, {
    tableY: 2.1,
    tableH: 3.6,
    headers: ["Kanał", "ROI benchmark", "Charakterystyka"],
    colColors: [C.navy, C.teal, C.teal],
    colWs: [3.2, 3.5, W - 1.2 - 6.7],
    rows: [
      ["Email marketing", "$36–$50 / $1", "Najwyższy ROI. Wymaga jakościowej bazy Owned + strategii treści."],
      ["SEO / Content", "3–8× vs PPC (długi horyzont)", "Najlepszy długoterminowy ROI. Wyniki 6–12 mies. od startu."],
      ["Influencer marketing", "$5,20 / $1 (średnia)", "Rośnie szybko. Zależne od dopasowania persona × influencer."],
      ["PPC / Google Ads", "$2 / $1 (średnia)", "Szybki, skalowalny — ale drogi. Dźwignia, nie fundament."],
      ["Display / banner", "$0,50–$2 / $1", "Najniższy mierzalny ROI. Pracuje na świadomość, nie konwersję."],
    ],
    footerNote: "Mały budżet → email. Średni → + SEO + influencer. Duży → + PPC + display.",
    source: "Źródła: Litmus State of Email 2025 · Influencer Marketing Hub 2024 · Smart Insights",
  });
});

// =====================================================================
// Slide 67 (7/15): AI w Marketingu — 89% Adopcja
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "AI W MARKETINGU · ADOPCJA",
  title: '89% marketerów używa AI — ale "AI" to nie jest jedna rzecz',
  subtitle: "Globalne dane. Polski rynek z mniejszą adopcją i większą rezerwą. Cztery zastosowania, różne poziomy dojrzałości.",
  time: "15:47 · Slajd 67 / 85",
  say: "Dziewięćdziesiąt procent — tak, tyle. Dziewięćdziesiąt procent marketerów na świecie deklaruje, że używa sztucznej inteligencji w jakiejś formie. Ale zanim przyjmiecie tę liczbę jako fakt polski — ważny zastrzeżenie. To dane globalne, głównie anglojęzyczne. W Polsce adopcja jest niższa, i rezerwy większe — szczególnie wokół języka polskiego i jakości generatywnej treści, która wciąż nie dorównuje angielskiej. AI to nie jest jedna rzecz — to co najmniej cztery zastosowania. Po pierwsze: generowanie treści — teksty, grafiki, wideo. Tu największa adopcja, ale też największe ryzyko 'AI slop'. Po drugie: personalizacja w czasie rzeczywistym — rekomendacje produktów, dynamiczne treści. Tu AI dojrzały — działa od lat. Po trzecie: analityka predykcyjna — przewidywanie churn, lifetime value. Wymaga ilości danych, którą mają głównie duże marki. Po czwarte: automatyzacja procesów — kampanie, A/B testy, bidding. Tu AI skalowalne, ale nie innowacyjne.",
  doIt: "Odsłoń cztery zastosowania jedno po drugim. Przy każdym zapytaj: 'Ile z was używa tego w praktyce dla polskiego klienta?' Ręka w górę.",
  watch: "Uczestnicy sceptyczni wobec AI? Zaznacz: 'Sceptycyzm = dobra higiena. Ale pamiętajcie: konkurencja używa. Pytanie brzmi, jakie zastosowanie wam realnie przyspiesza pracę, a nie które brzmi imponująco na sprzedaży.'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Big stat with caveat
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 4.5, h: 2.0,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("89%", {
    x: 0.6, y: y0 + 0.1, w: 4.5, h: 1.3,
    fontFace: FONT_H, fontSize: 80, bold: true, color: C.amber,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("marketerów używa AI (globalnie)", {
    x: 0.6, y: y0 + 1.4, w: 4.5, h: 0.5,
    fontFace: FONT_B, fontSize: 13, italic: true, color: "CCD5E0",
    align: "center", margin: 0,
  });
  // Caveat box
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0 + 2.15, w: 4.5, h: 1.4,
    fill: { color: "FFF4E5" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0 + 2.15, w: 0.15, h: 1.4,
    fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText("⚠ POLSKA REZERWA", {
    x: 0.85, y: y0 + 2.25, w: 4.1, h: 0.3,
    fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: C.red, margin: 0,
  });
  s.addText("Dane globalne, głównie anglojęzyczne. Polski rynek: mniejsza adopcja + słabsza jakość gen. treści po polsku.", {
    x: 0.85, y: y0 + 2.55, w: 4.1, h: 0.95,
    fontFace: FONT_B, fontSize: 12, color: C.ink, valign: "top", margin: 0,
  });
  // 4 use cases on right
  const ux = 5.4, uw = W - ux - 0.6;
  const uses = [
    { t: "GENEROWANIE TREŚCI", d: "Teksty, grafiki, wideo. Największa adopcja, największe ryzyko ''AI slop''.", c: C.reach },
    { t: "PERSONALIZACJA W CZASIE RZECZYWISTYM", d: "Rekomendacje, dynamiczne treści. Dojrzałe — działa od lat.", c: C.act },
    { t: "ANALITYKA PREDYKCYJNA", d: "Churn, LTV, segmentacja. Wymaga ilości danych — głównie duże marki.", c: C.convert },
    { t: "AUTOMATYZACJA PROCESÓW", d: "Kampanie, A/B testy, bidding. Skalowalne, nie innowacyjne.", c: C.engage },
  ];
  const rowH = 0.85;
  uses.forEach((u, i) => {
    const uy = y0 + i * (rowH + 0.05);
    s.addShape(pres.shapes.RECTANGLE, {
      x: ux, y: uy, w: uw, h: rowH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: ux, y: uy, w: 0.12, h: rowH,
      fill: { color: u.c }, line: { type: "none" },
    });
    s.addText(u.t, {
      x: ux + 0.25, y: uy + 0.05, w: uw - 0.4, h: 0.3,
      fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 2, color: u.c, margin: 0,
    });
    s.addText(u.d, {
      x: ux + 0.25, y: uy + 0.35, w: uw - 0.4, h: 0.5,
      fontFace: FONT_B, fontSize: 12, color: C.ink, valign: "top", margin: 0,
    });
  });
  s.addText("Źródło: Salesforce State of Marketing 2025 · zastrzeżenie: dane globalne", {
    x: 0.6, y: H - 0.75, w: W - 1.2, h: 0.25,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 68 (8/15): Macierz Kanał × RACE
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "KANAŁ × RACE · MACIERZ",
  title: "Każdy kanał ma swoją najlepszą rolę w RACE",
  subtitle: "Nie wszystkie kanały robią wszystko dobrze. Ta macierz = podstawa decyzji o alokacji.",
  time: "15:51 · Slajd 68 / 85",
  say: "Najważniejszy slajd bloku — macierz kanał razy RACE. Pokazuje, który kanał jest najmocniejszy dla której roli. SEO i PR — silni w Zasięgu, słabi w Konwersji. Email marketing — odwrotnie: słaby w Zasięgu, wybitny w Konwersji i Zaangażowaniu. Influencer — silny w Zasięgu i Aktywacji, słabszy w Konwersji. Google Ads — balans Aktywacja i Konwersja. Retargeting — wyłącznie Konwersja. Program lojalnościowy — wyłącznie Zaangażowanie. Wniosek strategiczny: kiedy ktoś mówi ''zrobimy kampanię na TikToku'' — zadajcie pytanie 'na którym etapie RACE?'. Bo TikTok generuje Zasięg, ale prawie nie generuje bezpośredniej Konwersji. Ta macierz będzie wam towarzyszyć w Ćwiczeniu 4 — bez niej decyzja o alokacji budżetu to zgadywanie. Z nią — uzasadniona hipoteza.",
  doIt: "Wyświetl macierz w całości. Wskaż wiersz email — mocny w dwóch etapach. Wskaż wiersz influencer — dwie komórki. Poproś uczestników o zdjęcie — ''ten slajd potrzebujecie do ćwiczenia 4''.",
  watch: "Zdjęcia? Dobry znak. Pytania o ''a co z PR?'' lub ''a webinar?'' — ''Macierz jest wzorcem — dostosujcie do kanałów, które realnie używacie. Nie zastępuje myślenia, daje strukturę.''",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const channels = [
    { name: "SEO", r: "●●●", a: "●●", c: "●", e: "●" },
    { name: "PR", r: "●●●", a: "●●", c: "○", e: "●" },
    { name: "Content marketing", r: "●●", a: "●●●", c: "●●", e: "●●" },
    { name: "Google Ads (PPC)", r: "●●", a: "●●●", c: "●●●", e: "○" },
    { name: "Social media organic", r: "●●", a: "●●", c: "●", e: "●●" },
    { name: "Influencer marketing", r: "●●●", a: "●●", c: "●●", e: "●" },
    { name: "Email marketing", r: "○", a: "●●", c: "●●●", e: "●●●" },
    { name: "Retargeting", r: "○", a: "●", c: "●●●", e: "●" },
    { name: "Program lojalnościowy", r: "○", a: "●", c: "●●", e: "●●●" },
  ];
  // Header
  const headerColors = [C.navy, C.reach, C.act, C.convert, C.engage];
  const headers = ["Kanał", "Reach", "Act", "Convert", "Engage"];
  const colW = [4.0, (W - 1.2 - 4.0) / 4, (W - 1.2 - 4.0) / 4, (W - 1.2 - 4.0) / 4, (W - 1.2 - 4.0) / 4];
  let xh = 0.6;
  headers.forEach((h, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: xh, y: y0, w: colW[i] - 0.03, h: 0.5,
      fill: { color: headerColors[i] }, line: { type: "none" },
    });
    s.addText(h, {
      x: xh, y: y0, w: colW[i] - 0.03, h: 0.5,
      fontFace: FONT_H, fontSize: 13, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    xh += colW[i];
  });
  // Rows
  const rowH = 0.38;
  channels.forEach((ch, i) => {
    const ry = y0 + 0.55 + i * (rowH + 0.02);
    const fill = i % 2 === 0 ? C.offWhite : C.white;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: ry, w: W - 1.2, h: rowH,
      fill: { color: fill }, line: { type: "none" },
    });
    let xc = 0.6;
    const cells = [ch.name, ch.r, ch.a, ch.c, ch.e];
    cells.forEach((cell, ci) => {
      const colorMap = [C.ink, C.reach, C.act, C.convert, C.engage];
      s.addText(cell, {
        x: xc + 0.1, y: ry, w: colW[ci] - 0.2, h: rowH,
        fontFace: ci === 0 ? FONT_B : FONT_H,
        fontSize: ci === 0 ? 13 : 16, bold: ci === 0, color: colorMap[ci],
        align: ci === 0 ? "left" : "center", valign: "middle", margin: 0,
      });
      xc += colW[ci];
    });
  });
  s.addText("● = silny kanał dla etapu · ○ = słaby lub nieodpowiedni. Macierz dla Ćwiczenia 4 — zróbcie zdjęcie.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 12, italic: true, bold: true, color: C.teal, align: "center",
  });
});

// =====================================================================
// Slide 69 (9/15): Zasady Alokacji Budżetu
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "ALOKACJA BUDŻETU · ZASADY",
  title: "70 / 20 / 10 — równowaga między pewnym a eksperymentem",
  subtitle: "9,2 mld PLN wydatków cyfrowych w PL (IAB 2024). Jak wybrać swój kawałek?",
  time: "15:54 · Slajd 69 / 85",
  say: "Alokacja budżetu to najczęstsze źródło nieefektywności — pieniądze idą tam, gdzie ''zawsze szły'', nie tam, gdzie przynoszą największą wartość. Klasyczna zasada siedemdziesiąt dwadzieścia dziesięć: siedemdziesiąt procent na kanały sprawdzone, dwadzieścia procent na rozwój dobrze zapowiadających się, dziesięć procent na eksperyment. Polska kontekst: Internet Advertising Bureau Polska raportuje dziewięć i dwa miliarda złotych całkowitych wydatków cyfrowych w dwa tysiące dwudziestym czwartym roku. Z tego największy udział ma search — około trzydzieści procent — display i social po około dwadzieścia procent, wideo rośnie najszybciej, dwadzieścia trzy procent wzrostu rocznie. Druga zasada: balans między etapami RACE. Częsty błąd: dziewięćdziesiąt procent na Konwersję, dziesięć na Zasięg — pytanie wtedy brzmi 'kogo konwertujemy?'. Dojrzały budżet rozkłada się proporcjonalnie do długości cyklu sprzedaży: dłuższy cykl = więcej w Zasięgu i Aktywacji. Trzecia zasada: zawsze rezerwujcie dziesięć procent na testowanie — bez eksperymentu nie ma nauki.",
  doIt: "Odsłoń regułę 70/20/10 pierwszą. Potem macierz etapu. Na końcu dane IAB. 'Ile waszej marki idzie dziś na Konwersję vs Zasięg?' Intuicyjne odpowiedzi.",
  watch: "Uczestnicy argumentują ''zarządy chcą widzieć Konwersję'' — ''I dlatego marki, które mają tylko Konwersję, tracą klientów do tych, które inwestują w Zasięg. Wasze zadanie: edukować zarząd o pełnym cyklu.''",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Left: 70/20/10 rule
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.8, h: 4.0,
    fill: { color: C.offWhite }, line: { type: "none" },
  });
  s.addText("ZASADA 70 / 20 / 10", {
    x: 0.8, y: y0 + 0.2, w: 5.4, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.navy, margin: 0,
  });
  const rules = [
    { pct: "70%", label: "SPRAWDZONE", desc: "Kanały z udowodnioną efektywnością dla waszego klienta.", c: C.navy },
    { pct: "20%", label: "ROZWIJAJĄCE SIĘ", desc: "Kanały, które pokazują obietnicę, ale nie są jeszcze optymalizowane.", c: C.teal },
    { pct: "10%", label: "EKSPERYMENT", desc: "Nowe formaty, platformy, podejścia. Bez tego — brak nauki.", c: C.amber },
  ];
  rules.forEach((r, i) => {
    const ry = y0 + 0.75 + i * 1.05;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.8, y: ry, w: 5.4, h: 0.95,
      fill: { color: C.white }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.8, y: ry, w: 0.12, h: 0.95,
      fill: { color: r.c }, line: { type: "none" },
    });
    s.addText(r.pct, {
      x: 1.0, y: ry, w: 1.3, h: 0.95,
      fontFace: FONT_H, fontSize: 30, bold: true, color: r.c,
      valign: "middle", margin: 0,
    });
    s.addText(r.label, {
      x: 2.3, y: ry + 0.1, w: 3.8, h: 0.35,
      fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 2, color: r.c, margin: 0,
    });
    s.addText(r.desc, {
      x: 2.3, y: ry + 0.4, w: 3.8, h: 0.55,
      fontFace: FONT_B, fontSize: 12, color: C.ink, valign: "top", margin: 0,
    });
  });

  // Right: Polish market context
  const rx = 6.8, rw = W - rx - 0.6;
  s.addShape(pres.shapes.RECTANGLE, {
    x: rx, y: y0, w: rw, h: 4.0,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("POLSKI RYNEK · IAB 2024", {
    x: rx + 0.2, y: y0 + 0.2, w: rw - 0.4, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.amber, margin: 0,
  });
  s.addText("9,2 mld zł", {
    x: rx + 0.2, y: y0 + 0.6, w: rw - 0.4, h: 1.0,
    fontFace: FONT_H, fontSize: 48, bold: true, color: C.amber, margin: 0,
  });
  s.addText("całkowite wydatki cyfrowe", {
    x: rx + 0.2, y: y0 + 1.6, w: rw - 0.4, h: 0.35,
    fontFace: FONT_B, fontSize: 13, italic: true, color: "CCD5E0", margin: 0,
  });
  const breakdown = [
    "~30% · Search (Google Ads dominuje)",
    "~20% · Display",
    "~20% · Social (Meta + TikTok rośnie)",
    "Wideo: +23% r/r — najszybsza kategoria",
  ];
  breakdown.forEach((b, i) => {
    s.addText("• " + b, {
      x: rx + 0.25, y: y0 + 2.1 + i * 0.38, w: rw - 0.5, h: 0.35,
      fontFace: FONT_B, fontSize: 12, color: C.white, valign: "middle", margin: 0,
    });
  });
  s.addText("Dojrzały budżet = balans między etapami RACE. Dłuższy cykl zakupu = więcej w Reach + Act.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.teal, align: "center",
  });
  s.addText("Źródło: IAB Polska / PwC AdEx 2024", {
    x: 0.6, y: H - 0.62, w: W - 1.2, h: 0.22,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 70 (10/15): Atrybucja i Pomiar
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "ATRYBUCJA · POMIAR",
  title: 'Last-click kłamie. Wieloźródłowa atrybucja = prawda.',
  subtitle: "Większość polskich marek wciąż mierzy last-click. I dlatego nie docenia Zasięgu i Aktywacji.",
  time: "15:58 · Slajd 70 / 85",
  say: "Ostatni wielki temat bloku — atrybucja. Model atrybucji decyduje, komu przypisujemy zasługę za konwersję. Last-click: cała zasługa idzie do ostatniego kanału przed zakupem. Jest najprostszy — i dlatego dominuje. Jest też kłamstwem — bo ignoruje całą podróż klienta, który najpierw usłyszał o marce na YouTube, potem czytał bloga, potem zobaczył reklamę na Meta, potem wpisał markę w Google i kliknął. Last-click przypisuje wszystko Google. Wniosek nieprawdziwy: ''Google Ads działa, reszta nie''. Modele wieloźródłowe: first-click, linear, time-decay, data-driven — rozdzielają zasługę. Data-driven to najbardziej zaawansowany model — uczy się z danych, które kombinacje kanałów faktycznie prowadzą do konwersji. Większość polskich marek wciąż mierzy last-click — i dlatego niedocenia Zasięgu i Aktywacji. Pytanie strategiczne: jaki model atrybucji ma wasza organizacja? Jeśli nie wiecie — to pierwsze pytanie do analityki jutro.",
  doIt: "Odsłoń diagramy modelów kolejno. Przy data-driven — zaznacz, że wymaga minimum 300 konwersji miesięcznie, więc nie dla wszystkich.",
  watch: "''Jak przejść z last-click na data-driven?'' — ''Stopniowo. GA4 daje data-driven w standardzie. Pierwsze pytanie: czy śledzicie w ogóle cały journey, czy tylko ostatni punkt?''",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Left: warning about last-click
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.2, h: 4.0,
    fill: { color: "FFF0E4" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 0.15, h: 4.0,
    fill: { color: C.red }, line: { type: "none" },
  });
  s.addText("⚠ DOMYŚLNY PROBLEM", {
    x: 0.85, y: y0 + 0.2, w: 4.8, h: 0.35,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 2, color: C.red, margin: 0,
  });
  s.addText("LAST-CLICK", {
    x: 0.85, y: y0 + 0.6, w: 4.8, h: 0.5,
    fontFace: FONT_H, fontSize: 24, bold: true, color: C.ink, margin: 0,
  });
  s.addText("Cała zasługa idzie do ostatniego kanału przed zakupem.", {
    x: 0.85, y: y0 + 1.2, w: 4.8, h: 0.7,
    fontFace: FONT_B, fontSize: 14, italic: true, color: C.inkMute, valign: "top", margin: 0,
  });
  s.addText("KLIENT:", {
    x: 0.85, y: y0 + 2.0, w: 4.8, h: 0.3,
    fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: C.inkMute, margin: 0,
  });
  s.addText("YouTube → blog → Meta Ad → Google search → zakup", {
    x: 0.85, y: y0 + 2.3, w: 4.8, h: 0.5,
    fontFace: FONT_B, fontSize: 13, color: C.ink, valign: "top", margin: 0,
  });
  s.addText("LAST-CLICK MÓWI:", {
    x: 0.85, y: y0 + 2.9, w: 4.8, h: 0.3,
    fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: C.red, margin: 0,
  });
  s.addText('"Google Ads zrobił 100% pracy. Reszta — zero wartości."', {
    x: 0.85, y: y0 + 3.2, w: 4.8, h: 0.7,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.red, valign: "top", margin: 0,
  });
  // Right: 4 attribution models
  const rx = 6.2, rw = W - rx - 0.6;
  s.addText("MODELE WIELOŹRÓDŁOWE", {
    x: rx, y: y0 + 0.1, w: rw, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.teal, margin: 0,
  });
  const models = [
    { t: "First-click", d: "Cała zasługa do pierwszego kontaktu — przecenia Zasięg." },
    { t: "Linear", d: "Równy podział między wszystkie punkty styku — sprawiedliwy, prosty." },
    { t: "Time-decay", d: "Więcej zasługi dla punktów bliżej konwersji — kompromis." },
    { t: "Data-driven ⭐", d: "AI uczy się z danych, co faktycznie prowadzi do konwersji. GA4 w standardzie. Min. 300 konw./mies." },
  ];
  models.forEach((m, i) => {
    const my = y0 + 0.55 + i * 0.85;
    s.addShape(pres.shapes.RECTANGLE, {
      x: rx, y: my, w: rw, h: 0.75,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: rx, y: my, w: 0.1, h: 0.75,
      fill: { color: i === 3 ? C.amber : C.teal }, line: { type: "none" },
    });
    s.addText(m.t, {
      x: rx + 0.2, y: my + 0.05, w: rw - 0.3, h: 0.3,
      fontFace: FONT_H, fontSize: 13, bold: true, color: C.ink, margin: 0,
    });
    s.addText(m.d, {
      x: rx + 0.2, y: my + 0.35, w: rw - 0.3, h: 0.45,
      fontFace: FONT_B, fontSize: 11, color: C.inkMute, valign: "top", margin: 0,
    });
  });
  s.addText("Pytanie do Waszej marki: jaki model atrybucji mamy dziś? Jeśli nie wiecie — to pierwsze pytanie jutro.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.navy, align: "center",
  });
});

// =====================================================================
// Slide 71 (11/15): 90-dniowy Cykl Rewizji
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "CYKL REWIZJI · 90 DNI",
  title: "Kwartał = realny horyzont. Roczny plan = fikcja.",
  subtitle: "Plan marketingu cyfrowego rewidujecie co 90 dni. Inaczej pracujecie na nieaktualnych danych.",
  time: "16:02 · Slajd 71 / 85",
  say: "Ostatni koncept bloku — cykl rewizji. Najczęstszy błąd: marketing tworzy roczny plan w listopadzie, a potem wraca do niego dopiero w następnym listopadzie. W grudniu liczby mówią jedno, w czerwcu rynek mówi co innego — ale plan jest już 'wykonywany'. Dojrzała praktyka — 90-dniowy cykl rewizji. Cztery fazy. Planuj: na początku kwartału ustalamy cele, budżet, KPI. Wykonaj: przez 10-12 tygodni realizujemy. Mierz: cotygodniowy przegląd podstawowych KPI, comiesięczny szczegółowy raport. Dostosuj: na koniec kwartału — co działa, co nie, co przenosimy do następnego cyklu. Kluczowy element: do dziesięciu procent budżetu rezerwujemy na 'adjust' — żebyśmy mogli w trakcie kwartału zwiększyć inwestycję w kanał, który zaskakująco działa. Bez tego 'adjust' jest pozorny. Ten cykl brzmi prosto. W praktyce wymaga dyscypliny i narzędzi pomiarowych. Ale odróżnia marki, które rosną cyfrowo, od tych, które kopiują plany rok do roku.",
  doIt: "Wyświetl diagram 4 faz. Zaznacz: 'Rozróżniamy cykl kwartalny od rocznego planowania strategicznego — strategia marki jest na horyzont 5-10 lat, egzekucja jest 90-dniowa.' Link do slajdu 47 — trzy poziomy strategii.",
  watch: "''Mamy tylko roczny plan'' — ''To normalne. Pytanie: czy robicie kwartalne przeglądy, nawet jeśli plan jest roczny? To minimum. Maksimum: kwartalny plan z rocznymi celami strategicznymi.''",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.3;
  const phases = [
    { n: "01", t: "PLANUJ", d: "Cele, budżet, KPI per etap RACE. Macierz kanał × RACE.", c: C.reach, days: "Tydzień 1" },
    { n: "02", t: "WYKONAJ", d: "Realizacja. Cotygodniowe status checki. Zespół w rytmie.", c: C.act, days: "Tygodnie 2–11" },
    { n: "03", t: "MIERZ", d: "Cotygodniowy przegląd KPI. Miesięczny raport głęboki.", c: C.convert, days: "Cały kwartał" },
    { n: "04", t: "DOSTOSUJ", d: "Co działa? Co nie? Co zabieramy do następnego cyklu?", c: C.engage, days: "Tydzień 12" },
  ];
  const cellW = (W - 1.2 - 0.3 * 3) / 4;
  phases.forEach((p, i) => {
    const x = 0.6 + i * (cellW + 0.3);
    const cellH = 3.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: 0.7,
      fill: { color: p.c }, line: { type: "none" },
    });
    s.addText(p.n, {
      x: x + 0.2, y: y0, w: cellW - 0.4, h: 0.7,
      fontFace: FONT_H, fontSize: 20, bold: true, color: C.white,
      valign: "middle", margin: 0,
    });
    s.addText(p.t, {
      x: x + 0.2, y: y0, w: cellW - 0.4, h: 0.7,
      fontFace: FONT_H, fontSize: 16, bold: true, color: C.white,
      align: "right", valign: "middle", margin: 0,
    });
    s.addText(p.days, {
      x: x + 0.25, y: y0 + 0.85, w: cellW - 0.5, h: 0.3,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: p.c, margin: 0,
    });
    s.addText(p.d, {
      x: x + 0.25, y: y0 + 1.2, w: cellW - 0.5, h: 2.4,
      fontFace: FONT_B, fontSize: 13, color: C.ink, valign: "top", margin: 0,
    });
    // Arrow to next
    if (i < phases.length - 1) {
      s.addText("→", {
        x: x + cellW, y: y0 + cellH / 2 - 0.3, w: 0.3, h: 0.6,
        fontFace: FONT_H, fontSize: 28, bold: true, color: C.amber,
        align: "center", valign: "middle", margin: 0,
      });
    }
  });
  // Reserve callout
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.15, w: W - 1.2, h: 0.55,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("⚡ Rezerwuj do 10% budżetu na ''adjust'' w trakcie kwartału — żebyś mógł zwiększyć inwestycję, gdy kanał zaskakująco działa.", {
    x: 0.6, y: H - 1.15, w: W - 1.2, h: 0.55,
    fontFace: FONT_B, fontSize: 13, italic: true, color: C.amber,
    align: "center", valign: "middle", margin: 0,
  });
});

// =====================================================================
// Slide 72 (12/15): Warsztat 4 Transition
// =====================================================================
n++;
L.makeTitleSlide(pres, {
  eyebrow: "WARSZTAT 4 · 45 MIN",
  title: "Czas na ćwiczenia",
  subtitle: "200 000 PLN kwartalnie. Rozdzielcie między etapy RACE — i uzasadnijcie każdą złotówkę.",
  accent: C.amber,
  meta: "Ta sama marka przez cały dzień · Ostatnie ćwiczenie",
  time: "16:05 · Slajd 72 / 85",
  say: "Ostatnie ćwiczenie dnia — najtrudniejsze, ale też najbardziej wartościowe. Dostajecie budżet dwieście tysięcy złotych na kwartał. Wasze zadanie: rozdzielić go między cztery etapy RACE dla waszej marki. I uzasadnić każdą złotówkę — czemu dziewięćdziesiąt tysięcy na Aktywację, a nie pięćdziesiąt? Wykorzystacie wszystko, co zbudowaliście dzisiaj: SOSTAC (Sytuacja, Cele), RACE (etapy, KPI), Strategia Marki i CVP (kim jesteście, dla kogo), i macierz kanał × RACE z poprzedniego slajdu. Macie czterdzieści pięć minut. Zaraz pokażę instrukcję i macierz referencyjną.",
  doIt: "Wyświetl slajd. Pauza 10 sekund. Przejdź natychmiast do slajdu 74 (instrukcja).",
  watch: "Zmęczenie popołudniowe może być wyraźne. Jeśli grupy wyglądają wyczerpane — ogłoś: 'Jeśli potrzebujecie 5 min przed startem, teraz jest moment. Jak zaczniemy pracę, timer rusza bez przerw.'",
}, n, TOTAL);

// =====================================================================
// Slide 73 (13/15): Warsztat 4 — Instrukcja
// =====================================================================
n++;
{
  const s = pres.addSlide();
  L.drawWorkshopInstruction(s, pres, {
    eyebrow: "WARSZTAT 4 · 45 MIN · CANVA WHITEBOARD",
    title: "Alokacja budżetu 200 000 PLN na kwartał",
    blocks: [
      { label: "ZADANIE", accent: C.reach, content: "Rozdzielcie 200 000 PLN między 4 etapy RACE dla waszej marki. Dla każdego etapu: ile PLN, które kanały, oczekiwane KPI." },
      { label: "CZAS / OUTPUT", accent: C.act, content: "45 minut · do 16:50. Wynik: 4 wiersze alokacji (Reach, Act, Convert, Engage) + 1 zdanie uzasadnienia per wiersz." },
      { label: "NARZĘDZIE", accent: C.convert, content: "Canva Whiteboard — tabela alokacji. Macierz kanał × RACE ze slajdu 68 jako odniesienie. Wejdź przez QR kod." },
      { label: "ZASADA", accent: C.engage, content: "Zarezerwujcie 10% (20 000 PLN) na ''adjust'' w trakcie kwartału. Nie rozdzielajcie całości — niepewność jest realna." },
    ],
    warning: "Wykorzystajcie wszystko z dnia: SOSTAC (cele) + RACE (etapy) + CVP (kim jesteście) + macierz kanałów.",
  });
  s.addText(`${n} / ${TOTAL}`, {
    x: W - 1.4, y: H - 0.45, w: 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 10, color: C.inkFaint, align: "right",
  });
  L.addNotes(s, {
    time: "16:07 · Slajd 73 / 85",
    setup: "Potwierdź tablicę Canva z szablonem tabeli alokacji. Cztery kolumny: etap RACE, kwota PLN, kanały, oczekiwane KPI. QR kod duży. Timer 45 min widoczny. Macierz kanał × RACE dostępna (slajd 68 lub PDF).",
    say: "Instrukcja warsztatu czwartego. Zadanie: rozdzielcie dwieście tysięcy PLN między cztery etapy RACE. Format wyniku: wypełniona tabela — kwota, kanały, KPI — plus jedno zdanie uzasadnienia per etap. Kluczowa zasada: zarezerwujcie dziesięć procent — dwadzieścia tysięcy PLN — na ''adjust'' w trakcie kwartału. Niepewność co do tego, który kanał zaskoczy, jest realna — budżet powinien ją uwzględniać. Wykorzystujcie wszystko z dnia: waszą Sytuację i Cele z SOSTAC, etapy RACE, CVP z ćwiczenia trzeciego, macierz kanał × RACE ze slajdu 68. Czterdzieści pięć minut. Startujemy.",
    doIt: "Wyświetl slajd. Uruchom timer. Chodź z promptami: Reach: 'Jak wasz klient pierwszy raz usłyszy o marce — za ile PLN?'; Act: 'Po czym poznacie, że klient jest zainteresowany — i jakie kanały tam pracują?'; Convert: 'Ile potrzebujecie, żeby usunąć tarcie zakupowe?'; Engage: 'Ile w utrzymanie vs pozyskanie? 10:1? 3:1?'. Obserwuj balans — jeśli ktoś idzie 90% w Convert, zaczep.",
    watch: "Częste błędy: (1) pominięcie rezerwy 10% — zatrzymaj; (2) 80%+ na Convert — zapytaj 'kogo konwertujecie?'; (3) równy podział 25/25/25/25 — łatwy, ale często zły; zapytaj 'czy to odzwierciedla wasze cele?'. Grupy, które kończą wcześnie — dajcie im KPI per kanał, nie per etap.",
    debrief: "Gdzie alokowaliście najwięcej i dlaczego? Co zabraliście z macierzy kanałów? Jak wasza alokacja odzwierciedla CVP z ćwiczenia 3? Który etap RACE jest najbardziej ''niedoceniany'' w typowych polskich budżetach?",
    extension: "Jeśli budżet byłby 50 000 PLN zamiast 200 000 PLN — które etapy RACE wybieracie w pierwszej kolejności? Dlaczego?",
  });
}

// =====================================================================
// Slide 74 (14/15): Warsztat 4 — Przykład / Macierz Referencyjna
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "WARSZTAT 4 · PRZYKŁAD ROBOCZY",
  title: "InPost — przykładowa alokacja 200k PLN na Q",
  subtitle: "Wzór struktury dla waszej pracy. Wasze kwoty będą inne — struktura powinna być podobna.",
  time: "16:10 · Slajd 74 / 85",
  setup: "Przykład InPost tylko na slajdzie — nie nadpisuje stref grup. Podkreśl: 'To przykład, nie szablon.'",
  say: "Przykład dla InPost — alokacja dwustu tysięcy PLN na kwartał. Zwróćcie uwagę na trzy rzeczy. Po pierwsze: proporcje. Reach trzydzieści procent, Act dwadzieścia pięć, Convert dwadzieścia, Engage piętnaście, Rezerwa dziesięć. To nie jest 'prawidłowa' alokacja — to spójna z CVP InPost, który jest mocny w Convert i Engage, ale potrzebuje stałego Zasięgu do pozyskiwania nowych paczek. Po drugie: każda linia ma konkretne kanały i KPI. Nie 'reklamy' — ale 'YouTube ads + partnerstwa marketplace, KPI: +15% świadomości wśród 25-35'. Po trzecie: rezerwa. Dwadzieścia tysięcy nieprzypisane — bo w lipcu może się okazać, że Influencer Marketing zaskakująco konwertuje, i trzeba szybko dosypać. Wasza alokacja będzie wyglądać inaczej — inna marka, inny klient, inne etapy priorytetowe. Ale struktura — kwota, kanały, KPI, uzasadnienie — powinna być taka sama.",
  doIt: "Wskaż proporcje. Podkreśl rezerwę 10%. Wskaż konkretność KPI. Sygnał do pracy.",
  watch: "Grupy próbują kopiować proporcje InPost na swoją markę? Interwencja: 'InPost ma inne CVP niż wasza marka. Wasz podział powinien odzwierciedlać wasze cele, nie InPost.'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const rows = [
    { stage: "Reach", pct: "30%", amt: "60 000", channels: "YouTube ads + partnerstwa marketplace", kpi: "+15% świadomości (25–35)", c: C.reach },
    { stage: "Act", pct: "25%", amt: "50 000", channels: "Content (poradniki logistyka) + email nurture", kpi: "Czas na stronie >2:30", c: C.act },
    { stage: "Convert", pct: "20%", amt: "40 000", channels: "PPC search brand + retargeting + CRO", kpi: "Conv. rate + 0,5pp", c: C.convert },
    { stage: "Engage", pct: "15%", amt: "30 000", channels: "Email retencyjny + program lojalnościowy", kpi: "Repeat rate 70%+", c: C.engage },
    { stage: "Rezerwa", pct: "10%", amt: "20 000", channels: "Zachowane na ''adjust'' w trakcie kwartału", kpi: "Elastyczność", c: C.amber },
  ];
  // Header
  const colW = [1.8, 0.9, 1.4, 4.5, 2.8, W - 1.2 - 11.4];
  const headers = ["ETAP RACE", "%", "PLN", "KANAŁY", "GŁÓWNY KPI"];
  let xh = 0.6;
  headers.forEach((h, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: xh, y: y0, w: colW[i] - 0.03, h: 0.5,
      fill: { color: C.darkBg2 }, line: { type: "none" },
    });
    s.addText(h, {
      x: xh + 0.1, y: y0, w: colW[i] - 0.23, h: 0.5,
      fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 2, color: C.white,
      align: "left", valign: "middle", margin: 0,
    });
    xh += colW[i];
  });
  // Rows
  const rowH = 0.55;
  rows.forEach((r, i) => {
    const ry = y0 + 0.55 + i * (rowH + 0.04);
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: ry, w: W - 1.2, h: rowH,
      fill: { color: i % 2 === 0 ? C.offWhite : C.white }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: ry, w: 0.12, h: rowH,
      fill: { color: r.c }, line: { type: "none" },
    });
    let xc = 0.6;
    s.addText(r.stage, {
      x: xc + 0.25, y: ry, w: colW[0] - 0.3, h: rowH,
      fontFace: FONT_H, fontSize: 13, bold: true, color: r.c, valign: "middle", margin: 0,
    });
    xc += colW[0];
    s.addText(r.pct, {
      x: xc, y: ry, w: colW[1], h: rowH,
      fontFace: FONT_H, fontSize: 15, bold: true, color: C.ink, align: "center", valign: "middle", margin: 0,
    });
    xc += colW[1];
    s.addText(r.amt + " zł", {
      x: xc, y: ry, w: colW[2], h: rowH,
      fontFace: FONT_H, fontSize: 13, bold: true, color: C.ink, valign: "middle", margin: 0,
    });
    xc += colW[2];
    s.addText(r.channels, {
      x: xc + 0.1, y: ry, w: colW[3] - 0.2, h: rowH,
      fontFace: FONT_B, fontSize: 11, color: C.ink, valign: "middle", margin: 0,
    });
    xc += colW[3];
    s.addText(r.kpi, {
      x: xc + 0.1, y: ry, w: colW[4] - 0.2, h: rowH,
      fontFace: FONT_B, fontSize: 11, italic: true, color: C.inkMute, valign: "middle", margin: 0,
    });
  });
  // Total
  const ty = y0 + 0.55 + rows.length * (rowH + 0.04) + 0.1;
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: ty, w: W - 1.2, h: 0.5,
    fill: { color: C.navy }, line: { type: "none" },
  });
  s.addText("TOTAL", {
    x: 0.85, y: ty, w: colW[0], h: 0.5,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 2, color: C.white,
    valign: "middle", margin: 0,
  });
  s.addText("100%", {
    x: 0.6 + colW[0], y: ty, w: colW[1], h: 0.5,
    fontFace: FONT_H, fontSize: 14, bold: true, color: C.amber, align: "center", valign: "middle", margin: 0,
  });
  s.addText("200 000 zł", {
    x: 0.6 + colW[0] + colW[1], y: ty, w: colW[2], h: 0.5,
    fontFace: FONT_H, fontSize: 14, bold: true, color: C.amber, valign: "middle", margin: 0,
  });
  // Caption below table — safe zone between TOTAL (ends ~6.1) and footer (7.05)
  s.addText("Wasza struktura = kwota + kanały + KPI + uzasadnienie. Proporcje — spójne z Waszą CVP.", {
    x: 0.6, y: H - 0.85, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, italic: true, bold: true, color: C.teal, align: "center",
  });
});

// =====================================================================
// Slide 75 (15/15): Debrief Pre-Synthesis
// =====================================================================
n++;
L.makeBreakSlide(pres, {
  title: "Koniec Warsztatu 4",
  subtitle: "Krótka przerwa · wracamy o 16:55",
  footer: "Za chwilę: synteza dnia, najważniejsze wnioski, i zakończenie.",
  time: "16:50 · Slajd 75 / 85",
  say: "Świetna robota. Macie za sobą ostatnie ćwiczenie i większość dnia. Dziesięć minut przerwy — wrócimy o szesnastej pięćdziesiątej pięć. Za chwilę synteza dnia i zakończenie.",
  doIt: "Wyświetl slajd. Uruchom timer 10 min. Podczas przerwy przejrzyj krótko alokacje wszystkich grup — wypisz 2–3 najbardziej zaskakujące decyzje do omówienia w debriefie bloku 6.",
  watch: "Zmęczenie wyraźne po czwartym ćwiczeniu — normalne. Krótka przerwa pozwoli wrócić do skupienia na synteze.",
}, n, TOTAL);

pres.writeFile({ fileName: "/home/claude/decks/05-kanaly-budzet.pptx" })
  .then((fn) => console.log("Wrote:", fn));
