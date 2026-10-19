import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";

const policy = getPolicy("/cancellation-refund-policy");

export const metadata: Metadata = {
  title: policy.title,
  description: policy.summary,
  alternates: { canonical: "/cancellation-refund-policy" },
  robots: { index: true, follow: true },
};

export default function CancellationRefundPage() {
  return <PolicyLayout policy={policy} />;
}
