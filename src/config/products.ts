/**
 * ============================================================================
 * PRODUCT CATALOGUE
 * ============================================================================
 *
 * RULE: only list phones you actually have in stock. Do not publish sample
 * models or prices to "fill up" the page — Razorpay and your customers will
 * both notice.
 *
 * The Products section on the homepage and the /pricing page both read from
 * this file. With an empty `products` array they render an honest
 * "listings coming soon / contact us" panel instead of fake cards.
 *
 * ---------------------------------------------------------------------------
 * HOW TO ADD A PHONE
 * ---------------------------------------------------------------------------
 * 1. Put the photo in `public/products/` — e.g. `public/products/iphone-12.jpg`
 *    Recommended: a clean square shot, at least 800x800px, under 300 KB.
 * 2. Add an entry to the array below, copying the shape of the example.
 * 3. Set `available: true`. Set it to `false` for sold units — sold units are
 *    shown struck through and are skipped by the "in stock only" filter.
 *
 * REMOVE the example entries below before publishing.
 * ---------------------------------------------------------------------------
 */

export type Product = {
  /** Unique, URL-safe id. Used as the image filename. */
  slug: string;
  /** Exact model name as it should be printed, e.g. "Samsung Galaxy M32". */
  name: string;
  /** Storage / RAM variant, e.g. "6 GB RAM · 128 GB Storage". */
  variant?: string;
  /** Selling price in INR as a plain number (no symbol, no commas). */
  price: number;
  /**
   * Condition grade, exactly as you describe it to customers.
   * Keep this consistent with your grading method.
   */
  grade?: string;
  /** Honest short condition note, e.g. "Minor scratches on back panel". */
  notes?: string;
  /** Path under /public. Leave undefined to render a neutral placeholder tile. */
  image?: string;
  /** false = already sold. */
  available: boolean;
};

export const products: Product[] = [
  // -------------------------------------------------------------------------
  // EXAMPLE — DELETE THIS BLOCK AND REPLACE WITH REAL INVENTORY
  // -------------------------------------------------------------------------
  // {
  //   slug: "iphone-12-64gb",
  //   name: "iPhone 12",
  //   variant: "64 GB",
  //   price: 24999,
  //   grade: "Grade A",
  //   notes: "Battery health 88%, no screen scratches.",
  //   image: "/products/iphone-12.jpg",
  //   available: true,
  // },
];

/** Only units that are actually for sale. */
export const inStock = products.filter((product) => product.available);

/** Lowest and highest listed price, or null when nothing is listed. */
export const priceRange: { min: number; max: number } | null =
  inStock.length === 0
    ? null
    : {
        min: Math.min(...inStock.map((product) => product.price)),
        max: Math.max(...inStock.map((product) => product.price)),
      };

/** Formats an INR amount as ₹1,23,456 using the Indian digit grouping. */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
