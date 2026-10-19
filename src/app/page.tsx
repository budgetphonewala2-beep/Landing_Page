import Link from "next/link";
import { CategoryBento } from "@/components/CategoryBento";
import { ContactDetails } from "@/components/ContactDetails";
import { LogoMark } from "@/components/Logo";
import { ProductGrid } from "@/components/ProductGrid";
import {
  ArrowRightIcon,
  ChatIcon,
  ClockIcon,
  InvoiceIcon,
  MessageIcon,
  PhoneIcon,
  PinIcon,
  ReturnIcon,
  SealIcon,
  ShieldCheckIcon,
  StoreIcon,
  TagIcon,
} from "@/components/Icons";
import {
  WHATSAPP_ENQUIRY,
  addressLines,
  hasWhatsApp,
  mapsHref,
  site,
  whatsappHref,
} from "@/config/site";

/** Small icon chosen per highlight, in the order the highlights are listed. */
const HIGHLIGHT_ICONS = [ShieldCheckIcon, PhoneIcon, TagIcon, ChatIcon, InvoiceIcon, ReturnIcon];

const TRUST_POINTS = [
  { icon: SealIcon, text: "Brand-new, sealed products" },
  { icon: TagIcon, text: "Prices include taxes" },
  { icon: InvoiceIcon, text: "Bill with every order" },
  { icon: StoreIcon, text: "Store pickup or delivery" },
];

export default function HomePage() {
  const a = site.contact.address;

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Mobile accessories store in Pandharpur</span>
            <h1 className="hero__title">
              Mobile accessories at an <em>honest price</em>.
            </h1>
            <p className="hero__lede">{site.heroSummary}</p>
            <div className="btn-row">
              <Link href="#products" className="btn btn--primary">
                Shop accessories
                <ArrowRightIcon size={18} />
              </Link>
              {hasWhatsApp && (
                <a
                  href={whatsappHref(site.contact.whatsapp, WHATSAPP_ENQUIRY)}
                  className="btn btn--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageIcon size={18} />
                  Chat on WhatsApp
                </a>
              )}
            </div>
          </div>

          <div className="hero__visual">
            <LogoMark priority />
            <div className="store-card">
              <div className="store-card__row">
                <PinIcon />
                <span>
                  <strong>Visit our store</strong>
                  {a.line1}, {a.city}
                </span>
              </div>
              <div className="store-card__row">
                <ClockIcon />
                <span>
                  <strong>Opening hours</strong>
                  {site.contact.hours}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- trust */}
      <section className="trust" aria-label="What every order includes">
        <ul className="container trust__list">
          {TRUST_POINTS.map(({ icon: Icon, text }) => (
            <li key={text} className="trust__item">
              <Icon size={22} />
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------ categories */}
      <section className="section" aria-labelledby="categories-title">
        <div className="container">
          <div className="section__head reveal">
            <h2 id="categories-title" className="section__title">
              Everything your phone needs
            </h2>
            <p className="section__lede">
              Tell us your phone model and we make sure the accessory fits and
              works with it before you pay.
            </p>
          </div>
          <CategoryBento />
        </div>
      </section>

      {/* -------------------------------------------------------- products */}
      <section id="products" className="section section--tint" aria-labelledby="products-title">
        <div className="container">
          <div className="section__head reveal">
            <h2 id="products-title" className="section__title">
              Products and prices
            </h2>
            <p className="section__lede">
              Prices are in Indian Rupees and include taxes. Order any item on
              WhatsApp, or buy it in person at the store.
            </p>
          </div>
          <ProductGrid />
        </div>
      </section>

      {/* ------------------------------------------------------ why choose */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section__head reveal">
            <h2 id="why-title" className="section__title">
              What you can expect on every order
            </h2>
          </div>
          <ul className="icon-list icon-list--3">
            {site.highlights.map((highlight, index) => {
              const Icon = HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length];
              return (
                <li key={highlight.title} className="icon-list__item reveal">
                  <span className="icon-list__icon">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="icon-list__title">{highlight.title}</h3>
                    <p className="icon-list__text">{highlight.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------- about */}
      <section id="about" className="section section--tint" aria-labelledby="about-title">
        <div className="container">
          <div className="about-block__copy reveal">
            <h2 id="about-title" className="section__title">
              {site.about.heading}
            </h2>
            <div className="section__lede">
              {site.about.paragraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="btn-row">
              <Link href="/about-us" className="btn btn--secondary">
                More about us
              </Link>
            </div>
          </div>

          <dl className="facts">
            <div className="fact reveal">
              <dt className="fact__label">Store</dt>
              <dd className="fact__value">{site.legalName || site.name}</dd>
            </div>
            <div className="fact reveal">
              <dt className="fact__label">Address</dt>
              <dd className="fact__value">{addressLines().join(", ")}</dd>
            </div>
            <div className="fact reveal">
              <dt className="fact__label">Hours</dt>
              <dd className="fact__value">{site.contact.hours}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* --------------------------------------------------------- contact */}
      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact-panel reveal">
            <div>
              <h2 id="contact-title" className="contact-panel__title">
                Visit the store or message us
              </h2>
              <p className="contact-panel__text">
                Send your phone model and the accessory you need. We reply with
                matching products, prices and delivery options.
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
