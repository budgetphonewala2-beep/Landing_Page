import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { getPolicy } from "@/content/policies";
import { site } from "@/config/site";

const policy = getPolicy("/terms-and-conditions");

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that apply when you browse this website or place an order with ${site.name} for a second-hand smartphone.`,
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <PolicyLayout policy={policy} />;
}
