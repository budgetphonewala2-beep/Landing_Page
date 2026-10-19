import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";

const policy = getPolicy("/terms-and-conditions");

export const metadata: Metadata = {
  title: policy.title,
  description: policy.summary,
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <PolicyLayout policy={policy} />;
}
