"use client";

import { LegalPageTemplate } from "@/app/components/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This website is operated by Kwanza Capital Africa. This Privacy Policy explains how information is handled when you interact with our website."
      sections={[
        {
          title: "Scope of this Policy",
          body: [
            "This policy applies to personal information collected through this website, including contact and enquiry forms.",
            "It is designed as a general business website policy and should be read together with any engagement-specific terms shared directly with clients or partners.",
          ],
        },
        {
          title: "Information We May Collect",
          body: [
            "We may collect information you provide directly, such as your name, email address, phone number, organisation details, subject lines, and message content.",
            "We may also collect basic technical and usage information necessary to operate, secure, and improve website performance.",
          ],
        },
        {
          title: "How We Use Information",
          body: [
            "Information is used to respond to enquiries, evaluate potential engagements, communicate with you, and support operational administration.",
            "We may also use relevant data for website integrity, security monitoring, and internal reporting.",
          ],
        },
        {
          title: "Data Handling and Sharing",
          body: [
            "Kwanza Capital Africa handles data in a controlled and professional manner and limits access to personnel or service providers with a business need.",
            "We do not sell personal information. Information may be shared with trusted providers where necessary for website operation or communication support, subject to appropriate safeguards.",
          ],
        },
        {
          title: "Cookies and Related Technologies",
          body: [
            "This website may use cookies and similar technologies to support core website functions, improve usability, and understand aggregate usage behavior.",
            "Further detail is provided in our Cookie Policy.",
          ],
        },
        {
          title: "Retention and Security",
          body: [
            "Personal information is retained for as long as reasonably necessary for business, legal, or operational purposes.",
            "We use reasonable technical and organisational measures to protect information, but no internet transmission or storage environment can be guaranteed fully secure.",
          ],
        },
        {
          title: "Your Rights and Choices",
          body: [
            "You may contact us to request correction or update of personal information you have provided through this website.",
            "Where applicable under the laws of Zambia, you may also request details about how your data is used.",
          ],
        },
        {
          title: "Governing Law, Jurisdiction, and Contact",
          body: [
            "This Privacy Policy is governed by the laws of Zambia. Any disputes relating to this policy shall be subject to the courts of Zambia.",
            "For privacy-related enquiries, contact Kwanza Capital Africa, Lusaka, Zambia, at md@kwanzacapitalafrica.com or +260 762 336 792.",
          ],
        },
      ]}
    />
  );
}
