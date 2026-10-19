import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";

const policy = getPolicy("/shipping-policy");

export const metadata: Metadata = {
  title: policy.title,
  description: policy.summary,
  alternates: { canonical: "/shipping-policy" },
  robots: { index: true, follow: true },
};

export default function ShippingPolicyPage() {
  return <PolicyLayout policy={policy} />;
}
