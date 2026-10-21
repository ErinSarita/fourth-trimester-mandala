# The Fourth Trimester Mandala

A teaching map of the first twelve weeks after birth, read from the center out: the dyad (mother and baby) at the center, then the baby, the mother, the partner, the wider circle of support, the educator (the PPN view and the science behind each moment), and best practices for each moment.

The wheel begins at the top with the foundations (warmth, milk, and love: Bergman's habitat and niche), then moves clockwise through the first hour (Widström's nine stages), the first days (day 1 to two weeks), and the first months (weeks 3 to 12).

Created by Erin Singleton, a student in APPPAH's Prenatal & Perinatal Educator certification. It continues from The Pregnancy and Birth Mandala. An educational map, not medical advice.

The mandala is the single file `index.html`. Its content lives in the `SLICES` array (twelve slices, each with the baby, mother, partner, circle, educator, best practices, the support to look into, and a repair), plus `QUARTERS`, `NEEDS`, `STAGES`, and the guide pages' content: `STATES`, `CUES`, `CRYING`, `DEEPER`, `HORMONES`, `COREG`, `WAYS`, `URGENT`, and `SUPPORT`. The Key concepts guide reads `KEYS` from `key-concepts.js`, which the booklet shares. Settings saved in the browser use the `ft-` prefix (`ft-theme`, `ft-born`).

## The workbook

`workbook/index.html` is *My Fourth Trimester Plan*, a fillable workbook linked from the mandala's opening and its Support page. It covers the mother and baby, her circle of support (partner, at least three main supporters, wider layers), requests for her partner and each layer, her first hour plan, feeding plan, a menu of help to pick from (85 tasks in 14 groups) with each task assigned to a named person or to anyone, a "Who is doing what" page per supporter, rest and visitors, signs to watch for, her birth story (printed only if she ticks it), a guide for supporters drawn from the mandala, and contacts. What she writes is saved only in her browser (`ftw-plan`). Print or save as PDF to share, or print a blank copy to fill in by hand.

The workbook's lists live in `workbook/content.js`, shared by three pages: the fillable `index.html`, the designed booklet `booklet.html` (22 Letter pages, in the style of the Pregnancy and Birth guidebook, shown on screen as a page turner), and the one-page `ways-to-help.html` (Letter). The booklet and the sheet are blank by default. Opened from the workbook with `?mine`, they carry her own answers, priorities, and helpers from her device.

`python3 workbook/build-pdf.py http://localhost:3000/workbook/` (with the mandala served locally) makes `my-fourth-trimester-plan.pdf` (the booklet, 22 Letter pages to print double-sided), `ways-to-help.pdf`, and `visitor-cards.pdf` (four blank invitations, fronts on one page and backs on the next). Run it again after changing the workbook.

The workbook opens in one of two views: **Read the booklet**, a page turner (facing pages on a wide screen, one page on a phone) that always shows her latest answers, and **Fill it in**, the form. `?view=read` or `?view=fill` picks one; her last choice is remembered (`ftw-view`).

Visitor cards (`visitor-cards.html`, styled by `visitor-card.css`, drawn by `visitorFront()` and `visitorBack()` in `content.js`) are formal invitations, separate from the booklet. The front has her photo (`ftw-photo`, made smaller and kept on her device) in a ring of petals, the baby's name, birth date and time, optional weight and length, and "With love, ...". The back has the visit: who it is for, the date, time, and length, her few words, what to expect, how to help, and a note line. Fronts print on one page and backs on the next, mirrored, so a long-edge double-sided print lines them up.
