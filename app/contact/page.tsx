"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, SectionHeader, stagger, SurfaceCard } from "@/app/components/ui";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you. Your request has been submitted.");
  };

  return (
    <PageShell>
      <section className="px-6 pb-20 pt-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                Contact
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-tight md:text-6xl">
                Engage with a partner built for disciplined execution
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Whether you have a procurement requirement, infrastructure scope, or tender opportunity, we respond with structure and execution clarity.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <SurfaceCard className="bg-slate-50">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Response Focus</p>
                <p className="mt-4 leading-7 text-slate-700">
                  We engage around procurement, contract execution, infrastructure, and operational requirements where reliability and speed of response matter.
                </p>
              </SurfaceCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Send an Enquiry"
              title="Start with a structured brief"
              description="Provide your details below and our team will follow up with an execution-oriented response."
            />
          </div>

          <motion.form onSubmit={handleSubmit} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
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
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
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
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-slate-500"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Request a Quote
              </button>
            </SurfaceCard>
          </motion.form>
        </div>
      </section>
    </PageShell>
  );
}
