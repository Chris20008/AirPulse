
# AirPulse Website

Static GitHub Pages site for AirPulse. It has no package-manager or runtime dependency.

## Product pages

- `index.html` — semantic landing page with German fallback copy, the automatic AirPods Pro 3 flow, untouched Apple Fitness rings, and explicit Apple Health calorie-processing boundaries
- `faq.html` — localized FAQ page with 20 repo-backed answers in five groups, animated disclosures, and a free-text search that matches German and English terms in either language mode
- `tags.html` / `tags.css` — localized explanation of session tags with repo-backed, code-native picker and editor mockups
- `styles.css` — responsive layout, the `#FEB5A9` / `#8E4941` visual system, device-based Light/Dark defaults, sticky navigation, consistent iPhone silhouettes, aligned footers, and reduced-motion-aware states
- `site.js` — shared German/English copy and page metadata for the landing, setup, FAQ, and tags pages; bilingual FAQ search; localized app screenshots; preference persistence; journey/reveal/FAQ animations; and App Store links
- `assets/carousel_images/{de,en}/screen-{1..6}.webp` — web-optimized localized app screenshots; same-name PNG files are the source captures

## Shortcuts setup guide

- `how-to.html` — responsive, localized guide for creating the `Start Pulse Tracking` shortcut and the personal AirPods Pro 3 Bluetooth automation
- `how-to.css` — guide-specific layout and consistent iPhone framing for the twelve annotated setup screens
- `assets/how-to/step-{01..12}.webp` — web-optimized derivatives of the tracked source captures in `lib/assets/images/automate_{1..12}.jpeg`

## Legal pages

- `terms-of-use.html` / `terms-of-use.md`
- `privacy-policy.html` / `privacy-policy.md`
- `imprint.html` / `imprint.md`
- `legal.css` / `legal-header.js` — shared monotone legal-page presentation, the product-page header and footer design, corrected document spacing, sticky behavior, and the same device-based theme default

The Privacy Policy and Terms of Use state that AirPulse sessions are not saved as workouts in Apple Fitness or contribute to its rings, and that AirPulse does not process or store calorie or active-energy values in Apple Health.

The Markdown and published HTML versions are maintained manually and must stay materially synchronized.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 4173 --directory website
```

Then open `http://127.0.0.1:4173/`. Use a local server instead of opening the files directly so navigation, images, and browser behavior match GitHub Pages.
