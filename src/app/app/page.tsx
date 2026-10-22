import type { Metadata } from "next";
import Link from "next/link";
import {
  ChatIcon,
  InvoiceIcon,
  MessageIcon,
  PhoneIcon,
  ReturnIcon,
  ShieldCheckIcon,
  TagIcon,
} from "@/components/Icons";
import { WHATSAPP_ENQUIRY, hasWhatsApp, site, whatsappHref } from "@/config/site";

export const metadata: Metadata = {
  title: "BudgetPhonewala app",
  description:
    "The BudgetPhonewala app lets you browse quality-checked pre-owned phones from our Pandharpur store, buy securely, track orders and sell or exchange your old phone.",
  alternates: { canonical: "/app" },
  robots: { index: true, follow: true },
};

/** What the app does, in the order a customer meets it. Keep every line true for the live app. */
const FEATURES = [
  { icon: PhoneIcon, title: "Browse pre-owned phones", body: "See every phone in our store with real photos, price, condition grade, battery health, storage and accessories. No account needed to browse." },
  { icon: TagIcon, title: "Search by budget", body: "Filter by brand, price, storage and condition to find a phone that fits your budget." },
  { icon: ShieldCheckIcon, title: "Buy securely", body: "Sign in with email or Google, add a delivery address and pay online through Razorpay. Prices and delivery charges are calculated by our server and shown before you pay." },
  { icon: InvoiceIcon, title: "Track your orders", body: "Follow each order from confirmation to delivery or store pickup, and see your order history." },
  { icon: ReturnIcon, title: "Returns and warranty", body: "Request a return or a warranty claim in the app and follow its status." },
  { icon: ChatIcon, title: "Sell or exchange your phone", body: "Send the details and photos of your old phone and get an offer from the store." },
];

export default function AppPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">For Android and iPhone</span>
          <h1 className="page-hero__title">The BudgetPhonewala app</h1>
          <p className="page-hero__lede">
            The official app of the BudgetPhonewala store in Pandharpur, Maharashtra. It helps you buy a quality-checked
            pre-owned phone from our store without visiting in person, and sell or exchange the phone you have now.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="container">
          <div className="section__head">
            <h2 id="features-title" className="section__title">What you can do in the app</h2>
          </div>
          <ul className="icon-list icon-list--3">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="icon-list__item">
                <span className="icon-list__icon"><Icon size={22} /></span>
                <div>
                  <h3 className="icon-list__title">{title}</h3>
                  <p className="icon-list__text">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="signin-title">
        <div className="container">
          <div className="about-block__copy">
            <h2 id="signin-title" className="section__title">Sign-in and your data</h2>
            <div className="section__lede">
              <p>
                Browsing the app needs no account. You sign in only to save phones, check out and track your orders. You
                can sign in with your email and a password, or with your Google account.
              </p>
              <p>
                When you use Google sign-in, Google shares your name, email address and profile picture with us. We use
                them only to create your BudgetPhonewala account, sign you in and show your name in the app. We do not
                sell your data, we do not show ads, and card or UPI details are handled by Razorpay and never reach us.
              </p>
              <p>
                You can delete your account at any time in the app (Profile &gt; Privacy and data) or by following the
                steps on our <Link href="/delete-account">Delete your account</Link> page.
              </p>
            </div>
            <div className="btn-row">
              <Link href="/privacy-policy" className="btn btn--secondary">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="btn btn--secondary">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="get-title">
        <div className="container">
          <div className="contact-panel">
            <div>
              <h2 id="get-title" className="contact-panel__title">Getting the app</h2>
              <p className="contact-panel__text">
                The app is in testing on Google Play and will be available to everyone soon. Until then you can see our
                phones and order on WhatsApp or at the store.
              </p>
              <div className="btn-row">
                {hasWhatsApp && (
                  <a href={whatsappHref(site.contact.whatsapp, WHATSAPP_ENQUIRY)} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                    <MessageIcon size={18} />
                    Chat on WhatsApp
                  </a>
                )}
                <Link href="/contact-us" className="btn btn--secondary">Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
