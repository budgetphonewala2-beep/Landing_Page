import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { MessageIcon, PinIcon } from "@/components/Icons";
import { WHATSAPP_ENQUIRY, hasWhatsApp, mapsHref, site, whatsappHref } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name}: phone, WhatsApp, email and store address in Pandharpur, Maharashtra.`,
  alternates: { canonical: "/contact-us" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Contact us</h1>
          <p className="page-hero__lede">
            For orders, product questions, delivery updates, returns or refunds,
            reach us on any channel below. We usually reply within a few hours
            during business hours.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="details-title">
        <div className="container">
          <div className="contact">
            <div>
              <h2 id="details-title" className="section__title">
                {site.name}
              </h2>
              <p className="section__lede">
                {site.legalName ? `Operated by ${site.legalName}. ` : ""}
                {site.gstin ? `GSTIN: ${site.gstin}. ` : ""}
                For a problem with an order, share your order details and photos
                of the item. Our Return & Replacement Policy and Cancellation &
                Refund Policy explain the timelines.
              </p>
              <div className="btn-row">
                {hasWhatsApp && (
                  <a
                    href={whatsappHref(site.contact.whatsapp, WHATSAPP_ENQUIRY)}
                    className="btn btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageIcon size={18} />
                    Chat on WhatsApp
                  </a>
                )}
                <a href={mapsHref()} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
                  <PinIcon size={18} />
                  Get directions
                </a>
              </div>
            </div>
            <ContactDetails />
          </div>
        </div>
      </section>
    </>
  );
}
