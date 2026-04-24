// Block 4: Lunch + Re-energizer + Brand Strategy/CVP + Workshop 3 — Slides 39-60 (12:30-15:15)
const pptxgen = require("pptxgenjs");
const L = require("./build");
const { C, W, H, FONT_H, FONT_B } = L;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Strategia Marketingu Cyfrowego — Blok 4: Strategia Marki + CVP";

const TOTAL = 22;
let n = 0;

// =====================================================================
// Slide 39 (1/22): Przerwa Obiadowa
// =====================================================================
n++;
L.makeBreakSlide(pres, {
  title: "Przerwa obiadowa",
  subtitle: "Do zobaczenia o 13:30",
  footer: "Podczas lunchu pomyślcie: czym wasza marka różni się od konkurencji? Dlaczego klienci ją wybierają?",
  time: "12:30 · Slajd 39 / 85",
  say: "Czas na zasłużoną przerwę obiadową — macie godzinę. Wrócimy dokładnie o 13:30. Przez chwilę podczas lunchu pomyślcie o marce, którą dzisiaj analizujecie. Czym ta marka różni się od konkurencji? Dlaczego klienci ją wybierają? Po południu zagłębimy się w strategię marki i propozycję wartości.",
  doIt: "Wyświetl slajd. Głośno ogłoś godzinę powrotu. Potwierdź lokalizację restauracji/bufetu jeśli dotyczy.",
  watch: "Zwróć uwagę, ile osób wychodzi od razu — naturalny sygnał wyczerpania po intensywnym poranku. Jeśli grupy rozmawiają o materiałach przy wyjściu — dobry znak.",
}, n, TOTAL);

// =====================================================================
// Slide 40 (2/22): Re-energizer — Instrukcja
// =====================================================================
n++;
L.makeTitleSlide(pres, {
  eyebrow: "RE-ENERGIZER · QUICKFIRE",
  title: "Dobra czy zła kampania?",
  subtitle: "5 kampanii · 30 sekund każda · podnieście rękę",
  accent: C.amber,
  meta: "Rozgrzewka umysłów po lunchu — ostrość oceny strategicznej, nie estetyki.",
  time: "13:30 · Slajd 40 / 85",
  say: "Witajcie z powrotem. Żeby rozgrzać umysły po lunchu, zacznijmy od szybkiej rundy oceniania. Zaraz pokażę wam pięć prawdziwych kampanii polskich marek — jedną po drugiej. Dla każdej macie trzydzieści sekund. Wasza jedyna decyzja: dobra kampania czy zła? Podnieście rękę, jeśli myślicie, że dobra. Nie ma złych odpowiedzi — ale chcę, żebyście uzasadnili swoją ocenę jednym zdaniem.",
  doIt: "Wyświetl slajd. Upewnij się, że timer (stopwatch na telefonie) jest gotowy do odliczania 30 sekund dla każdej kampanii. Przejdź do slajdu 41 natychmiast po krótkim wstępie.",
  watch: "Czy uczestnicy są rozbudzeni? Energia po lunchu zwykle niższa — dynamika quickfire pomaga. Mów energicznie, utrzymuj tempo.",
}, n, TOTAL);

// =====================================================================
// Helper for quickfire campaign slides
// =====================================================================
function campaignSlide(num, brand, channel, description, sayText, doText, watchText, timeStr) {
  n++;
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  s.addText(`KAMPANIA ${num} / 5`, {
    x: 0.6, y: 0.4, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 4, color: C.amber, margin: 0,
  });
  s.addText(brand, {
    x: 0.6, y: 0.75, w: W - 1.2, h: 1.0,
    fontFace: FONT_H, fontSize: 42, bold: true, color: C.white, margin: 0,
  });
  s.addText(channel, {
    x: 0.6, y: 1.8, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, fontSize: 16, italic: true, color: "B0B8C4", margin: 0,
  });
  // Large placeholder box for screenshot
  s.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 2.6, w: 8.3, h: 3.4,
    fill: { color: "1A2F4F" }, line: { color: C.amber, width: 1 },
  });
  s.addText(`[ Zrzut ekranu: ${description} ]`, {
    x: 2.5, y: 2.6, w: 8.3, h: 3.4,
    fontFace: FONT_B, fontSize: 15, italic: true, color: "8FA3BD",
    align: "center", valign: "middle", margin: 0,
  });
  // Question bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.0, w: W - 1.2, h: 0.55,
    fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText("Dobra czy zła kampania? · Macie 30 sekund", {
    x: 0.6, y: H - 1.0, w: W - 1.2, h: 0.55,
    fontFace: FONT_H, fontSize: 18, bold: true, color: C.darkBg,
    align: "center", valign: "middle", margin: 0,
  });
  L.slideNum(s, n, TOTAL, true);
  L.addNotes(s, {
    time: timeStr,
    say: sayText,
    doIt: doText,
    watch: watchText,
  });
}

// Slide 41 (3/22): Kampania 1 — CD Projekt Red TikTok
campaignSlide(
  1, "CD Projekt Red", "TikTok · @cdprojektred · Cyberpunk 2077 Phantom Liberty",
  "post społecznościowy angażujący społeczność graczy — behind-the-scenes, odpowiedzi na komentarze fanów, memy nawiązujące do fabuły",
  "CD Projekt Red — polskie studio twórców Wiedźmina i Cyberpunka — i ich post na TikToku w kampanii Phantom Liberty. Trzydzieści sekund. Dobra czy zła?",
  "Uruchom timer na 30 sekund. Po upływie czasu zbierz głosy — ręce w górę. Zapytaj 1–2 osoby o uzasadnienie. Nie dawaj 'oficjalnej odpowiedzi' — połącz obserwacje klasy z frameworkiem: 'Ktoś powiedział, że to buduje społeczność — to jest Zaangażowanie w RACE, albo strategia marki opartej na wartościach. Wrócimy do CD Projekt Red w bloku popołudniowym.'",
  "Czy uczestnicy reagują emocjonalnie? Gracze w sali mogą znać tę markę bardzo dobrze. Obserwuj, czy ktoś przywołuje kryzys launch'u Cyberpunka 2077 — doskonałe wejście do dyskusji o strategii marki.",
  "13:32 · Slajd 41 / 85"
);

// Slide 42 (4/22): Kampania 2 — mBank Email
campaignSlide(
  2, "mBank", "Email · kampania retencyjno-angażująca z grywalizacją",
  "spersonalizowane wezwanie do działania, pasek postępu lub element zdobywania punktów w programie Mgra, wyraźny CTA",
  "Tym razem email — od mBanku, polskiego pioniera bankowości cyfrowej. Post retencyjny z elementem grywalizacji. Trzydzieści sekund. Dobra czy zła?",
  "Uruchom timer. Zbierz głosy. Zapytaj jedno zdanie uzasadnienia. Połącz: 'Jeśli ktoś mówi, że to zbyt nachalne — to dokładnie pytanie o CVP i strategię marki, które będziemy badać za chwilę.'",
  "Uczestnicy z doświadczeniem bankowym mogą mieć silne opinie. Dyskusja o danych osobowych i personalizacji — cenny sygnał; zaznacz na użytek bloku CVP.",
  "13:36 · Slajd 42 / 85"
);

// Slide 43 (5/22): Kampania 3 — Żabka Landing Page
campaignSlide(
  3, "Żabka", "Landing page · kampania Żappka",
  "strona docelowa z ofertą promocyjną, CTA do pobrania aplikacji, elementy wizualne spójne z identyfikacją (zieleń, logotyp)",
  "Żabka i jej strona docelowa do kampanii Żappki. Landing page, który ma przekonać do pobrania aplikacji. Trzydzieści sekund. Dobra czy zła?",
  "Uruchom timer. Zbierz głosy. Zapytaj o uzasadnienie. Połącz: 'Żabka to marka, którą dobrze znamy z ćwiczenia 1 i 2 — jak wasza ocena zmienia się, kiedy znacie już ich strategię SOSTAC i mapę RACE?'",
  "Grupy, które rano pracowały na Żabce, mogą mieć bogatszy kontekst. Obserwuj, czy wiedza z rana informuje ocenę popołudniową — transfer wiedzy zadziałał.",
  "13:40 · Slajd 43 / 85"
);

// Slide 44 (6/22): Kampania 4 — InPost Influencer
campaignSlide(
  4, "InPost", "Post influencerski · Paczkomat",
  "kreacja podkreślająca wygodę ('paczka kiedy chcę, gdzie chcę'), autentyczny styl influencera, CTA lub kod zniżkowy",
  "InPost i ich post influencerski — messaging skupiony na wygodzie Paczkomatu. Trzydzieści sekund. Dobra czy zła?",
  "Uruchom timer. Zbierz głosy. Zapytaj o uzasadnienie. Połącz: 'InPost będzie naszym głównym przykładem przy Kanwie Propozycji Wartości w ćwiczeniu 3 — zapamiętajcie tę ocenę, wrócimy do niej.'",
  "Jeśli uczestnicy kwestionują autentyczność influencer marketingu — doskonały punkt do późniejszej dyskusji o strategii marki. Nie rozwijaj teraz — oznacz jako 'omówimy dokładniej za chwilę'.",
  "13:44 · Slajd 44 / 85"
);

// Slide 45 (7/22): Kampania 5 — Allegro SEO
campaignSlide(
  5, "Allegro", "SEO · organiczny wynik wyszukiwania",
  "listing Allegro wysoko w wynikach Google dla konkurencyjnej kategorii — tytuł strony, meta opis, rich snippets",
  "I na koniec — Allegro i ich pozycja w organicznych wynikach wyszukiwania dla konkurencyjnej kategorii. To nie reklama — to SEO. Trzydzieści sekund. Dobra czy zła kampania?",
  "Uruchom timer. Zbierz głosy. Zakończ re-energizer: 'Świetna robota. Widzę, że wasze oko marketingowe jest już rozgrzane. Teraz przejdziemy do czegoś, co sprawi, że ta ocena stanie się jeszcze ostrzejsza — strategii marki i propozycji wartości.' Przejdź płynnie do slajdu 46.",
  "Czy uczestnicy potrafią odróżnić 'mi się podoba' od 'jest skuteczna strategicznie'? Jeśli większość odpowiedzi estetyczna ('ładny design'), zaznacz: 'Oceniamy skuteczność strategiczną — nie estetykę.'",
  "13:48 · Slajd 45 / 85"
);

// =====================================================================
// Slide 46 (8/22): Hierarchy Diagram — Variant 2 (Foundation Emphasis)
// =====================================================================
n++;
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg2 };
  s.addText("BLOK 3 · STRATEGIA MARKI + CVP", {
    x: 0.6, y: 0.4, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 4, color: C.amber, margin: 0,
  });
  s.addText("Zbudowaliśmy plan. Teraz fundament.", {
    x: 0.6, y: 0.7, w: W - 1.2, h: 0.7,
    fontFace: FONT_H, fontSize: 30, bold: true, color: C.white, margin: 0,
  });
  L.drawHierarchy(s, pres, 2);
  s.addText('"Zbudowaliśmy plan (SOSTAC) i mapę egzekucji (RACE). Teraz: fundament strategiczny."', {
    x: 0.6, y: H - 1.0, w: W - 1.2, h: 0.4,
    fontFace: FONT_B, fontSize: 15, italic: true, color: "CCD5E0", align: "center",
  });
  L.slideNum(s, n, TOTAL, true);
  L.addNotes(s, {
    time: "13:50 · Slajd 46 / 85",
    say: "Uczyliśmy się SOSTAC i RACE jako pierwszych, bo to najbardziej namacalne narzędzia — ale w praktyce zawodowej definiujesz strategię marki zanim wypełnisz SOSTAC. Celowo odwróciliśmy tę kolejność: zaczęliśmy od konkretnych frameworków planistycznych, bo one dały wam rusztowanie, dzięki któremu abstrakcyjne pojęcia — 'strategia marki', 'propozycja wartości' — będą teraz miały dla was praktyczny wymiar. Przez całe rano budowaliście plany i mapy. Teraz zobaczymy, co powinno je fundować. Dwa górne poziomy — Strategia Marki i Strategia Cyfrowa — to fundament, bez którego SOSTAC jest tylko formularzem do wypełnienia.",
    doIt: "Wyświetl slajd. Wskaź wyblakłe dolne poziomy, a potem podświetlone dwa górne. 'Tam, gdzie byliśmy rano — teraz tu, gdzie naprawdę zaczyna się strategia.'",
    watch: "Jeśli ktoś pyta 'dlaczego nie zaczęliśmy od tego rano?' — odpowiedz: 'Bo strategia marki bez kontekstu planistycznego jest abstrakcją. Teraz, gdy znacie SOSTAC i RACE, strategia marki nabiera znaczenia.'",
  });
}

// =====================================================================
// Slide 47 (9/22): Trzy Poziomy — Porównanie
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "TRZY POZIOMY · POWRÓT DO HIERARCHII",
  title: "Strategia Cyfrowa ≠ Strategia Marketingu Cyfrowego ≠ Strategia Marki",
  subtitle: "Trzy pytania, trzech właścicieli, trzy horyzonty. Nie są synonimami.",
  time: "13:53 · Slajd 47 / 85",
  say: "Zanim zagłębimy się w Strategię Marki, musimy ustawić trzy pojęcia. Strategia Cyfrowa: pytanie na poziomie całej organizacji — jak technologia cyfrowa zmienia sposób, w jaki działamy? mBank bez oddziałów od 2000 — to decyzja zarządu, nie marketingu. Strategia Marketingu Cyfrowego: pytanie operacyjne — jak używamy kanałów cyfrowych do pozyskiwania i utrzymywania klientów? Allegro inwestujące w emocjonalne filmy zamiast reklam cenowych. Strategia Marki: pytanie tożsamościowe — kim jesteśmy, co reprezentujemy? CD Projekt Red: reputacja przez zasady (brak DRM, darmowe DLC). Te trzy pytania mają różnych właścicieli, horyzonty, narzędzia. Żadne nie jest synonimem.",
  doIt: "Odsłaniaj kolumny — mBank, Allegro, CD Projekt. Zadaj: 'Kto w firmie odpowiada za każde pytanie?'",
  watch: "Trudność z rozróżnieniem Cyfrowa vs Marketing Cyfrowy? Użyj: 'Żabka buduje sieć Nano = strategia cyfrowa. Żabka promuje Żappkę na TikToku = strategia marketingu cyfrowego.'",
}, n, TOTAL, (s, pres) => {
  L.drawTable(s, pres, {
    tableY: 2.1,
    tableH: 4.2,
    headers: ["Strategia Cyfrowa", "Strategia Marketingu Cyfrowego", "Strategia Marki"],
    colColors: [C.blueMid, C.teal, C.navy],
    rows: [
      ["Jak technologia transformuje organizację?", "Jak pozyskujemy, konwertujemy, utrzymujemy klientów cyfrowo?", "Kim jesteśmy i co reprezentujemy?"],
      ["mBank: brak fizycznych oddziałów od 2000 — decyzja organizacyjna, nie marketingowa", "Allegro: emocjonalne filmy YouTube zamiast reklam opartych o cenę", "CD Projekt Red: brak DRM, darmowe DLC, filozofia player-first"],
      ["Właściciel: CEO / CTO / CDO", "Właściciel: CMO / Head of Digital", "Właściciel: Brand Director / CEO"],
      ["Horyzont: wieloletnia transformacja", "Horyzont: roczny plan + kwartalne sprinty", "Horyzont: 5–10+ lat"],
    ],
  });
});

// =====================================================================
// Slide 48 (10/22): Komponenty Strategii Marki
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "STRATEGIA MARKI · 5 KOMPONENTÓW",
  title: "Strategia marki to nie logo — to system decyzji",
  subtitle: '"Gdyby nasza firma zniknęła jutro, czy ktoś by jej naprawdę brakowało?"',
  time: "13:57 · Slajd 48 / 85",
  say: "Strategia marki to nie logo i nie kolorystyka. To system wzajemnie powiązanych decyzji definiujących, kim marka jest i jak komunikuje się ze światem. Pięć komponentów: Cel — dlaczego istniejemy poza zarabianiem pieniędzy? Pozycjonowanie — dla kogo jesteśmy numerem jeden i w czym? Obietnica — co każdorazowo gwarantujemy klientowi? Osobowość — jak mówimy, jaki mamy charakter? Tożsamość — spójny system wizualny i werbalny. Wszystkie pięć musi być ze sobą spójne — jeśli osobowość jest 'odważna', ale tożsamość wizualna 'korporacyjna', marka wysyła sprzeczne sygnały. Pytanie testowe: gdyby wasza firma zniknęła jutro — czy ktokolwiek by jej brakowało? Jeśli nie — nie macie strategii marki, macie tylko ofertę.",
  doIt: "Odsłaniaj komponenty kolejno. Przy każdym zatrzymaj się na jedno zdanie. Na końcu pytanie testowe.",
  watch: "Uczestnicy próbują natychmiast zaaplikować do swojej marki? Dobry znak. Ktoś pyta 'co jeśli marka nie ma celu poza zyskiem?' — 'To prawda dla wielu. Dlatego są interchangeable dla konsumenta.'",
}, n, TOTAL, (s, pres) => {
  const items = [
    { label: "01 · PURPOSE", title: "Cel", body: "Dlaczego istniejemy poza zarabianiem? Po co świat nas potrzebuje?", accent: C.navy },
    { label: "02 · POSITIONING", title: "Pozycjonowanie", body: "Dla kogo jesteśmy numerem jeden i w czym konkretnie?", accent: C.blueMid },
    { label: "03 · PROMISE", title: "Obietnica", body: "Co gwarantujemy klientowi każdorazowo, bez wyjątku?", accent: C.teal },
    { label: "04 · PERSONALITY", title: "Osobowość", body: "Jak mówimy, jaki mamy charakter, jaki ton komunikacji?", accent: C.act },
    { label: "05 · IDENTITY", title: "Tożsamość", body: "Spójny system wizualny i werbalny — wszystko, co widać i słychać.", accent: C.amber },
  ];
  // 5 cards in a row
  const cellW = (W - 1.2 - 0.4) / 5;
  items.forEach((it, i) => {
    const x = 0.6 + i * (cellW + 0.1);
    const y = 2.2;
    const cellH = 3.4;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: cellW, h: cellH, fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: cellW, h: 0.5, fill: { color: it.accent }, line: { type: "none" },
    });
    s.addText(it.label, {
      x: x + 0.15, y, w: cellW - 0.3, h: 0.5,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: C.white,
      valign: "middle", margin: 0,
    });
    s.addText(it.title, {
      x: x + 0.2, y: y + 0.7, w: cellW - 0.4, h: 0.6,
      fontFace: FONT_H, fontSize: 20, bold: true, color: C.ink, margin: 0,
    });
    s.addText(it.body, {
      x: x + 0.2, y: y + 1.4, w: cellW - 0.4, h: cellH - 1.5,
      fontFace: FONT_B, fontSize: 12, color: C.inkMute, valign: "top", margin: 0,
    });
  });
  // Test question
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: H - 1.1, w: W - 1.2, h: 0.5, fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText('"Gdyby wasza firma zniknęła jutro — czy ktoś by jej naprawdę brakowało?"', {
    x: 0.6, y: H - 1.1, w: W - 1.2, h: 0.5,
    fontFace: FONT_H, fontSize: 14, italic: true, bold: true, color: C.amber,
    align: "center", valign: "middle", margin: 0,
  });
});

// =====================================================================
// Slide 49 (11/22): Brand Purpose — Złoty Krąg + Allegro
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "PURPOSE · GOLDEN CIRCLE",
  title: 'Zacznij od DLACZEGO',
  subtitle: "Simon Sinek · Allegro 'English for Beginners' jako polski case",
  time: "14:01 · Slajd 49 / 85",
  say: "Simon Sinek spopularyzował 'Zacznij od Dlaczego' — brzmi prosto, ale w praktyce jednym z najtrudniejszych zadań strategicznych. Dlaczego to nie 'żeby zarabiać pieniądze' — to cel biznesowy, nie cel marki. Dlaczego to odpowiedź: w jakim celu istniejemy poza generowaniem przychodu? Allegro to polski przykład. Kampania 'English for Beginners' 2016 — film, w którym starszy pan uczy się angielskiego, żeby zaskoczyć wnuczkę — 11 milionów wyświetleń w 2 tygodnie. Allegro prawie nie pojawia się w filmie. Produkt jest nieistotny. Ważna jest emocja: ludzkie połączenia umożliwiane przez technologię. To jest Brand Purpose. Wyniki: Allegro ma dziś 88% świadomości marki i 45–50% udziału w rynku e-commerce w Polsce. Marka z jasnym celem nie musi kupować uwagi — przyciąga ją.",
  doIt: "Wyświetl Złoty Krąg bez przykładu. Zapytaj: 'Jaka wasza odpowiedź na DLACZEGO dla marki z dzisiejszego ćwiczenia?' 30 sek myślenia. Potem odsłoń Allegro.",
  watch: "Uczestnicy mylą 'Dlaczego' z misją? Naprowadź: 'Allegro mogłoby powiedzieć 'dostarczamy produkty w najlepszych cenach'. Zamiast tego: umożliwiamy ludzkie połączenia.'",
}, n, TOTAL, (s, pres) => {
  // Left: Golden Circle (concentric ovals)
  const cx = 3.3, cy = 4.3;
  const r1 = 2.0, r2 = 1.3, r3 = 0.7;
  s.addShape(pres.shapes.OVAL, {
    x: cx - r1, y: cy - r1, w: r1 * 2, h: r1 * 2,
    fill: { color: "F5E6B8" }, line: { color: C.amber, width: 2 },
  });
  s.addShape(pres.shapes.OVAL, {
    x: cx - r2, y: cy - r2, w: r2 * 2, h: r2 * 2,
    fill: { color: "F0C96B" }, line: { color: C.amber, width: 2 },
  });
  s.addShape(pres.shapes.OVAL, {
    x: cx - r3, y: cy - r3, w: r3 * 2, h: r3 * 2,
    fill: { color: C.amber }, line: { type: "none" },
  });
  // Labels
  s.addText("CO", {
    x: cx - r1, y: cy + r2 + 0.05, w: r1 * 2, h: 0.4,
    fontFace: FONT_H, fontSize: 13, bold: true, color: C.ink,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("JAK", {
    x: cx - r2, y: cy + r3 + 0.05, w: r2 * 2, h: 0.4,
    fontFace: FONT_H, fontSize: 13, bold: true, color: C.ink,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("DLACZEGO", {
    x: cx - r3, y: cy - 0.2, w: r3 * 2, h: 0.4,
    fontFace: FONT_H, fontSize: 12, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
  // Right: Allegro case
  s.addShape(pres.shapes.RECTANGLE, {
    x: 7.0, y: 2.2, w: W - 7.6, h: 4.2,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("POLSKI CASE · ALLEGRO", {
    x: 7.2, y: 2.35, w: W - 7.8, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.amber, margin: 0,
  });
  s.addText('"English for Beginners" (2016)', {
    x: 7.2, y: 2.7, w: W - 7.8, h: 0.5,
    fontFace: FONT_H, fontSize: 20, bold: true, color: C.white, margin: 0,
  });
  s.addText("Film: starszy pan uczy się angielskiego, by zaskoczyć wnuczkę. Allegro prawie nie widoczne. Produkt nieważny. Ważna jest emocja.", {
    x: 7.2, y: 3.3, w: W - 7.8, h: 1.2,
    fontFace: FONT_B, fontSize: 13, color: "CCD5E0", valign: "top", margin: 0,
  });
  s.addText("11 mln", {
    x: 7.2, y: 4.5, w: (W - 7.8) / 2, h: 0.9,
    fontFace: FONT_H, fontSize: 38, bold: true, color: C.amber, margin: 0,
  });
  s.addText("wyświetleń\nw 2 tygodnie", {
    x: 7.2, y: 5.4, w: (W - 7.8) / 2, h: 0.7,
    fontFace: FONT_B, fontSize: 11, italic: true, color: "CCD5E0", valign: "top", margin: 0,
  });
  s.addText("88%", {
    x: 7.2 + (W - 7.8) / 2, y: 4.5, w: (W - 7.8) / 2, h: 0.9,
    fontFace: FONT_H, fontSize: 38, bold: true, color: C.amber, margin: 0,
  });
  s.addText("świadomość marki\n45–50% rynku e-commerce PL", {
    x: 7.2 + (W - 7.8) / 2, y: 5.4, w: (W - 7.8) / 2, h: 0.7,
    fontFace: FONT_B, fontSize: 11, italic: true, color: "CCD5E0", valign: "top", margin: 0,
  });
  // Insight footer
  s.addText('"Allegro nie sprzedaje produktów. Sprzedaje ludzkie połączenia."', {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 14, italic: true, bold: true, color: C.teal, align: "center",
  });
  s.addText("Źródła: Statista · Allegro IR 2024 · Simon Sinek 'Start with Why'", {
    x: 0.6, y: H - 0.6, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 50 (12/22): Pozycjonowanie Marki
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "POSITIONING",
  title: "Pozycjonowanie: dla KOGO i w CZYM",
  subtitle: "Nie USP. USP pyta 'czym się różnimy?'. Pozycjonowanie pyta 'dla kogo jesteśmy #1 i w czym?'",
  time: "14:05 · Slajd 50 / 85",
  say: "Pozycjonowanie to nie USP. USP pyta 'czym się różnimy?' i skupia się na produkcie. Pozycjonowanie pyta 'dla kogo jesteśmy numerem jeden i w czym?' i skupia się na kliencie. Klasyczny wzór: dla określonego targetu, który ma określoną potrzebę, nasza marka jest jedyną w kategorii dostarczającą kluczową różnicę, bo dowód X. Macie 30 sekund — spróbujcie wypełnić ten wzór dla marki z dzisiejszego ćwiczenia. Mapa percepcyjna to narzędzie wizualizacji: umieszczasz markę na dwóch osiach wobec konkurentów. Nie ma jednej 'właściwej' mapy — wybór osi jest decyzją strategiczną. InPost: 'wygoda vs cena' lub 'zasięg vs personalizacja' — każda zadaje inne pytanie.",
  doIt: "Odsłoń wzór. Daj 30 sek ciche ćwiczenie. Odsłoń mapę percepcyjną. 'Jakie 2 osie użylibyście dla waszej marki? Dlaczego?'",
  watch: "Grupy utykają na wyborze osi? Naprowadź: 'Jakie 2 wymiary są najważniejsze dla waszego klienta? Co ocenia przy wyborze?'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Left: positioning formula
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 6.0, h: 4.2,
    fill: { color: C.offWhite }, line: { type: "none" },
  });
  s.addText("WZÓR POZYCJONOWANIA", {
    x: 0.8, y: y0 + 0.15, w: 5.6, h: 0.35,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.teal, margin: 0,
  });
  s.addText([
    { text: "Dla ", options: { fontSize: 17 } },
    { text: "[target]", options: { fontSize: 17, bold: true, color: C.teal, breakLine: true } },
    { text: "którzy ", options: { fontSize: 17 } },
    { text: "[potrzeba]", options: { fontSize: 17, bold: true, color: C.teal, breakLine: true } },
    { text: "nasza marka jest jedyną ", options: { fontSize: 17 } },
    { text: "[kategoria]", options: { fontSize: 17, bold: true, color: C.teal, breakLine: true } },
    { text: "która ", options: { fontSize: 17 } },
    { text: "[kluczowa różnica]", options: { fontSize: 17, bold: true, color: C.teal, breakLine: true } },
    { text: "ponieważ ", options: { fontSize: 17 } },
    { text: "[dowód]", options: { fontSize: 17, bold: true, color: C.teal } },
  ], {
    x: 0.8, y: y0 + 0.7, w: 5.6, h: 3.2,
    fontFace: FONT_B, color: C.ink, valign: "top", paraSpaceAfter: 10, margin: 0,
  });
  // Right: perceptual map
  const mapX = 7.0, mapY = y0 + 0.1, mapW = 5.6, mapH = 3.9;
  s.addText("MAPA PERCEPCYJNA", {
    x: mapX, y: mapY, w: mapW, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.teal, margin: 0,
  });
  // Axes
  s.addShape(pres.shapes.LINE, {
    x: mapX + 0.3, y: mapY + 0.5, w: 0, h: mapH - 0.7,
    line: { color: C.inkMute, width: 2, endArrowType: "triangle" },
  });
  s.addShape(pres.shapes.LINE, {
    x: mapX + 0.3, y: mapY + mapH - 0.3, w: mapW - 0.6, h: 0,
    line: { color: C.inkMute, width: 2, endArrowType: "triangle" },
  });
  // Axis labels
  s.addText("Wysoka cena", {
    x: mapX, y: mapY + 0.35, w: 1.8, h: 0.3,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkMute, margin: 0,
  });
  s.addText("Niska cena", {
    x: mapX, y: mapY + mapH - 0.5, w: 1.8, h: 0.3,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkMute, margin: 0,
  });
  s.addText("Niszowy", {
    x: mapX + 0.2, y: mapY + mapH - 0.3, w: 1.5, h: 0.3,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkMute, margin: 0,
  });
  s.addText("Masowy", {
    x: mapX + mapW - 1.2, y: mapY + mapH - 0.3, w: 1.0, h: 0.3,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkMute, align: "right", margin: 0,
  });
  // Sample brand dots
  const dots = [
    { label: "Premium A", x: 0.65, y: 0.3, c: C.navy },
    { label: "Nasza marka?", x: 0.55, y: 0.5, c: C.amber },
    { label: "Mass B", x: 0.8, y: 0.85, c: C.inkMute },
  ];
  dots.forEach((d) => {
    const px = mapX + 0.3 + d.x * (mapW - 0.6);
    const py = mapY + 0.5 + d.y * (mapH - 0.8);
    s.addShape(pres.shapes.OVAL, {
      x: px - 0.1, y: py - 0.1, w: 0.2, h: 0.2,
      fill: { color: d.c }, line: { type: "none" },
    });
    s.addText(d.label, {
      x: px + 0.15, y: py - 0.12, w: 1.8, h: 0.3,
      fontFace: FONT_B, fontSize: 10, bold: true, color: d.c, valign: "middle", margin: 0,
    });
  });
  s.addText("Wybór osi = decyzja strategiczna. Nie ma jednej 'właściwej' mapy.", {
    x: 0.6, y: H - 0.9, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 13, italic: true, color: C.inkMute, align: "center",
  });
});

// =====================================================================
// Slide 51 (13/22): Tożsamość i Osobowość — Duolingo + CDPR
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "IDENTITY + PERSONALITY",
  title: "Tożsamość widać. Osobowość słychać.",
  subtitle: "Duolingo: maskotka jako osobowość. CD Projekt Red: tożsamość wyrażona przez decyzje produktowe.",
  time: "14:09 · Slajd 51 / 85",
  say: "Tożsamość marki — spójny system wizualny i werbalny. Nie tylko logo — zestaw zasad definiujący jak marka wygląda, jak mówi, jak się zachowuje. Osobowość — charakter marki — zestaw cech sprawiający, że marka brzmi jak osoba, nie korporacyjna maszyna. Duolingo — jeden z najbardziej skrajnych przykładów osobowości na TikToku. 13M+ followersów, maskotka Duo traktowana jak niezależna osobowość z własnym humorem, historią, specyficzną nienawiścią do użytkowników, którzy pomijają lekcje. Chaotyczna, ale świadoma i konsekwentna. CD Projekt Red — tożsamość wyrażona przez decyzje produktowe. 'Brak DRM, darmowe DLC, player-first' to nie hasło marketingowe — to filozofia kształtująca wszystkie decyzje. Tożsamość marki powinna być widoczna nie tylko w reklamie, ale w tym, jak marka zachowuje się w kryzysie.",
  doIt: "Odsłoń lewą (system tożsamości), potem prawą z case studies. 'Jaką osobowość ma marka z waszego ćwiczenia — 3 przymiotnikami?'",
  watch: "Trudność oddzielić tożsamość wizualną od osobowości werbalnej? 'Duolingo ma spójną identyfikację wizualną, ale osobowość budują copywriterzy i moderatorzy.'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  // Left: identity system checklist
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.5, h: 4.4,
    fill: { color: C.offWhite }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: 5.5, h: 0.55,
    fill: { color: C.navy }, line: { type: "none" },
  });
  s.addText("SYSTEM TOŻSAMOŚCI", {
    x: 0.75, y: y0, w: 5.3, h: 0.55,
    fontFace: FONT_H, fontSize: 15, bold: true, color: C.white, valign: "middle", margin: 0,
  });
  const elements = [
    "Logo — znak rozpoznawczy",
    "Kolorystyka — paleta marki",
    "Typografia — krój czcionki",
    "Ton głosu (voice) — jak piszemy",
    "Key visuals — motywy wizualne",
    "Zachowanie w kryzysie — najtrudniejszy test",
  ];
  elements.forEach((e, i) => {
    const y = y0 + 0.75 + i * 0.6;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.75, y: y + 0.05, w: 0.1, h: 0.4,
      fill: { color: C.teal }, line: { type: "none" },
    });
    s.addText(e, {
      x: 1.0, y, w: 5.0, h: 0.5,
      fontFace: FONT_B, fontSize: 14, color: C.ink, valign: "middle", margin: 0,
    });
  });
  // Right: two case studies stacked
  const rx = 6.4;
  // Duolingo
  s.addShape(pres.shapes.RECTANGLE, {
    x: rx, y: y0, w: W - rx - 0.6, h: 2.1,
    fill: { color: "E6F5E8" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: rx, y: y0, w: 0.15, h: 2.1,
    fill: { color: C.act }, line: { type: "none" },
  });
  s.addText("DUOLINGO · TikTok", {
    x: rx + 0.25, y: y0 + 0.15, w: W - rx - 0.9, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 2, color: C.act, margin: 0,
  });
  s.addText("13M+ followersów. Maskotka Duo = niezależna osobowość z własnym humorem i specyficzną nienawiścią do użytkowników, którzy pomijają lekcje. Chaos — ale świadomy i konsekwentny.", {
    x: rx + 0.25, y: y0 + 0.5, w: W - rx - 0.9, h: 1.5,
    fontFace: FONT_B, fontSize: 13, color: C.ink, valign: "top", margin: 0,
  });
  // CD Projekt Red
  s.addShape(pres.shapes.RECTANGLE, {
    x: rx, y: y0 + 2.3, w: W - rx - 0.6, h: 2.1,
    fill: { color: "F0F3F8" }, line: { type: "none" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: rx, y: y0 + 2.3, w: 0.15, h: 2.1,
    fill: { color: C.navy }, line: { type: "none" },
  });
  s.addText("CD PROJEKT RED · decyzje produktowe", {
    x: rx + 0.25, y: y0 + 2.45, w: W - rx - 0.9, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 2, color: C.navy, margin: 0,
  });
  s.addText("Brak DRM · darmowe DLC · player-first. Tożsamość wyrażona przez decyzje, nie design. Filozofia, która kształtuje wszystkie wybory — od developmentu do zarządzania społecznością.", {
    x: rx + 0.25, y: y0 + 2.8, w: W - rx - 0.9, h: 1.5,
    fontFace: FONT_B, fontSize: 13, color: C.ink, valign: "top", margin: 0,
  });
});

// =====================================================================
// Slide 52 (14/22): Model Kapitału Marki Aakera
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "BRAND EQUITY · AAKER MODEL",
  title: "Markę można mierzyć — Aaker dał nam język CFO",
  subtitle: "Każdy z 5 komponentów ma cyfrowy odpowiednik",
  time: "14:13 · Slajd 52 / 85",
  say: "David Aaker, profesor z Berkeley, zaproponował model, który do dziś jest najbardziej użyteczny do mierzenia siły marki. Brand Equity — wartość, jaką nazwa marki dodaje ponad funkcjonalne cechy produktu. Pięć komponentów: lojalność, świadomość, postrzegana jakość, skojarzenia, inne zasoby własnościowe. Co czyni model użytecznym w epoce cyfrowej? Każdy komponent ma mierzalny odpowiednik w danych. Lojalność = CLV + wskaźnik powtórnych zakupów. Świadomość = zasięg organiczny + share of voice. Postrzegana jakość = NPS + oceny produktów. Skojarzenia = sentyment w social media + engagement. Zasoby własnościowe = rozmiar bazy first-party. Silna marka cyfrowa ma wysokie wyniki we wszystkich pięciu. Słaba marka cyfrowa może mieć ogromne zasięgi i zerową lojalność. To nie jest to samo.",
  doIt: "Odsłaniaj komponenty po kolei + cyfrowy ekwiwalent. 'Gdzie na tej mapie wasza marka jest mocna? Gdzie słaba?' 30 sek refleksji.",
  watch: "Zaskoczenie, że 'markę' można mierzyć liczbami? 'Marketing jest sztuką i nauką. Aaker dał nam język, który rozumie CFO.'",
}, n, TOTAL, (s, pres) => {
  L.drawTable(s, pres, {
    tableY: 2.1,
    tableH: 4.3,
    headers: ["Komponent Aakera", "Cyfrowy ekwiwalent KPI"],
    colColors: [C.navy, C.teal],
    colWs: [4.8, W - 1.2 - 4.8],
    rows: [
      ["Lojalność wobec marki", "CLV · wskaźnik powtórnych zakupów · churn rate"],
      ["Świadomość marki", "Zasięg organiczny · Share of Voice w wyszukiwaniu · recall"],
      ["Postrzegana jakość", "NPS · oceny produktów · recenzje w Trustpilot/Google"],
      ["Skojarzenia z marką", "Sentyment w social media · engagement rate · tematy wzmianek"],
      ["Zasoby własnościowe", "Rozmiar i jakość bazy first-party · baza subskrybentów email"],
    ],
    footerNote: "Silna marka cyfrowa = wysoki wynik we wszystkich 5. Duży zasięg + zerowa lojalność ≠ silna marka.",
  });
});

// =====================================================================
// Slide 53 (15/22): Piramida Marki — Nike
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "BRAND PYRAMID",
  title: "Od atrybutów do esencji",
  subtitle: "Większość firm komunikuje z poziomu atrybutów. Silne marki — z poziomu esencji.",
  time: "14:17 · Slajd 53 / 85",
  say: "Piramida marki pokazuje, jak marka buduje znaczenie — od poziomu produktu do poziomu tożsamości. Na dole: atrybuty — konkretne cechy produktu, opisywalne technicznie. W środku: korzyści funkcjonalne, potem emocjonalne. Na szczycie: esencja — jedno zdanie, które streszcza wszystko. Nike jest podręcznikowym przykładem. Atrybuty: Air Max, Flyknit, grip. Korzyści funkcjonalne: wydajność, wytrzymałość, komfort. Korzyści emocjonalne: czuję się jak prawdziwy sportowiec. Wartości: determinacja, autentyzm. Esencja: 'Just Do It' — trzy słowa zawierające całą filozofię. Większość firm komunikuje z poziomu atrybutów. Silne marki komunikują z poziomu esencji. 'Just Do It' nie mówi nic o podeszwach. Mówi wszystko o tym, dlaczego chcesz być klientem Nike.",
  doIt: "Odsłaniaj piramidę od podstawy do szczytu. Przy każdym poziomie wyraźnie Nike. Na szczycie zatrzymaj się przy 'Just Do It'.",
  watch: "Uczestnicy przenoszą strukturę na swoją markę? Jeśli utknęli: 'Zacznijcie od atrybutów. 3 cechy produktu. Potem co to oznacza emocjonalnie?'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Pyramid — 5 stacked rectangles, widening downward
  const levels = [
    { t: "ESENCJA", nike: '"Just Do It"', w: 4.0, c: C.navy },
    { t: "WARTOŚCI", nike: "Determinacja · autentyzm · przezwyciężanie siebie", w: 4.8, c: C.blueMid },
    { t: "KORZYŚCI EMOCJONALNE", nike: '"Czuję się jak prawdziwy sportowiec"', w: 5.6, c: C.teal },
    { t: "KORZYŚCI FUNKCJONALNE", nike: "Wydajność atletyczna · komfort · wytrzymałość", w: 6.4, c: C.act },
    { t: "ATRYBUTY", nike: "Air Max · Flyknit · grip podeszwy", w: 7.2, c: C.inkMute },
  ];
  const rowH = 0.65;
  levels.forEach((lv, i) => {
    const y = y0 + i * (rowH + 0.05);
    const x = (W - lv.w) / 2 - 2.0; // shift left to make room for Nike labels
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: lv.w, h: rowH,
      fill: { color: lv.c }, line: { type: "none" },
    });
    s.addText(lv.t, {
      x, y, w: lv.w, h: rowH,
      fontFace: FONT_H, fontSize: 13, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    // Nike example to the right
    s.addText(lv.nike, {
      x: x + lv.w + 0.3, y, w: W - (x + lv.w) - 0.9, h: rowH,
      fontFace: FONT_B, fontSize: 13, italic: true, color: C.ink,
      valign: "middle", margin: 0,
    });
  });
  s.addText("Przykład: Nike", {
    x: (W - 7.2) / 2 - 2.0 + 7.2 + 0.3, y: y0 - 0.3, w: 3, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 2, color: C.teal, margin: 0,
  });
  s.addText('"Just Do It" nie mówi nic o podeszwach. Mówi wszystko o tym, dlaczego chcesz być klientem Nike.', {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 14, italic: true, bold: true, color: C.navy, align: "center",
  });
});

// =====================================================================
// Slide 54 (16/22): CVP — Definicja i CVP vs USP
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "CVP · DEFINICJA",
  title: "CVP mówi do klienta, nie o produkcie",
  subtitle: "USP: 'My jesteśmy najlepsi w X'. CVP: 'Ty zyskujesz Y, bo Z'.",
  time: "14:17 · Slajd 54 / 85",
  say: "CVP to nie hasło reklamowe. To odpowiedź na jedno pytanie klienta: 'dlaczego Wy, a nie ktoś inny?'. Odpowiedź musi być konkretna, musi mówić o kliencie, nie o produkcie. Różnica CVP vs USP jest subtelna ale fundamentalna. USP koncentruje się na marce: 'Jesteśmy najszybsi. Najtańsi. Najbardziej innowacyjni.' CVP koncentruje się na kliencie: 'Twoja paczka jest gotowa do odbioru o każdej porze, 7 minut od domu, bez czekania na kuriera.' Obydwa mogą opisywać InPost. Ale jedno to reklama — drugie propozycja wartości. Mocna CVP jest testowalna: możesz zapytać klienta 'czy to zdanie odzwierciedla to, co ceniłeś?' i uzyskać odpowiedź. Słaba CVP brzmi jak broszura korporacyjna: 'Dostarczamy innowacyjne rozwiązania na miarę potrzeb klienta.' Nic nie znaczy.",
  doIt: "Odsłoń definicję. Tabelę porównawczą wiersz po wierszu. Pytaj: 'Który język przeważa w komunikacji waszej marki?'",
  watch: "Uczestnicy wpisują slogan jako CVP? 'Slogan jest wyrazem CVP, ale nim nie jest. CVP to zdanie, które klient mógłby sam wypowiedzieć — 'wybieram tę markę, bo…'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.1;
  // Definition box
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: y0, w: W - 1.2, h: 1.0,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("DEFINICJA CVP", {
    x: 0.8, y: y0 + 0.1, w: 2.5, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.amber, margin: 0,
  });
  s.addText("Zwięzłe stwierdzenie komunikujące unikalne korzyści produktu/usługi dla konkretnego klienta docelowego — wyjaśniające, dlaczego powinien wybrać tę ofertę zamiast alternatyw.", {
    x: 0.8, y: y0 + 0.4, w: W - 1.6, h: 0.6,
    fontFace: FONT_B, fontSize: 14, italic: true, color: C.white, margin: 0,
  });
  // Comparison table
  L.drawTable(s, pres, {
    tableY: y0 + 1.2,
    tableH: 3.4,
    headers: ["USP", "CVP"],
    colColors: [C.inkMute, C.teal],
    rows: [
      ["Pytanie: 'Czym się różnimy?'", "Pytanie: 'Dlaczego klient powinien nas wybrać?'"],
      ["Fokus: marka / produkt", "Fokus: klient i jego potrzeby"],
      ["Język: 'My jesteśmy najlepsi w…'", "Język: 'Ty zyskujesz / Twój ból znika…'"],
      ["Przykład: 'Najszybsza dostawa w Polsce'", "Przykład: 'Twoja paczka gotowa w 7 min od domu, o każdej porze'"],
    ],
  });
});

// =====================================================================
// Slide 55 (17/22): Kanwa Propozycji Wartości — Przegląd
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "VALUE PROPOSITION CANVAS",
  title: "Kanwa Propozycji Wartości — dopasowanie FIT",
  subtitle: "Profil Klienta (co chce, co boli, co cieszy) ↔ Mapa Wartości (co oferujemy)",
  time: "14:20 · Slajd 55 / 85",
  say: "Kanwa Propozycji Wartości Alexa Osterwaldera przekształca intuicję w ustrukturyzowaną analizę. Dwa elementy. Profil Klienta: Zadania (co chce osiągnąć), Bóle (co mu przeszkadza), Korzyści (co chce zyskać). Mapa Wartości: Produkty i Usługi (co oferujemy), Uśmierzacze Bólu (jak adresujemy bóle), Kreatory Korzyści (jak tworzymy korzyści). Magia dzieje się w FIT — kiedy każdy ból ma Uśmierzacz, a każda Korzyść ma Kreator. Spotify to przykład doskonałego FIT — zmapowali czego słuchacze chcą (personalizacja, odkrywanie, tożsamość przez muzykę) i zbudowali produkt adresujący każdy element. Wynik: 713M MAU, 31,7% globalnego rynku streamingu. Kluczowa zasada: zawsze zaczynamy od Profilu Klienta. Nigdy od Mapy Wartości.",
  doIt: "Wyświetl diagram. Wskaż koło (Profil), kwadrat (Mapa). Podkreśl FIT. Odsłoń Spotify jako exemplar.",
  watch: "Czy uczestnicy rozumieją polskie etykiety stref? Jeśli zagubieni — wyjaśnij jednym zdaniem każdą.",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  const h = 3.5;
  // Left: Value Map (square)
  const lx = 0.6, lw = 4.8;
  s.addShape(pres.shapes.RECTANGLE, {
    x: lx, y: y0, w: lw, h: h,
    fill: { color: "E8F5EA" }, line: { color: C.act, width: 2 },
  });
  s.addText("MAPA WARTOŚCI", {
    x: lx, y: y0 + 0.15, w: lw, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.act,
    align: "center", margin: 0,
  });
  s.addText("(Co oferujemy)", {
    x: lx, y: y0 + 0.45, w: lw, h: 0.3,
    fontFace: FONT_B, fontSize: 11, italic: true, color: C.inkMute, align: "center", margin: 0,
  });
  const mapZones = [
    { t: "Produkty i Usługi", c: C.inkMute },
    { t: "Uśmierzacze Bólu", c: C.convert },
    { t: "Kreatory Korzyści", c: C.reach },
  ];
  mapZones.forEach((z, i) => {
    const zy = y0 + 0.9 + i * 0.8;
    s.addShape(pres.shapes.RECTANGLE, {
      x: lx + 0.3, y: zy, w: lw - 0.6, h: 0.7,
      fill: { color: C.white }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: lx + 0.3, y: zy, w: 0.08, h: 0.7,
      fill: { color: z.c }, line: { type: "none" },
    });
    s.addText(z.t, {
      x: lx + 0.45, y: zy, w: lw - 0.85, h: 0.7,
      fontFace: FONT_H, fontSize: 14, bold: true, color: C.ink,
      valign: "middle", margin: 0,
    });
  });

  // Middle: FIT arrows
  s.addText("⇄", {
    x: lx + lw, y: y0 + h / 2 - 0.5, w: 0.8, h: 1.0,
    fontFace: FONT_H, fontSize: 56, bold: true, color: C.amber,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("FIT", {
    x: lx + lw, y: y0 + h / 2 + 0.3, w: 0.8, h: 0.4,
    fontFace: FONT_H, fontSize: 14, bold: true, color: C.amber,
    align: "center", valign: "middle", margin: 0,
  });

  // Right: Customer Profile (circle-styled)
  const rx = lx + lw + 0.9, rw = 4.8;
  s.addShape(pres.shapes.OVAL, {
    x: rx, y: y0, w: rw, h: h,
    fill: { color: "FFF4E5" }, line: { color: C.amber, width: 2 },
  });
  s.addText("PROFIL KLIENTA", {
    x: rx, y: y0 + 0.25, w: rw, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3, color: C.amber,
    align: "center", margin: 0,
  });
  s.addText("(Co klient chce, czuje, pragnie)", {
    x: rx, y: y0 + 0.55, w: rw, h: 0.3,
    fontFace: FONT_B, fontSize: 11, italic: true, color: C.inkMute, align: "center", margin: 0,
  });
  const profZones = [
    { t: "Zadania Klienta", c: C.strat },
    { t: "Bóle", c: C.red },
    { t: "Korzyści", c: C.act },
  ];
  profZones.forEach((z, i) => {
    const zy = y0 + 1.0 + i * 0.7;
    s.addShape(pres.shapes.RECTANGLE, {
      x: rx + 0.5, y: zy, w: rw - 1.0, h: 0.6,
      fill: { color: C.white }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: rx + 0.5, y: zy, w: 0.08, h: 0.6,
      fill: { color: z.c }, line: { type: "none" },
    });
    s.addText(z.t, {
      x: rx + 0.65, y: zy, w: rw - 1.15, h: 0.6,
      fontFace: FONT_H, fontSize: 13, bold: true, color: C.ink,
      valign: "middle", margin: 0,
    });
  });

  // Spotify case
  s.addText("Spotify: 713M MAU · 31,7% globalnego rynku streamingu — dopasowanie CVP do zmapowanych potrzeb słuchaczy.", {
    x: 0.6, y: H - 1.05, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, italic: true, color: C.teal, align: "center",
  });
  s.addText("Źródło: Backlinko Spotify Statistics 2025  ·  Metoda: Alex Osterwalder / Strategyzer", {
    x: 0.6, y: H - 0.75, w: W - 1.2, h: 0.2,
    fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint, align: "right",
  });
});

// =====================================================================
// Slide 56 (18/22): Przykłady CVP
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "CVP · 5 PRZYKŁADÓW",
  title: "Jak wygląda mocna CVP — pięć marek",
  subtitle: "Format rozbudowany (brief, dokument) vs kapsułkowy (strona, pitch)",
  time: "14:23 · Slajd 56 / 85",
  say: "Zobaczmy jak wygląda mocna CVP na 5 przykładach z różnych branż. InPost: 'Dla polskiego kupującego, który nienawidzi czekać na kuriera — Paczkomat gwarantuje odbiór w 7 min od domu, 24/7 — w odróżnieniu od dostawy do drzwi, która wymaga obecności.' Żabka: 'Dla zapracowanego mieszkańca miasta — sklep zawsze blisko, który zna twoje nawyki zakupowe i nagradza lojalność spersonalizowanymi ofertami.' Spotify: 'Twoja muzyka, wszędzie, spersonalizowana.' Airbnb: 'Belong anywhere.' Slack: 'Where work happens.' Zwróćcie uwagę na skalę — od rozbudowanego formatu dla InPost po kapsułkowe dla globalnych. Oba są poprawne — różnią się kontekstem zastosowania. Rozbudowany: dokument strategiczny lub brief agencji. Kapsułka: nagłówek strony czy pitch.",
  doIt: "Odsłaniaj karty jedna po drugiej. Pytaj: 'Czy ta CVP mówi do klienta czy o produkcie?' InPost: '7 min od domu' — konkret weryfikowalny. Airbnb: 'Belong anywhere' — emocja, nie funkcja.",
  watch: "Jeśli kwestionują 'Belong anywhere': 'Zgoda, to bardziej Brand Essence niż CVP. Dobry przykład, jak CVP i Strategia Marki nakładają się na poziomie esencji.'",
}, n, TOTAL, (s, pres) => {
  const brands = [
    { logo: "InPost", cvp: '"Dla polskiego kupującego, który nie chce czekać na kuriera — Paczkomat gwarantuje odbiór w 7 minut od domu, 24/7."', style: "rozbudowany", color: C.convert },
    { logo: "Żabka", cvp: '"Dla zapracowanego mieszkańca miasta — sklep zawsze blisko, który zna twoje nawyki i nagradza lojalność przez Żappkę."', style: "rozbudowany", color: C.act },
    { logo: "Spotify", cvp: '"Twoja muzyka, wszędzie, spersonalizowana dla ciebie."', style: "kapsułkowy", color: C.engage },
    { logo: "Airbnb", cvp: '"Belong anywhere — poczuj się jak w domu, gdziekolwiek na świecie."', style: "kapsułkowy", color: C.amber },
    { logo: "Slack", cvp: '"Where work happens — tu dzieje się praca."', style: "kapsułkowy", color: C.teal },
  ];
  const y0 = 2.1;
  const rowH = (H - y0 - 0.9) / brands.length;
  brands.forEach((b, i) => {
    const y = y0 + i * rowH;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: W - 1.2, h: rowH - 0.08,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 0.12, h: rowH - 0.08,
      fill: { color: b.color }, line: { type: "none" },
    });
    s.addText(b.logo, {
      x: 0.85, y, w: 1.5, h: rowH - 0.08,
      fontFace: FONT_H, fontSize: 18, bold: true, color: b.color,
      valign: "middle", margin: 0,
    });
    s.addText(b.cvp, {
      x: 2.4, y, w: W - 4.0, h: rowH - 0.08,
      fontFace: FONT_B, fontSize: 13, italic: true, color: C.ink,
      valign: "middle", margin: 0,
    });
    s.addText(b.style, {
      x: W - 1.5, y, w: 0.8, h: rowH - 0.08,
      fontFace: FONT_B, fontSize: 10, italic: true, color: C.inkFaint,
      align: "right", valign: "middle", margin: 0,
    });
  });
});

// =====================================================================
// Slide 57 (19/22): CVP jako Kompas
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "CVP JAKO KOMPAS",
  title: "Silna CVP upraszcza wszystkie dalsze decyzje",
  subtitle: "Bez CVP: strategia treści bez kierunku, wybór kanałów 'bo prezes lubi TikToka'.",
  time: "14:25 · Slajd 57 / 85",
  say: "Silna CVP nie jest celem samym w sobie — jest kompasem dla wszystkich dalszych decyzji. Kiedy masz silną CVP, pytania stają się prostsze: czy ten kanał dociera do naszego klienta? Czy ta treść odpowiada na jego ból lub tworzy korzyść? Czy komunikat mówi o kliencie czy o produkcie? Strategia treści bez CVP = produkcja contentu bez kierunku. Wybór kanałów bez CVP = bycie wszędzie i nigdzie. Hierarchia przekazu bez CVP = brak kręgosłupa. CVP nie zwalnia was z trudnych decyzji — ale daje kryterium wyboru wykraczające poza 'bo prezes lubi TikToka'. Za chwilę w ćwiczeniu 3 zbudujecie CVP dla waszej marki — będzie kompassem dla całego dnia, łącznie z budżetem w ćwiczeniu 4.",
  doIt: "Wyświetl diagram kompassowy. Wskaź 4 kierunki + pytania. Podkreśl: 'Ten slajd to pomost między tym, czego się nauczyliście, a tym, co zbudujecie.'",
  watch: "Energia niska przed ćwiczeniem? Normalne — nie przedłużaj. Przejdź płynnie do Warsztatu 3.",
}, n, TOTAL, (s, pres) => {
  // Central CVP in middle, 4 decision arrows
  const cx = W / 2, cy = 4.2;
  s.addShape(pres.shapes.OVAL, {
    x: cx - 1.0, y: cy - 1.0, w: 2.0, h: 2.0,
    fill: { color: C.darkBg2 }, line: { type: "none" },
  });
  s.addText("CVP", {
    x: cx - 1.0, y: cy - 1.0, w: 2.0, h: 2.0,
    fontFace: FONT_H, fontSize: 36, bold: true, color: C.amber,
    align: "center", valign: "middle", margin: 0,
  });
  // 4 decision quadrants
  const decisions = [
    { label: "Strategia treści", q: "Czy ta treść odpowiada na ból lub wzmacnia korzyść klienta?", x: 0.6, y: 2.2, c: C.reach },
    { label: "Wybór kanałów", q: "Czy ten kanał dociera do naszego klienta docelowego?", x: W - 5.6, y: 2.2, c: C.act },
    { label: "Hierarchia przekazu", q: "Czy komunikat mówi o kliencie, a nie o produkcie?", x: 0.6, y: 5.0, c: C.convert },
    { label: "Priorytet budżetu", q: "Czy ten kanał wzmacnia CVP, czy tylko generuje ruch?", x: W - 5.6, y: 5.0, c: C.engage },
  ];
  decisions.forEach((d) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: d.x, y: d.y, w: 5.0, h: 1.7,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: d.x, y: d.y, w: 0.12, h: 1.7,
      fill: { color: d.c }, line: { type: "none" },
    });
    s.addText(d.label, {
      x: d.x + 0.25, y: d.y + 0.15, w: 4.7, h: 0.4,
      fontFace: FONT_H, fontSize: 15, bold: true, color: C.ink, margin: 0,
    });
    s.addText(d.q, {
      x: d.x + 0.25, y: d.y + 0.6, w: 4.7, h: 1.0,
      fontFace: FONT_B, fontSize: 13, italic: true, color: C.inkMute, valign: "top", margin: 0,
    });
  });
  s.addText('"Kiedy masz silną CVP, wszystkie decyzje marketingowe stają się prostsze."', {
    x: 0.6, y: H - 0.85, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 14, italic: true, color: C.teal, align: "center",
  });
});

// =====================================================================
// Slide 58 (20/22): Przejście do Warsztatu 3
// =====================================================================
n++;
L.makeTitleSlide(pres, {
  eyebrow: "WARSZTAT 3 · 50 MIN",
  title: "Czas na ćwiczenia",
  subtitle: "Kanwa Propozycji Wartości — dla waszej marki",
  accent: C.amber,
  meta: "Ta sama marka, co w Ćwiczeniach 1 i 2 · Kontynuacja",
  time: "14:25 · Slajd 58 / 85",
  say: "Czas na ćwiczenia. Warsztat 3 — Kanwa Propozycji Wartości. Teraz wy przejdziecie przez analizę, którą przed chwilą opisywaliśmy na przykładach. Zaraz pokażę wam instrukcje i przypomnienie: pracujecie z tą samą marką, którą wybraliście w Ćwiczeniu 1.",
  doIt: "Wyświetl slajd. Krótka pauza. Przejdź natychmiast do slajdu 59.",
  watch: "Ciemne tło + prostota komunikatu = sygnał 'czas na pracę'. Większość reaguje skupieniem.",
}, n, TOTAL);

// =====================================================================
// Slide 59 (21/22): Warsztat 3 — Instrukcja
// =====================================================================
n++;
{
  const s = pres.addSlide();
  L.drawWorkshopInstruction(s, pres, {
    eyebrow: "WARSZTAT 3 · 50 MIN · CANVA WHITEBOARD",
    title: "Kanwa Propozycji Wartości",
    blocks: [
      { label: "ZADANIE", accent: C.reach, content: "Uzupełnijcie Kanwę Propozycji Wartości dla waszej marki — najpierw Profil Klienta, potem Mapa Wartości." },
      { label: "CZAS / OUTPUT", accent: C.act, content: "50 minut · do 15:15. Wynik: wypełniona Kanwa + 1 zwerbalizowane CVP dla wybranego segmentu." },
      { label: "NARZĘDZIE", accent: C.convert, content: "Canva Whiteboard — wejdź przez QR kod. Mapa Wartości zakryta 'NIE ZACZYNAJCIE TUTAJ' do Kroku 5." },
      { label: "KOLEJNOŚĆ", accent: C.engage, content: "ZAWSZE zaczynamy od Profilu Klienta (koło). Mapa Wartości (kwadrat) — dopiero po konsolidacji 3 najważniejszych Bólów i Korzyści." },
    ],
    warning: "ZACZYNAJCIE od Profilu Klienta — NIE dotykajcie Mapy Wartości przed ukończeniem Profilu!",
  });
  s.addText(`${n} / ${TOTAL}`, {
    x: W - 1.4, y: H - 0.45, w: 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 10, color: C.inkFaint, align: "right",
  });
  L.addNotes(s, {
    time: "14:27 · Slajd 59 / 85",
    setup: "Potwierdź tablicę Canva z Kanwą w poprawnych kolorach. Etykieta 'NIE ZACZYNAJCIE TUTAJ' zakrywa Mapę Wartości. Grupy mają własne strefy. Przykład InPost jako punkt orientacyjny. QR kod na dużym ekranie. Timer 50 min.",
    say: "Instrukcja do Warsztatu trzeciego. Wasze zadanie: uzupełnijcie Kanwę Propozycji Wartości dla waszej marki. 50 minut, do 15:15. Wynik: wypełniona Kanwa dla jednego segmentu klienta + 1 werbalizowane CVP. Najważniejsza zasada: zaczynacie od Profilu Klienta — Zadania, Bóle, Korzyści. Nie dotykajcie Mapy Wartości, dopóki Profil nie jest pełny. Na tablicy macie etykietę 'NIE ZACZYNAJCIE TUTAJ' — traktujcie ją poważnie.",
    doIt: "Wyświetl. QR kod, timer 50 min. Chodź z promptami: Zadania: 'Jakie zadania — funkcjonalne, społeczne, emocjonalne?'; Bóle: 'Co frustruje, blokuje, czego się boi?'; Korzyści: 'Co chce osiągnąć? Co go pozytywnie zaskoczy?'; przy Mapie: 'Każdy Ból — znajdźcie Uśmierzacz. Każda Korzyść — Kreator. Brak dopasowania = luka strategiczna.'",
    watch: "Kluczowy błąd: grupy zaczynają od Mapy Wartości. Zatrzymaj: 'Stop — zacznijcie od Profilu. Jakiego klienta mapujecie? Opiszcie w 2 zdaniach.' Obserwuj czy grupy równomiernie wypełniają Zadania/Bóle/Korzyści — tendencja do skupiania się na Bólach.",
    debrief: "Czy zaczęliście od Mapy przed Profilem? Jak wpłynęło na jakość? Który Ból klienta jest najbardziej nieoczekiwany (o którym marka prawdopodobnie nie myśli)? Jak sformułujecie CVP jednym zdaniem?",
    extension: "Sformułujcie CVP w formacie: 'Dla [kto], który chce [co], [marka] jest [czym], bo [dowód], w odróżnieniu od [alternatywy]'.",
  });
}

// =====================================================================
// Slide 60 (22/22): Warsztat 3 — Przykład InPost VPC
// =====================================================================
n++;
L.makeContentSlide(pres, {
  eyebrow: "WARSZTAT 3 · PRZYKŁAD ROBOCZY",
  title: "InPost — Profil Klienta dla persony Marka",
  subtitle: 'Persona: Marek, 31 lat, Warszawa, zakupy online 3–4×/mies. · Rzadko w domu w godzinach dostawy.',
  time: "14:32 · Slajd 60 / 85",
  setup: "Przykład InPost tylko na slajdzie — nie nadpisuje stref grup. Etykieta 'JESZCZE NIE' zakrywa Mapę Wartości zarówno na przykładzie, jak i u grup.",
  say: "Punkt orientacyjny — wypełniony Profil Klienta dla InPost. Persona Marka, 31-letniego warszawiaka. Zwróćcie uwagę: Zadania, Bóle, Korzyści są napisane z perspektywy klienta — jego głosem, jego frustracją. Nie 'szybka dostawa' jako cecha — lecz 'muszę być w domu w 4-godzinnym oknie i to rujnuje mi plan dnia' jako ból klienta. Mapa Wartości jest zakryta celowo. Kiedy Profil jest gotowy, Mapa niemal wypełnia się sama — bo wiecie, co adresować. Wasz Profil powinien być równie konkretny lub bardziej. Ogólniki 'klient chce dobrej obsługi' nie prowadzą do mocnego CVP.",
  doIt: "Wskaż każdą strefę Profilu, odczytaj przykładowe karteczki. 'Głos klienta, nie głos działu produktu.' Wskaż zakrytą Mapę: 'Macie materiał na Mapę dopiero, kiedy Profil gotowy.' Sygnał do pracy.",
  watch: "Grupy kopiują przykład zamiast adaptować? Interweniuj: 'InPost to orientacja, nie szablon. Wasz klient jest inny. Co on naprawdę próbuje osiągnąć?'",
}, n, TOTAL, (s, pres) => {
  const y0 = 2.2;
  // Left: Value Map — covered
  const lx = 0.6, lw = 5.5;
  s.addShape(pres.shapes.RECTANGLE, {
    x: lx, y: y0, w: lw, h: 4.2,
    fill: { color: "E8E8EC" }, line: { color: C.inkMute, width: 2, dashType: "dash" },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: lx + 0.3, y: y0 + 1.1, w: lw - 0.6, h: 2.0,
    fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText("JESZCZE NIE", {
    x: lx + 0.3, y: y0 + 1.2, w: lw - 0.6, h: 0.6,
    fontFace: FONT_H, fontSize: 26, bold: true, color: C.darkBg,
    align: "center", valign: "middle", margin: 0,
  });
  s.addText("Mapa Wartości odsłonięta dopiero po ukończeniu Profilu Klienta (Krok 5).", {
    x: lx + 0.3, y: y0 + 1.9, w: lw - 0.6, h: 1.1,
    fontFace: FONT_B, fontSize: 13, italic: true, color: C.darkBg,
    align: "center", valign: "top", margin: 0,
  });
  s.addText("MAPA WARTOŚCI", {
    x: lx, y: y0 + 0.15, w: lw, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.inkFaint,
    align: "center", margin: 0,
  });

  // Right: Customer Profile — filled
  const rx = lx + lw + 0.3, rw = W - rx - 0.6;
  s.addShape(pres.shapes.RECTANGLE, {
    x: rx, y: y0, w: rw, h: 4.2,
    fill: { color: "FFF8E1" }, line: { color: C.amber, width: 2 },
  });
  s.addText("PROFIL KLIENTA · MAREK, 31, WARSZAWA", {
    x: rx, y: y0 + 0.15, w: rw, h: 0.3,
    fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3, color: C.amber,
    align: "center", margin: 0,
  });
  // Zones
  const zones = [
    {
      label: "ZADANIA KLIENTA",
      c: C.strat,
      items: ["Odebrać paczkę bez zmiany planów", "Zarządzać zakupami online bez stresu logistycznego"],
    },
    {
      label: "BÓLE",
      c: C.red,
      items: ["Kurier przyszedł, kiedy byłem w pracy", "Muszę być w domu w 4-godzinnym oknie", "Spóźniona dostawa — prezentem nie zdążyłem"],
    },
    {
      label: "KORZYŚCI",
      c: C.act,
      items: ["Wiem, kiedy i gdzie odbiorę", "Mogę odebrać o 22:00, wracając z pracy", "To ja wybieram — nie kurier"],
    },
  ];
  zones.forEach((z, i) => {
    const zy = y0 + 0.55 + i * 1.2;
    s.addShape(pres.shapes.RECTANGLE, {
      x: rx + 0.25, y: zy, w: rw - 0.5, h: 1.1,
      fill: { color: C.white }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: rx + 0.25, y: zy, w: 0.08, h: 1.1,
      fill: { color: z.c }, line: { type: "none" },
    });
    s.addText(z.label, {
      x: rx + 0.4, y: zy + 0.06, w: rw - 0.7, h: 0.3,
      fontFace: FONT_B, fontSize: 10, bold: true, charSpacing: 2, color: z.c, margin: 0,
    });
    s.addText(z.items.join("  ·  "), {
      x: rx + 0.4, y: zy + 0.35, w: rw - 0.7, h: 0.7,
      fontFace: FONT_B, fontSize: 11, color: C.ink, valign: "top", margin: 0,
    });
  });
  // Footer insight
  s.addText("Głos klienta, nie głos działu produktu. Wasz Profil = równie konkretny lub bardziej.", {
    x: 0.6, y: H - 0.95, w: W - 1.2, h: 0.35,
    fontFace: FONT_B, fontSize: 13, italic: true, bold: true, color: C.teal, align: "center",
  });
});

pres.writeFile({ fileName: "/home/claude/decks/04-brand-cvp.pptx" })
  .then((fn) => console.log("Wrote:", fn));
