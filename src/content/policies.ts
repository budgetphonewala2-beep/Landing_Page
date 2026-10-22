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
    summary: `How ${site.name} collects, uses and protects your personal information when you use this website, the BudgetPhonewala mobile app, or buy from our store.`,
    callout:
      "We do not sell your personal information, we do not show ads, and we never see or store your card, UPI PIN or net-banking details. You can delete your app account at any time.",
    sections: [
      {
        heading: "1. Who we are and what this policy covers",
        paragraphs: [
          `This policy is published by ${operator}, a mobile phone and accessories store located at ${addressLines().join(", ")}. In this policy, "we", "us" and "our" refer to ${site.name}.`,
          `It covers this website, the BudgetPhonewala mobile app for Android and iOS (the "app"), and orders placed with us on WhatsApp, by phone or at the store.`,
        ],
      },
      {
        heading: "2. Information we collect",
        paragraphs: ["We collect only what we need to sell, deliver and support your purchase:"],
        bullets: [
          "Account details (app): your email address and, if you sign up with email, a password. Passwords are stored only as a salted hash by our authentication provider; we cannot read them.",
          "Google sign-in (app): if you choose \"Continue with Google\", Google shares your name, email address and profile picture with us. We do not receive your Google password or any other data from your Google account.",
          "Profile and delivery details: your name, mobile number and the delivery addresses you save.",
          "Orders and payments: the phones or accessories you order, prices, delivery or pickup choice, order status, payment status and the payment reference.",
          "Cart, wishlist and notification preferences you set in the app.",
          "Sell or exchange enquiries: the details of the phone you want to sell or exchange, the photos you choose to attach, and the offers we make.",
          "Warranty and return requests: what you tell us about a problem and our replies.",
          "App error reports: if the app hits an unexpected error it sends a short report with the app version, platform (Android or iOS), the screen or action that failed and a technical message. Emails, tokens and long numbers are removed before the report is stored.",
          "Basic technical information such as your IP address and browser type, which our hosting providers may record in server logs for security and troubleshooting.",
        ],
      },
      {
        heading: "3. What we do not collect",
        bullets: [
          "We do not collect your precise location, contacts, SMS, call history or files.",
          "The app asks for access to your photos or camera only when you choose to attach a photo to a sell or exchange enquiry.",
          "We do not use advertising IDs, show ads, or track you across other apps or websites.",
        ],
      },
      {
        heading: "4. How we use your information",
        bullets: [
          "To create and secure your account and keep you signed in.",
          "To process, deliver and support your orders, returns, refunds and warranty claims, and to issue your bill.",
          "To reply to your enquiries and make offers on phones you want to sell or exchange.",
          "To send you updates about your own orders and requests. We send marketing messages only if you turn them on, and you can turn them off in the app (Profile > Notification preferences).",
          "To prevent fraud and misuse, for example by limiting repeated requests.",
          "To find and fix errors in the app.",
        ],
      },
      {
        heading: "5. Google user data",
        paragraphs: [
          "Information received from Google sign-in (name, email address and profile picture) is used only to create your BudgetPhonewala account, sign you in and show your name in the app. It is not sold, not used for advertising, not shared with anyone except the service providers listed below that host our app, and not used for any other purpose.",
          "Our use of information received from Google APIs follows the Google API Services User Data Policy, including the Limited Use requirements.",
        ],
      },
      {
        heading: "6. Payments",
        paragraphs: [
          "Online payments are processed by Razorpay on their secure systems. Your card number, CVV, UPI PIN and net-banking password are entered directly with Razorpay and are never shared with or stored by us. We receive only the payment status and a transaction reference. Razorpay may collect payment and device information under its own privacy policy.",
        ],
      },
      {
        heading: "7. Who we share it with",
        paragraphs: ["We do not sell or rent your personal information. We share it only where needed to run the store and the app:"],
        bullets: [
          "Supabase, which hosts our database, sign-in and photo storage (servers in Mumbai, India).",
          "Razorpay, to process payments and refunds.",
          "Google, if you choose Google sign-in.",
          "Courier and delivery partners, who receive your name, address and phone number to deliver your order.",
          "Government or law-enforcement authorities, where we are legally required to do so.",
        ],
      },
      {
        heading: "8. Data retention",
        bullets: [
          "Account, profile and address details are kept while your account is active.",
          "Order, payment and billing records are kept for as long as Indian tax and accounting laws require (generally up to 8 years), including after an account is deleted. In that case they are kept without your name and contact details wherever the law allows.",
          "App error reports are deleted after 90 days.",
          "Enquiries that did not lead to an order are deleted within 12 months.",
        ],
      },
      {
        heading: "9. Your choices and rights",
        bullets: [
          "Access and correction: view and edit your profile and addresses in the app (Profile).",
          "Copy of your data: request it in the app (Profile > Privacy and data) or by contacting us.",
          "Account deletion: delete your account in the app (Profile > Privacy and data) or follow the steps on our Delete your account page. Your name, contact details, addresses, wishlist, cart and enquiry photos are removed or anonymised, and your sign-in is disabled.",
          "Notifications: change them at any time in the app.",
          "We respond to privacy requests within 15 days.",
        ],
      },
      {
        heading: "10. Security",
        paragraphs: [
          "Data is sent over encrypted connections (HTTPS). Access to customer data is restricted so that each customer can see only their own information, and our staff can see only what their role needs. No system is perfectly secure, but we work to protect your information and fix problems promptly.",
        ],
      },
      {
        heading: "11. Children",
        paragraphs: [
          "The app and the store are meant for adults who can enter into a purchase. They are not directed at children under 18, and we do not knowingly collect their information.",
        ],
      },
      {
        heading: "12. Changes to this policy",
        paragraphs: ["We may update this policy from time to time. The date shown at the top of this page reflects the most recent version."],
      },
      {
        heading: "13. Contact",
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
        heading: "3a. The BudgetPhonewala app",
        paragraphs: [
          "You can also browse and buy phones in the BudgetPhonewala mobile app. Browsing needs no account; to save phones, check out or track orders you sign in with email or Google. Keep your sign-in details private and give correct delivery and contact details.",
          "In the app each pre-owned phone is a single unit. When you start checkout the phone is held for you for a short time; if payment is not completed in that time the hold is released. The final price, delivery charge and any discount are calculated by our server and shown before you pay, and an order is confirmed only after your payment is verified (or, for cash on delivery, accepted by the store).",
          "An estimate for a phone you want to sell or exchange is not a final offer. The final offer is made after we inspect the phone.",
          "You can delete your app account at any time, as described in our Privacy Policy.",
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
