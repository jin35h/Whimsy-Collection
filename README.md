# Whimsy Collection — Canada Boutique Web Experience

> **"Where Style Meets Tradition"**  
> Direct Doorstep & Local Hand Delivery across **Mississauga, Brampton, Toronto, Kitchener, Cambridge & Guelph, Ontario, Canada**.  
> **Order & Concierge Hotline:** WhatsApp `+1 (705) 970-2169`

---

## 💎 Project Overview

Whimsy Collection is an independent, direct-to-consumer boutique specializing in high-grade **316L Stainless Steel** and **Cubic Zirconia Fashion Jewelry**, blending traditional South Asian craftsmanship with modern aesthetics.

Operating as an online-first boutique without commercial retail overhead, Whimsy delivers hand-inspected pieces inside signature **rose velvet keepsake travel pouches** straight to customers' doorsteps in Southern Ontario.

---

## 🛡️ Core Business Rules Implemented

1. **Strict Zero-Price Policy Across All Pages:**
   * In compliance with client instructions, **no prices are displayed anywhere** on the website or in product listings.
   * Every product card and detail page features interactive **"Inquire on WhatsApp"** and **"Order on WhatsApp"** buttons that pre-compose personalized messages to `+1 (705) 970-2169` containing the exact product title, SKU, and delivery city.

2. **Geo-Targeted Ontario Corridor (AEO & GEO):**
   * Exclusively configured for **Mississauga, Brampton, Toronto, Kitchener, Cambridge, and Guelph**.
   * Embedded `geo.region: CA-ON`, `ICBM`, and Schema.org `areaServed` geographical metadata.

3. **Google E-E-A-T & Canadian Compliance:**
   * Full PIPEDA-compliant Privacy Policy.
   * Comprehensive Disclaimers & Allergy Notices (316L surgical stainless steel vs. fashion alloy guidance).
   * Schema.org `JewelryStore` and `FAQPage` structured data.

---

## 📂 Web Architecture (12 Pages)

| File | Purpose & Role | Key Highlights |
| :--- | :--- | :--- |
| [`index.html`](index.html) | Main Landing & Brand Hub | Hero VFX Sparkle Canvas, Geo Ribbon, Why No Storefront, Trending Highlights, Packaging Spotlight, 4-Step Guide, FAQ Accordion |
| [`catalog.html`](catalog.html) | Full Product Catalog | Live search by SKU/name, Material dropdown, Category filter pills, 87+ real products from inventory master |
| [`product-details.html`](product-details.html) | Product Deep Dive | Dynamic SKU reader (`?sku=...`), High-res image display, Specifications table, Hypoallergenic notes, Dual WhatsApp CTAs |
| [`about.html`](about.html) | Brand Story & Heritage | The Whimsy story, jhumka emblem symbolism, 4 quality pillars, Canadian boutique mission |
| [`how-it-works.html`](how-it-works.html) | WhatsApp Ordering Guide | Visual 4-step conversational shopping walkthrough, video previews, Interac e-Transfer, local doorstep delivery |
| [`delivery-areas.html`](delivery-areas.html) | Regional Delivery Hub | City-by-city delivery schedules for Mississauga, Brampton, Toronto, Kitchener, Cambridge & Guelph |
| [`craftsmanship-care.html`](craftsmanship-care.html) | Jewelry Care & E-E-A-T | 316L stainless steel vs. fashion alloy care, AAA CZ cleaning, 5 golden longevity rules, velvet pouch storage |
| [`faq.html`](faq.html) | Customer Support FAQ | Search-engine indexed Schema.org `FAQPage` covering pricing policy, payments, and returns |
| [`contact.html`](contact.html) | Contact & Concierge | Interactive WhatsApp inquiry generator, phone `(705) 970-2169`, Instagram link, operating hours |
| [`privacy-policy.html`](privacy-policy.html) | Legal Privacy | Canadian PIPEDA compliant privacy policy covering WhatsApp conversational data handling |
| [`terms-conditions.html`](terms-conditions.html) | Terms of Service | Order confirmation rules, delivery conditions, sanitary exchange guidelines, Ontario governing law |
| [`disclaimers.html`](disclaimers.html) | Material Disclaimers | Metal alloy transparency, nickel-free allergy guidance, photography variations, no storefront notice |

---

## 🎨 Asset Structure

```
Whimsy/
├── assets/
│   ├── css/
│   │   ├── style.css         # Luxury brand typography, responsive grids, buttons, modals
│   │   └── animations.css    # Customer-focusing animations, shimmer text, float, pulse
│   ├── js/
│   │   ├── products-data.js  # 87 active inventory SKUs extracted from Whimsy Master file
│   │   ├── vfx.js            # HTML5 Canvas sparkle engine, scroll reveal, WhatsApp modal
│   │   └── main.js           # Dynamic catalog filtering, search, mobile drawer, accordion
│   └── images/
│       ├── logo.jpg          # High-resolution royal Whimsy crest
│       ├── hero-flatlay.png  # Signature velvet pouch, rings, earrings, and charms flatlay
│       └── products/         # Embedded high-res product catalog photography
```

---

## 🚀 Laravel 10/11 Architecture Guide (Blade Ready)

These HTML templates are structured for drop-in migration to Laravel:

```
resources/views/
├── layouts/
│   └── app.blade.php             # Announcement bar, Header, Footer, WhatsApp Floating Button
├── partials/
│   ├── header.blade.php          # Brand navigation & mobile drawer
│   ├── footer.blade.php          # Regional links, legal links, WhatsApp hotline
│   └── wa-modal.blade.php        # Interactive WhatsApp inquiry modal
└── pages/
    ├── home.blade.php            # index.html
    ├── catalog.blade.php         # catalog.html (passes $products from Controller)
    ├── product-detail.blade.php  # product-details.html ($product by SKU)
    ├── about.blade.php
    ├── how-it-works.blade.php
    ├── delivery-areas.blade.php
    ├── care.blade.php
    ├── faq.blade.php
    ├── contact.blade.php
    └── legal/
        ├── privacy.blade.php
        ├── terms.blade.php
        └── disclaimers.blade.php
```

---

## 🔍 Quality Assurance (QA) Checklist Completed

- [x] **Zero Price Display:** Verified across all 12 HTML pages, JavaScript files, and data structures.
- [x] **WhatsApp Integration:** All inquiry and order CTAs correctly redirect to `https://wa.me/17059702169` with tailored URL-encoded messages.
- [x] **Geographic Targeting:** Consistent coverage of Mississauga, Brampton, Toronto, Kitchener, Cambridge, and Guelph.
- [x] **Responsive Layout:** Tested for mobile (320px–480px), tablet (768px), laptop (1024px), and desktop (1280px+).
- [x] **Google E-E-A-T:** Complete structured data, policy documents, craftsmanship guides, and business transparency.
- [x] **Link Validation:** 100% of internal HTML links verified and functional.
