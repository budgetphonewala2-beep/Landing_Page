/**
 * Icon set for the site: Phosphor icons (SSR build, safe in Server and Client
 * Components) with one global size and weight, re-exported under the names the
 * components use.
 */
import type { ComponentProps } from "react";
import {
  ArrowRight,
  ArrowCounterClockwise,
  BatteryChargingVertical,
  ChatCircleText,
  Clock,
  DeviceMobile,
  EnvelopeSimple,
  Headphones,
  List,
  MapPin,
  Phone,
  PlugCharging,
  Receipt,
  SealCheck,
  ShieldCheck,
  Storefront,
  Tag,
  Truck,
  Usb,
  Watch,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react/ssr";

type IconProps = Omit<ComponentProps<typeof Phone>, "ref">;

const base = { size: 20, weight: "regular" as const, "aria-hidden": true };

function make(Icon: typeof Phone) {
  function SiteIcon(props: IconProps) {
    return <Icon {...base} {...props} />;
  }
  return SiteIcon;
}

export const PhoneIcon = make(Phone);
export const MailIcon = make(EnvelopeSimple);
export const MessageIcon = make(WhatsappLogo);
export const PinIcon = make(MapPin);
export const ClockIcon = make(Clock);
export const ShieldCheckIcon = make(ShieldCheck);
export const TagIcon = make(Tag);
export const ChatIcon = make(ChatCircleText);
export const InvoiceIcon = make(Receipt);
export const ReturnIcon = make(ArrowCounterClockwise);
export const ArrowRightIcon = make(ArrowRight);
export const SealIcon = make(SealCheck);
export const StoreIcon = make(Storefront);
export const TruckIcon = make(Truck);
export const MenuIcon = make(List);
export const CloseIcon = make(X);

/** One icon per product category, keyed by the category title in site.ts. */
export const CATEGORY_ICONS: Record<string, typeof PhoneIcon> = {
  Chargers: make(PlugCharging),
  Cables: make(Usb),
  "Earbuds & earphones": make(Headphones),
  "Phone covers": make(DeviceMobile),
  "Power banks": make(BatteryChargingVertical),
  Smartwatches: make(Watch),
};
