import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";
import { site } from "@/config/site";

const policy = getPolicy("/shipping-policy");

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: `How ${site.name} packs, dispatches and delivers your second-hand smartphone across India.`,
  alternates: { canonical: "/shipping-policy" },
  robots: { index: true, follow: true },
};

export default function ShippingPolicyPage() {
  return <PolicyLayout policy={policy} />;
}
