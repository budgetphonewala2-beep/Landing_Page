import type { Metadata } from "next";
import Link from "next/link";
import { CategoryBento } from "@/components/CategoryBento";
import { ArrowRightIcon } from "@/components/Icons";
import { addressLines, site } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name}, a mobile accessories store in Pandharpur, Maharashtra.`,
  alternates: { canonical: "/about-us" },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">{site.about.heading}</h1>
          <p className="page-hero__lede">{site.description}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="story-title">
        <div className="container">
          <div className="about-block__copy">
            <h2 id="story-title" className="section__title">
              Who we are
            </h2>
            <div className="section__lede">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <dl className="facts">
            <div className="fact">
              <dt className="fact__label">Store name</dt>
              <dd className="fact__value">{site.name}</dd>
            </div>
            {site.legalName ? (
              <div className="fact">
                <dt className="fact__label">Legal name</dt>
                <dd className="fact__value">{site.legalName}</dd>
              </div>
            ) : null}
            {site.gstin ? (
              <div className="fact">
                <dt className="fact__label">GSTIN</dt>
                <dd className="fact__value">{site.gstin}</dd>
              </div>
            ) : null}
            <div className="fact">
              <dt className="fact__label">Store address</dt>
              <dd className="fact__value">{addressLines().join(", ")}</dd>
            </div>
            <div className="fact">
              <dt className="fact__label">Hours</dt>
              <dd className="fact__value">{site.contact.hours}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="sell-title">
        <div className="container">
          <div className="section__head">
            <h2 id="sell-title" className="section__title">
              What we sell
            </h2>
          </div>
          <CategoryBento />
          <div className="btn-row">
            <Link href="/#products" className="btn btn--primary">
              Shop accessories
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
