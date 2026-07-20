# 🏝️ Dalisay Cove — Beach Resort & Villas

A stunning, fully-functioning resort website for a fictional boutique beach resort
in **El Nido, Palawan, Philippines**.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion

## Pages

| Route | What's there |
| --- | --- |
| `/` | Editorial hero, live date/guest handoff, featured stays, experiences, reviews, location story, CTA |
| `/rooms` | All 4 rooms + signature pool villa, rates table (low/high season), inclusions |
| `/about` | The resort's story and values |
| `/location` | Embedded map, GPS, and 4 ways to reach the resort (air, van, ferry, overland) |
| `/booking` | Booking request form with live stay summary, night/total calculator, and confirmation screen |
| `/contact` | Inquiry form + phone, WhatsApp, email, socials, front-desk hours |

## Features

- 🎬 Scroll-reveal animations (Framer Motion), Ken Burns hero zoom, review marquee, hover effects
- 📱 Fully responsive — mobile nav, fluid grids, adaptive typography
- 🎨 Custom Tailwind v4 theme: ocean teals, sand neutrals, gold accents, Cormorant Garamond + Manrope
- ⚡ Static page rendering, Vercel-ready form endpoints, and `next/image` optimization throughout
- ♿ Semantic HTML, labeled forms, alt text, keyboard-friendly

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to `main` on GitHub with the repo connected to [Vercel](https://vercel.com) and every push redeploys automatically.

---

*All content (resort, reviews, contact details) is fictional demo content. Photography via Unsplash plus a custom-generated hero image.*
