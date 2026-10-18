import { site } from "@/config/site";

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
 * 2. Lines marked `TODO(confirm)` are statements the owner must verify or
 *    replace before publishing. They are written in a deliberately neutral,
 *    non-committal form so that nothing false is published in the meantime.
 * 3. Never publish a delivery timeline, fee, warranty period, refund window or
 *    turnaround number that the business has not actually agreed to.
 * 4. Update `site.legal.policiesUpdatedOn` in `src/config/site.ts` whenever
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

export const policies: Policy[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "/privacy-policy",
    title: "Privacy Policy",
    summary:
      "How BudgetPhoneWala collects, uses and protects the personal information you share with us when you enquire about or purchase a second-hand smartphone.",
    callout:
      "This website does not have user accounts, does not accept payments on this page, and does not use advertising or third-party tracking cookies.",
    sections: [
      {
        heading: "1. Information we collect",
        paragraphs: [
          "We collect only the information that is needed to sell you a phone and to deliver it. Depending on how you contact us, this can include:",
        ],
        bullets: [
          "Your name.",
          "Your phone number and email address.",
          "Your delivery address, including city, state and PIN code.",
          "The details of the order — which model you asked about, the amount discussed, and any condition notes you shared.",
          "Basic technical information such as your IP address and browser type, which our web host may record in server logs for security and troubleshooting.",
        ],
      },
      {
        heading: "2. How we use your information",
        paragraphs: [
          "We use your information to reply to your enquiry, confirm and process your order, arrange delivery, provide after-sales support, and issue your invoice.",
          "We may also use your contact details to inform you about the specific order or product you have asked about. We do not sell your personal information to third parties.",
        ],
      },
      {
        heading: "3. Sharing your information",
        paragraphs: [
          "We share your details only where it is necessary to fulfil your order or meet a legal obligation:",
        ],
        bullets: [
          "With courier or delivery partners, so that your phone and invoice can reach you.",
          "With our payment provider, to the extent required to process and confirm a payment.",
          "With government or law-enforcement authorities, where we are legally required to do so.",
        ],
      },
      {
        heading: "4. Cookies and analytics",
        paragraphs: [
          "This website is a simple informational site. It does not set advertising cookies and does not run behavioural advertising or cross-site tracking.",
          // TODO(confirm): if you later add analytics, name the provider here and
          // state what it collects.
        ],
      },
      {
        heading: "5. Data retention",
        paragraphs: [
          "We keep your order and contact records for as long as needed to handle your order, provide after-sales support, and meet tax and accounting record-keeping requirements.",
          // TODO(confirm): state an exact retention period if you have one.
        ],
      },
      {
        heading: "6. Your rights",
        paragraphs: [
          "You can ask us for a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it where we are not legally required to keep it. To make any of these requests, contact us using the details on our Contact section.",
        ],
      },
      {
        heading: "7. Security",
        paragraphs: [
          "We take reasonable care to protect your information, but no method of transmission over the internet or storage is completely secure. Please do not send sensitive documents over WhatsApp unless we specifically ask you to.",
        ],
      },
      {
        heading: "8. Changes to this policy",
        paragraphs: [
          "We may update this policy from time to time. The date shown at the top of this page reflects the most recent version.",
        ],
      },
      {
        heading: "9. Contact",
        paragraphs: [
          "For any privacy-related question, contact us using the details listed on our Contact section and we will respond.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/terms-and-conditions",
    title: "Terms & Conditions",
    summary:
      "The terms that apply when you browse this website, enquire about a phone, or place an order with BudgetPhoneWala.",
    sections: [
      {
        heading: "1. About these terms",
        paragraphs: [
          `These Terms & Conditions govern your use of this website and any order you place with ${site.name}. By browsing this site, or by placing an order with us, you agree to these terms.`,
          // TODO(confirm): review the wording with the owner before publishing.
        ],
      },
      {
        heading: "2. Nature of the products",
        paragraphs: [
          "All phones sold by us are second-hand or pre-owned devices. They are not brand new products, and they are sold as-is in the condition described to you before purchase.",
          "Each phone's grade, storage variant, battery health and any known defects are shared with you before payment. Please read those details carefully — they are the description of the exact unit you are buying.",
        ],
      },
      {
        heading: "3. Orders and confirmation",
        paragraphs: [
          "An order becomes final once we confirm it to you on WhatsApp or by phone and you have made full payment. Availability is confirmed at the time of order, because second-hand stock changes quickly.",
          "If any listing is sold or withdrawn before your order is confirmed, we will inform you and any amount paid will be refunded in full.",
        ],
      },
      {
        heading: "4. Pricing and payment",
        paragraphs: [
          "Prices are shown in Indian Rupees (₹) and apply to the specific unit described. The quoted price is the price you pay.",
          // TODO(confirm): state clearly whether any delivery or handling charge applies.
          "We will tell you before payment if any additional charge applies.",
        ],
      },
      {
        heading: "5. Delivery",
        paragraphs: [
          "Delivery timelines, available courier options and any delivery charges are confirmed with you directly at the time of your order.",
          // TODO(confirm): add your real delivery window and courier names here
          // once agreed. Do not publish a timeline you cannot meet.
          "Our Shipping Policy forms part of these terms.",
        ],
      },
      {
        heading: "6. Condition reporting",
        paragraphs: [
          "Because these are pre-owned devices, normal signs of use — light scratches, small dents, minor screen marks, or reduced battery life — are expected. Any defect beyond the disclosed description is covered by our Return Policy.",
        ],
      },
      {
        heading: "7. Warranty",
        paragraphs: [
          // TODO(confirm): this is deliberately conservative. If you DO offer any
          // warranty, state the exact period and what it covers, then replace this paragraph.
          "These phones are sold without a manufacturer warranty unless we have explicitly told you otherwise in writing for a specific unit. Any warranty we do provide is limited to the written terms shared with you at the time of that order.",
        ],
      },
      {
        heading: "8. Returns, cancellations and refunds",
        paragraphs: [
          "Our Return Policy and Cancellation & Refund Policy form part of these terms and apply to every order.",
        ],
      },
      {
        heading: "9. Acceptable use of this website",
        paragraphs: [
          "You may browse this website and contact us for legitimate enquiries. You may not attempt to disrupt the site, probe it for vulnerabilities, scrape its content at scale, or use it to send unsolicited or misleading messages.",
        ],
      },
      {
        heading: "10. Intellectual property",
        paragraphs: [
          `The ${site.name} name, logo and website content belong to ${site.name}. You may view and share our pages for personal, non-commercial use. You may not reproduce them commercially without our written permission.`,
        ],
      },
      {
        heading: "11. Limitation of liability",
        paragraphs: [
          "To the extent permitted by law, we are not liable for indirect or consequential loss arising from a purchase, including loss of data stored on a device. Our liability for any order is limited to the amount you paid for that order.",
        ],
      },
      {
        heading: "12. Governing law",
        paragraphs: [
          // TODO(confirm): add your city/state if you want the jurisdiction stated.
          "These terms are governed by the laws of India.",
        ],
      },
      {
        heading: "13. Changes to these terms",
        paragraphs: [
          "We may revise these terms at any time. The version published on this page applies to orders confirmed after it was last updated.",
        ],
      },
      {
        heading: "14. Contact",
        paragraphs: [
          "Questions about these terms can be sent to us using the details on our Contact section.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/shipping-policy",
    title: "Shipping Policy",
    summary:
      "How your second-hand smartphone is packed, dispatched and delivered to you.",
    sections: [
      {
        heading: "1. Order confirmation before dispatch",
        paragraphs: [
          "Every order is confirmed personally with you before dispatch. We share the details of the specific unit, the agreed price, and the delivery arrangements on WhatsApp or by phone. We do not dispatch an unconfirmed order.",
        ],
      },
      {
        heading: "2. Delivery timelines",
        paragraphs: [
          "The delivery window depends on your location and the courier available for it. The expected timeline for your specific order is confirmed with you in writing before dispatch.",
          // TODO(confirm): replace the paragraph above with your real committed
          // windows, e.g. "Metro cities: 2–4 working days. Rest of India: 4–7
          // working days." Only publish numbers you can consistently meet.
        ],
      },
      {
        heading: "3. Delivery coverage",
        paragraphs: [
          "We deliver to serviceable PIN codes across India.",
          // TODO(confirm): list any states or regions you genuinely cannot serve.
        ],
      },
      {
        heading: "4. Shipping charges",
        paragraphs: [
          // TODO(confirm): state your real shipping charge policy. Do not publish
          // "free shipping" unless it is true for every order.
          "Any shipping or handling charge applicable to your order is disclosed to you before payment. It is never added to the agreed price after payment.",
        ],
      },
      {
        heading: "5. Packing and safety",
        paragraphs: [
          "To reduce the risk of transit damage, your phone is packed with protective material before handing it to the courier.",
          // TODO(confirm): describe your actual packing method (bubble wrap, rigid
          // box, screen guard, etc.) once you have a standard packing routine.
        ],
      },
      {
        heading: "6. Tracking",
        paragraphs: [
          "A tracking number is shared with you once the parcel is picked up, where the courier provides one.",
          // TODO(confirm): name the courier(s) you actually use if you want to.
        ],
      },
      {
        heading: "7. Delays",
        paragraphs: [
          "Occasionally, deliveries are delayed for reasons outside our control, such as courier network issues, weather, or service disruptions in the destination area. We will inform you as soon as we are aware of a delay.",
          "If tracking shows that a parcel has not moved for several working days, contact us and we will follow up with the courier.",
        ],
      },
      {
        heading: "8. Failed delivery attempts",
        paragraphs: [
          "If a delivery attempt fails because the recipient was unavailable, the courier may attempt delivery again or return the parcel to us. Any re-delivery or return-related cost, if applicable, is communicated to you before we proceed.",
        ],
      },
      {
        heading: "9. Damage or loss in transit",
        paragraphs: [
          "If your phone arrives damaged or the parcel is lost in transit, contact us immediately with photographs of the packaging and the device, and with your tracking details.",
          "We will investigate with the courier and take forward a claim. Resolution timelines depend on the courier's investigation.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/cancellation-refund-policy",
    title: "Cancellation & Refund Policy",
    summary:
      "When you can cancel an order, when you cannot, and how any refund is returned to you.",
    sections: [
      {
        heading: "1. Cancellations before dispatch",
        paragraphs: [
          "You may cancel an order at any time before it is dispatched, by contacting us on WhatsApp or by phone.",
          "If you cancel before dispatch, any amount you have paid is refunded in full.",
          // TODO(confirm): confirm you are able to honour a cancellation request
          // that arrives right up to the moment of handover to the courier.
        ],
      },
      {
        heading: "2. Cancellations after dispatch",
        paragraphs: [
          "Once an order has been handed to the courier, we can no longer cancel it before delivery. If you still want to cancel after dispatch, let us know immediately — we will try to have the parcel stopped or recalled, but this depends on the courier and cannot be guaranteed.",
          // TODO(confirm): state whether you offer a restocking or recall fee.
        ],
      },
      {
        heading: "3. Order refused at delivery",
        paragraphs: [
          "If you refuse a delivery, the courier will return the parcel to us. Once the returned phone has been received and checked, we will process the refund as described below.",
          "Return shipping costs in this situation are borne by the customer.",
          // TODO(confirm): confirm the above cost position.
        ],
      },
      {
        heading: "4. Non-delivery",
        paragraphs: [
          "If a confirmed order cannot be delivered, we will contact you. Where we cannot deliver, your payment is refunded in full.",
        ],
      },
      {
        heading: "5. How refunds are processed",
        paragraphs: [
          "Approved refunds are returned to the original payment method used for the order.",
          // TODO(confirm): confirm the refund turnaround time below before publishing.
          "The time it takes for the amount to reflect in your account depends on your bank or payment provider and is usually a few working days after we initiate the refund.",
          "For orders paid by cash, any refund is settled by bank transfer to an account you provide. Bank charges, if any, are deducted as per your bank's rules.",
          // TODO(confirm): confirm the cash-refund method above.
        ],
      },
      {
        heading: "6. Refunds for genuine problems",
        paragraphs: [
          "If a delivered phone has a defect that we did not disclose before the sale, or is materially different from what was described, our Return Policy applies and any refund due is processed after we receive and inspect the unit.",
        ],
      },
      {
        heading: "7. Non-refundable situations",
        paragraphs: [
          "Please note that a refund is generally not available for:",
        ],
        bullets: [
          "Signs of normal use on a second-hand device, such as light scratches, minor dents or reduced battery life, where these were disclosed before purchase.",
          "Issues that arise from software updates, third-party apps, or modifications made after delivery.",
          "Physical or liquid damage caused after delivery.",
          "A change of mind where the device has already been delivered and shows no disclosed-condition fault.",
        ],
      },
      {
        heading: "8. Chargebacks",
        paragraphs: [
          "If you raise a dispute with your bank or card issuer directly, we will still cooperate fully by sharing your order records and the condition details we shared with you at the time of sale.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "/return-policy",
    title: "Return Policy",
    summary:
      "What to do if the phone you received is not in the condition we described.",
    sections: [
      {
        heading: "1. Our commitment",
        paragraphs: [
          "We describe every phone honestly before you pay. If the device you receive does not match that description, we will make it right under this policy.",
        ],
      },
      {
        heading: "2. Reporting an issue",
        paragraphs: [
          "If something is wrong with your phone, contact us on WhatsApp or by phone as soon as you notice it, and ideally within a short period of delivery.",
          // TODO(confirm): set a concrete reporting window (e.g. 7 days from
          // delivery) so customers know exactly what to expect.
          "Please send clear photographs or a short video of the issue, along with your order details. It helps us resolve things much faster.",
        ],
      },
      {
        heading: "3. What is covered",
        paragraphs: [
          "This policy covers faults that were not disclosed to you before purchase, including:",
        ],
        bullets: [
          "A device that powers on or fails to power on when it was described as working.",
          "A screen, camera, speaker, microphone, charging port, button or network function that is not working, and was not disclosed.",
          "A device that is a different model, storage variant, or a materially different unit from the one you were shown and agreed to buy.",
        ],
      },
      {
        heading: "4. What is not covered",
        paragraphs: [
          "These are pre-owned devices, so the following are not treated as faults under this policy:",
        ],
        bullets: [
          "Light scratches, minor dents, or small marks on the body or screen that were disclosed before purchase.",
          "Reduced battery capacity, which is inherent to a used battery and was disclosed as a battery health figure.",
          "Minor differences in cosmetic appearance from the listing photographs.",
          "Software, app, or network issues caused by third-party software or account settings.",
          "Damage arising after delivery, including accidental drops, liquid damage, or unauthorised repair.",
        ],
      },
      {
        heading: "5. How a return is processed",
        paragraphs: [
          "Once we accept a return, we will agree a return method and a pickup or shipping arrangement with you.",
          "The device must be returned with its accessories, box, and the invoice we supplied, in the same condition as it was received.",
          "The refund is initiated after we receive the device and verify that its condition matches what we shipped.",
          // TODO(confirm): state who pays return shipping for each case —
          // fault on our side vs. customer remorse.
        ],
      },
      {
        heading: "6. Replacement",
        paragraphs: [
          "Where stock allows, we may offer a replacement unit with similar or equivalent specification instead of a refund. If you would prefer a refund, tell us and we will process it instead.",
          // TODO(confirm): confirm your replacement policy (e.g. price match, top-up).
        ],
      },
      {
        heading: "7. Inspection",
        paragraphs: [
          "Returned devices are inspected for condition and completeness before a refund or replacement is confirmed. If a returned device shows damage beyond what was reported, we will share photographs with you before any decision is made.",
        ],
      },
      {
        heading: "8. How the refund is paid",
        paragraphs: [
          "Approved refunds are paid to the original payment method. Cash-paid orders are refunded by bank transfer. See our Cancellation & Refund Policy for details.",
        ],
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
