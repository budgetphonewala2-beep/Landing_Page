"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/config/site";

/** True when this nav item points at the section currently in view. */
function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo priority />

        <nav className="nav" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav__link"
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/#products" className="btn btn--primary btn--small header__cta">
          See available phones
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle__bars" aria-hidden="true" />
          Menu
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          <ul className="container mobile-nav__list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="mobile-nav__link" onClick={close}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="btn btn--primary btn--block"
                onClick={close}
              >
                Contact {site.name}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
