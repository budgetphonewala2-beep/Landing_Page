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
  // Copy this shape for each real product:
  // {
  //   slug: "brand-20w-type-c-charger",
  //   name: "<Brand> 20W Type-C Fast Charger",
  //   category: "Chargers",
  //   details: "USB Type-C · 20W · 6 months brand warranty",
  //   price: 0,
  //   mrp: 0,
  //   image: "/products/brand-20w-type-c-charger.jpg",
  //   available: true,
  // },
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
