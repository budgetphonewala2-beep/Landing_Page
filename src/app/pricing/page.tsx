import type { Metadata } from "next";
import Link from "next/link";
import { CatalogueNote, ProductGrid } from "@/components/ProductGrid";
import { ArrowRightIcon, MessageIcon } from "@/components/Icons";
import { formatINR, priceRange, products } from "@/config/products";
import { hasWhatsApp, site, whatsappHref } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Current prices for second-hand smartphones sold by ${site.name}, including how delivery and any additional charges are handled.`,
  alternates: { canonical: "/pricing" },
  robots: { index: true, follow: true },
};

export default function PricingPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow">Pricing details</span>
          <h1 className="hero__title">
            What our second-hand phones cost
          </h1>
          <p className="hero__lede">
            Prices are quoted per individual unit, in Indian Rupees, and cover
            the exact phone described to you — grade, storage variant and known
            issues included.
          </p>

          {priceRange ? (
            <ul className="hero__meta">
              <li className="pill">
                Listed prices: {formatINR(priceRange.min)}
                {priceRange.max > priceRange.min ? ` – ${formatINR(priceRange.max)}` : ""}
              </li>
              <li className="pill">
                {products.filter((product) => product.available).length} unit(s) in stock
              </li>
            </ul>
          ) : null}

          <div className="btn-row">
            <Link href="#list" className="btn btn--primary">
              See the price list
              <ArrowRightIcon />
            </Link>
            <Link href="/#contact" className="btn btn--secondary">
              <MessageIcon />
              Ask for a quote
            </Link>
          </div>

          <p className="hero__note">
            No payment is collected on this website. Orders are confirmed with
            you directly, and any delivery or handling charge is disclosed
            before you pay.
          </p>
        </div>
      </section>

      <section id="list" className="section" aria-labelledby="list-title">
        <div className="container">
          <div className="section__head">
            <h2 id="list-title" className="section__title">
              Current listings
            </h2>
            <CatalogueNote />
          </div>

          <ProductGrid />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="how-price-title">
        <div className="container">
          <div className="section__head">
            <h2 id="how-price-title" className="section__title">
              How our pricing works
            </h2>
          </div>

          <div className="grid grid--features">
            <article className="feature">
              <h3 className="feature__title">Priced per unit</h3>
              <p className="feature__text">
                Second-hand phones are not identical, so each unit is priced on
                its own condition, storage variant and battery health rather
                than on the model name alone.
              </p>
            </article>

            <article className="feature">
              <h3 className="feature__title">Quoted price is final</h3>
              <p className="feature__text">
                The price we quote is the price you pay for the described phone.
                Any delivery or handling charge is told to you before payment,
                never added afterwards.
              </p>
            </article>

            <article className="feature">
              <h3 className="feature__title">
                Invoice for every purchase
              </h3>
              <p className="feature__text">
                A proper bill or invoice is issued with each order, showing the
                unit, the agreed price and the charges that apply.
              </p>
            </article>
          </div>

          <div className="btn-row">
            {hasWhatsApp && (
              <a
                href={whatsappHref(
                  site.contact.whatsapp,
                  "Hi BudgetPhoneWala, please share the second-hand phones you currently have in stock along with your prices.",
                )}
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageIcon />
                Get today&apos;s prices on WhatsApp
              </a>
            )}
            <Link href="/#contact" className="btn btn--secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
