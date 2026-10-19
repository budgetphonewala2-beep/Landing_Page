import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

/** The round badge artwork, cropped to its circle (see .logo-mark in globals.css). */
export function LogoMark({ priority = false }: { priority?: boolean }) {
  return (
    <span className="logo-mark">
      <Image
        src={site.logoPath}
        alt=""
        width={1320}
        height={1279}
        priority={priority}
        sizes="(max-width: 900px) 64vw, 260px"
        className="logo-mark__img"
      />
    </span>
  );
}

/**
 * Brand lockup: badge plus a live-text wordmark, so the store name stays
 * readable at header size where the badge lettering is too small.
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
    <Link href={href} className="brand" aria-label={`${site.name} home`}>
      <LogoMark priority={priority} />
      <span className="brand__text">
        <span className="brand__name">BudgetPhoneWala</span>
        <span className="brand__sub">{site.logoSubline}</span>
      </span>
    </Link>
  );
}
