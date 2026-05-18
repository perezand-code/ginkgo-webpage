import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsContent } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Ginkgo Property Solutions LLC, DBA Ginkgo Pressure Washing, including service terms, payment terms, quotes, scheduling, liability, and SMS messaging.",
  alternates: {
    canonical: "/terms&cond"
  },
  openGraph: {
    title: "Terms & Conditions | Ginkgo Pressure Washing",
    description:
      "Service, quote, payment, scheduling, limitation of liability, and SMS messaging terms for Ginkgo Pressure Washing.",
    url: "/terms&cond",
    type: "website"
  }
};

export default function TermsCampaignPage() {
  return <LegalPage content={termsContent} />;
}
