"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div variants={fadeUp} className="max-w-3xl">
      <div
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${
          light ? "text-[#e8ff9d]" : "text-slate-500"
        }`}
      >
        {eyebrow}
      </div>

      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 text-base leading-7 md:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message submitted. We will get back to you.");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950"
          >
            Kwanza Capital Africa
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors duration-300 ${
                  item.label === "Contact"
                    ? "font-medium text-slate-950"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[#c8f701] px-5 py-2.5 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]"
          >
            Contact Us
          </Link>
        </div>
      </header>

      <main>
        <section className="px-6 pb-20 pt-32 md:pt-40">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
            >
              <div>
                <motion.div
                  variants={fadeUp}
                  className="mb-6 inline-flex rounded-full border border-[#dff57a] bg-[#f7ffd1] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700"
                >
                  Contact
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl"
                >
                  Engage with a Partner Built for Execution
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl"
                >
                  Whether you have a project, procurement requirement, infrastructure
                  need, or tender opportunity, we are ready to respond through a
                  structured and execution-focused approach.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 h-2 w-16 rounded-full bg-[#c8f701]" />
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Response Focus
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  We engage around procurement, contract execution, infrastructure,
                  and operational requirements where precision, reliability, and
                  responsiveness matter.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <SectionHeader
                eyebrow="Send an Enquiry"
                title="Start the conversation with a structured brief"
                description="Provide a few details about your requirement and we will respond accordingly."
              />

              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="mt-10 rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-[#c8f701]"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-[#c8f701]"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company or organisation"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-[#c8f701]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project, tender, procurement, or enquiry"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-[#c8f701]"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your requirement"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-[#c8f701]"
                    required
                  />
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-slate-500">
                    We respond to procurement, infrastructure, energy, and project
                    delivery enquiries.
                  </p>

                  <button
                    type="submit"
                    className="rounded-full bg-[#c8f701] px-6 py-3 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]"
                  >
                    Send Message
                  </button>
                </div>
              </motion.form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div
                variants={fadeUp}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Contact Details
                </div>
                <div className="space-y-3 text-base leading-7 text-slate-700">
                  <p>md@kwanzacapitalafrica.com</p>
                  <p>+260 762 336 792</p>
                  <p>Lusaka, Zambia</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-8"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Working Hours
                </div>
                <div className="space-y-3 text-base leading-7 text-slate-700">
                  <p>Monday to Friday: 08:00 – 17:00</p>
                  <p>Saturday: 08:00 – 12:30</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-[28px] border border-[#dff57a] bg-[#fbffe8] p-8"
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Engagement Areas
                </div>
                <div className="space-y-3 text-base leading-7 text-slate-700">
                  <p>Procurement requirements</p>
                  <p>Tender and contract execution</p>
                  <p>Energy systems and infrastructure</p>
                  <p>Operational and project delivery support</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Engagement Model"
              title="Built for structured communication and clear execution"
              description="We approach enquiries with the same focus on coordination, clarity, and delivery discipline that defines our operating model."
              light
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                "Initial requirement review",
                "Structured response and alignment",
                "Execution-focused engagement",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-white/90"
                >
                  <span className="font-medium text-[#c8f701]">0{index + 1}. </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
              Kwanza Capital Africa Limited
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">Lusaka, Zambia</p>
          </div>

          <div className="grid gap-3 text-sm text-slate-600">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/capabilities">Capabilities</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="text-sm leading-7 text-slate-600">
            <div>md@kwanzacapitalafrica.com</div>
            <div>+260 762 336 792</div>
          </div>
        </div>

        <div className="border-t border-slate-200 px-6 py-5 text-center text-xs uppercase tracking-[0.18em] text-slate-500">
          © Kwanza Capital Africa Limited
        </div>
      </footer>
    </div>
  );
}