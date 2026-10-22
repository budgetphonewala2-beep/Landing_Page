import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Delete your account",
  description: "How to delete your BudgetPhonewala app account and the personal data linked to it.",
  alternates: { canonical: "/delete-account" },
  robots: { index: true, follow: true },
};

const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent("Delete my BudgetPhonewala account")}&body=${encodeURIComponent(
  "Please delete my BudgetPhonewala app account.\n\nEmail address of the account: \nName on the account: ",
)}`;

// Web resource for account deletion (required by Google Play): explains how to delete a BudgetPhonewala app account
// without the app, what is deleted and what is kept.
export default function DeleteAccountPage() {
  return (
    <article className="container policy">
      <header className="policy__header">
        <span className="eyebrow">BudgetPhonewala app</span>
        <h1 className="policy__title">Delete your account</h1>
        <p className="policy__summary">
          This page is for customers of the BudgetPhonewala mobile app, published by {site.name}. You can ask us to delete
          your account and the personal data linked to it, with or without the app.
        </p>
      </header>

      <section className="policy__section">
        <h2 className="policy__heading">Option 1: in the app</h2>
        <ol>
          <li>Open the BudgetPhonewala app and sign in.</li>
          <li>Go to Profile &gt; Privacy and data.</li>
          <li>Under &quot;Delete my account&quot;, tap Request account deletion and confirm.</li>
        </ol>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Option 2: without the app</h2>
        <p>
          Send an email to <a href={mailto}>{site.contact.email}</a> from the email address you used for your account, with
          the subject &quot;Delete my BudgetPhonewala account&quot;. If you cannot use that email address, call or WhatsApp
          us on {site.contact.phone} and we will confirm that the account is yours before deleting it.
        </p>
        <p>
          <a href={mailto} className="btn btn--primary">Email a deletion request</a>
        </p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">What is deleted</h2>
        <ul>
          <li>Your name, email address, mobile number and saved delivery addresses.</li>
          <li>Your wishlist, cart and notification settings.</li>
          <li>Photos and details you sent with sell or exchange enquiries.</li>
          <li>Your sign-in, including the link to your Google account. The account cannot be used again.</li>
        </ul>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">What is kept, and for how long</h2>
        <p>
          Order, payment and invoice records have to be kept for accounting and tax purposes for as long as Indian law
          requires (generally up to 8 years). They are kept without your name and contact details wherever the law allows.
          App error reports are deleted automatically after 90 days.
        </p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">How long it takes</h2>
        <p>
          We complete deletion requests within 30 days, usually much sooner. If you have an open order, return or warranty
          claim, we may contact you to settle it first.
        </p>
      </section>

      <nav className="policy__links" aria-label="Related">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/app">About the app</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
    </article>
  );
}
