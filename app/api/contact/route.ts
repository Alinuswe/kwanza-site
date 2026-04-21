import { NextResponse } from "next/server";

const DESTINATION_EMAIL = "md@kwanzacapitalafrica.com";

const sanitize = (value: FormDataEntryValue | string | null | undefined) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string>;

    const formType = sanitize(body.formType) || "enquiry";
    const fullName = sanitize(body.fullName);
    const emailAddress = sanitize(body.emailAddress);
    const companyOrOrganisation = sanitize(body.companyOrOrganisation);
    const phoneNumber = sanitize(body.phoneNumber);
    const subject = sanitize(body.subject);
    const description = sanitize(body.description);

    if (!fullName || !emailAddress || !subject || !description) {
      return NextResponse.json({ error: "Please complete all required fields before submitting." }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "Kwanza Capital Africa <onboarding@resend.dev>";

    if (!resendKey) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured on this deployment yet. Please set RESEND_API_KEY to enable form routing.",
        },
        { status: 503 },
      );
    }

    const formattedType = formType === "quotation" ? "Quotation" : "Enquiry";
    const emailPayload = {
      from: fromAddress,
      to: [DESTINATION_EMAIL],
      reply_to: emailAddress,
      subject: `[${formattedType}] ${subject}`,
      text: [
        `${formattedType} submission from the Kwanza Capital Africa contact page`,
        "",
        `Full Name: ${fullName}`,
        `Email Address: ${emailAddress}`,
        `Company / Organisation: ${companyOrOrganisation || "Not provided"}`,
        `Phone Number: ${phoneNumber || "Not provided"}`,
        `Subject: ${subject}`,
        "",
        "Description / Requirements:",
        description,
      ].join("\n"),
    };

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return NextResponse.json({ error: `Email delivery failed: ${resendError}` }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
