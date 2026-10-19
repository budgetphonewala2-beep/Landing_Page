import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";

const policy = getPolicy("/return-policy");

export const metadata: Metadata = {
  title: policy.title,
  description: policy.summary,
  alternates: { canonical: "/return-policy" },
  robots: { index: true, follow: true },
};

export default function ReturnPolicyPage() {
  return <PolicyLayout policy={policy} />;
}
