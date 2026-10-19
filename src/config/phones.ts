/**
 * ============================================================================
 * PRE-OWNED PHONES
 * ============================================================================
 *
 * Phones in the shop right now. These are pre-owned units, so each one is
 * listed individually and the price is shared on WhatsApp (the "Ask price"
 * button pre-fills the model).
 *
 * PHOTOS: publish only the cropped copies in `public/phones/`. Never publish
 * a photo that shows the shelf label: the label carries the IMEI number.
 *
 * Set `available: false` (or delete the entry) as soon as a phone is sold.
 */

export type Phone = {
  /** Unique, URL-safe id. Matches the photo name in public/phones/. */
  slug: string;
  /** Model as customers search for it. */
  name: string;
  /** Storage, colour and any condition note taken from the shop label. */
  details: string;
  /** Path under /public. */
  image: string;
  /** false = sold. */
  available: boolean;
};

export const phones: Phone[] = [
  {
    slug: "iphone-15-pro-256gb-blue-titanium",
    name: "Apple iPhone 15 Pro",
    details: "256 GB, Blue Titanium",
    image: "/phones/iphone-15-pro-256gb-blue-titanium.jpg",
    available: true,
  },
  {
    slug: "iphone-15-pro-128gb-black-titanium",
    name: "Apple iPhone 15 Pro",
    details: "128 GB, Black Titanium, battery health 100%",
    image: "/phones/iphone-15-pro-128gb-black-titanium.jpg",
    available: true,
  },
  {
    slug: "iphone-14-pro-1tb-gold",
    name: "Apple iPhone 14 Pro",
    details: "1 TB, Gold, battery health 100%",
    image: "/phones/iphone-14-pro-1tb-gold.jpg",
    available: true,
  },
  {
    slug: "iphone-14-pro-256gb-gold",
    name: "Apple iPhone 14 Pro",
    details: "256 GB, Gold, battery health 100%",
    image: "/phones/iphone-14-pro-256gb-gold.jpg",
    available: true,
  },
  {
    slug: "iphone-14-pro-128gb-space-black",
    name: "Apple iPhone 14 Pro",
    details: "128 GB, Space Black, battery health 100%, in warranty",
    image: "/phones/iphone-14-pro-128gb-space-black.jpg",
    available: true,
  },
  {
    slug: "iphone-14-pro-128gb-deep-purple",
    name: "Apple iPhone 14 Pro",
    details: "128 GB, Deep Purple, battery health 100%",
    image: "/phones/iphone-14-pro-128gb-deep-purple.jpg",
    available: true,
  },
  {
    slug: "iphone-13-pro-128gb-gold",
    name: "Apple iPhone 13 Pro",
    details: "128 GB, Gold, battery health 100%",
    image: "/phones/iphone-13-pro-128gb-gold.jpg",
    available: true,
  },
  {
    slug: "samsung-galaxy-s26-ultra-256gb",
    name: "Samsung Galaxy S26 Ultra",
    details: "256 GB, Black",
    image: "/phones/samsung-galaxy-s26-ultra-256gb.jpg",
    available: true,
  },
  {
    slug: "samsung-galaxy-s24-ultra-256gb-gray",
    name: "Samsung Galaxy S24 Ultra",
    details: "12 GB RAM, 256 GB, Titanium Gray",
    image: "/phones/samsung-galaxy-s24-ultra-256gb-gray.jpg",
    available: true,
  },
  {
    slug: "samsung-galaxy-s25-128gb-blue-demo",
    name: "Samsung Galaxy S25",
    details: "128 GB, Blue, demo unit",
    image: "/phones/samsung-galaxy-s25-128gb-blue-demo.jpg",
    available: true,
  },
  {
    slug: "samsung-galaxy-s24-128gb",
    name: "Samsung Galaxy S24",
    details: "128 GB, Violet, with kit",
    image: "/phones/samsung-galaxy-s24-128gb.jpg",
    available: true,
  },
];

export const phonesInStock = phones.filter((phone) => phone.available);
