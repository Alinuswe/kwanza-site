"use client";

import { LegalPageTemplate } from "@/app/components/legal-page";

export default function DisclaimerPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Website Disclaimer"
      intro="This website is operated by Kwanza Capital Africa. The information on this website is provided for general corporate and service information purposes only."
      sections={[
        {
          title: "General Information Only",
          body: [
            "Website content is intended to provide a high-level overview of Kwanza Capital Africa's services, capabilities, and operating model.",
            "Content does not constitute professional, financial, technical, legal, or other advisory services and should not be relied on as a substitute for tailored advice.",
          ],
        },
        {
          title: "No Warranties",
          body: [
            "While we aim to keep information accurate and current, Kwanza Capital Africa makes no express or implied warranties regarding completeness, reliability, or suitability of website content.",
            "Information may be updated, revised, or removed without prior notice.",
          ],
        },
        {
          title: "Limitation of Liability",
          body: [
            "To the fullest extent permitted by applicable law, Kwanza Capital Africa is not liable for any loss or damage arising from reliance on website content or from use of this website.",
            "This includes, without limitation, direct, indirect, incidental, consequential, or special loss linked to website access, interruptions, or inaccuracies.",
          ],
        },
        {
          title: "External Links and Third-Party Content",
          body: [
            "This website may reference external resources for convenience. Kwanza Capital Africa does not control third-party websites and does not endorse or guarantee their content.",
            "Users access third-party links at their own discretion and risk.",
          ],
        },
        {
          title: "Website Use and Conduct",
          body: [
            "Users are expected to use this website in a lawful and responsible manner.",
            "Any misuse, unauthorized access attempt, or activity that disrupts website operation is prohibited.",
          ],
        },
        {
          title: "Governing Law, Jurisdiction, and Contact",
          body: [
            "This disclaimer is governed by the laws of Zambia. Any dispute connected to this website disclaimer shall be subject to the courts of Zambia.",
            "For clarification on website content, contact Kwanza Capital Africa, Lusaka, Zambia, at md@kwanzacapitalafrica.com or +260 762 336 792.",
          ],
        },
      ]}
    />
  );
}
