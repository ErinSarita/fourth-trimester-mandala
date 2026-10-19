"""Makes the workbook's PDFs, in a headless Chrome, at exact page sizes:

  my-fourth-trimester-plan.pdf  the booklet, sixteen Letter pages, to print double-sided on ordinary paper
  ways-to-help.pdf              the one-page Ways to help sheet, on Letter

Run it after changing the workbook, while the mandala is served locally (the fourth-trimester-mandala preview):
    python3 workbook/build-pdf.py http://localhost:3000/workbook/
Needs:  pip3 install playwright pymupdf  and  python3 -m playwright install chromium"""
import sys, os
from playwright.sync_api import sync_playwright
import fitz

base = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000/workbook/").rstrip("/") + "/"
HERE = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.join(HERE, "my-fourth-trimester-plan.pdf")
SHEET = os.path.join(HERE, "ways-to-help.pdf")

with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(color_scheme="light")
    for url, path, size in [(base + "booklet.html", BOOK, dict(format="Letter")),
                            (base + "ways-to-help.html", SHEET, dict(format="Letter"))]:
        pg.goto(url, wait_until="networkidle"); pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(500)
        pg.pdf(path=path, print_background=True, prefer_css_page_size=True, margin=dict(top="0", right="0", bottom="0", left="0"), **size)
        d = fitz.open(path); d.set_metadata({"title": "My Fourth Trimester Plan" if path == BOOK else "Ways to help", "author": "Erin Singleton"}); d.saveIncr()
        print(os.path.basename(path), d.page_count, "pages", os.path.getsize(path) // 1024, "KB")
    b.close()
