// Block 6: Synteza + Zakończenie — Slides 76-85 (16:55-17:45)
const pptxgen = require("pptxgenjs");
const L = require("./build");
const { C, W, H, FONT_H, FONT_B } = L;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Strategia Marketingu Cyfrowego — Blok 6: Synteza + Zakończenie";

const TOTAL = 10;
let n = 0;

// =====================================================================
// Slide 76 (1/10): Welcome Back — Debrief Warsztatu 4
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "LECTURE BLOCK 5 · SYNTEZA",
  title: "Witajcie z powrotem — zamykamy pętlę",
  subtitle: "Przez dzień zbudowaliście pełny plan marketingowy. W ostatnich 45 minutach zamykamy go — i patrzymy na całość.",
  time: "16:55 · Slajd 76 / 85",
  say: "Witajcie z powrotem — ostatni blok dnia. Przez ostatnie osiem godzin przeszliście drogę, którą wiele organizacji nigdy nie robi świadomie. Zaczęliście od diagnozy sytuacji, wyznaczyliście cele, zbudowaliście strategię, zmapowaliście ścieżkę klienta, zdefiniowaliście propozycję wartości, i alokowaliście budżet — wszystko dla tej samej marki. Teraz ostatnie pytanie: co z tego zabierzecie? Pokażę wam tę drogę jako całość, pięć kluczowych wniosków, zadanie na najbliższy tydzień, zasoby do dalszej pracy, i krótkie indywidualne ćwiczenie: jedna rzecz, którą zastosujecie w poniedziałek.",
  doIt: "Odsłoń slajd. Krótka pauza — niech uczestnicy złapią oddech po ostatnim ćwiczeniu. Przejdź płynnie do hierarchii całości.",
  watch: "Zmęczenie dnia może być wyraźne. Energia pod koniec rośnie, jeśli prowadzący jest konkretny i docenia pracę grupy. Unikaj rozwlekania — każdy slajd tego bloku powinien trwać 3-5 minut maks.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.3;
  // Journey visualization: 5 connected pills
  const milestones = [
    { t: "Ćw. 1", l: "SOSTAC", sub: "Sytuacja + cele", c: C.sit },
    { t: "Ćw. 2", l: "RACE", sub: "Ścieżka klienta", c: C.reach },
    { t: "Ćw. 3", l: "CVP", sub: "Dla kogo i dlaczego", c: C.amber },
    { t: "Ćw. 4", l: "BUDŻET", sub: "Gdzie i za ile", c: C.convert },
    { t: "Teraz", l: "SYNTEZA", sub: "Co zabieramy", c: C.engage },
  ];
  const cellW = (W - 1.2 - 0.4) / 5;
  milestones.forEach((m, i) => {
    const x = 0.6 + i * (cellW + 0.1);
    const cellH = 3.3;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: 0.55,
      fill: { color: m.c }, line: { type: "none" },
    });
    s.addText(m.t, {
      x, y: y0, w: cellW, h: 0.55,
      fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(m.l, {
      x, y: y0 + 0.85, w: cellW, h: 0.8,
      fontFace: FONT_H, fontSize: 24, bold: true, color: m.c,
      align: "center", valign: "middle", margin: 0,
    });
    s.addText(m.sub, {
      x: x + 0.15, y: y0 + 1.75, w: cellW - 0.3, h: 1.3,
      fontFace: FONT_B, fontSize: 13, color: C.inkMute,
      align: "center", valign: "top", margin: 0,
    });
    if (i < milestones.length - 1) {
      s.addText("→", {
        x: x + cellW, y: y0 + 0.9, w: 0.15, h: 0.7,
        fontFace: FONT_H, fontSize: 22, bold: true, color: C.amber,
        align: "center", valign: "middle", margin: 0,
      });
    }
  });
  s.addText("Pełny plan marketingowy dla Waszej marki — gotowy do zabrania z sali.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 14, italic: true, bold: true, color: C.teal, align: "center",
  });
});

// =====================================================================
// Slide 77 (2/10): Hierarchy Diagram — Variant 3 (Annotated)
// =====================================================================
n++;
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  s.addText("HIERARCHIA · PEŁNE ODSŁONIĘCIE", {
    x: 0.6, y: 0.35, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.teal, margin: 0,
  });
  s.addText("Gdzie każde ćwiczenie pasuje w całości", {
    x: 0.6, y: 0.65, w: W - 1.2, h: 0.85,
    fontFace: FONT_H, fontSize: 30, bold: true, color: C.ink, margin: 0,
  });
  L.drawHierarchy(s, pres, 3);
  s.addText('Przez cały dzień pracowaliście na wszystkich 5 poziomach. To jest rzadkość — wykorzystajcie ją.', {
    x: 0.6, y: H - 1.0, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, fontSize: 15, italic: true, color: C.inkMute, align: "center",
  });
  L.footerBrand(s);
  L.slideNum(s, n, TOTAL);
  L.addNotes(s, {
    time: "16:58 · Slajd 77 / 85",
    say: "Pamiętacie ten diagram — widzieliście go trzy razy dzisiaj. Pierwszy raz rano w ogólnym zarysie, drugi raz po południu z podświetlonymi fundamentami, teraz ostatni raz — z anotacjami pokazującymi, gdzie każde z czterech ćwiczeń pasuje. Ćwiczenie 3 — strategia marki i CVP — pracowało na górnym poziomie: tożsamości marki. Ćwiczenie 1 — SOSTAC — pracowało na poziomie planowania marketingu cyfrowego. Ćwiczenia 2 i 4 — RACE i alokacja budżetu — pracowały na poziomie egzekucji. Co to oznacza praktycznie? Przez dzień pracowaliście na pięciu poziomach strategii jednocześnie — od tożsamości marki do konkretnej alokacji pieniędzy. W większości organizacji każdy z tych poziomów żyje osobno — dział marki rozmawia z działem performance raz w roku, a dyrektor cyfrowy nie rozmawia z nimi w ogóle. Wasza integracja — to nie standard rynkowy. To jest rzadkość. I to jest przewaga.",
    doIt: "Odsłoń diagram z anotacjami. Wskaż każde ćwiczenie na poziomie, do którego pasuje. Zatrzymaj się przy integracji. 'W większości firm te poziomy nie rozmawiają.' Długa pauza.",
    watch: "Kiwanie głową? Ktoś robi zdjęcie? Dobre znaki. Jeśli ktoś komentuje 'u nas tak nie jest' — 'I dlatego wasza praca dzisiaj ma wartość. Pytanie: co z tego przeniesiecie do organizacji?'",
  });
}

// =====================================================================
// Slide 78 (3/10): 5 Kluczowych Wniosków
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "PIĘĆ WNIOSKÓW · DO ZABRANIA",
  title: "Pięć rzeczy, których nauczyliście się dziś",
  subtitle: 'Jeśli zapamiętacie tylko pięć — niech to będą te pięć.',
  time: "17:02 · Slajd 78 / 85",
  say: "Pięć rzeczy, które wyciągam z dzisiejszego dnia — jeśli zapamiętacie tylko pięć, to niech to będą te pięć. Po pierwsze: strategia marki jest fundamentem, z którego wynika wszystko inne. Bez odpowiedzi kim jesteście, SOSTAC staje się formularzem, RACE staje się listą kanałów, a alokacja budżetu staje się zgadywaniem. Po drugie: SOSTAC i RACE nie są alternatywą — SOSTAC planuje, RACE egzekwuje. Potrzebujecie obu. Po trzecie: CVP mówi do klienta, nie o produkcie. Wasz klient nie chce usłyszeć, że jesteście najlepsi. Chce wiedzieć, dlaczego Wy jesteście odpowiedzią na jego problem. Po czwarte: polski rynek ma własną strukturę — BLIK, Paczkomat, Allegro, mobile-first. Strategia skopiowana z Niemiec albo USA w Polsce nie działa. Po piąte: alokacja budżetu to ćwiczenie w dyscyplinie. Bez rezerwy na adjust, bez balansu etapów RACE, bez atrybucji wieloźródłowej — pieniądze wyciekają, i nie wiecie gdzie.",
  doIt: "Odsłaniaj wnioski pojedynczo, z pauzą 5-10 sek na każdym. Przy piątym — cicha pauza, niech ostatni wniosek wybrzmi.",
  watch: "Uczestnicy notują? Dobry znak. Ktoś pyta 'który wniosek najważniejszy?' — 'To zależy od waszego kontekstu. W trudnej sytuacji zaczynam od piątego (dyscyplina). W rozwoju — od pierwszego (fundament marki).'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const takeaways = [
    { num: "01", body: "Strategia marki jest fundamentem. Wszystko inne z niej wynika. Bez niej narzędzia działają w próżni.", c: C.navy },
    { num: "02", body: "SOSTAC i RACE nie są alternatywą — SOSTAC planuje, RACE egzekwuje. Potrzebujecie obu.", c: C.blueMid },
    { num: "03", body: "CVP mówi do klienta, nie o produkcie. 'Ty zyskujesz X, bo Y' — nie 'My jesteśmy najlepsi w X'.", c: C.teal },
    { num: "04", body: "Polski rynek ma własną strukturę: BLIK, Paczkomat, Allegro, mobile-first. Skopiowana zagraniczna strategia nie działa.", c: C.act },
    { num: "05", body: "Alokacja budżetu = dyscyplina. Rezerwa na adjust, balans etapów RACE, atrybucja wieloźródłowa. Inaczej pieniądze wyciekają.", c: C.amber },
  ];
  const rowH = 0.75;
  takeaways.forEach((t, i) => {
    const ty = y0 + i * (rowH + 0.1);
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: ty, w: W - 1.2, h: rowH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: ty, w: 0.15, h: rowH,
      fill: { color: t.c }, line: { type: "none" },
    });
    s.addText(t.num, {
      x: 0.85, y: ty, w: 1.0, h: rowH,
      fontFace: FONT_H, fontSize: 32, bold: true, color: t.c,
      valign: "middle", margin: 0,
    });
    s.addText(t.body, {
      x: 2.0, y: ty, w: W - 2.6, h: rowH,
      fontFace: FONT_B, fontSize: 15, color: C.ink, valign: "middle", margin: 0,
    });
  });
});

// =====================================================================
// Slide 79 (4/10): Trzy Frameworki — Jedno Zdanie Każdy
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "TRZY FRAMEWORKI · JEDNO ZDANIE KAŻDY",
  title: "Jakbyście mieli streścić dzień jednemu prezesowi",
  subtitle: "Każdy framework w jednym zdaniu — łatwym do zapamiętania i przekazania dalej.",
  time: "17:07 · Slajd 79 / 85",
  say: "Wyobraźcie sobie, że w poniedziałek wasz prezes pyta 'co ciekawego było na tym szkoleniu?'. Macie trzydzieści sekund. Oto trzy zdania. SOSTAC — jedyny framework, który wymusza zatrzymanie się na każdym etapie planowania, żebyśmy nie przeskoczyli od Sytuacji do Taktyk. RACE — cykl, nie lejek: zaangażowani klienci zasilają nowy zasięg. CVP — to nie hasło reklamowe, to odpowiedź na pytanie klienta dlaczego Wy, a nie ktoś inny. Te trzy zdania nie zastępują dnia pracy — ale jeśli wasz prezes je zapamięta, otwierają drzwi do pełniejszej rozmowy.",
  doIt: "Wyświetl trzy bloki. Przy każdym zatrzymaj się i powtórz zdanie głośno raz dla rytmu. Następnie pytanie: 'Które z tych trzech zdań ma największe znaczenie dla Waszej organizacji?'",
  watch: "Uczestnicy próbują zmodyfikować zdania pod siebie — dobry znak aktywnego przetwarzania. Jeśli ktoś mówi 'moja firma nie działa na żadnym z tych poziomów' — 'To oznacza, że macie przewagę — bo Wasza konkurencja prawdopodobnie też nie. Pytanie: kto pierwszy to zmieni?'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const frameworks = [
    {
      name: "SOSTAC",
      sub: "PR Smith · 1990s",
      quote: "Jedyny framework, który wymusza zatrzymanie się na każdym etapie — żebyśmy nie przeskoczyli od Sytuacji do Taktyk.",
      c: C.navy,
    },
    {
      name: "RACE",
      sub: "Dave Chaffey · Smart Insights",
      quote: "Cykl, nie lejek: Zaangażowani klienci zasilają nowy Zasięg. Engage → Reach = pętla wzrostu.",
      c: C.teal,
    },
    {
      name: "CVP",
      sub: "Alex Osterwalder · Strategyzer",
      quote: "To nie hasło reklamowe. To odpowiedź na pytanie klienta: ''dlaczego Wy, a nie ktoś inny?''",
      c: C.amber,
    },
  ];
  const cellW = (W - 1.2 - 0.4) / 3;
  frameworks.forEach((f, i) => {
    const x = 0.6 + i * (cellW + 0.2);
    const cellH = 4.0;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: 0.15,
      fill: { color: f.c }, line: { type: "none" },
    });
    s.addText(f.name, {
      x: x + 0.25, y: y0 + 0.35, w: cellW - 0.5, h: 0.7,
      fontFace: FONT_H, fontSize: 32, bold: true, color: f.c, margin: 0,
    });
    s.addText(f.sub, {
      x: x + 0.25, y: y0 + 1.05, w: cellW - 0.5, h: 0.3,
      fontFace: FONT_B, fontSize: 11, italic: true, charSpacing: 2, color: C.inkMute, margin: 0,
    });
    s.addText(f.quote, {
      x: x + 0.3, y: y0 + 1.5, w: cellW - 0.6, h: 2.4,
      fontFace: FONT_B, fontSize: 14, italic: true, color: C.ink,
      valign: "top", margin: 0,
    });
  });
  s.addText("\"W poniedziałek u prezesa: 'Co ciekawego było na szkoleniu?' — trzy zdania, trzydzieści sekund.\"", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 14, italic: true, bold: true, color: C.teal, align: "center",
  });
});

// =====================================================================
// Slide 80 (5/10): Zadanie Domowe — Audyt SOSTAC
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "ZADANIE NA NAJBLIŻSZY TYDZIEŃ",
  title: "Audyt SOSTAC — dla Waszej prawdziwej marki",
  subtitle: "Nie dla marki z sali. Dla tej, za którą jesteście odpowiedzialni w pracy.",
  time: "17:12 · Slajd 80 / 85",
  say: "Jedno zadanie do zabrania. Dzisiaj pracowaliście z marką wybraną dla ćwiczeń — InPost, Żabka, mBank, może Zalando. W ciągu najbliższego tygodnia zróbcie audyt SOSTAC dla marki, za którą jesteście odpowiedzialni w pracy. Nie pełne cztery ćwiczenia — tylko SOSTAC, część Sytuacja i Cele. Trzy pytania do zadania sobie: gdzie jesteśmy w każdym z czterech etapów RACE? Jakie są nasze cele na kolejny kwartał, wyrażone jako co najmniej jeden KPI per etap RACE? Gdzie największe luki między 'gdzie jesteśmy' a 'gdzie chcielibyśmy być'? Wynik: jedna strona. Nie raport na dwadzieścia stron. Najbardziej wartościowy dokument tego roku — jeśli zrobicie go szczerze. Prześlijcie go do siebie, do współpracownika, do mnie. Ale najpierw — zróbcie go.",
  doIt: "Odsłoń trzy pytania kolejno. Podkreśl 'jedna strona'. Zapytaj: 'Kto zobowiązuje się do zrobienia tego w ciągu tygodnia?' Ręce w górę. Podziękuj tym, którzy podnieśli.",
  watch: "Opór typu 'nie mam czasu'? 'Jeśli nie macie godziny tygodniowo na audyt własnej marki, macie większy problem niż brak czasu.' Spokojny ton, ale jasny.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.3;
  // Header callout
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: W - 1.2, h: 0.75,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("WYNIK: JEDNA STRONA · DO KOŃCA PRZYSZŁEGO TYGODNIA", {
    x: 0.6, y: y0, w: W - 1.2, h: 0.75,
    fontFace: FONT_H, fontSize: 16, bold: true, charSpacing: 3, color: C.amber,
    align: "center", valign: "middle", margin: 0,
  });
  // Three questions
  const questions = [
    {
      num: "01",
      q: "Gdzie jesteśmy w każdym z 4 etapów RACE?",
      hint: "Oceńcie realny stan każdego etapu. Nie tam, gdzie chcielibyście być — tam, gdzie jesteście.",
      c: C.reach,
    },
    {
      num: "02",
      q: "Jakie cele na kolejny kwartał — min. 1 KPI per etap RACE?",
      hint: "Konkretne, mierzalne, osadzone w czasie. Unikajcie 'zwiększyć świadomość' — lepiej '+15% ruchu organicznego do marca'.",
      c: C.act,
    },
    {
      num: "03",
      q: "Gdzie największe luki między ''gdzie jesteśmy'' a ''gdzie chcemy''?",
      hint: "Luka = okazja strategiczna. Trzy największe luki = trzy priorytety inwestycyjne.",
      c: C.engage,
    },
  ];
  const rowH = 1.1;
  questions.forEach((q, i) => {
    const ry = y0 + 0.95 + i * (rowH + 0.1);
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: ry, w: W - 1.2, h: rowH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: ry, w: 0.15, h: rowH,
      fill: { color: q.c }, line: { type: "none" },
    });
    s.addText(q.num, {
      x: 0.85, y: ry + 0.15, w: 0.9, h: 0.5,
      fontFace: FONT_H, fontSize: 22, bold: true, color: q.c, margin: 0,
    });
    s.addText(q.q, {
      x: 1.85, y: ry + 0.15, w: W - 2.45, h: 0.5,
      fontFace: FONT_H, fontSize: 17, bold: true, color: C.ink, valign: "top", margin: 0,
    });
    s.addText(q.hint, {
      x: 1.85, y: ry + 0.65, w: W - 2.45, h: 0.4,
      fontFace: FONT_B, fontSize: 12, italic: true, color: C.inkMute, valign: "top", margin: 0,
    });
  });
});

// =====================================================================
// Slide 81 (6/10): Zasoby — Polska
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "ZASOBY · POLSKA",
  title: "Polskie źródła — gdzie śledzić rynek dalej",
  subtitle: "Cztery miejsca, które polecam regularnie śledzić polskiemu marketerowi.",
  time: "17:17 · Slajd 81 / 85",
  say: "Cztery polskie zasoby, które polecam śledzić regularnie. Marketing przy Kawie — codzienny newsletter o trendach i kampaniach w Polsce. Krótki format, dobry smak redaktorski. Sprawny Marketing — bardziej pogłębione analizy, szczególnie przypadki i strategie. IAB Polska — źródło twardych danych o polskim rynku cyfrowym, raporty kwartalne i roczne, standardy branżowe. Gemius — analityka ruchu i badania rynkowe, często cytowane dane o polskich platformach. Wszystkie cztery to różne poziomy — od newslettera codziennego po raporty branżowe. Nie musicie czytać wszystkiego. Wystarczy jeden regularnie.",
  doIt: "Odsłoń cztery karty. Nie opisuj każdej szczegółowo — uczestnicy przeczytają. Podkreśl: 'Jeden regularnie, nie cztery sporadycznie.'",
  watch: "Uczestnicy robią notatki/zdjęcia? Dobry znak. Ktoś dodaje własne rekomendacje? Zachęć — 'Napiszcie je na slajdzie następnym, obok waszych Monday Notes.'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const resources = [
    {
      name: "Marketing przy Kawie",
      type: "Newsletter codzienny",
      url: "marketingprzykawie.pl",
      desc: "Krótki format, dobry smak redaktorski, puls polskiego marketingu codziennie.",
      c: C.navy,
    },
    {
      name: "Sprawny Marketing",
      type: "Portal + podcast",
      url: "sprawnymarketing.pl",
      desc: "Pogłębione analizy case'ów, wywiady z praktykami, dłuższy format.",
      c: C.teal,
    },
    {
      name: "IAB Polska",
      type: "Raporty branżowe",
      url: "iab.org.pl",
      desc: "Twarde dane rynkowe. AdEx, raporty e-commerce, standardy branży.",
      c: C.act,
    },
    {
      name: "Gemius / PBI",
      type: "Analityka",
      url: "gemius.com",
      desc: "Mediapanel, dane o ruchu platform, badania behawioralne polskich internautów.",
      c: C.amber,
    },
  ];
  const cellW = (W - 1.2 - 0.45) / 4;
  resources.forEach((r, i) => {
    const x = 0.6 + i * (cellW + 0.15);
    const cellH = 3.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: 0.12,
      fill: { color: r.c }, line: { type: "none" },
    });
    s.addText(r.type, {
      x: x + 0.25, y: y0 + 0.3, w: cellW - 0.5, h: 0.3,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: r.c, margin: 0,
    });
    s.addText(r.name, {
      x: x + 0.25, y: y0 + 0.65, w: cellW - 0.5, h: 1.0,
      fontFace: FONT_H, fontSize: 19, bold: true, color: C.ink, valign: "top", margin: 0,
    });
    s.addText(r.url, {
      x: x + 0.25, y: y0 + 1.8, w: cellW - 0.5, h: 0.35,
      fontFace: FONT_B, fontSize: 12, italic: true, color: C.teal, margin: 0,
    });
    s.addText(r.desc, {
      x: x + 0.25, y: y0 + 2.25, w: cellW - 0.5, h: cellH - 2.4,
      fontFace: FONT_B, fontSize: 12, color: C.inkMute, valign: "top", margin: 0,
    });
  });
  s.addText("Jedno źródło regularnie > cztery źródła sporadycznie.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.teal, align: "center",
  });
});

// =====================================================================
// Slide 82 (7/10): Zasoby — Międzynarodowe
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "ZASOBY · MIĘDZYNARODOWE",
  title: "Globalne źródła — autorzy dzisiejszych frameworków",
  subtitle: "Idźcie do źródeł. Zamiast czytać 'jak stosować RACE' — przeczytajcie Chaffey'a.",
  time: "17:22 · Slajd 82 / 85",
  say: "Cztery globalne źródła — tu są bezpośrednio autorzy frameworków, które dzisiaj stosowaliście. Smart Insights — platforma Dave'a Chaffey'a, autora RACE. Ma darmową część i abonament. Artykuły, szablony, badania. PR Smith — autor SOSTAC. Jego blog i książki są referencyjne — dla kogoś, kto chce głębiej zrozumieć logikę frameworku. Strategyzer — zespół Alexa Osterwaldera, autora Value Proposition Canvas i Business Model Canvas. Sklep z narzędziami, kursy, wspólnota praktyków. DataReportal — coroczne raporty Digital o rynku cyfrowym na świecie i w konkretnych krajach. W tym Polska. Porada: idźcie do źródeł. Zamiast czytać 'dziesięć porad jak stosować RACE' — przeczytajcie Chaffey'a. Oszczędza czas i daje lepszy obraz.",
  doIt: "Odsłoń cztery karty. Podkreśl: 'Idźcie do źródeł, nie do streszczeń.'",
  watch: "Ktoś zauważa różnicę poziomów (newsletter vs. platforma autorska)? Zgódź się. 'Polskie źródła = bieżący puls. Globalne = głębia frameworkowa.'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const resources = [
    {
      name: "Smart Insights",
      type: "Dave Chaffey — RACE",
      url: "smartinsights.com",
      desc: "Platforma autora RACE. Szablony, analizy case'ów, metodyka. Wolny dostęp + premium.",
      c: C.reach,
    },
    {
      name: "PR Smith",
      type: "Autor SOSTAC",
      url: "prsmith.org",
      desc: "Referencyjne źródło dla SOSTAC. Blog + książki. Dla głębszego rozumienia logiki planowania.",
      c: C.navy,
    },
    {
      name: "Strategyzer",
      type: "Alex Osterwalder — VPC / BMC",
      url: "strategyzer.com",
      desc: "Zespół autora Value Proposition Canvas. Narzędzia, kursy, wspólnota praktyków.",
      c: C.amber,
    },
    {
      name: "DataReportal",
      type: "Kevin Kemp — Digital Reports",
      url: "datareportal.com",
      desc: "Coroczne raporty Digital na świat + konkretne kraje (w tym Polska). Darmowe, godne cytowania.",
      c: C.engage,
    },
  ];
  const cellW = (W - 1.2 - 0.45) / 4;
  resources.forEach((r, i) => {
    const x = 0.6 + i * (cellW + 0.15);
    const cellH = 3.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: cellW, h: 0.12,
      fill: { color: r.c }, line: { type: "none" },
    });
    s.addText(r.type, {
      x: x + 0.25, y: y0 + 0.3, w: cellW - 0.5, h: 0.3,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: r.c, margin: 0,
    });
    s.addText(r.name, {
      x: x + 0.25, y: y0 + 0.65, w: cellW - 0.5, h: 1.0,
      fontFace: FONT_H, fontSize: 19, bold: true, color: C.ink, valign: "top", margin: 0,
    });
    s.addText(r.url, {
      x: x + 0.25, y: y0 + 1.8, w: cellW - 0.5, h: 0.35,
      fontFace: FONT_B, fontSize: 12, italic: true, color: C.teal, margin: 0,
    });
    s.addText(r.desc, {
      x: x + 0.25, y: y0 + 2.25, w: cellW - 0.5, h: cellH - 2.4,
      fontFace: FONT_B, fontSize: 12, color: C.inkMute, valign: "top", margin: 0,
    });
  });
  s.addText("Idźcie do źródeł, nie do streszczeń. Oszczędza czas, daje lepszy obraz.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.navy, align: "center",
  });
});

// =====================================================================
// Slide 83 (8/10): Monday Sticky Note Activity
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "INDYWIDUALNE · 5 MIN",
  title: "Jedna rzecz — którą zastosuję w poniedziałek",
  subtitle: "Nie lista dziesięciu rzeczy do zrobienia. Jedna konkretna, do wykonania w tygodniu.",
  time: "17:27 · Slajd 83 / 85",
  say: "Ostatnie ćwiczenie — indywidualne, nie grupowe. Przez ostatnie osiem godzin zdobyliście dużo nowych idei. Najczęstszy los takich szkoleń — w poniedziałek energia opada, tydzień wciąga w zwykłą pracę, nic się nie zmienia. Żeby tego uniknąć: wybierzcie jedną rzecz. Nie dziesięć. Jedną. Konkretna, do wykonania w ciągu tygodnia. Napiszcie ją na karteczce — dajcie sobie pięć minut. Struktura: 'W poniedziałek zrobię X, bo dzisiaj zrozumiałem Y, i ma to dla nas wartość Z.' Przykłady: 'Zrobię audyt SOSTAC dla naszej marki i prześlę szefowi' albo 'Dodam BLIK do naszej strony, sprawdzając czy już jest w planie IT' albo 'Napiszę naszą CVP w jednym zdaniu i prześlę kolegom do krytyki'. Konkret. Tydzień. Pięć minut na napisanie — i zatrzymajcie tę karteczkę.",
  doIt: "Odsłoń slajd. Uruchom timer 5 min. Daj przestrzeń na ciszę — nie komentuj. Pod koniec: 'Kto chciałby podzielić się swoją karteczką? Nie musicie — ale głośne sformułowanie pomaga.'",
  watch: "Niektórzy piszą 10 rzeczy — podejdź, zapytaj: 'Która z nich jest najważniejsza? Podkreśl.' Niektórzy nie wiedzą, co napisać — 'Pomyślcie o trzech wnioskach z slajdu 78. Który najbardziej dotyka waszej codziennej pracy?'",
  debrief: "Po 5 min: 2-3 osoby dzielą się. Nie komentuj oceniająco — powtórz z szacunkiem. Pytanie do reszty: 'Czy widzicie wzorzec? Większość z Was wybrała konkretne działanie, nie ogólną aspirację. To bardzo dobry znak.'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.3;
  // Big sticky note visualization
  s.addShape(pres.shapes.RECTANGLE, {
    x: 2.0, y: y0, w: W - 4.0, h: 3.5,
    fill: { color: "FFF8DC" }, line: { color: C.amber, width: 2 },
  });
  // Slight shadow / notebook feel
  s.addShape(pres.shapes.RECTANGLE, {
    x: 2.0, y: y0, w: W - 4.0, h: 0.5,
    fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText("MOJA KARTECZKA PONIEDZIAŁKOWA", {
    x: 2.0, y: y0, w: W - 4.0, h: 0.5,
    fontFace: FONT_B, fontSize: 13, bold: true, charSpacing: 3, color: C.darkBg,
    align: "center", valign: "middle", margin: 0,
  });
  // Template structure
  s.addText([
    { text: "W poniedziałek zrobię ", options: { fontSize: 18 } },
    { text: "[X]", options: { fontSize: 18, bold: true, color: C.teal, breakLine: true } },
    { text: "bo dzisiaj zrozumiałem ", options: { fontSize: 18 } },
    { text: "[Y]", options: { fontSize: 18, bold: true, color: C.teal, breakLine: true } },
    { text: "i ma to dla nas wartość ", options: { fontSize: 18 } },
    { text: "[Z]", options: { fontSize: 18, bold: true, color: C.teal } },
  ], {
    x: 2.4, y: y0 + 0.8, w: W - 4.8, h: 2.6,
    fontFace: FONT_B, color: C.ink, valign: "top", paraSpaceAfter: 18, margin: 0,
  });
  // Examples below
  s.addText("PRZYKŁADY", {
    x: 0.6, y: y0 + 3.7, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.teal,
    align: "center", margin: 0,
  });
  s.addText([
    { text: '"Zrobię audyt SOSTAC dla naszej marki i prześlę szefowi."   ·   ', options: { italic: true, fontSize: 12 } },
    { text: '"Dodam BLIK do strony — sprawdzę plan IT."   ·   ', options: { italic: true, fontSize: 12 } },
    { text: '"Napiszę naszą CVP w jednym zdaniu i prześlę kolegom do krytyki."', options: { italic: true, fontSize: 12 } },
  ], {
    x: 0.6, y: y0 + 4.05, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, color: C.inkMute, align: "center", margin: 0,
  });
  s.addText("⏱ 5 minut · zatrzymajcie karteczkę", {
    x: 0.6, y: H - 0.9, w: W - 1.2, h: 0.3,
    fontFace: FONT_H, fontSize: 14, bold: true, italic: true, color: C.amber, align: "center",
  });
});

// =====================================================================
// Slide 84 (9/10): Q&A
// =====================================================================
n++;
L.makeTitleSlide(pres, {
  eyebrow: "PYTANIA · DYSKUSJA",
  title: "Co chcieliście zapytać przez cały dzień?",
  subtitle: "Mamy 10 minut. Nie ma złych pytań — szczególnie te ''naiwne'' są najlepsze.",
  accent: C.amber,
  meta: "",
  time: "17:32 · Slajd 84 / 85",
  say: "Mamy dziesięć minut na pytania. Zasada: nie ma złych pytań. Szczególnie te, które brzmią ''naiwnie'' albo ''za proste'' — to zwykle najlepsze, bo adresują założenia, które reszta sali milcząco przyjęła. Jakie pytanie nosiliście ze sobą przez cały dzień?",
  doIt: "Odsłoń slajd. Zamilknij. Dłuższa pauza — 10-15 sek ciszy. Pierwsze pytanie zwykle pojawia się po 5 sekundach. Jeśli nie — 'Dobrze, zacznę od pytania, które mnie samego nurtuje: które ćwiczenie było najtrudniejsze i dlaczego?'",
  watch: "Nie odpowiadaj zbyt szybko. Pauza po pytaniu 2-3 sek = szacunek dla pytającego. Jeśli nie znasz odpowiedzi: ''To bardzo dobre pytanie, nie mam gotowej odpowiedzi — podeślę po szkoleniu.'' Szczerość ważniejsza niż improwizacja.",
}, n, TOTAL);

// =====================================================================
// Slide 85 (10/10): Zakończenie + Kontakt
// =====================================================================
n++;
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  // Accent stripe
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.25, h: H,
    fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText("DZIĘKUJĘ", {
    x: 0.8, y: 1.2, w: W - 1.5, h: 0.45,
    fontFace: FONT_B, fontSize: 14, bold: true, charSpacing: 6, color: C.amber, margin: 0,
  });
  s.addText("Osiem godzin. Cztery ćwiczenia. Jedna marka.", {
    x: 0.8, y: 1.8, w: W - 1.5, h: 1.0,
    fontFace: FONT_H, fontSize: 38, bold: true, color: C.white, margin: 0,
  });
  s.addText("Pełny plan marketingowy — do zabrania.", {
    x: 0.8, y: 2.8, w: W - 1.5, h: 0.6,
    fontFace: FONT_B, fontSize: 22, italic: true, color: "CCD5E0", margin: 0,
  });

  // Last reminder box
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 4.2, w: W - 1.6, h: 1.2,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText([
    { text: "Pamiętajcie o karteczce poniedziałkowej. ", options: { fontSize: 17, bold: true, color: C.amber } },
    { text: "Jedna rzecz, w tym tygodniu — nie dziesięć.", options: { fontSize: 17, italic: true, color: C.white } },
  ], {
    x: 0.8, y: 4.2, w: W - 1.6, h: 1.2,
    fontFace: FONT_B, align: "center", valign: "middle", margin: 0,
  });

  // Contact placeholder
  s.addText("KONTAKT", {
    x: 0.8, y: 5.8, w: W - 1.5, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.amber, margin: 0,
  });
  s.addText("[ Imię Prowadzącego ]   ·   [ email@domena.pl ]   ·   [ LinkedIn ]", {
    x: 0.8, y: 6.1, w: W - 1.5, h: 0.4,
    fontFace: FONT_B, fontSize: 15, color: C.white, margin: 0,
  });
  s.addText("Slajdy i materiały uzupełniające — prześlę jutro mailem.", {
    x: 0.8, y: 6.55, w: W - 1.5, h: 0.3,
    fontFace: FONT_B, fontSize: 13, italic: true, color: "8FA3BD", margin: 0,
  });

  L.slideNum(s, n, TOTAL, true);
  L.addNotes(s, {
    time: "17:42 · Slajd 85 / 85",
    say: "Dziękuję Wam. Osiem godzin, cztery ćwiczenia, jedna marka — i pełny plan marketingowy do zabrania. Pamiętajcie o karteczce: jedna rzecz, w tym tygodniu, nie dziesięć. Slajdy i materiały uzupełniające prześlę jutro mailem. Jeśli coś Was nurtuje po szkoleniu — piszcie. Najlepsze pytania zwykle przychodzą dwa tygodnie po. Miłego weekendu.",
    doIt: "Odsłoń slajd. Stój spokojnie, uśmiechnij się. Nie rozwlekaj. Podziękowanie powinno być krótkie i autentyczne — nie kazanie. Jeśli w sali jest oklask, przyjmij go bez fałszywej skromności. Zostań 10-15 min po szkoleniu dla indywidualnych pytań.",
    watch: "Obserwuj, kto podchodzi po szkoleniu. Indywidualne rozmowy często ważniejsze niż sala — szczególnie dla osób, które nie lubią mówić przed grupą.",
  });
}

pres.writeFile({ fileName: "/home/claude/decks/06-synteza.pptx" })
  .then((fn) => console.log("Wrote:", fn));
