"""Makes my-fourth-trimester-plan.pdf: the workbook as a blank, printable PDF to flip through or print and fill in by hand.
Run from this folder while the mandala is served locally (the fourth-trimester-mandala preview), or pass a URL:
    python3 build-pdf.py http://localhost:3000/workbook/
Needs: pip3 install playwright  and  python3 -m playwright install chromium"""
import sys, os
from playwright.sync_api import sync_playwright
url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000/workbook/"
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "my-fourth-trimester-plan.pdf")
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(color_scheme="light")
    pg.goto(url)
    # a blank workbook, with the birth story included so every page is there
    pg.evaluate("localStorage.setItem('ftw-plan', JSON.stringify({v:{'story.print':true}, rep:{}}))")
    pg.reload(wait_until="networkidle"); pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(400)
    pg.evaluate("document.querySelectorAll('textarea').forEach(t=>t.style.height='110px'); window.dispatchEvent(new Event('beforeprint'))")
    pg.pdf(path=out, format="Letter", print_background=True, prefer_css_page_size=True)
    pg.evaluate("localStorage.removeItem('ftw-plan')")
    b.close()
print(out)
