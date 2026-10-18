import Link from "next/link";
import { policyLinks, site } from "@/config/site";

export default function NotFound() {
  return (
    <section className="container notfound">
      <div>
        <p className="notfound__code">Error 404</p>
        <h1 className="notfound__title">This page doesn&apos;t exist</h1>
        <p className="notfound__text">
          The page you were looking for has moved or was never here. Head back
          to the homepage to see our second-hand smartphones, or get in touch
          and we&apos;ll point you to the right thing.
        </p>
        <div className="btn-row">
          <Link href="/" className="btn btn--primary">
            Back to homepage
          </Link>
          <Link href="/#contact" className="btn btn--secondary">
            Contact {site.name}
          </Link>
        </div>

        <nav className="policy__links" aria-label="Policies" style={{ justifyContent: "center" }}>
          {policyLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
