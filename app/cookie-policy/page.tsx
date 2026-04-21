"use client";

import { LegalPageTemplate } from "@/app/components/legal-page";

export default function CookiePolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Cookie Policy"
      intro="This Cookie Policy explains how Kwanza Capital Africa uses cookies and related technologies on this website."
      sections={[
        {
          title: "What Are Cookies",
          body: [
            "Cookies are small text files placed on your device when you visit a website.",
            "They help websites function efficiently, remember preferences, and provide usage insights for service improvement.",
          ],
        },
        {
          title: "How We Use Cookies",
          body: [
            "Kwanza Capital Africa may use cookies to support core site functionality, improve navigation experience, and maintain service reliability.",
            "We may also use analytics-oriented technologies to understand aggregate traffic and interaction patterns.",
          ],
        },
        {
          title: "Types of Cookies",
          body: [
            "Essential cookies support basic site operations and security-related functions.",
            "Performance and analytics cookies help us understand how users interact with the website so we can improve design and content quality.",
          ],
        },
        {
          title: "Managing Cookies",
          body: [
            "Most web browsers allow you to control cookies through browser settings, including blocking or deleting existing cookies.",
            "Disabling certain cookies may affect website functionality or user experience.",
          ],
        },
        {
          title: "Third-Party Services",
          body: [
            "Some website functionality may involve third-party services that place their own cookies under their respective policies.",
            "Kwanza Capital Africa does not control third-party cookie behavior and recommends reviewing relevant third-party privacy notices where applicable.",
          ],
        },
        {
          title: "Updates, Governing Law, and Contact",
          body: [
            "We may update this Cookie Policy periodically. Any revisions will be published on this page.",
            "This policy is governed by the laws of Zambia, and any related disputes are subject to the courts of Zambia. For questions, contact Kwanza Capital Africa, Lusaka, Zambia, at md@kwanzacapitalafrica.com or +260 762 336 792.",
          ],
        },
      ]}
    />
  );
}
