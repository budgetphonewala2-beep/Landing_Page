# BudgetPhoneWala — Landing Page

Marketing website for **BudgetPhoneWala**, a business that sells second-hand
smartphones in India.

Built with **Next.js 16 (App Router) + TypeScript**. Fully static, no database,
no backend, no API keys. Deployed on Vercel.

---

## Quick start (local)

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build      # production build (also runs the pre-publish checklist)
npm start          # serve the production build locally
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

---

## Before you publish — required business information

Everything below is driven by config files. Nothing is hardcoded in the UI, and
nothing is invented.

| # | What to add | Where |
|---|---|---|
| 1 | Live domain URL | `NEXT_PUBLIC_SITE_URL` in `.env.local` and in Vercel env vars |
| 2 | Business email | `src/config/site.ts` → `contact.email` |
| 3 | Phone number | `src/config/site.ts` → `contact.phone` |
| 4 | WhatsApp number (with country code) | `src/config/site.ts` → `contact.whatsapp` |
| 5 | Business address | `src/config/site.ts` → `contact.address` |
| 6 | Business hours | `src/config/site.ts` → `contact.hours` |
| 7 | Real phones: model, variant, grade, price, photo | `src/config/products.ts` + `public/products/` |
| 8 | Last-updated date for the policy pages | `src/config/site.ts` → `legal.policiesUpdatedOn` |
| 9 | Review every `TODO(confirm)` note in the policies | `src/content/policies.ts` |
| 10 | Review the About / hero copy so it matches how you actually trade | `src/config/site.ts` → `about`, `heroSummary` |

Run `npm run build` at any time — the pre-build step prints a checklist of
anything still missing.

### Rules the site follows on purpose

- An empty contact field is **hidden**, never replaced with a fake value.
- With no products listed, the Products section shows an honest
  "listings are being updated" panel instead of sample phones.
- No delivery timelines, refund windows, warranty periods or fees are published
  unless you put them there yourself.

---

## Project structure

```
src/
  app/
    layout.tsx           Root layout, SEO metadata, Organization JSON-LD
    page.tsx             Home: Hero, About, Products, Why Choose Us, Contact
    pricing/page.tsx     Pricing details page
    privacy-policy/      ┐
    terms-and-conditions/│
    shipping-policy/     ├ One page per policy, all rendered from content/
    cancellation-refund-policy/
    return-policy/       ┘
    not-found.tsx        Custom 404
    icon.svg             Favicon
    sitemap.ts robots.ts Generated for search engines
  components/            Navbar, Footer, Logo, Icons, shared blocks
  config/
    site.ts              ALL business info — the main file you will edit
    products.ts          Product catalogue
  content/
    policies.ts          Text of all five policy pages
public/
  logo.png               Brand logo
  products/              Product photos
scripts/
  preflight.mjs          Prints the pre-publish checklist before `next build`
```

---

## Deploy to Vercel

### Option A — import the GitHub repo (recommended)

1. Push the code to GitHub.
2. Go to <https://vercel.com/new> and sign in with GitHub.
3. Import **budgetphonewala2-beep / Landing_Page**.
4. Leave every build setting at its default. Vercel detects Next.js and runs
   `npm run build` automatically. No configuration is required.
5. Click **Deploy**.

To have Vercel set the site URL automatically, or to pin your own domain:

- **Environment variable:** add `NEXT_PUBLIC_SITE_URL` with your final domain
  (e.g. `https://budgetphonewala.com`) under *Project → Settings → Environment
  Variables*, then redeploy.
- **Custom domain:** *Project → Settings → Domains → Add* your domain and follow
  the DNS instructions Vercel shows.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel            # preview deployment
vercel --prod     # production deployment
```

### Deploy from your machine instead (no GitHub)

```bash
npm run build
npx vercel deploy --prod --prebuilt
```

---

## Submitting the site to Razorpay for website verification

Razorpay asks for a live, publicly reachable website plus links to specific
pages. This project provides all of them:

| Razorpay asks for | This site |
|---|---|
| Website URL | your Vercel domain |
| About us | `/#about` |
| Contact us | `/#contact` |
| Pricing details | `/pricing` |
| Terms and conditions | `/terms-and-conditions` |
| Privacy policy | `/privacy-policy` |
| Refund policy | `/cancellation-refund-policy` |
| Shipping policy | `/shipping-policy` |
| Sample invoice | upload a real invoice in the Razorpay dashboard (PNG/JPG/PDF) |

Steps in the Razorpay dashboard: *Account & Settings → Business website detail
→ Add website/app details → Submit website for review.*

> **Important:** building these pages does not guarantee approval. Razorpay also
> reviews your KYC documents, business legitimacy, and the clarity of your
> pricing, contact details and policies. Publish only information that is true
> for your business — inaccurate pages can delay or fail verification. Razorpay
> also states that website policies are no longer mandatory at onboarding for
> some business types, but having them published is good practice either way.

---

## Notes

- **No secrets.** Nothing in this repo needs an API key. Never commit a Razorpay
  key secret; this site does not process payments and does not need one.
- **No checkout.** Payments are arranged directly with the customer, as stated
  on the pricing page. Payment integration can be added later if required.
- **Fonts** use a system font stack, so there are no external font requests and
  no build-time network dependency.
