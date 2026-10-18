import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";
import { site } from "@/config/site";

const policy = getPolicy("/return-policy");

export const metadata: Metadata = {
  title: "Return Policy",
  description: `What to do if the second-hand smartphone you received from ${site.name} is not in the condition we described.`,
  alternates: { canonical: "/return-policy" },
  robots: { index: true, follow: true },
};

export default function ReturnPolicyPage() {
  return <PolicyLayout policy={policy} />;
}
