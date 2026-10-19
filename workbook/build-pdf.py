"""Makes the workbook's PDFs, in a headless Chrome, at exact page sizes:

  my-fourth-trimester-plan.pdf          the booklet, 5.5 x 8.5 in pages, to flip through or print one page to a sheet
  my-fourth-trimester-plan-booklet.pdf  the same pages two to a Letter sheet in folding order, to print double-sided
                                        (flip on the short edge), fold, and staple into a 5.5 x 8.5 book
  ways-to-help.pdf                      the one-page Ways to help sheet, on Letter

Run it after changing the workbook, while the mandala is served locally (the fourth-trimester-mandala preview):
    python3 workbook/build-pdf.py http://localhost:3000/workbook/
Needs:  pip3 install playwright pymupdf  and  python3 -m playwright install chromium"""
import sys, os
from playwright.sync_api import sync_playwright
import fitz

base = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000/workbook/").rstrip("/") + "/"
HERE = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.join(HERE, "my-fourth-trimester-plan.pdf")
FOLD = os.path.join(HERE, "my-fourth-trimester-plan-booklet.pdf")
SHEET = os.path.join(HERE, "ways-to-help.pdf")

def booklet(src, dst):
    """Two pages to each side of a Letter sheet, in saddle-stitch order (as in the Pregnancy and Birth guidebook)."""
    pages = fitz.open(src); n = pages.page_count
    if n % 4: raise SystemExit(f"{n} pages: a booklet needs a multiple of four")
    out = fitz.open(); w, h = pages[0].rect.width, pages[0].rect.height
    for i in range(n // 4):
        for left, right in ((n - 1 - 2 * i, 2 * i), (2 * i + 1, n - 2 - 2 * i)):
            side = out.new_page(width=2 * w, height=h)
            side.show_pdf_page(fitz.Rect(0, 0, w, h), pages, left)
            side.show_pdf_page(fitz.Rect(w, 0, 2 * w, h), pages, right)
    out.set_metadata({"title": "My Fourth Trimester Plan, booklet to print and fold", "author": "Erin Singleton"})
    out.save(dst, deflate=True, garbage=3)

with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(color_scheme="light")
    for url, path, size in [(base + "booklet.html", BOOK, dict(width="5.5in", height="8.5in")),
                            (base + "ways-to-help.html", SHEET, dict(format="Letter"))]:
        pg.goto(url, wait_until="networkidle"); pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(500)
        pg.pdf(path=path, print_background=True, prefer_css_page_size=True, margin=dict(top="0", right="0", bottom="0", left="0"), **size)
        d = fitz.open(path); d.set_metadata({"title": "My Fourth Trimester Plan" if path == BOOK else "Ways to help", "author": "Erin Singleton"}); d.saveIncr()
        print(os.path.basename(path), d.page_count, "pages", os.path.getsize(path) // 1024, "KB")
    b.close()
booklet(BOOK, FOLD)
print(os.path.basename(FOLD), fitz.open(FOLD).page_count, "sides", os.path.getsize(FOLD) // 1024, "KB")
