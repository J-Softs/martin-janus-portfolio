#!/usr/bin/env python3
"""
Generate the Open Graph image at public/og-image.png.

Run once: `python3 scripts/generate-og.py`
Re-run if you change the headline copy — the file is checked into the
repo so the deploy doesn't need Python at build time.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

W, H = 1200, 630

# Brand palette — matches src/styles/global.css.
BG = (10, 10, 15)            # #0A0A0F
SURFACE = (19, 19, 26)       # #13131A
INK = (232, 232, 240)        # #E8E8F0
MUTED = (139, 139, 160)      # #8B8BA0
LINE = (255, 255, 255, 26)   # rgba(255,255,255,0.10)
ACCENT = (234, 88, 12)       # #EA580C

# Font path resolution. Inter / JetBrains Mono aren't installed in CI;
# Lato + DejaVu are close-enough substitutes for a 1200x630 share card.
def font(weight: str, size: int) -> ImageFont.FreeTypeFont:
    candidates = {
        'black':  ['/usr/share/fonts/truetype/lato/Lato-Black.ttf'],
        'bold':   ['/usr/share/fonts/truetype/lato/Lato-Bold.ttf'],
        'medium': ['/usr/share/fonts/truetype/lato/Lato-Medium.ttf'],
        'regular':['/usr/share/fonts/truetype/lato/Lato-Regular.ttf'],
        'mono':   ['/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf'],
    }[weight]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

img = Image.new('RGB', (W, H), BG)
draw = ImageDraw.Draw(img, 'RGBA')

# Engineering grid background — same look as the hero.
GRID = 56
for x in range(0, W, GRID):
    draw.line([(x, 0), (x, H)], fill=(255, 255, 255, 14), width=1)
for y in range(0, H, GRID):
    draw.line([(0, y), (W, y)], fill=(255, 255, 255, 14), width=1)

# Soft radial vignette so the grid fades out toward edges.
vignette = Image.new('RGBA', (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vignette)
for r in range(0, 350, 6):
    alpha = max(0, int(180 * (r / 350) ** 1.8))
    vd.ellipse(
        (-r, -r, W + r, H + r),
        outline=(BG[0], BG[1], BG[2], 0),
        width=1,
    )
# Simple darken-toward-corners — paint translucent BG ring.
mask = Image.new('L', (W, H), 0)
md = ImageDraw.Draw(mask)
md.ellipse((-300, -200, W + 300, H + 200), fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(220))
darken = Image.new('RGBA', (W, H), (BG[0], BG[1], BG[2], 220))
img.paste(BG, (0, 0, W, H), Image.eval(mask, lambda v: 255 - v))

# Left accent bar
draw.rectangle([(0, 0), (8, H)], fill=ACCENT)

# Section label (mono, accent)
PAD_X = 80
y = 90
label_font = font('mono', 22)
draw.text((PAD_X, y), '// MARTIN JANUS', fill=ACCENT, font=label_font)

# Headline
y += 70
hl_font = font('black', 96)
draw.text((PAD_X, y), 'Manufacturing-', fill=INK, font=hl_font)
y += 105
draw.text((PAD_X, y), 'technology specialist.', fill=INK, font=hl_font)

# Sub-line
y += 130
sub_font = font('medium', 32)
draw.text(
    (PAD_X, y),
    'Ex–Jaguar Land Rover & Volkswagen Slovakia. Founding Quizzolingo.',
    fill=MUTED,
    font=sub_font,
)

# URL pill (bottom-right)
url_font = font('mono', 24)
url_text = 'martinjanus.dev'
bbox = draw.textbbox((0, 0), url_text, font=url_font)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
pw, ph = tw + 40, th + 24
px, py = W - PAD_X - pw, H - PAD_X - ph + 10
draw.rounded_rectangle(
    [(px, py), (px + pw, py + ph)],
    radius=12,
    outline=ACCENT,
    width=2,
)
draw.text((px + 20, py + 10), url_text, fill=INK, font=url_font)

# MJ monogram (small, top-right)
mono_font = font('black', 64)
mbbox = draw.textbbox((0, 0), 'MJ', font=mono_font)
mw, mh = mbbox[2] - mbbox[0], mbbox[3] - mbbox[1]
box_w, box_h = mw + 36, mh + 28
bx, by = W - PAD_X - box_w, 70
draw.rounded_rectangle(
    [(bx, by), (bx + box_w, by + box_h)],
    radius=14,
    fill=SURFACE,
    outline=(255, 255, 255, 35),
    width=1,
)
draw.text((bx + 18, by + 8), 'MJ', fill=ACCENT, font=mono_font)

out_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'og-image.png')
out_path = os.path.normpath(out_path)
os.makedirs(os.path.dirname(out_path), exist_ok=True)
img.save(out_path, 'PNG', optimize=True)
print(f'Wrote {out_path} ({os.path.getsize(out_path)} bytes)')
