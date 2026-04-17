"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950"
          >
            Kwanza Capital Africa
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-950">
              Home
            </Link>

            <Link href="/about" className="text-sm font-medium text-slate-950">
              About
            </Link>

            <Link href="/#services" className="text-sm text-slate-600 hover:text-slate-950">
              Services
            </Link>

            <Link href="/#industries" className="text-sm text-slate-600 hover:text-slate-950">
              Industries
            </Link>

            <Link href="/#capabilities" className="text-sm text-slate-600 hover:text-slate-950">
              Capabilities
            </Link>

            <Link href="/#contact" className="text-sm text-slate-600 hover:text-slate-950">
              Contact
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
        {/* HERO */}
        <section className="px-6 pb-24 pt-32 md:pt-40">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
            >
              <div>
                <motion.div
                  variants={fadeUp}
                  className="mb-6 inline-flex rounded-full border border-[#dff57a] bg-[#f7ffd1] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700"
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
                  Kwanza Capital Africa is an industrial procurement and energy
                  solutions company delivering structured sourcing, reliable
                  infrastructure, and disciplined project execution for
                  mission-critical environments.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
              >
                {[
                  ["Procurement", "Structured sourcing systems"],
                  ["Energy", "Solar and hybrid deployment capability"],
                  ["Execution", "Contract and project delivery focus"],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-3 h-2 w-14 rounded-full bg-[#c8f701]" />
                    <div className="text-xl font-semibold text-slate-950">
                      {title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">
                      {desc}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
                  We are structured to support industries where reliability,
                  compliance, and execution are non-negotiable.
                </p>

                <p>
                  Our work is focused on enabling operations — ensuring that
                  materials are sourced efficiently, systems are deployed
                  correctly, and projects are delivered with precision.
                </p>

                <p>
                  We are not a general contractor.
                  <br />
                  We are a systems-driven company built for consistency, scale,
                  and long-term performance.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* GAP */}
        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader eyebrow="Problem → Solution" title="The Gap We Address" />

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-8">
                <div className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Problem
                </div>

                <div className="space-y-4">
                  {problems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#dff57a] bg-white p-8">
                <div className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Solution
                </div>

                <div className="space-y-4">
                  {solutions.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#eef9bd] bg-[#fbffe8] px-5 py-4 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-10 text-lg font-medium text-slate-900">
              We build structure where there is inefficiency, and reliability
              where there is risk.
            </p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Capabilities"
              title="Core Capabilities"
              description="Each capability is designed to integrate into a single operational model focused on delivery, not fragmentation."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {capabilities.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 transition-all hover:border-[#dff57a]"
                >
                  <div className="mb-5 h-2 w-14 rounded-full bg-[#c8f701]" />
                  <p className="text-xl font-medium leading-8 text-slate-900">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OPERATING MODEL */}
        <section className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8ff9d]">
              Operating Model
            </div>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              How We Operate
            </h2>

            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
              <div className="grid gap-4 md:grid-cols-5">
                {modelSteps.map((step) => (
                  <div
                    key={step}
                    className="text-center text-lg font-medium text-white/90"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Our model is built on structured processes rather than ad hoc
                execution.
              </p>
              <p>
                We coordinate suppliers, manage procurement workflows, and
                deliver projects through a controlled, scalable system.
              </p>
              <p>
                This allows us to operate efficiently across multiple sectors
                while maintaining consistency in output.
              </p>
            </div>
          </div>
        </section>

        {/* VISION + MISSION */}
        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Vision
              </div>

              <p className="text-lg leading-8 text-slate-700">
                To build a leading African enterprise in industrial procurement
                and energy infrastructure, operating across regional and global
                markets.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#dff57a] bg-[#fbffe8] p-8">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Mission
              </div>

              <p className="text-lg leading-8 text-slate-700">
                To deliver structured sourcing, scalable systems, and disciplined
                execution for industries that depend on reliability.
              </p>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader eyebrow="Leadership" title="Leadership" />

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
                <div className="mb-5 h-2 w-16 rounded-full bg-[#c8f701]" />

                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Founder Profile
                </div>

                <div className="mt-4 text-2xl font-semibold text-slate-950">
                  Systems + Execution
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  A leadership model built around operational clarity,
                  disciplined delivery, and practical execution.
                </p>
              </div>

              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Kwanza Capital Africa is led by a founder with a background in
                  computing, procurement, and tender management, combining
                  technical capability with operational execution.
                </p>

                <p>
                  The company is built on a practical understanding of both
                  systems and real-world delivery — ensuring that strategy
                  translates into results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader eyebrow="Philosophy" title="What We Believe" />

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {beliefs.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-5"
                >
                  <span className="font-medium text-slate-950">
                    0{index + 1}.{" "}
                  </span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg font-medium text-slate-900">
              We focus on building a company that delivers consistently — not
              occasionally.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Engage
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Engage with a structured, execution-focused partner
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you are sourcing materials, deploying infrastructure, or
              executing contracts, we provide the systems and capability to
              deliver.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-[#c8f701] px-6 py-3 text-sm font-medium text-black hover:bg-[#b4e600]">
                Contact Us
              </button>

              <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900">
                Request a Quote
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
              Kwanza Capital Africa Limited
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Lusaka, Zambia
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-600">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#industries">Industries</Link>
            <Link href="/#capabilities">Capabilities</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <div className="text-sm leading-7 text-slate-600">
            <div>info@kwanzacapitalafrica.com</div>
            <div>+260 XXX XXX XXX</div>
          </div>
        </div>

        <div className="border-t border-slate-200 px-6 py-5 text-center text-xs uppercase tracking-[0.18em] text-slate-500">
          © Kwanza Capital Africa Limited
        </div>
      </footer>
    </div>
  );
}