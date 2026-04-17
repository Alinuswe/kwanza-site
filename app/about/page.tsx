"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
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
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div variants={fadeUp} className="max-w-3xl">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function AboutPage() {
  const problems = [
    "Fragmented and unreliable supply chains",
    "Inconsistent power infrastructure",
    "Delays and inefficiencies in project execution",
    "Lack of structured procurement systems",
  ];

  const solutions = [
    "Coordinated sourcing and supplier networks",
    "Scalable energy and power solutions",
    "Disciplined contract execution and delivery",
    "Process-driven procurement systems",
  ];

  const capabilities = [
    "Industrial procurement and supply coordination",
    "Energy systems design and deployment (solar and hybrid)",
    "Tender and contract execution",
    "Infrastructure and systems implementation",
  ];

  const beliefs = [
    "Execution matters more than intent",
    "Systems outperform improvisation",
    "Reliability is a competitive advantage",
    "Scale is built through structure, not speed",
  ];

  const modelSteps = ["Sourcing", "Coordination", "Delivery", "Execution", "Scale"];

  const stats = [
    { value: "Procurement", label: "Structured sourcing systems" },
    { value: "Energy", label: "Solar and hybrid deployment capability" },
    { value: "Execution", label: "Contract and project delivery focus" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
            Kwanza Capital Africa
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-950">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-950">
              About
            </Link>
          </nav>

          <Link
            href="/"
            className="rounded-full bg-[#c8f701] px-5 py-2.5 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,247,1,0.14),transparent_42%)]" />
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
            >
              <div className="relative z-10">
                <motion.div
                  variants={fadeUp}
                  className="mb-6 inline-flex items-center rounded-full border border-[#dff57a] bg-[#f7ffd1] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700"
                >
                  About Kwanza Capital Africa
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl"
                >
                  Built on Systems. Driven by Execution.
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl"
                >
                  Kwanza Capital Africa is an industrial procurement and energy solutions company
                  delivering structured sourcing, reliable infrastructure, and disciplined project
                  execution for mission-critical environments.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
                  >
                    <div className="mb-3 h-2 w-14 rounded-full bg-[#c8f701]" />
                    <div className="text-xl font-semibold text-slate-950">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <SectionHeader
                eyebrow="Company Overview"
                title="Who We Are"
                description="Kwanza Capital Africa operates at the intersection of procurement, energy systems, and project delivery."
              />

              <motion.div
                variants={fadeUp}
                className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-600"
              >
                <p>
                  We are structured to support industries where reliability, compliance, and execution
                  are non-negotiable.
                </p>
                <p>
                  Our work is focused on enabling operations — ensuring that materials are sourced
                  efficiently, systems are deployed correctly, and projects are delivered with precision.
                </p>
                <p>
                  We are not a general contractor.
                  <br />
                  We are a systems-driven company built for consistency, scale, and long-term performance.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionHeader eyebrow="Problem → Solution" title="The Gap We Address" />

              <div className="mt-14 grid gap-8 md:grid-cols-2">
                <motion.div
                  variants={fadeUp}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Problem
                  </div>

                  <div className="space-y-4">
                    {problems.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4"
                      >
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-400" />
                        <p className="text-base leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="rounded-[28px] border border-[#dff57a] bg-white p-8 shadow-[0_10px_40px_rgba(200,247,1,0.08)]"
                >
                  <div className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Solution
                  </div>

                  <div className="space-y-4">
                    {solutions.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border border-[#eef9bd] bg-[#fbffe8] px-5 py-4"
                      >
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c8f701]" />
                        <p className="text-base leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.p variants={fadeUp} className="mt-10 text-lg font-medium text-slate-900">
                We build structure where there is inefficiency, and reliability where there is risk.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionHeader
                eyebrow="Capabilities"
                title="Core Capabilities"
                description="Each capability is designed to integrate into a single operational model focused on delivery, not fragmentation."
              />

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {capabilities.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#dff57a]"
                  >
                    <div className="mb-5 h-2 w-14 rounded-full bg-[#c8f701]" />
                    <p className="text-xl font-medium leading-8 text-slate-900">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <div className="max-w-3xl">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8ff9d]">
                  Operating Model
                </div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  How We Operate
                </h2>
              </div>

              <motion.div
                variants={fadeUp}
                className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.04] p-8"
              >
                <div className="grid gap-4 md:grid-cols-5 md:items-center">
                  {modelSteps.map((step, index) => (
                    <React.Fragment key={step}>
                      <div className="text-center text-lg font-medium text-white/90">{step}</div>
                      {index < modelSteps.length - 1 && (
                        <div className="hidden text-center text-[#c8f701] md:block">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-300"
              >
                <p>Our model is built on structured processes rather than ad hoc execution.</p>
                <p>
                  We coordinate suppliers, manage procurement workflows, and deliver projects through
                  a controlled, scalable system.
                </p>
                <p>
                  This allows us to operate efficiently across multiple sectors while maintaining
                  consistency in output.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  variants={fadeUp}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Vision
                  </div>
                  <p className="text-lg leading-8 text-slate-700">
                    To build a leading African enterprise in industrial procurement and energy
                    infrastructure, operating across regional and global markets.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="rounded-[28px] border border-[#dff57a] bg-[#fbffe8] p-8 shadow-[0_10px_40px_rgba(200,247,1,0.08)]"
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Mission
                  </div>
                  <p className="text-lg leading-8 text-slate-700">
                    To deliver structured sourcing, scalable systems, and disciplined execution for
                    industries that depend on reliability.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionHeader eyebrow="Leadership" title="Leadership" />

              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
                  <div className="mb-5 h-2 w-16 rounded-full bg-[#c8f701]" />
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Founder Profile
                  </div>
                  <div className="mt-4 text-2xl font-semibold text-slate-950">
                    Systems + Execution
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">
                    A leadership model built around operational clarity, disciplined delivery,
                    and practical execution.
                  </p>
                </div>

                <div className="space-y-6 text-lg leading-8 text-slate-600">
                  <p>
                    Kwanza Capital Africa is led by a founder with a background in computing,
                    procurement, and tender management, combining technical capability with
                    operational execution.
                  </p>
                  <p>
                    The company is built on a practical understanding of both systems and real-world
                    delivery — ensuring that strategy translates into results.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionHeader eyebrow="Philosophy" title="What We Believe" />

              <div className="mt-14 grid gap-5 md:grid-cols-2">
                {beliefs.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c8f701]" />
                    <div className="text-base leading-7 text-slate-700">
                      <span className="font-medium text-slate-950">0{index + 1}. </span>
                      {item}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p variants={fadeUp} className="mt-10 text-lg font-medium text-slate-900">
                We focus on building a company that delivers consistently — not occasionally.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Engage
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Engage with a structured, execution-focused partner
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Whether you are sourcing materials, deploying infrastructure, or executing contracts,
                we provide the systems and capability to deliver.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-full bg-[#c8f701] px-6 py-3 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]">
                  Contact Us
                </button>
                <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all hover:border-slate-950">
                  Request a Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}