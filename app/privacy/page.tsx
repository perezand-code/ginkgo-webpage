import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyContent } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Ginkgo Property Solutions LLC, DBA Ginkgo Pressure Washing, including SMS consent, data privacy, cookies, and customer rights.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: "Privacy Policy | Ginkgo Pressure Washing",
    description:
      "How Ginkgo Property Solutions LLC collects, uses, protects, and handles customer information and SMS consent.",
    url: "/privacy",
    type: "website"
  }
};

export default function PrivacyPage() {
  return <LegalPage content={privacyContent} />;
}
