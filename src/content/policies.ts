import { addressLines, site } from "@/config/site";

/**
 * ============================================================================
 * POLICY CONTENT
 * ============================================================================
 *
 * All policy pages render from this file.
 *
 * EDITING RULES
 * -------------
 * 1. Text in `paragraphs` and `bullets` is published on the live website.
 * 2. Every timeline and window below (dispatch 1 to 2 working days, delivery 3 to 7
 *    working days, 7-day replacement window, refund in 5 to 7 working days) is a
 *    commitment to customers. Change a number here if your store works
 *    differently — never publish a timeline you cannot meet.
 * 3. Update `site.legal.policiesUpdatedOn` in `src/config/site.ts` whenever
 *    you change this file.
 */

export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Policy = {
  slug: string;
  title: string;
  /** Short intro shown directly under the title. */
  summary: string;
  /** Rendered as a highlighted callout under the title. Optional. */
  callout?: string;
  sections: PolicySection[];
};

const updated = site.legal.policiesUpdatedOn;

const operator = site.legalName ? `${site.name} (operated by ${site.legalName})` : site.name;
const contactLine = `${site.name}, ${addressLines().join(", ")}. Phone / WhatsApp: ${site.contact.phone}. Email: ${site.contact.email}. Hours: ${site.contact.hours}.`;

export const policies: Policy[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "/privacy-policy",
    title: "Privacy Policy",
    summary: `How ${site.name} collects, uses and protects the personal information you share with us when you enquire about or buy mobile accessories.`,
    callout:
      "This website has no user accounts and does not use advertising or third-party tracking cookies. We never see or store your card, UPI PIN or net-banking details.",
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          `This website is run by ${operator}, a mobile accessories store located at ${addressLines().join(", ")}. In this policy, "we", "us" and "our" refer to ${site.name}.`,
        ],
      },
      {
        heading: "2. Information we collect",
        paragraphs: [
          "We collect only the information needed to sell and deliver your order. Depending on how you contact us, this can include:",
        ],
        bullets: [
          "Your name.",
          "Your phone number and email address.",
          "Your delivery address, including city, state and PIN code.",
          "Order details: the products you bought, the amount paid and the payment reference.",
          "Basic technical information such as your IP address and browser type, which our web host may record in server logs for security and troubleshooting.",
        ],
      },
      {
        heading: "3. How we use your information",
        paragraphs: [
          "We use your information to reply to your enquiry, confirm and process your order, arrange delivery, issue your bill, handle returns and refunds, and provide after-sales support.",
          "We may contact you about your own order. We do not sell or rent your personal information to anyone.",
        ],
      },
      {
        heading: "4. Payments",
        paragraphs: [
          "Online payments are processed by our payment gateway partner (such as Razorpay) on their secure systems. Your card number, CVV, UPI PIN and net-banking password are entered directly with the payment gateway and are never shared with or stored by us. We receive only the payment status and a transaction reference.",
        ],
      },
      {
        heading: "5. Sharing your information",
        paragraphs: ["We share your details only where it is necessary to fulfil your order or meet a legal obligation:"],
        bullets: [
          "With courier and delivery partners, so that your order can reach you.",
          "With our payment gateway partner, to process payments and refunds.",
          "With government or law-enforcement authorities, where we are legally required to do so.",
        ],
      },
      {
        heading: "6. Cookies",
        paragraphs: [
          "This website does not set advertising cookies and does not run behavioural advertising or cross-site tracking.",
        ],
      },
      {
        heading: "7. Data retention",
        paragraphs: [
          "We keep order and billing records for as long as required by Indian tax and accounting laws (generally up to 8 years). Enquiries that did not lead to an order are deleted within 12 months.",
        ],
      },
      {
        heading: "8. Your rights",
        paragraphs: [
          "You can ask us for a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it where we are not legally required to keep it. Contact us using the details below and we will respond within 15 days.",
        ],
      },
      {
        heading: "9. Security",
        paragraphs: [
          "We take reasonable care to protect your information. No method of transmission over the internet or storage is completely secure, but we limit access to your details to the people who need them to handle your order.",
        ],
      },
      {
        heading: "10. Changes to this policy",
        paragraphs: ["We may update this policy from time to time. The date shown at the top of this page reflects the most recent version."],
      },
      {
        heading: "11. Contact",
        paragraphs: [contactLine],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/terms-and-conditions",
    title: "Terms & Conditions",
    summary: `The terms that apply when you browse this website or buy mobile accessories from ${site.name}.`,
    sections: [
      {
        heading: "1. About these terms",
        paragraphs: [
          `These Terms & Conditions govern your use of this website and every order you place with ${operator}. By browsing this site or placing an order, you agree to these terms.`,
        ],
      },
      {
        heading: "2. Our products",
        paragraphs: [
          "We sell brand-new mobile accessories such as chargers, cables, earbuds and earphones, phone covers, power banks and smartwatches. Every accessory is new and supplied in its original packaging.",
          "We also sell pre-owned smartphones. Each pre-owned phone is a single unit and is sold in the condition described to you before purchase, including its storage, colour, battery health, any cosmetic marks and the accessories included. The price of each phone is shared with you on WhatsApp or at the store before you pay. Any warranty on a pre-owned phone is as stated to you in writing for that unit.",
          "Product photos are for illustration. Colour and packaging may vary slightly from the photo. Compatibility with your phone model is confirmed with you before payment when you tell us your model.",
        ],
      },
      {
        heading: "3. Orders",
        paragraphs: [
          "You can order on WhatsApp, by phone, or in person at our store. An order is confirmed once we have confirmed availability and price to you and payment is received (or, for store pickup, when you pay at the store).",
          "If a product becomes unavailable after you have paid, we will inform you and refund the full amount as described in our Cancellation & Refund Policy.",
        ],
      },
      {
        heading: "4. Prices and payment",
        paragraphs: [
          "All prices are in Indian Rupees (₹) and include applicable taxes. Our selling price is never higher than the MRP printed on the product.",
          "Delivery charges, if any, are shown to you before payment. We accept UPI, debit and credit cards, net banking and wallets through our payment gateway partner, and cash or UPI at the store.",
          "We may correct a price that was listed in error. If that happens after you have paid, we will offer you the choice of paying the correct price or cancelling with a full refund.",
        ],
      },
      {
        heading: "5. Delivery",
        paragraphs: ["Delivery timelines and charges are described in our Shipping & Delivery Policy, which forms part of these terms."],
      },
      {
        heading: "6. Warranty",
        paragraphs: [
          "Where a product comes with a manufacturer or brand warranty, the warranty period and terms are those stated by the brand on the product, its packaging or its warranty card. We help you with warranty claims for products bought from us.",
          "Warranty does not cover physical damage, liquid damage, misuse, or damage caused by using non-compatible chargers or power sources.",
        ],
      },
      {
        heading: "7. Cancellations, returns and refunds",
        paragraphs: [
          "Our Cancellation & Refund Policy and our Return & Replacement Policy form part of these terms and apply to every order.",
        ],
      },
      {
        heading: "8. Acceptable use of this website",
        paragraphs: [
          "You may browse this website and contact us for genuine enquiries. You may not attempt to disrupt the site, probe it for vulnerabilities, scrape its content at scale, or use it to send unsolicited or misleading messages.",
        ],
      },
      {
        heading: "9. Intellectual property",
        paragraphs: [
          `The ${site.name} name, logo and website content belong to us. Product names and brand logos belong to their respective owners.`,
        ],
      },
      {
        heading: "10. Limitation of liability",
        paragraphs: [
          "To the extent permitted by law, we are not liable for indirect or consequential loss arising from a purchase. Our total liability for any order is limited to the amount you paid for that order.",
        ],
      },
      {
        heading: "11. Governing law and disputes",
        paragraphs: [
          `These terms are governed by the laws of India. Any dispute is subject to the jurisdiction of the courts at ${site.legal.jurisdiction}. We encourage you to contact us first, as most issues are resolved quickly over WhatsApp or phone.`,
        ],
      },
      {
        heading: "12. Changes to these terms",
        paragraphs: ["We may revise these terms at any time. The version published on this page applies to orders placed after it was last updated."],
      },
      {
        heading: "13. Contact",
        paragraphs: [contactLine],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/shipping-policy",
    title: "Shipping & Delivery Policy",
    summary: "How and when your accessories are packed, dispatched and delivered.",
    callout:
      "Orders are dispatched within 1 to 2 working days and usually delivered within 3 to 7 working days across India. Store pickup in Pandharpur is free and usually ready the same day.",
    sections: [
      {
        heading: "1. Delivery options",
        bullets: [
          "Home delivery to serviceable PIN codes across India through courier partners.",
          `Free store pickup from ${addressLines().join(", ")}, during business hours (${site.contact.hours}).`,
        ],
      },
      {
        heading: "2. Dispatch time",
        paragraphs: [
          "Orders are packed and handed to the courier within 1 to 2 working days after the order is confirmed and payment is received. Orders confirmed on a Sunday or public holiday are dispatched from the next working day.",
          "Store pickup orders are usually ready the same day; we message you when your order is ready.",
        ],
      },
      {
        heading: "3. Delivery time",
        paragraphs: [
          "After dispatch, delivery usually takes 3 to 7 working days depending on your location. Deliveries within Pandharpur and nearby areas are usually faster. Remote areas may take longer; we will tell you before you pay if your PIN code needs more time.",
        ],
      },
      {
        heading: "4. Shipping charges",
        paragraphs: [
          "Any delivery charge for your order is shown to you before payment and is never added after payment. Store pickup is free.",
        ],
      },
      {
        heading: "5. Tracking",
        paragraphs: ["Once your order is dispatched, we share the courier name and tracking number on WhatsApp or SMS."],
      },
      {
        heading: "6. Delays",
        paragraphs: [
          "Deliveries can occasionally be delayed by courier network issues, weather or local disruptions. We will inform you if we become aware of a delay. If your order has not arrived within 10 working days of dispatch, contact us and we will either trace it with the courier or offer a replacement or full refund.",
        ],
      },
      {
        heading: "7. Failed delivery",
        paragraphs: [
          "If the courier cannot deliver because the address was incomplete or nobody was available after their attempts, the parcel is returned to us. We will contact you to arrange re-delivery or a refund as per our Cancellation & Refund Policy.",
        ],
      },
      {
        heading: "8. Damaged parcel",
        paragraphs: [
          "Please check the parcel at delivery. If the outer packaging is visibly damaged or tampered with, you may refuse it, or accept it and inform us within 48 hours with photos of the packaging and product. We recommend recording a short unboxing video. Transit-damaged items are replaced or refunded under our Return & Replacement Policy.",
        ],
      },
      {
        heading: "9. Contact",
        paragraphs: [contactLine],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/cancellation-refund-policy",
    title: "Cancellation & Refund Policy",
    summary: "When you can cancel an order, and how and when refunds reach you.",
    callout:
      "Cancel any time before dispatch for a full refund. Approved refunds are initiated within 2 working days and usually reach your original payment method within 5 to 7 working days.",
    sections: [
      {
        heading: "1. Cancelling before dispatch",
        paragraphs: [
          "You can cancel your order at any time before it is dispatched (or before you collect it, for store pickup) by messaging or calling us. You will receive a full refund of the amount paid, including any delivery charge.",
        ],
      },
      {
        heading: "2. Cancelling after dispatch",
        paragraphs: [
          "Once an order has been handed to the courier it cannot be cancelled. You can refuse the parcel at delivery; once it comes back to us unused and in its original packaging, we refund the product price. The delivery charge, if any, is not refunded in this case.",
          "If you received a damaged, defective or wrong product, our Return & Replacement Policy applies instead and you receive a full refund or replacement.",
        ],
      },
      {
        heading: "3. Cancellation by us",
        paragraphs: [
          "We may cancel an order if the product is out of stock, the price was listed in error, or we cannot deliver to your PIN code. In that case you receive a full refund.",
        ],
      },
      {
        heading: "4. Refund timelines",
        bullets: [
          "Refunds are initiated within 2 working days of the cancellation being accepted, or of the returned product reaching us and passing inspection.",
          "Online payments are refunded to the original payment method (UPI, card, net banking or wallet). The amount usually reflects in 5 to 7 working days, depending on your bank.",
          "Cash payments at the store are refunded in cash at the store, or by UPI / bank transfer to an account you provide, within 5 to 7 working days.",
        ],
      },
      {
        heading: "5. Not refundable",
        bullets: [
          "Products damaged after delivery through misuse, drops or liquid.",
          "Products returned without their original packaging, accessories or bill, except where the item arrived damaged.",
          "Opened earbuds and earphones, for hygiene reasons, unless they are defective or the wrong item was sent.",
        ],
      },
      {
        heading: "6. How to request a cancellation or refund",
        paragraphs: [`Message us on WhatsApp or call ${site.contact.phone} with your name and order details. ${contactLine}`],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/return-policy",
    title: "Return & Replacement Policy",
    summary: "What to do if you receive a damaged, defective or wrong product.",
    callout: "Report a damaged, defective or wrong item within 7 days of delivery and we will replace it or give you a full refund.",
    sections: [
      {
        heading: "1. What is covered",
        paragraphs: ["You can request a replacement or a full refund within 7 days of delivery (or store pickup) if:"],
        bullets: [
          "The product arrived physically damaged.",
          "The product does not work or has a manufacturing defect.",
          "You received a different product, model or colour from what you ordered.",
          "The product is not compatible with the phone model you told us before purchase.",
        ],
      },
      {
        heading: "2. How to request a return",
        bullets: [
          `Message us on WhatsApp (${site.contact.whatsapp}) within 7 days of delivery with your name, order details and clear photos or a short video of the issue.`,
          "We reply within 1 working day and arrange a courier pickup or ask you to return the item to our store.",
          "The product must be returned with its original box, all accessories and the bill.",
        ],
      },
      {
        heading: "3. Return shipping",
        paragraphs: [
          "For damaged, defective or wrong items, we bear the return shipping cost. If a courier pickup is not available at your PIN code, we will reimburse the reasonable cost of sending the item back to us.",
        ],
      },
      {
        heading: "4. Replacement or refund",
        paragraphs: [
          "Once we receive the item and confirm the issue (usually within 2 working days), we dispatch a replacement, or, if you prefer or the item is out of stock, refund the full amount as per our Cancellation & Refund Policy.",
        ],
      },
      {
        heading: "5. Not covered",
        bullets: [
          "Change of mind on opened products.",
          "Opened earbuds and earphones, for hygiene reasons, unless defective or the wrong item was sent.",
          "Damage caused after delivery: drops, liquid, misuse or unauthorised repair.",
          "Requests made more than 7 days after delivery. After 7 days, defects are handled under the brand warranty, where one applies, and we help you with the claim.",
        ],
      },
      {
        heading: "6. Contact",
        paragraphs: [contactLine],
      },
    ],
  },
];

export type PolicySlug =
  | "/privacy-policy"
  | "/terms-and-conditions"
  | "/shipping-policy"
  | "/cancellation-refund-policy"
  | "/return-policy";

export function getPolicy(slug: PolicySlug): Policy {
  const found = policies.find((policy) => policy.slug === slug);
  if (!found) {
    throw new Error(`Unknown policy slug: ${slug}`);
  }
  return found;
}

/** Display date string, or null when the owner has not set one. */
export function updatedLabel(): string | null {
  if (!updated) return null;
  const parsed = new Date(`${updated}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
