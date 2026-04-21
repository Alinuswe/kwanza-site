"use client";

import { LegalPageTemplate } from "@/app/components/legal-page";

export default function TermsPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="This website is operated by Kwanza Capital Africa. By accessing or using this website, you agree to these Terms & Conditions."
      sections={[
        {
          title: "Acceptance of Terms",
          body: [
            "These Terms & Conditions govern your use of this website and related online services provided by Kwanza Capital Africa.",
            "If you do not accept these terms, you should discontinue use of the website. Continued access and use constitutes acceptance of the current version of these terms.",
          ],
        },
        {
          title: "Use of Website",
          body: [
            "You may use this website for lawful business information and engagement purposes only.",
            "You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or use this website in a manner that could damage Kwanza Capital Africa or other users.",
          ],
        },
        {
          title: "Intellectual Property",
          body: [
            "All content on this website, including text, branding, graphics, design elements, and materials, is owned by or licensed to Kwanza Capital Africa unless otherwise stated.",
            "You may not reproduce, modify, distribute, publish, or commercially exploit website content without prior written consent.",
          ],
        },
        {
          title: "No Unlawful or Prohibited Use",
          body: [
            "You must not use this website for unlawful, fraudulent, misleading, defamatory, or harmful purposes.",
            "Kwanza Capital Africa reserves the right to restrict access where misuse is identified or reasonably suspected.",
          ],
        },
        {
          title: "External Links",
          body: [
            "This website may include links to third-party websites for convenience and reference.",
            "Kwanza Capital Africa does not control and is not responsible for third-party content, security, or privacy practices, and access to third-party websites is at your own risk.",
          ],
        },
        {
          title: "Limitation of Liability",
          body: [
            "Website content is provided for general information purposes and may be updated periodically.",
            "To the fullest extent permitted by applicable law, Kwanza Capital Africa disclaims liability for direct, indirect, incidental, consequential, or special loss arising from use of, or inability to use, this website.",
          ],
        },
        {
          title: "Governing Law and Jurisdiction",
          body: [
            "These Terms & Conditions are governed by the laws of Zambia.",
            "Any disputes arising out of or in connection with this website or these terms shall be subject to the jurisdiction of the courts of Zambia.",
          ],
        },
        {
          title: "Updates and Contact",
          body: [
            "Kwanza Capital Africa may revise these Terms & Conditions from time to time. Updated versions become effective when posted on this page.",
            "For legal or website queries, contact Kwanza Capital Africa, Lusaka, Zambia, at md@kwanzacapitalafrica.com or +260 762 336 792.",
          ],
        },
      ]}
    />
  );
}
