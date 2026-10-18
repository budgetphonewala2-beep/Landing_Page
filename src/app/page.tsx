import Link from "next/link";
import { ProductGrid } from "@/components/ProductGrid";
import { ContactDetails } from "@/components/ContactDetails";
import {
  ArrowRightIcon,
  ChatIcon,
  InvoiceIcon,
  MessageIcon,
  PhoneIcon,
  ReturnIcon,
  ShieldCheckIcon,
  SparkIcon,
  TagIcon,
} from "@/components/Icons";
import { hasWhatsApp, site, whatsappHref } from "@/config/site";
import { inStock } from "@/config/products";

/** Small icon chosen per highlight, in the order the highlights are listed. */
const HIGHLIGHT_ICONS = [
  ShieldCheckIcon,
  PhoneIcon,
  TagIcon,
  ChatIcon,
  InvoiceIcon,
  ReturnIcon,
];

const HERO_POINTS = [
  "Second-hand & pre-owned phones",
  "Condition disclosed before payment",
  "GST / tax invoice with every order",
  "Delivery across India",
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow">Second-hand smartphones · {site.country}</span>
          <h1 className="hero__title">
            Quality smartphones at <em>affordable prices</em>
          </h1>
          <p className="hero__lede">{site.heroSummary}</p>

          <ul className="hero__meta">
            {HERO_POINTS.map((point) => (
              <li key={point} className="pill">
                {point}
              </li>
            ))}
          </ul>

          <div className="btn-row">
            <Link href="#products" className="btn btn--primary">
              Explore available phones
              <ArrowRightIcon />
            </Link>
            <Link href="#contact" className="btn btn--secondary">
              <MessageIcon />
              Contact us
            </Link>
          </div>

          <p className="hero__note">
            Stock is limited and changes often — please confirm availability
            before travelling or placing an order.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- about */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container">
          <div className="about">
            <div className="about__body">
              <span className="eyebrow">About us</span>
              <h2 id="about-title" className="section__title">
                {site.about.heading}
              </h2>
              <div className="section__lede about__copy">
                {site.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="about__card">
              <h3 className="about__card-title">How we work</h3>
              <p className="about__card-sub">
                Simple rules, applied to every phone we sell.
              </p>
              <ul className="check-list">
                {site.about.points.map((point) => (
                  <li key={point}>
                    <span className="check-list__icon" aria-hidden="true">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- products */}
      <section
        id="products"
        className="section section--tint"
        aria-labelledby="products-title"
      >
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Products</span>
            <h2 id="products-title" className="section__title">
              Phones we have available right now
            </h2>
            <p className="section__lede">
              Each listing below is an individual second-hand unit. Model,
              storage, grade and price are stated plainly, and the exact unit is
              confirmed with you before payment.
            </p>
          </div>

          <ProductGrid />

          {inStock.length > 0 && (
            <p className="products-footnote">
              Looking for something specific?{" "}
              <Link href="/#contact">Tell us your budget</Link> — we often have
              unlisted units available.
            </p>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------ why choose */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="eyebrow">Why choose us</span>
            <h2 id="why-title" className="section__title">
              Straight answers, because you&apos;re buying a used phone
            </h2>
            <p className="section__lede">
              Buying second-hand should not mean guessing. These are the things
              we commit to on every order.
            </p>
          </div>

          <div className="grid grid--features">
            {site.highlights.map((highlight, index) => {
              const Icon = HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length];
              return (
                <article key={highlight.title} className="feature">
                  <span className="feature__icon">
                    <Icon />
                  </span>
                  <h3 className="feature__title">{highlight.title}</h3>
                  <p className="feature__text">{highlight.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- contact */}
      <section
        id="contact"
        className="section section--tint"
        aria-labelledby="contact-title"
      >
        <div className="container">
          <div className="contact">
            <div>
              <span className="eyebrow">Contact us</span>
              <h2 id="contact-title" className="section__title">
                Talk to us before you buy
              </h2>
              <p className="section__lede">
                The fastest way to get an exact answer is to message us. Send us
                your budget and what you need the phone for, and we will reply
                with the units that actually fit.
              </p>

              <div className="btn-row">
                {hasWhatsApp && (
                  <a
                    href={whatsappHref(
                      site.contact.whatsapp,
                      "Hi BudgetPhoneWala, I would like to know which second-hand smartphones you have available.",
                    )}
                    className="btn btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageIcon />
                    Chat on WhatsApp
                  </a>
                )}
                <Link href="/#products" className="btn btn--secondary">
                  <PhoneIcon />
                  Browse phones
                </Link>
              </div>
            </div>

            <div>
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- cta */}
      <section className="section" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta">
            <span className="eyebrow eyebrow--on-dark">Ready when you are</span>
            <h2 id="cta-title" className="cta__title">
              Tell us your budget. We&apos;ll tell you what we actually have.
            </h2>
            <p className="cta__text">
              No pressure and no exaggerated claims — just the second-hand
              phones currently in our hands, described honestly.
            </p>
            <div className="btn-row">
              <Link href="/#contact" className="btn btn--primary">
                <SparkIcon />
                Get in touch
              </Link>
              <Link href="/pricing" className="btn btn--secondary">
                View pricing details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
