import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

/**
 * Brand lockup.
 *
 * The logo artwork already contains the "BUDGETPHONEWALA" wordmark, so only
 * the subline is set as live text next to it — repeating the name would be
 * redundant.
 *
 * `priority` is passed only for the header instance (above the fold).
 */
export function Logo({
  href = "/",
  priority = false,
}: {
  href?: string;
  priority?: boolean;
}) {
  return (
    <Link href={href} className="brand" aria-label={`${site.name} — home`}>
      <Image
        src={site.logoPath}
        alt=""
        width={1320}
        height={1279}
        priority={priority}
        className="brand__logo"
      />
      <span className="brand__sub">{site.logoSubline}</span>
    </Link>
  );
}
