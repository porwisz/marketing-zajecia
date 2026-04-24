#!/usr/bin/env python3
"""
Generate a PowerPoint (.pptx) presentation from keynote-spec.md.
The .pptx format is natively openable in Apple Keynote.

Layout per slide:
  - Title (top band, dark navy background, white text)
  - Visual description (light grey box, italic)
  - Main content area: SAY script + key notes
  - Speaker notes pane: full SAY + DO + WATCH + TIME + SETUP + DEBRIEF + EXTENSION
"""

import re
import os
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.util import Inches, Pt

# ── colour palette ────────────────────────────────────────────────────────────
NAVY      = RGBColor(0x1a, 0x2b, 0x4e)   # dark navy – title bg
WHITE     = RGBColor(0xFF, 0xFF, 0xFF)
GREY_BG   = RGBColor(0xF2, 0xF4, 0xF7)   # light grey – visual desc box
GREY_TEXT = RGBColor(0x55, 0x65, 0x7A)
ACCENT    = RGBColor(0x00, 0x7A, 0xC2)   # blue accent
BLACK     = RGBColor(0x1C, 0x1C, 0x1C)

# RACE stage colours
RACE_COLOURS = {
    "reach":   RGBColor(0x00, 0x70, 0xC0),  # blue
    "act":     RGBColor(0x70, 0xAD, 0x47),  # green
    "convert": RGBColor(0xED, 0x7D, 0x31),  # orange
    "engage":  RGBColor(0x7B, 0x2F, 0xBE),  # purple
}

# ── slide dimensions (16:9 widescreen) ───────────────────────────────────────
SLIDE_W = Inches(13.33)
SLIDE_H = Inches(7.5)


# ── helper: add a filled rectangle ───────────────────────────────────────────
def add_rect(slide, left, top, width, height, fill_colour):
    shape = slide.shapes.add_shape(
        1,  # MSO_SHAPE_TYPE.RECTANGLE
        left, top, width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_colour
    shape.line.fill.background()
    return shape


def set_text(tf, text, bold=False, italic=False, size=14, colour=BLACK, align=PP_ALIGN.LEFT, wrap=True):
    tf.word_wrap = wrap
    for para in tf.paragraphs:
        para.clear()
    para = tf.paragraphs[0]
    para.alignment = align
    run = para.add_run()
    run.text = text
    run.font.bold = bold
    run.font.italic = italic
    run.font.size = Pt(size)
    run.font.color.rgb = colour


def add_textbox(slide, text, left, top, width, height,
                bold=False, italic=False, size=14, colour=BLACK,
                align=PP_ALIGN.LEFT, bg=None, wrap=True):
    if bg:
        add_rect(slide, left, top, width, height, bg)
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = wrap
    # clear default paragraph
    para = tf.paragraphs[0]
    para.alignment = align
    run = para.add_run()
    run.text = text
    run.font.bold = bold
    run.font.italic = italic
    run.font.size = Pt(size)
    run.font.color.rgb = colour
    return txBox


# ── parse keynote-spec.md ────────────────────────────────────────────────────

SPEC_PATH = os.path.join(
    os.path.dirname(__file__),
    ".maister/tasks/development/2026-04-24-digital-marketing-strategy-course/implementation/keynote-spec.md"
)

SLIDE_HEADER_RE = re.compile(r'^### Slide \d+:', re.MULTILINE)

def parse_slides(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()

    # Split into slide chunks
    splits = list(SLIDE_HEADER_RE.finditer(content))
    slides = []

    for i, match in enumerate(splits):
        start = match.start()
        end = splits[i+1].start() if i+1 < len(splits) else len(content)
        chunk = content[start:end]
        slides.append(parse_slide_chunk(chunk))

    return slides


def extract_field(chunk, tag):
    """Extract content after [TAG]: until the next [TAG] or blank line sequence."""
    pattern = re.compile(
        r'\[' + re.escape(tag) + r'\]\s*:\s*(.*?)(?=\n\[|\n---|\Z)',
        re.DOTALL
    )
    m = pattern.search(chunk)
    if m:
        return m.group(1).strip()
    return ""


def parse_slide_chunk(chunk):
    # Title line: "### Slide N: Title text"
    title_match = re.match(r'### (Slide \d+): (.+)', chunk)
    number_str = title_match.group(1) if title_match else "Slide ?"
    title = title_match.group(2).strip() if title_match else "?"

    # Block label
    blok_match = re.search(r'\*\*Blok\*\*:\s*(.+)', chunk)
    blok = blok_match.group(1).strip() if blok_match else ""

    # Visual description: between **Wizualizacja**: and the first [tag]
    viz_match = re.search(r'\*\*Wizualizacja\*\*:\s*(.*?)(?=\n\[|\Z)', chunk, re.DOTALL)
    viz = viz_match.group(1).strip() if viz_match else ""

    say  = extract_field(chunk, "SAY")
    do   = extract_field(chunk, "DO")
    watch = extract_field(chunk, "WATCH")
    time_ = extract_field(chunk, "TIME")
    setup = extract_field(chunk, "SETUP")
    debrief = extract_field(chunk, "DEBRIEF")
    extension = extract_field(chunk, "EXTENSION")

    return {
        "number": number_str,
        "title":  title,
        "blok":   blok,
        "viz":    viz,
        "say":    say,
        "do":     do,
        "watch":  watch,
        "time":   time_,
        "setup":  setup,
        "debrief":  debrief,
        "extension": extension,
    }


def build_speaker_notes(s):
    parts = []
    if s["time"]:
        parts.append(f"[TIME] {s['time']}")
    if s["say"]:
        parts.append(f"[SAY]\n{s['say']}")
    if s["setup"]:
        parts.append(f"[SETUP]\n{s['setup']}")
    if s["do"]:
        parts.append(f"[DO]\n{s['do']}")
    if s["watch"]:
        parts.append(f"[WATCH]\n{s['watch']}")
    if s["debrief"]:
        parts.append(f"[DEBRIEF]\n{s['debrief']}")
    if s["extension"]:
        parts.append(f"[EXTENSION]\n{s['extension']}")
    return "\n\n".join(parts)


# ── build slide ───────────────────────────────────────────────────────────────

PADDING = Inches(0.18)

def build_slide(prs, s):
    slide_layout = prs.slide_layouts[6]  # blank
    slide = prs.slides.add_slide(slide_layout)

    W = SLIDE_W
    H = SLIDE_H

    # ── 1. Title band (navy background, full width, 1.1in tall) ──────────────
    TITLE_H = Inches(1.1)
    add_rect(slide, 0, 0, W, TITLE_H, NAVY)

    # Slide number badge (left side of title band)
    badge_w = Inches(0.8)
    add_textbox(
        slide, s["number"],
        PADDING, Inches(0.15), badge_w, Inches(0.8),
        bold=True, size=11, colour=RGBColor(0xAA, 0xBB, 0xCC),
        align=PP_ALIGN.LEFT
    )

    # Title text
    add_textbox(
        slide, s["title"],
        badge_w + PADDING*2, Inches(0.1),
        W - badge_w - PADDING*3, TITLE_H - Inches(0.1),
        bold=True, size=24, colour=WHITE,
        align=PP_ALIGN.LEFT
    )

    # Block label (top-right corner)
    if s["blok"]:
        add_textbox(
            slide, s["blok"],
            W - Inches(3.2), Inches(0.02),
            Inches(3.0), Inches(0.35),
            bold=False, size=9, colour=RGBColor(0x88, 0xAA, 0xCC),
            align=PP_ALIGN.RIGHT
        )

    # ── 2. Visual description band ──────────────────────────────────────────
    VIZ_TOP  = TITLE_H + PADDING
    VIZ_H    = Inches(1.1)

    if s["viz"]:
        # truncate to ~260 chars for the slide (full text goes to notes)
        viz_text = s["viz"][:280] + ("…" if len(s["viz"]) > 280 else "")
        add_rect(slide, PADDING, VIZ_TOP, W - PADDING*2, VIZ_H, GREY_BG)
        add_textbox(
            slide, "Wizualizacja: " + viz_text,
            PADDING*2, VIZ_TOP + Inches(0.06),
            W - PADDING*4, VIZ_H - Inches(0.12),
            italic=True, size=9, colour=GREY_TEXT
        )
        content_top = VIZ_TOP + VIZ_H + PADDING
    else:
        content_top = VIZ_TOP

    # ── 3. SAY content (main area) ───────────────────────────────────────────
    content_h = H - content_top - PADDING

    say_text = s["say"]
    if say_text:
        # Show first ~600 chars on slide; rest in notes
        display_say = say_text[:650] + ("…" if len(say_text) > 650 else "")
        add_textbox(
            slide, display_say,
            PADDING, content_top,
            W - PADDING*2, content_h,
            size=12, colour=BLACK
        )
    elif s["setup"]:
        # Workshop slide with SETUP as primary content
        display = ("[SETUP] " + s["setup"])[:600]
        add_textbox(
            slide, display,
            PADDING, content_top,
            W - PADDING*2, content_h,
            size=12, colour=BLACK
        )

    # ── 4. TIME badge (bottom right) ─────────────────────────────────────────
    if s["time"]:
        add_textbox(
            slide, s["time"],
            W - Inches(2.0), H - Inches(0.38),
            Inches(1.85), Inches(0.32),
            bold=True, size=11, colour=ACCENT,
            align=PP_ALIGN.RIGHT
        )

    # ── 5. Speaker notes ─────────────────────────────────────────────────────
    notes_slide = slide.notes_slide
    notes_tf = notes_slide.notes_text_frame
    notes_tf.text = build_speaker_notes(s)

    return slide


# ── main ──────────────────────────────────────────────────────────────────────

def main():
    print("Parsing keynote-spec.md …")
    slides_data = parse_slides(SPEC_PATH)
    print(f"  → {len(slides_data)} slides parsed")

    prs = Presentation()
    prs.slide_width  = SLIDE_W
    prs.slide_height = SLIDE_H

    for i, s in enumerate(slides_data, 1):
        build_slide(prs, s)
        if i % 10 == 0:
            print(f"  → built {i}/{len(slides_data)} slides")

    out_dir = os.path.join(os.path.dirname(__file__), "course-materials")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "Strategia_Marketingu_Cyfrowego.pptx")
    prs.save(out_path)
    print(f"\nSaved: {out_path}")
    size_kb = os.path.getsize(out_path) // 1024
    print(f"File size: {size_kb} KB")


if __name__ == "__main__":
    main()
