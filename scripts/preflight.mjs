#!/usr/bin/env node
/**
 * Pre-build checklist.
 *
 * Reads src/config/site.ts and src/config/products.ts as plain text and prints
 * everything the owner still needs to fill in. It never fails the build — an
 * incomplete config should not block a deploy, but it MUST be finished before
 * the site is submitted for payment-gateway verification.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteSource = readFileSync(join(root, "src/config/site.ts"), "utf8");
const productsSource = readFileSync(join(root, "src/config/products.ts"), "utf8");
const policiesSource = readFileSync(join(root, "src/content/policies.ts"), "utf8");

const checks = [
  {
    label: "Business email published on /contact-us",
    done: /email:\s*"[^"]+"/.test(siteSource),
    fix: "src/config/site.ts -> contact.email",
  },
  {
    label: "Phone number published on /contact-us",
    done: /phone:\s*"[^"]+"/.test(siteSource),
    fix: "src/config/site.ts -> contact.phone",
  },
  {
    label: "WhatsApp number published on /contact-us",
    done: /whatsapp:\s*"[^"]+"/.test(siteSource),
    fix: "src/config/site.ts -> contact.whatsapp",
  },
  {
    label: "Business address published on /contact-us",
    done: /line1:\s*"[^"]+"/.test(siteSource),
    fix: "src/config/site.ts -> contact.address",
  },
  {
    label: "Business hours published",
    done: /hours:\s*"[^"]+"/.test(siteSource),
    fix: "src/config/site.ts -> contact.hours",
  },
  {
    label: "Policy pages show a 'Last updated' date",
    done: /policiesUpdatedOn:\s*"[^"]+"/.test(siteSource),
    fix: "src/config/site.ts -> legal.policiesUpdatedOn",
  },
  {
    label: "At least one real product is listed with its price",
    done: /^\s*price:\s*[1-9]\d*/m.test(productsSource),
    fix: "src/config/products.ts -> products[]",
  },
  {
    label: "Legal name (as on Razorpay KYC / GST certificate) shown",
    done: /legalName:\s*"[^"]+"/.test(siteSource),
    fix: "src/config/site.ts -> legalName",
  },
  {
    label: "GSTIN shown (if registered)",
    done: /gstin:\s*"[^"]+"/.test(siteSource),
    fix: "src/config/site.ts -> gstin",
  },
  {
    label: "Every TODO(confirm) in the policies has been reviewed",
    done: !/TODO\(confirm\)/.test(policiesSource),
    fix: "src/content/policies.ts",
  },
  {
    label: "Real logo image in place of the 'BPW' text mark",
    done: /logoPath:\s*"\/logo\.(png|svg|webp)"/.test(siteSource),
    fix: "src/config/site.ts -> logoPath (currently: /logo.png)",
  },
  {
    label: "NEXT_PUBLIC_SITE_URL set to the live domain",
    done: !!process.env.NEXT_PUBLIC_SITE_URL,
    fix: "Vercel env var / .env.local",
  },
];

const pending = checks.filter((check) => !check.done);

console.log("\n  BudgetPhoneWala Accessories — pre-publish checklist");
console.log("  " + "-".repeat(52));

if (pending.length === 0) {
  console.log("  All checks passed.\n");
} else {
  console.log(`  ${pending.length} item(s) still need attention:\n`);
  for (const check of pending) {
    console.log(`  [ ] ${check.label}`);
    console.log(`      -> ${check.fix}`);
  }
  console.log(
    "\n  These do not block the build. Finish them before publishing, especially\n" +
      "  before submitting the site to a payment gateway for verification.\n",
  );
}

console.log(`  Site URL in use: ${process.env.NEXT_PUBLIC_SITE_URL || "(default — set NEXT_PUBLIC_SITE_URL)"}\n`);
