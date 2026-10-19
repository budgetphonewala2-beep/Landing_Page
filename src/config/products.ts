/**
 * ============================================================================
 * PRODUCT CATALOGUE
 * ============================================================================
 *
 * RULE: only list accessories you actually stock, at the price you actually
 * charge. Do not publish sample products or prices to "fill up" the page —
 * Razorpay and your customers will both notice.
 *
 * The Products section on the homepage and the /pricing page both read from
 * this file. With an empty `products` array they render an honest
 * "price list is being updated" panel instead of fake cards.
 *
 * ---------------------------------------------------------------------------
 * HOW TO ADD A PRODUCT
 * ---------------------------------------------------------------------------
 * 1. Put the photo in `public/products/` — e.g. `public/products/20w-charger.jpg`
 *    Recommended: a clean square shot, at least 800x800px, under 300 KB.
 * 2. Add an entry to the array below, copying the shape of the commented
 *    sample (remove the leading // on each line).
 * 3. Set `available: false` when an item is out of stock.
 * ---------------------------------------------------------------------------
 */

export const CATEGORIES = [
  "Chargers",
  "Cables",
  "Earbuds & earphones",
  "Phone covers",
  "Power banks",
  "Smartwatches",
  "Other accessories",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Product = {
  /** Unique, URL-safe id. Used as the image filename. */
  slug: string;
  /** Product name as it should be printed, including the brand. */
  name: string;
  /** One of CATEGORIES. Products are grouped by category on the site. */
  category: Category;
  /** Short spec line, e.g. "Type-C · 20W · 1 year brand warranty". */
  details?: string;
  /** One or two plain sentences describing the product. */
  description?: string;
  /** Selling price in INR (inclusive of taxes) as a plain number. */
  price: number;
  /** MRP in INR, if higher than the selling price. Shown struck through. */
  mrp?: number;
  /** Path under /public. Leave undefined to render a neutral placeholder tile. */
  image?: string;
  /** false = currently out of stock. */
  available: boolean;
};

export const products: Product[] = [
  // ------------------------------------------------------------- chargers
  {
    slug: "roarx-20w-qc-charger-with-cable",
    name: "RoarX 20W Quick Charge Wall Charger with Detachable Cable",
    category: "Chargers",
    details: "20W, 3A, Quick Charge, White",
    description: "Fast wall charger for smartphones with Quick Charge support. Comes with a detachable charging cable.",
    price: 376,
    mrp: 2999,
    available: true,
  },
  {
    slug: "roarx-20w-qc-charger",
    name: "RoarX 20W Quick Charge Wall Charger",
    category: "Chargers",
    details: "20W, 3A, Quick Charge, White",
    description: "Compact 20W fast charger, suitable for iPhone 15 and other phones that support 20W charging.",
    price: 282,
    mrp: 1999,
    available: true,
  },
  {
    slug: "sb-20w-qc-charger-with-cable",
    name: "SB 20W Quick Charge Wall Charger with Detachable Cable",
    category: "Chargers",
    details: "20W, 3A, Quick Charge, White, Cable included",
    description: "20W fast wall charger with Quick Charge support, supplied with a detachable charging cable.",
    price: 397,
    mrp: 2799,
    available: true,
  },
  {
    slug: "mak-20w-charger-with-cable",
    name: "MAK 20W Wall Charger with Detachable Cable",
    category: "Chargers",
    details: "20W, 3A, White, Cable included",
    description: "20W wall charger for smartphones with a detachable charging cable in the box.",
    price: 351,
    mrp: 1999,
    available: true,
  },
  {
    slug: "amozkart-20w-qc-charger-with-cable",
    name: "Amozkart 20W Quick Charge Wall Charger with Detachable Cable",
    category: "Chargers",
    details: "20W, 3.1A, Quick Charge, White, Cable included",
    description: "Budget 20W fast charger with Quick Charge support and a detachable charging cable.",
    price: 280,
    mrp: 799,
    available: true,
  },
  {
    slug: "amozkart-20w-qc-charger",
    name: "Amozkart 20W Quick Charge Wall Charger",
    category: "Chargers",
    details: "20W, 3.1A, Quick Charge, White",
    description: "Budget 20W fast wall charger adapter with Quick Charge support.",
    price: 219,
    mrp: 899,
    available: true,
  },
  {
    slug: "vqwnb-charging-pad-118",
    name: "VQWNB Charging Pad 118",
    category: "Chargers",
    details: "Charging pad",
    description: "Charging pad for compatible smartphones. Ask us to confirm compatibility with your phone model before you order.",
    price: 843,
    mrp: 1299,
    available: true,
  },
  {
    slug: "gqhnb-charging-pad-104",
    name: "GQHNB Charging Pad 104",
    category: "Chargers",
    details: "Charging pad",
    description: "Charging pad for compatible smartphones. Ask us to confirm compatibility with your phone model before you order.",
    price: 843,
    mrp: 1299,
    available: true,
  },

  // --------------------------------------------------------------- cables
  {
    slug: "sb-type-c-to-lightning-cable-1m",
    name: "SB Type-C to Lightning Cable, 1 m",
    category: "Cables",
    details: "USB Type-C to Lightning, PD 20W, 3A, 1 m, White",
    description: "Fast charging and data sync cable for iPhone. Works with iPhone X, XR, XS, SE, 11, 12, 13 and 14 series, AirPods and iPad models with a Lightning port.",
    price: 197,
    mrp: 1899,
    available: true,
  },

  // --------------------------------------------------------- phone covers
  {
    slug: "clokify-iphone-transparent-cover-combo",
    name: "CLOKIFY iPhone Cover Accessory Combo",
    category: "Phone covers",
    details: "Transparent, White",
    description: "Transparent back cover combo for iPhone. Tell us your iPhone model and we confirm the right size before you pay.",
    price: 180,
    mrp: 1199,
    available: true,
  },
  {
    slug: "a3sprime-iphone-13-combo-blue",
    name: "A3sprime iPhone 13 Screen Protector and Silicone Cover Combo (Blue)",
    category: "Phone covers",
    details: "For iPhone 13, Screen protector + soft silicone back cover, Blue",
    description: "Combo of a screen protector and a soft silicone back cover with golden coloured sides, for Apple iPhone 13.",
    price: 267,
    mrp: 699,
    available: true,
  },
  {
    slug: "a3sprime-iphone-13-combo-pink",
    name: "A3sprime iPhone 13 Screen Protector and Silicone Cover Combo (Pink)",
    category: "Phone covers",
    details: "For iPhone 13, Screen protector + soft silicone back cover, Pink",
    description: "Combo of a screen protector and a soft silicone back cover with golden coloured sides, for Apple iPhone 13.",
    price: 267,
    mrp: 699,
    available: true,
  },
];

/** Only items that are actually for sale. */
export const inStock = products.filter((product) => product.available);

/** Lowest and highest listed price, or null when nothing is listed. */
export const priceRange: { min: number; max: number } | null =
  inStock.length === 0
    ? null
    : {
        min: Math.min(...inStock.map((product) => product.price)),
        max: Math.max(...inStock.map((product) => product.price)),
      };

/** Products grouped by category, in CATEGORIES order, skipping empty groups. */
export function productsByCategory(): { category: Category; items: Product[] }[] {
  return CATEGORIES.map((category) => ({
    category,
    items: products.filter((product) => product.category === category),
  })).filter((group) => group.items.length > 0);
}

/** Formats an INR amount as ₹1,23,456 using the Indian digit grouping. */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
