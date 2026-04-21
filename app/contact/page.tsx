"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { contactDetails } from "@/app/lib/site";
import {
  fadeUp,
  HeroSignalLines,
  HeroWaveField,
  SectionHeader,
  stagger,
  SurfaceCard,
  SystemGrid,
  TechWaveMesh,
} from "@/app/components/ui";

type EnquiryFormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type QuoteFormState = {
  fullName: string;
  email: string;
  organisation: string;
  phone: string;
  subject: string;
  requirements: string;
};

export default function ContactPage() {
  const [enquiryForm, setEnquiryForm] = useState<EnquiryFormState>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [quoteForm, setQuoteForm] = useState<QuoteFormState>({
    fullName: "",
    email: "",
    organisation: "",
    phone: "",
    subject: "",
    requirements: "",
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [enquiryStatus, setEnquiryStatus] = useState<string | null>(null);
  const [quoteStatus, setQuoteStatus] = useState<string | null>(null);
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false);
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);

  const responseWorkflow = [
    "Initial acknowledgement and intake review",
    "Clarification of project scope and constraints",
    "Proposed execution pathway and timeline guidance",
    "Commercial and technical alignment",
  ];

  const submitToContactEndpoint = async (payload: Record<string, string>) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      throw new Error(body?.error ?? "Unable to send your request at this time.");
    }
  };

  const handleEnquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnquiryForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuoteForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnquiryStatus(null);
    setIsSubmittingEnquiry(true);

    try {
      await submitToContactEndpoint({
        formType: "enquiry",
        fullName: enquiryForm.name,
        emailAddress: enquiryForm.email,
        companyOrOrganisation: enquiryForm.company,
        phoneNumber: "Not provided",
        subject: enquiryForm.subject,
        description: enquiryForm.message,
      });

      setEnquiryStatus("Your enquiry has been sent. Our team will be in contact shortly.");
      setEnquiryForm({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setEnquiryStatus(error instanceof Error ? error.message : "Unable to send your request at this time.");
    } finally {
      setIsSubmittingEnquiry(false);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuoteStatus(null);
    setIsSubmittingQuote(true);

    try {
      await submitToContactEndpoint({
        formType: "quotation",
        fullName: quoteForm.fullName,
        emailAddress: quoteForm.email,
        companyOrOrganisation: quoteForm.organisation,
        phoneNumber: quoteForm.phone,
        subject: quoteForm.subject,
        description: quoteForm.requirements,
      });

      setQuoteStatus("Your quotation request has been sent. We will reply with next steps.");
      setQuoteForm({
        fullName: "",
        email: "",
        organisation: "",
        phone: "",
        subject: "",
        requirements: "",
      });
    } catch (error) {
      setQuoteStatus(error instanceof Error ? error.message : "Unable to send your request at this time.");
    } finally {
      setIsSubmittingQuote(false);
    }
  };

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white px-6 pb-24 pt-10 lg:px-10">
        <SystemGrid className="opacity-35" />
        <HeroWaveField className="opacity-75" />
        <HeroSignalLines className="opacity-45" />
        <TechWaveMesh className="opacity-45" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
                Contact
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-tight md:text-6xl">
                Engage with a partner built for disciplined execution
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Whether you have a procurement requirement, infrastructure scope, or tender opportunity, we respond with structure and execution clarity.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="space-y-4">
              <SurfaceCard className="bg-slate-50">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Direct Contact</p>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p>Email: {contactDetails.email}</p>
                  <p>Phone: {contactDetails.phone}</p>
                  <p>{contactDetails.location}</p>
                </div>
              </SurfaceCard>
              <SurfaceCard className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Request for Quote</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Send your scope, technical requirements, timelines, and delivery context. We will respond with a structured engagement path.
                </p>
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/40 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
                    Request for Quote
                  </button>
                </div>
              </SurfaceCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Send an Enquiry"
              title="Start with a structured brief"
              description="Provide your details below and our team will follow up with an execution-oriented response."
            />
            <div className="mt-8 space-y-3">
              {responseWorkflow.map((item, index) => (
                <SurfaceCard className="bg-slate-50 p-5" key={item}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Step 0{index + 1}</p>
                  <p className="mt-2 text-sm text-slate-700">{item}</p>
                </SurfaceCard>
              ))}
            </div>
          </div>

          <motion.form onSubmit={handleEnquirySubmit} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <SurfaceCard>
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  { label: "Full Name", name: "name", type: "text", required: true },
                  { label: "Email Address", name: "email", type: "email", required: true },
                  { label: "Company", name: "company", type: "text", required: false },
                  { label: "Subject", name: "subject", type: "text", required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="mb-2 block text-sm font-medium text-slate-700">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={enquiryForm[field.name as keyof EnquiryFormState]}
                      onChange={handleEnquiryChange}
                      required={field.required}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-slate-500"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={enquiryForm.message}
                  onChange={handleEnquiryChange}
                  rows={6}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-slate-500"
                />
              </div>

              {enquiryStatus ? <p className="mt-4 text-sm text-slate-700">{enquiryStatus}</p> : null}

              <button
                type="submit"
                disabled={isSubmittingEnquiry}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
                {isSubmittingEnquiry ? "Sending..." : "Send Message"}
              </button>
            </SurfaceCard>
          </motion.form>
        </div>
      </section>

      <AnimatePresence>
        {isQuoteModalOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQuoteModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-3xl border border-slate-300 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.75)] md:p-8"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close quotation modal"
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute right-4 top-4 rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                Close
              </button>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Quotation Request</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Share your quotation requirements</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Submit your scope and commercial context. Quotations are reviewed and routed directly to {contactDetails.email} for structured response handling.
              </p>

              <form className="mt-6" onSubmit={handleQuoteSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { label: "Full Name", name: "fullName", type: "text" },
                    { label: "Email Address", name: "email", type: "email" },
                    { label: "Company / Organisation", name: "organisation", type: "text" },
                    { label: "Phone Number", name: "phone", type: "tel" },
                    { label: "Quote Subject", name: "subject", type: "text", fullWidth: true },
                  ].map((field) => (
                    <div key={field.name} className={field.fullWidth ? "md:col-span-2" : ""}>
                      <label className="mb-2 block text-sm font-medium text-slate-700">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={quoteForm[field.name as keyof QuoteFormState]}
                        onChange={handleQuoteChange}
                        required
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-slate-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Description / Requirements</label>
                  <textarea
                    name="requirements"
                    value={quoteForm.requirements}
                    onChange={handleQuoteChange}
                    rows={5}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-slate-500"
                  />
                </div>

                {quoteStatus ? <p className="mt-4 text-sm text-slate-700">{quoteStatus}</p> : null}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-slate-600">Direct contact: {contactDetails.phone}</p>
                  <button
                    type="submit"
                    disabled={isSubmittingQuote}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
                    {isSubmittingQuote ? "Submitting..." : "Request a Quote"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </PageShell>
  );
}
