/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH FOR ALL BUSINESS INFORMATION
 * ============================================================================
 *
 * HOW TO USE THIS FILE
 * --------------------
 * 1. Fill in every value marked `TODO`.
 * 2. Leave a value as an empty string ("") and the website will hide that
 *    detail gracefully (e.g. a missing phone number means no phone row is
 *    rendered) instead of publishing a fake placeholder.
 * 3. Run `npm run build` — the preflight script prints a checklist of anything
 *    still missing.
 *
 * IMPORTANT
 * ---------
 * Do NOT put Razorpay key IDs, key secrets, or any other secret in this file.
 * This file is bundled into the client. Secrets belong in server-only env vars
 * (`process.env.*`) and this website does not require any secrets at all.
 */

/**
 * Canonical website URL, used for canonical tags, Open Graph, sitemap.xml and
 * robots.txt. Defaults to the live Vercel deployment; when you add a custom
 * domain, set NEXT_PUBLIC_SITE_URL to it in Vercel and redeploy.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://landing-page-alpha-red-22.vercel.app";

export const site = {
  /** Business / brand name. */
  name: "BudgetPhoneWala Accessories",

  /**
   * Registered legal name, EXACTLY as it appears on your Razorpay KYC / GST
   * certificate (proprietor name or firm name). Shown in the footer and on the
   * Contact page. Leave "" to hide.
   */
  legalName: "", // TODO: legal name exactly as on KYC / GST certificate

  /** GSTIN, if registered. Shown in the footer and on the Contact page. Leave "" to hide. */
  gstin: "", // TODO: 15-character GSTIN

  /** Short tagline used in the header lockup and browser title suffix. */
  tagline: "Mobile accessories at honest prices",

  /** Short subline shown next to the logo image. */
  logoSubline: "Mobile Accessories",

  /** Path to the brand logo inside `public/`. */
  logoPath: "/logo.png",

  /** One-line description used for SEO meta description and social previews. */
  description:
    "BudgetPhoneWala Accessories sells brand-new mobile accessories (chargers, cables, earbuds, phone covers, power banks and smartwatches) and pre-owned iPhones and Samsung phones from our store in Pandharpur, Maharashtra.",

  /** Country the business operates in. Used in footer + SEO. */
  country: "India",

  /** Languages the business supports (customer support / policies). */
  languages: ["English", "Hindi", "Marathi"],

  /** Free-text business summary shown in the hero paragraph. */
  heroSummary:
    "Chargers, cables, earbuds, covers, power banks and smartwatches. All brand-new, clearly priced, from our Pandharpur store.",

  /** Longer About Us copy. Written to be plain and non-claiming. */
  about: {
    heading: "A local mobile accessories store in Pandharpur",
    paragraphs: [
      "BudgetPhoneWala Accessories is a retail store in Pandharpur, Maharashtra, that sells everyday mobile accessories: chargers, charging cables, earbuds and earphones, phone covers, power banks and smartwatches.",
      "Every accessory we sell is brand-new and comes in its original packaging. We stock accessories for popular Android phones and iPhones, and we help you pick the right charger, cable or cover for your exact phone model.",
      "We also sell pre-owned iPhones and Samsung phones. Each phone is a single unit: we share its condition and price with you on WhatsApp before you buy.",
      "You can shop with us in person at our store, or order on WhatsApp or phone and have your accessories delivered. Every order comes with a bill.",
    ],
    /** Short bullet list under the About copy. Keep these factual. */
    points: [
      "Only brand-new, sealed accessories",
      "Clear price on every product, in Indian Rupees",
      "Help choosing the right accessory for your phone model",
      "Bill provided with every purchase",
    ],
  },

  /**
   * "Why Choose Us" items.
   *
   * These are commitments the business makes to its customers, so only keep the
   * ones you can actually honour for every order. Delete the rest.
   */
  highlights: [
    {
      title: "Brand-new and sealed",
      body: "Every accessory is new and comes in its original packaging, exactly as described on this site.",
    },
    {
      title: "Right fit for your phone",
      body: "Tell us your phone model and we confirm compatibility (connector, wattage, cover size) before you pay.",
    },
    {
      title: "Clear pricing",
      body: "The listed price is what you pay for the item. Any delivery charge is told to you before payment.",
    },
    {
      title: "Talk to a real person",
      body: "Order and get support on WhatsApp or phone, directly from the store team.",
    },
    {
      title: "Bill with every order",
      body: "A proper bill is issued for each purchase, for your records and for warranty claims.",
    },
    {
      title: "Easy replacement",
      body: "Received a damaged, defective or wrong item? Report it within 7 days of delivery and we replace or refund it.",
    },
  ],

  /** Product categories the store sells. Shown on the homepage. */
  categories: [
    { title: "Chargers", body: "Fast chargers and adapters for Android phones and iPhones." },
    { title: "Cables", body: "USB Type-C, Lightning and Micro-USB charging and data cables." },
    { title: "Earbuds & earphones", body: "Wireless earbuds, neckbands and wired earphones." },
    { title: "Phone covers", body: "Back covers and cases for popular phone models." },
    { title: "Power banks", body: "Portable power banks in a range of capacities." },
    { title: "Smartwatches", body: "Smartwatches and fitness bands." },
  ],

  /** Contact details. Empty strings are hidden on the website. */
  contact: {
    email: "budgetphonewala@gmail.com",
    phone: "+91 98500 07981",
    whatsapp: "+91 98500 07981",
    /** Full street address. Omit city/pincode if not comfortable publishing. */
    address: {
      line1: "Chowk, Bhadule Rd, Navi Peth",
      line2: "Chouphala",
      city: "Pandharpur",
      state: "Maharashtra",
      pincode: "413304",
      country: "India",
    },
    /** Business hours. */
    hours: "Monday to Sunday, 10:00 AM to 9:00 PM IST",
  },

  /** Social profiles. Empty strings are hidden. */
  social: {
    // instagram: "",
  },

  /** Legal / policy metadata. */
  legal: {
    /** Date shown on policy pages. Update when you edit a policy. */
    policiesUpdatedOn: "2026-10-22",
    /** Governing law / jurisdiction, if you want it stated publicly. */
    jurisdiction: "Pandharpur, Maharashtra",
  },
} as const;

/** Public, statically-safe list of internal links. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Phones", href: "/#phones" },
  { label: "App", href: "/app" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

/** Footer policy links. Order matters — Razorpay review looks for these. */
export const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Shipping & Delivery Policy", href: "/shipping-policy" },
  { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
  { label: "Return & Replacement Policy", href: "/return-policy" },
  { label: "Delete your account", href: "/delete-account" },
] as const;

export type NavLink = (typeof navLinks)[number];
export type PolicyLink = (typeof policyLinks)[number];

/** Returns the full absolute URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** True when the contact email has been filled in. */
export const hasEmail = site.contact.email.trim().length > 0;
/** True when a contact phone number has been filled in. */
export const hasPhone = site.contact.phone.trim().length > 0;
/** True when a WhatsApp number has been filled in. */
export const hasWhatsApp = site.contact.whatsapp.trim().length > 0;

/** Formats a phone number (with country code) into a tel: link. */
export function phoneHref(value: string): string {
  return `tel:+${value.replace(/[^\d]/g, "")}`;
}

/** Builds a wa.me deep link with a pre-filled, URL-encoded message. */
export function whatsappHref(value: string, message: string): string {
  const digits = value.replace(/[^\d]/g, "").replace(/^0(?=\d{10}$)/, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Joins the non-empty parts of the business address into readable lines. */
export function addressLines(): string[] {
  const a = site.contact.address;
  return [a.line1, a.line2, [a.city, a.state].filter(Boolean).join(", "), a.pincode]
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

/** True when at least one contact channel is configured. */
export const hasAnyContact =
  hasEmail || hasPhone || hasWhatsApp || addressLines().length > 0;

/** Google Maps search link for the store address. */
export function mapsHref(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Budget Phonewala, ${addressLines().join(", ")}`,
  )}`;
}

/** Default WhatsApp message for general enquiries. */
export const WHATSAPP_ENQUIRY = `Hi ${site.name}, I would like to order a mobile accessory.`;
