// Strategia Marketingu Cyfrowego — 6-file Keynote/PPTX generator
// Based on keynote-spec.md (85 slides, Polish delivery)

const pptxgen = require("pptxgenjs");

// ============================================================================
// DESIGN SYSTEM
// ============================================================================
const C = {
  // Brand core (from hierarchy-diagram-spec)
  navy: "1A3A5C",
  blueMid: "2D6A9F",
  teal: "1A7A8A",
  green: "2D7A4F",
  charcoal: "3A3A3A",
  // Dark backgrounds
  darkBg: "0F1E33",
  darkBg2: "1C2541",
  // Light
  white: "FFFFFF",
  offWhite: "F5F7FA",
  cream: "FFF8E1",
  // Text
  ink: "1E293B",
  inkMute: "475569",
  inkFaint: "94A3B8",
  // Accents
  amber: "E8A838",
  red: "C0392B",
  // RACE
  reach: "2E5D9F",
  act: "2D7A4F",
  convert: "D97E2B",
  engage: "7A3F8F",
  // SOSTAC (per canva spec)
  sit: "4A90D9",
  obj: "5CB85C",
  strat: "F5A623",
  tac: "E8701A",
  act2: "E91E8C",
  ctrl: "9B59B6",
};

const FONT_H = "Calibri";
const FONT_B = "Calibri";

// Page = LAYOUT_WIDE (13.3" × 7.5")
const W = 13.3, H = 7.5;

// ============================================================================
// HELPERS
// ============================================================================

function addNotes(slide, data) {
  const parts = [];
  if (data.time) parts.push(`[CZAS] ${data.time}`);
  if (data.setup) parts.push(`[SETUP] ${data.setup}`);
  if (data.say) parts.push(`[MÓWIĘ]\n${data.say}`);
  if (data.doIt) parts.push(`[ROBIĘ]\n${data.doIt}`);
  if (data.watch) parts.push(`[OBSERWUJĘ]\n${data.watch}`);
  if (data.debrief) parts.push(`[DEBRIEF]\n${data.debrief}`);
  if (data.extension) parts.push(`[EXTENSION]\n${data.extension}`);
  slide.addNotes(parts.join("\n\n"));
}

// Thin rule for section headings — NOT used on content slides (accent lines under titles = AI slop).
// Use color blocks / whitespace / typography instead.

function titleBlock(slide, title, subtitle, opts = {}) {
  const y = opts.y || 0.5;
  slide.addText(title, {
    x: 0.6, y, w: W - 1.2, h: 0.9,
    fontFace: FONT_H, fontSize: opts.size || 34, bold: true,
    color: opts.color || C.ink, align: opts.align || "left", margin: 0,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.6, y: y + 0.85, w: W - 1.2, h: 0.4,
      fontFace: FONT_B, fontSize: 14, italic: true,
      color: opts.subColor || C.inkMute, align: opts.align || "left", margin: 0,
    });
  }
}

function slideNum(slide, n, total, darkMode = false) {
  slide.addText(`${n} / ${total}`, {
    x: W - 1.4, y: H - 0.45, w: 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 10,
    color: darkMode ? C.inkFaint : C.inkFaint, align: "right",
  });
}

function footerBrand(slide, darkMode = false) {
  slide.addText("Strategia Marketingu Cyfrowego", {
    x: 0.4, y: H - 0.45, w: 6, h: 0.3,
    fontFace: FONT_B, fontSize: 10,
    color: darkMode ? C.inkFaint : C.inkFaint, align: "left",
  });
}

// ============================================================================
// SLIDE LAYOUTS
// ============================================================================

// Dark title/transition slide (workshop intros, breaks)
function makeTitleSlide(pres, data, n, total) {
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  // Accent swatch left side
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.2, h: H, fill: { color: data.accent || C.teal }, line: { type: "none" },
  });
  if (data.eyebrow) {
    s.addText(data.eyebrow, {
      x: 0.8, y: 1.6, w: W - 1.6, h: 0.4,
      fontFace: FONT_B, fontSize: 14, bold: true, charSpacing: 4,
      color: data.accent || C.teal, align: "left",
    });
  }
  s.addText(data.title, {
    x: 0.8, y: data.eyebrow ? 2.1 : 2.6, w: W - 1.6, h: 2.2,
    fontFace: FONT_H, fontSize: data.titleSize || 54, bold: true,
    color: C.white, align: "left", valign: "top", margin: 0,
  });
  if (data.subtitle) {
    s.addText(data.subtitle, {
      x: 0.8, y: 4.6, w: W - 1.6, h: 1.2,
      fontFace: FONT_B, fontSize: 22,
      color: C.inkFaint, align: "left", valign: "top",
    });
  }
  if (data.meta) {
    s.addText(data.meta, {
      x: 0.8, y: H - 1.1, w: W - 1.6, h: 0.4,
      fontFace: FONT_B, fontSize: 13, italic: true,
      color: C.inkFaint, align: "left",
    });
  }
  slideNum(s, n, total, true);
  addNotes(s, data);
  return s;
}

// Content slide — title + body region; body filled by a drawer function
function makeContentSlide(pres, data, n, total, drawer) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  if (data.eyebrow) {
    s.addText(data.eyebrow, {
      x: 0.6, y: 0.35, w: W - 1.2, h: 0.3,
      fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3,
      color: data.eyebrowColor || C.teal, align: "left", margin: 0,
    });
  }
  s.addText(data.title, {
    x: 0.6, y: 0.65, w: W - 1.2, h: 0.85,
    fontFace: FONT_H, fontSize: data.titleSize || 30, bold: true,
    color: C.ink, align: "left", valign: "top", margin: 0,
  });
  if (data.subtitle) {
    s.addText(data.subtitle, {
      x: 0.6, y: 1.5, w: W - 1.2, h: 0.4,
      fontFace: FONT_B, fontSize: 15, italic: true,
      color: C.inkMute, align: "left", margin: 0,
    });
  }
  if (drawer) drawer(s, pres, data);
  footerBrand(s);
  slideNum(s, n, total);
  addNotes(s, data);
  return s;
}

// Break/pause slide
function makeBreakSlide(pres, data, n, total) {
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  s.addText(data.title, {
    x: 0.8, y: 2.8, w: W - 1.6, h: 1.4,
    fontFace: FONT_H, fontSize: 60, bold: true,
    color: C.white, align: "center", valign: "middle",
  });
  if (data.subtitle) {
    s.addText(data.subtitle, {
      x: 0.8, y: 4.3, w: W - 1.6, h: 0.8,
      fontFace: FONT_B, fontSize: 24,
      color: C.amber, align: "center", valign: "middle",
    });
  }
  if (data.footer) {
    s.addText(data.footer, {
      x: 0.8, y: H - 1.1, w: W - 1.6, h: 0.4,
      fontFace: FONT_B, fontSize: 14, italic: true,
      color: C.inkFaint, align: "center",
    });
  }
  slideNum(s, n, total, true);
  addNotes(s, data);
  return s;
}

// ============================================================================
// COMMON BODY DRAWERS
// ============================================================================

// Single big paragraph of explanatory text (use sparingly — prefer structured layouts)
function drawProse(s, pres, data) {
  s.addText(data.body, {
    x: 0.6, y: 2.1, w: W - 1.2, h: H - 3,
    fontFace: FONT_B, fontSize: 18,
    color: C.ink, align: "left", valign: "top", paraSpaceAfter: 8,
  });
}

// Two-column comparison (labels + body each column)
function drawTwoCol(s, pres, data) {
  const y0 = 2.0;
  const colW = (W - 1.4) / 2 - 0.2;
  const cols = data.cols; // [{ header, accent, body[] or points[] }]
  cols.forEach((c, i) => {
    const x = 0.6 + i * (colW + 0.4);
    // Header bar — filled block (not under-title line, fine per skill)
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: colW, h: 0.6, fill: { color: c.accent || C.navy }, line: { type: "none" },
    });
    s.addText(c.header, {
      x: x + 0.15, y: y0, w: colW - 0.3, h: 0.6,
      fontFace: FONT_H, fontSize: 18, bold: true,
      color: C.white, align: "left", valign: "middle", margin: 0,
    });
    // Body
    if (c.points) {
      const items = c.points.map((p, idx) => ({
        text: p, options: { bullet: true, breakLine: idx < c.points.length - 1 },
      }));
      s.addText(items, {
        x: x + 0.1, y: y0 + 0.8, w: colW - 0.2, h: H - y0 - 1.4,
        fontFace: FONT_B, fontSize: 15,
        color: C.ink, valign: "top", paraSpaceAfter: 6,
      });
    } else if (c.body) {
      s.addText(c.body, {
        x: x + 0.1, y: y0 + 0.8, w: colW - 0.2, h: H - y0 - 1.4,
        fontFace: FONT_B, fontSize: 15,
        color: C.ink, valign: "top", paraSpaceAfter: 8,
      });
    }
  });
  if (data.footerNote) {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: H - 1.2, w: W - 1.2, h: 0.5,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    s.addText(data.footerNote, {
      x: 0.8, y: H - 1.2, w: W - 1.6, h: 0.5,
      fontFace: FONT_B, fontSize: 13, italic: true,
      color: C.inkMute, align: "left", valign: "middle", margin: 0,
    });
  }
}

// Grid of boxes (2x2, 2x3, 1x4, etc.)
function drawGrid(s, pres, data) {
  const items = data.items; // [{ title, body, accent, label }]
  const rows = data.rows || 2;
  const cols = data.colsN || Math.ceil(items.length / rows);
  const yStart = data.gridY || 2.1;
  const yEnd = data.gridYEnd || H - 0.8;
  const availH = yEnd - yStart;
  const availW = W - 1.2;
  const gapX = 0.2, gapY = 0.2;
  const cellW = (availW - gapX * (cols - 1)) / cols;
  const cellH = (availH - gapY * (rows - 1)) / rows;
  items.forEach((it, idx) => {
    const r = Math.floor(idx / cols), c = idx % cols;
    const x = 0.6 + c * (cellW + gapX);
    const y = yStart + r * (cellH + gapY);
    // Background card
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: cellW, h: cellH,
      fill: { color: C.offWhite }, line: { type: "none" },
    });
    // Left accent strip
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 0.12, h: cellH,
      fill: { color: it.accent || C.navy }, line: { type: "none" },
    });
    // Label (small eyebrow)
    if (it.label) {
      s.addText(it.label, {
        x: x + 0.3, y: y + 0.15, w: cellW - 0.4, h: 0.3,
        fontFace: FONT_B, fontSize: 11, bold: true, charSpacing: 3,
        color: it.accent || C.navy, align: "left", margin: 0,
      });
    }
    s.addText(it.title, {
      x: x + 0.3, y: y + (it.label ? 0.45 : 0.2), w: cellW - 0.4, h: 0.5,
      fontFace: FONT_H, fontSize: 18, bold: true,
      color: C.ink, align: "left", valign: "top", margin: 0,
    });
    s.addText(it.body, {
      x: x + 0.3, y: y + (it.label ? 0.95 : 0.7), w: cellW - 0.4,
      h: cellH - (it.label ? 1.1 : 0.9),
      fontFace: FONT_B, fontSize: 13,
      color: C.inkMute, align: "left", valign: "top", margin: 0,
    });
  });
}

// Big stat callout (one or more)
function drawStats(s, pres, data) {
  const stats = data.stats; // [{ number, label, caption }]
  const n = stats.length;
  const availW = W - 1.2;
  const cellW = availW / n;
  const y = data.statY || 2.5;
  stats.forEach((st, i) => {
    const x = 0.6 + i * cellW;
    s.addText(st.number, {
      x, y, w: cellW, h: 1.6,
      fontFace: FONT_H, fontSize: st.size || 72, bold: true,
      color: st.color || C.teal, align: "center", valign: "middle", margin: 0,
    });
    s.addText(st.label, {
      x, y: y + 1.7, w: cellW, h: 0.8,
      fontFace: FONT_B, fontSize: 16, bold: true,
      color: C.ink, align: "center", valign: "top", margin: 0,
    });
    if (st.caption) {
      s.addText(st.caption, {
        x: x + 0.1, y: y + 2.5, w: cellW - 0.2, h: 1.0,
        fontFace: FONT_B, fontSize: 13, italic: true,
        color: C.inkMute, align: "center", valign: "top", margin: 0,
      });
    }
  });
  if (data.source) {
    s.addText(data.source, {
      x: 0.6, y: H - 1, w: W - 1.2, h: 0.4,
      fontFace: FONT_B, fontSize: 11, italic: true,
      color: C.inkFaint, align: "center",
    });
  }
}

// Pull quote + context
function drawQuote(s, pres, data) {
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 2.2, w: 0.12, h: 3,
    fill: { color: C.amber }, line: { type: "none" },
  });
  s.addText(data.quote, {
    x: 1.0, y: 2.2, w: W - 1.6, h: 3,
    fontFace: FONT_H, fontSize: data.quoteSize || 32, italic: true, bold: false,
    color: C.ink, align: "left", valign: "middle", margin: 0,
  });
  if (data.attribution) {
    s.addText("— " + data.attribution, {
      x: 1.0, y: 5.3, w: W - 1.6, h: 0.4,
      fontFace: FONT_B, fontSize: 14,
      color: C.inkMute, align: "left",
    });
  }
  if (data.context) {
    s.addText(data.context, {
      x: 0.6, y: H - 1.3, w: W - 1.2, h: 0.6,
      fontFace: FONT_B, fontSize: 14,
      color: C.inkMute, align: "left",
    });
  }
}

// Numbered list (large, spread out)
function drawNumberedList(s, pres, data) {
  const items = data.items; // strings
  const y0 = 2.0;
  const rowH = (H - y0 - 0.8) / items.length;
  items.forEach((txt, i) => {
    const y = y0 + i * rowH;
    // Number chip
    s.addShape(pres.shapes.OVAL, {
      x: 0.6, y: y + 0.05, w: 0.65, h: 0.65,
      fill: { color: C.teal }, line: { type: "none" },
    });
    s.addText(String(i + 1), {
      x: 0.6, y: y + 0.05, w: 0.65, h: 0.65,
      fontFace: FONT_H, fontSize: 22, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addText(txt, {
      x: 1.45, y: y, w: W - 2.05, h: rowH - 0.1,
      fontFace: FONT_B, fontSize: 17,
      color: C.ink, align: "left", valign: "middle", margin: 0,
    });
  });
}

// Table with coloured header row
function drawTable(s, pres, data) {
  const headers = data.headers;
  const rows = data.rows;
  const colors = data.colColors || headers.map(() => C.navy);
  const y0 = data.tableY || 2.1;
  const tableH = data.tableH || H - y0 - 1.0;
  const availW = W - 1.2;
  const colWs = data.colWs || headers.map(() => availW / headers.length);
  const headerH = 0.6;
  const bodyH = tableH - headerH;
  const rowH = Math.min(0.65, bodyH / rows.length);

  // Header
  let x = 0.6;
  headers.forEach((h, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: y0, w: colWs[i], h: headerH,
      fill: { color: colors[i] }, line: { type: "none" },
    });
    s.addText(h, {
      x: x + 0.1, y: y0, w: colWs[i] - 0.2, h: headerH,
      fontFace: FONT_H, fontSize: 13, bold: true,
      color: C.white, align: "left", valign: "middle", margin: 0,
    });
    x += colWs[i];
  });
  // Body
  rows.forEach((row, r) => {
    x = 0.6;
    const y = y0 + headerH + r * rowH;
    // alternating shade
    if (r % 2 === 1) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.6, y, w: availW, h: rowH,
        fill: { color: C.offWhite }, line: { type: "none" },
      });
    }
    row.forEach((cell, i) => {
      s.addText(cell, {
        x: x + 0.1, y, w: colWs[i] - 0.2, h: rowH,
        fontFace: FONT_B, fontSize: 12,
        color: C.ink, align: "left", valign: "middle", margin: 0,
      });
      x += colWs[i];
    });
  });
  if (data.source) {
    s.addText(data.source, {
      x: 0.6, y: H - 0.85, w: W - 1.2, h: 0.3,
      fontFace: FONT_B, fontSize: 10, italic: true,
      color: C.inkFaint, align: "left",
    });
  }
  if (data.footerNote) {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: H - 1.3, w: W - 1.2, h: 0.4,
      fill: { color: C.cream }, line: { type: "none" },
    });
    s.addText(data.footerNote, {
      x: 0.8, y: H - 1.3, w: W - 1.6, h: 0.4,
      fontFace: FONT_B, fontSize: 13, bold: true,
      color: C.ink, align: "left", valign: "middle", margin: 0,
    });
  }
}

// Workshop instruction slide (dark bg, step blocks)
function drawWorkshopInstruction(s, pres, data) {
  // Redraw bg dark
  s.background = { color: C.darkBg };
  // Override title colour
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: W, h: 1.8,
    fill: { color: C.darkBg }, line: { type: "none" },
  });
  s.addText(data.eyebrow || "WARSZTAT", {
    x: 0.6, y: 0.4, w: W - 1.2, h: 0.3,
    fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 4,
    color: C.amber, margin: 0,
  });
  s.addText(data.title, {
    x: 0.6, y: 0.7, w: W - 1.2, h: 0.9,
    fontFace: FONT_H, fontSize: 32, bold: true,
    color: C.white, margin: 0,
  });

  const blocks = data.blocks;
  const blockH = blocks.length >= 4 ? 0.85 : 1.0;
  blocks.forEach((b, i) => {
    const y = 1.9 + i * (blockH + 0.1);
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: W - 1.2, h: blockH,
      fill: { color: "1A2F4F" }, line: { type: "none" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 0.12, h: blockH,
      fill: { color: b.accent || C.amber }, line: { type: "none" },
    });
    s.addText(b.label, {
      x: 0.85, y: y + 0.1, w: 2.4, h: 0.35,
      fontFace: FONT_B, fontSize: 12, bold: true, charSpacing: 3,
      color: b.accent || C.amber, margin: 0,
    });
    s.addText(b.content, {
      x: 0.85, y: y + 0.4, w: W - 1.7, h: blockH - 0.5,
      fontFace: FONT_B, fontSize: 15,
      color: C.white, margin: 0, valign: "top",
    });
  });

  if (data.warning) {
    const wy = 1.9 + blocks.length * (blockH + 0.1) + 0.1;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: wy, w: W - 1.2, h: 0.9,
      fill: { color: C.amber }, line: { type: "none" },
    });
    s.addText(data.warning, {
      x: 0.85, y: wy, w: W - 1.7, h: 0.9,
      fontFace: FONT_H, fontSize: 16, bold: true,
      color: C.darkBg, valign: "middle", margin: 0,
    });
  }
  // Caller is responsible for adding slide number (dark-bg aware).
}

// ============================================================================
// SPECIAL: HIERARCHY DIAGRAM (3 variants)
// ============================================================================
function drawHierarchy(s, pres, variant) {
  // 5 stacked boxes, centered column
  const levels = [
    { label: "Strategia Marki", sub: '"Kim jesteśmy?" (5–10+ lat)', color: "1A3A5C", callout: "→ Ćwiczenie 3: Kanwa Propozycji Wartości" },
    { label: "Strategia Cyfrowa", sub: '"Jak technologia transformuje organizację?" (wieloletnia)', color: "2D6A9F", callout: "(kontekst organizacyjny — omówiony w bloku 1)" },
    { label: "Strategia Marketingu Cyfrowego", sub: '"Jak przyciągamy, konwertujemy, utrzymujemy klientów?" (roczna)', color: "1A7A8A", callout: "→ Cały dzień: wybrana marka" },
    { label: "SOSTAC", sub: "Framework Planowania", color: "2D7A4F", callout: "→ Ćwiczenie 1: Audyt Sytuacyjny" },
    { label: "RACE", sub: "Framework Egzekucji", color: "3A3A3A", callout: "→ Ćwiczenie 2: Mapa Ścieżki Klienta" },
  ];
  const boxW = 5.2;
  const boxH = 0.85;
  const gap = 0.22;
  const totalH = levels.length * boxH + (levels.length - 1) * gap;
  const y0 = (H - totalH) / 2 + 0.1;
  const x0 = variant === 3 ? 2.0 : (W - boxW) / 2;

  levels.forEach((lv, i) => {
    const y = y0 + i * (boxH + gap);
    const isTopTwo = i < 2;
    const isFaded = variant === 2 && !isTopTwo;
    const opacity = isFaded ? 70 : 0;
    // Box
    s.addShape(pres.shapes.RECTANGLE, {
      x: x0, y, w: boxW, h: boxH,
      fill: { color: lv.color, transparency: opacity }, line: { type: "none" },
    });
    // Optional white border for variant 2 top two
    if (variant === 2 && isTopTwo) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: x0, y, w: boxW, h: boxH,
        fill: { type: "none" }, line: { color: C.white, width: 3 },
      });
    }
    s.addText(lv.label, {
      x: x0, y: y + 0.08, w: boxW, h: 0.42,
      fontFace: FONT_H, fontSize: 20, bold: true,
      color: isFaded ? "B0B8C4" : C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addText(lv.sub, {
      x: x0, y: y + 0.48, w: boxW, h: 0.35,
      fontFace: FONT_B, fontSize: 12, italic: true,
      color: isFaded ? "B0B8C4" : "E6ECF5", align: "center", valign: "middle", margin: 0,
    });
    // Arrow to next
    if (i < levels.length - 1) {
      const ay = y + boxH;
      const ax = x0 + boxW / 2;
      const arrowFaded = variant === 2 && (i >= 1); // arrows 2-3, 3-4, 4-5 fade
      s.addShape(pres.shapes.LINE, {
        x: ax, y: ay, w: 0, h: gap - 0.08,
        line: { color: lv.color, width: 3, endArrowType: "triangle", transparency: arrowFaded ? 70 : 0 },
      });
    }
    // Callouts for variant 3
    if (variant === 3) {
      s.addText(lv.callout, {
        x: x0 + boxW + 0.3, y: y + 0.15, w: W - x0 - boxW - 0.6, h: boxH - 0.3,
        fontFace: FONT_B, fontSize: 13, italic: true,
        color: C.inkMute, align: "left", valign: "middle", margin: 0,
      });
    }
  });
}

// ============================================================================
// SPECIAL: SOSTAC circle diagram
// ============================================================================
function drawSOSTACCircle(s, pres) {
  const cx = W / 2, cy = 4.7;
  const rOuter = 2.1, rInner = 0.95;
  const segments = [
    { label: "Sytuacja", code: "S", color: C.sit },
    { label: "Cele", code: "O", color: C.obj },
    { label: "Strategia", code: "S", color: C.strat },
    { label: "Taktyki", code: "T", color: C.tac },
    { label: "Działania", code: "A", color: C.act2 },
    { label: "Kontrola", code: "C", color: C.ctrl },
  ];
  // Use positioned boxes around a circle since we can't draw pie arcs easily
  segments.forEach((seg, i) => {
    const angle = (-90 + i * 60) * Math.PI / 180;
    const bx = cx + Math.cos(angle) * rOuter - 0.85;
    const by = cy + Math.sin(angle) * rOuter - 0.45;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: by, w: 1.7, h: 0.9,
      fill: { color: seg.color }, line: { type: "none" }, rectRadius: 0.1,
    });
    s.addText([
      { text: seg.code + " — ", options: { bold: true, fontSize: 14 } },
      { text: seg.label, options: { fontSize: 14 } },
    ], {
      x: bx, y: by, w: 1.7, h: 0.9,
      fontFace: FONT_H, color: C.white, align: "center", valign: "middle", margin: 0,
    });
  });
  // Center circle with "pętla"
  s.addShape(pres.shapes.OVAL, {
    x: cx - rInner, y: cy - rInner, w: rInner * 2, h: rInner * 2,
    fill: { color: C.darkBg }, line: { type: "none" },
  });
  s.addText([
    { text: "SOSTAC", options: { bold: true, fontSize: 18, breakLine: true } },
    { text: "pętla, nie lista", options: { italic: true, fontSize: 11 } },
  ], {
    x: cx - rInner, y: cy - rInner, w: rInner * 2, h: rInner * 2,
    fontFace: FONT_H, color: C.white, align: "center", valign: "middle", margin: 0,
  });
}

// ============================================================================
// SPECIAL: RACE cycle diagram
// ============================================================================
function drawRACECycle(s, pres) {
  const stages = [
    { label: "Zasięg", en: "Reach", color: C.reach },
    { label: "Aktywacja", en: "Act", color: C.act },
    { label: "Konwersja", en: "Convert", color: C.convert },
    { label: "Zaangażowanie", en: "Engage", color: C.engage },
  ];
  const cx = W / 2, cy = 4.3;
  const r = 2.2;
  stages.forEach((st, i) => {
    const angle = (-135 + i * 90) * Math.PI / 180;
    const bx = cx + Math.cos(angle) * r - 1.15;
    const by = cy + Math.sin(angle) * r - 0.55;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: by, w: 2.3, h: 1.1,
      fill: { color: st.color }, line: { type: "none" }, rectRadius: 0.1,
    });
    s.addText([
      { text: st.label, options: { bold: true, fontSize: 18, breakLine: true } },
      { text: st.en, options: { italic: true, fontSize: 12 } },
    ], {
      x: bx, y: by, w: 2.3, h: 1.1,
      fontFace: FONT_H, color: C.white, align: "center", valign: "middle", margin: 0,
    });
  });
  // Center text
  s.addText("CYKL,\nnie lejek", {
    x: cx - 1.1, y: cy - 0.55, w: 2.2, h: 1.1,
    fontFace: FONT_H, fontSize: 22, bold: true,
    color: C.ink, align: "center", valign: "middle", margin: 0,
  });
}

module.exports = {
  C, FONT_H, FONT_B, W, H,
  addNotes, titleBlock, slideNum, footerBrand,
  makeTitleSlide, makeContentSlide, makeBreakSlide,
  drawProse, drawTwoCol, drawGrid, drawStats, drawQuote,
  drawNumberedList, drawTable, drawWorkshopInstruction,
  drawHierarchy, drawSOSTACCircle, drawRACECycle,
};
