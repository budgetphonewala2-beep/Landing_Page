import Link from "next/link";
import { Logo } from "@/components/Logo";
import { addressLines, policyLinks, site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo />
            <p className="footer__about">{site.description}</p>
          </div>

          <div>
            <h2 className="footer__heading">Company</h2>
            <ul className="footer__list">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/#products">Products</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Policies</h2>
            <ul className="footer__list">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} {site.legalName || site.name}. All rights reserved.
            {site.gstin ? ` GSTIN: ${site.gstin}.` : ""}
          </p>
          <p>
            {addressLines().join(", ")} · {site.contact.phone} · {site.contact.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
