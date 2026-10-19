import type { Metadata } from "next";
import Link from "next/link";
import { CatalogueNote, ProductGrid } from "@/components/ProductGrid";
import { PhoneGrid } from "@/components/PhoneGrid";
import { phonesInStock } from "@/config/phones";
import { InvoiceIcon, TagIcon, TruckIcon } from "@/components/Icons";
import { formatINR, inStock, priceRange } from "@/config/products";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Prices for chargers, cables, earbuds, phone covers, power banks and smartwatches sold by ${site.name}, and how delivery charges are handled.`,
  alternates: { canonical: "/pricing" },
  robots: { index: true, follow: true },
};

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Accessory prices</h1>
          <p className="page-hero__lede">
            Every accessory has one fixed price in Indian Rupees (₹), including
            applicable taxes. The price you see is the price you pay for the item.
            Pre-owned phones are priced individually; ask us on WhatsApp.
            {priceRange
              ? ` Accessory prices range from ${formatINR(priceRange.min)} to ${formatINR(priceRange.max)} across ${inStock.length} products in stock.`
              : ""}
          </p>
        </div>
      </section>

      <section id="list" className="section" aria-labelledby="list-title">
        <div className="container">
          <div className="section__head">
            <h2 id="list-title" className="section__title">
              Price list
            </h2>
            <CatalogueNote />
          </div>
          <ProductGrid />
        </div>
      </section>

      {phonesInStock.length > 0 && (
        <section id="phones" className="section" aria-labelledby="phones-title">
          <div className="container">
            <div className="section__head">
              <h2 id="phones-title" className="section__title">
                Pre-owned phones
              </h2>
              <p className="section__lede">
                Each pre-owned phone is priced on its own model, storage and
                condition. Tap a phone to get its price and full condition on
                WhatsApp before you buy.
              </p>
            </div>
            <PhoneGrid />
          </div>
        </section>
      )}

      <section className="section section--tint" aria-labelledby="how-price-title">
        <div className="container">
          <div className="section__head">
            <h2 id="how-price-title" className="section__title">
              How pricing and payment work
            </h2>
          </div>

          <ul className="icon-list icon-list--3">
            <li className="icon-list__item">
              <span className="icon-list__icon">
                <TagIcon size={22} />
              </span>
              <div>
                <h3 className="icon-list__title">Fixed price per product</h3>
                <p className="icon-list__text">
                  Each accessory has one listed price, inclusive of taxes. Our
                  selling price is never higher than the MRP.
                </p>
              </div>
            </li>
            <li className="icon-list__item">
              <span className="icon-list__icon">
                <TruckIcon size={22} />
              </span>
              <div>
                <h3 className="icon-list__title">Delivery charges told upfront</h3>
                <p className="icon-list__text">
                  Store pickup is free. Any delivery charge is shown before you
                  pay. See our <Link href="/shipping-policy">Shipping & Delivery Policy</Link>.
                </p>
              </div>
            </li>
            <li className="icon-list__item">
              <span className="icon-list__icon">
                <InvoiceIcon size={22} />
              </span>
              <div>
                <h3 className="icon-list__title">Payment and bill</h3>
                <p className="icon-list__text">
                  Pay online by UPI, card, net banking or wallet, or in cash at
                  the store. Every order comes with a bill.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
