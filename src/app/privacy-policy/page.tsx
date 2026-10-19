import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";

const policy = getPolicy("/privacy-policy");

export const metadata: Metadata = {
  title: policy.title,
  description: policy.summary,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return <PolicyLayout policy={policy} />;
}
