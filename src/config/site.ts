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

/** Canonical website URL. Set NEXT_PUBLIC_SITE_URL in your deployment. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://budgetphonewala.com"; // TODO: confirm the real domain

export const site = {
  /** Business / brand name. */
  name: "BudgetPhoneWala",

  /** Legal or trading name, if different from the brand name. */
  // legalName: "", // TODO: add if registered name differs from "BudgetPhoneWala"

  /** Short tagline used in the header lockup and browser title suffix. */
  tagline: "Second-hand smartphones, honestly graded",

  /**
   * Short subline shown next to the logo image.
   * This is the wording printed on the real BudgetPhoneWala badge artwork.
   */
  logoSubline: "Budget Aapka, Phone Hamara",

  /** Path to the brand logo inside `public/`. */
  logoPath: "/logo.png",

  /** One-line description used for SEO meta description and social previews. */
  description:
    "BudgetPhoneWala sells second-hand smartphones in India with clearly disclosed condition grading and upfront pricing. Browse available models or contact us on WhatsApp.",

  /** Country the business operates in. Used in footer + SEO. */
  country: "India",

  /** Languages the business supports (customer support / policies). */
  languages: ["English", "Hindi"],

  /** Free-text business summary shown in the hero paragraph. */
  heroSummary:
    "We buy and resell second-hand smartphones that still have plenty of life left in them. Every phone's condition, storage and battery health is shared with you before you pay, so you know exactly what you are getting.",

  /** Longer About Us copy. Written to be plain and non-claiming. */
  about: {
    heading: "A straightforward shop for pre-owned phones",
    paragraphs: [
      "BudgetPhoneWala is an Indian business that resells second-hand smartphones. We source pre-owned phones, check them, and sell them at prices that make sense for people who simply need a reliable phone without paying new-phone money.",
      "We are not a brand and we do not manufacture anything. What we do is sell phones that have been used before, and be clear about their condition. Every listing states the grade, storage variant and known issues — if a phone has one, you will hear it from us first.",
      "Orders are confirmed directly with you over WhatsApp or phone, and every sale is accompanied by a proper bill or invoice.",
    ],
    /** Short bullet list under the About copy. Keep these factual. */
    points: [
      "Focused only on pre-owned and second-hand smartphones",
      "Condition and known issues disclosed before payment",
      "Orders confirmed personally over WhatsApp or phone",
      "Invoice provided with every purchase",
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
      title: "Condition disclosed up front",
      body: "Grade, storage, battery health and any known issue are shared with you before you pay — not after delivery.",
    },
    {
      title: "No refurbished-vs-used confusion",
      body: "We tell you plainly whether a phone was simply used or professionally refurbished, and what was replaced.",
    },
    {
      title: "Straightforward pricing",
      body: "The price you are quoted is the price you pay. No handling or hidden charges added at checkout.",
    },
    {
      title: "Direct human contact",
      body: "You talk to the person who actually handles the order — on WhatsApp or phone — from enquiry to delivery.",
    },
    {
      title: "Invoice with every order",
      body: "A proper bill or invoice is issued for each purchase for your records.",
    },
    {
      title: "Returns handled as stated",
      body: "If a delivered phone is not as described, our return policy applies and we act on it in writing.",
    },
  ],

  /** Contact details. Empty strings are hidden on the website. */
  contact: {
    // TODO: fill these in before publishing
    email: "", // e.g. "support@budgetphonewala.com"
    phone: "", // e.g. "+91 98765 43210"
    whatsapp: "", // e.g. "+91 98765 43210" (include country code, digits only in the link)
    /** Full street address. Omit city/pincode if not comfortable publishing. */
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
    },
    /** Business hours, e.g. "Mon–Sat, 10:00 AM – 7:00 PM IST". */
    hours: "",
  },

  /** Social profiles. Empty strings are hidden. */
  social: {
    // instagram: "https://instagram.com/your-handle",
    // facebook: "https://facebook.com/your-page",
    // youtube: "",
  },

  /** Legal / policy metadata. */
  legal: {
    /** Date shown on policy pages. Update when you edit a policy. */
    policiesUpdatedOn: "", // TODO: e.g. "2026-01-15" — leave blank to hide
    /** Governing law / jurisdiction, if you want it stated publicly. */
    jurisdiction: "",
  },
} as const;

/** Public, statically-safe list of internal links. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/#contact" },
] as const;

/** Footer policy links. Order matters — Razorpay review looks for these. */
export const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
  { label: "Return Policy", href: "/return-policy" },
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

/** Formats a phone number into a tel: / wa.me link. */
export function phoneHref(value: string): string {
  return `tel:+${value.replace(/[^\d]/g, "").replace(/^91(?=\d{10}$)/, "")}`;
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
