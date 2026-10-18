import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";
import { site } from "@/config/site";

const policy = getPolicy("/cancellation-refund-policy");

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: `When you can cancel an order with ${site.name}, when you cannot, and how any refund is returned to you.`,
  alternates: { canonical: "/cancellation-refund-policy" },
  robots: { index: true, follow: true },
};

export default function CancellationRefundPage() {
  return <PolicyLayout policy={policy} />;
}
