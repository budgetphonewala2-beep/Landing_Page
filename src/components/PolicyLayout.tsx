import Link from "next/link";
import type { Policy } from "@/content/policies";
import { updatedLabel } from "@/content/policies";
import { policyLinks, site } from "@/config/site";

/**
 * Shared shell for all five policy pages so they look and behave identically.
 * Content itself lives in `src/content/policies.ts`.
 */
export function PolicyLayout({ policy }: { policy: Policy }) {
  const updated = updatedLabel();

  return (
    <article className="container policy">
      <header className="policy__header">
        <span className="eyebrow">Legal</span>
        <h1 className="policy__title">{policy.title}</h1>
        <p className="policy__summary">{policy.summary}</p>

        {updated ? (
          <p className="policy__meta">
            Last updated: {updated}
            {site.legal.jurisdiction ? ` · Jurisdiction: ${site.legal.jurisdiction}` : ""}
          </p>
        ) : null}

        {policy.callout ? <p className="policy__callout">{policy.callout}</p> : null}
      </header>

      {policy.sections.map((section) => (
        <section key={section.heading} className="policy__section">
          <h2 className="policy__heading">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <nav className="policy__links" aria-label="Other policies">
        {policyLinks
          .filter((link) => link.href !== policy.slug)
          .map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
      </nav>
    </article>
  );
}
