"use client";

import React from "react";
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

export default function IndustriesPage() {
  const industries = [
    {
      id: "01",
      title: "Mining",
      overview:
        "Supporting mining operations with procurement, energy, and infrastructure systems.",
      details:
        "We provide sourcing of equipment and materials, energy solutions for off-grid and hybrid environments, and structured delivery to ensure uninterrupted operations in mining environments.",
      points: [
        "Equipment and material sourcing",
        "Energy systems for remote operations",
        "Supply chain coordination",
        "Operational continuity support",
      ],
    },
    {
      id: "02",
      title: "Public Sector",
      overview:
        "Delivering structured procurement and contract execution for government and public institutions.",
      details:
        "We support public sector projects through compliant procurement processes, tender execution, and delivery aligned with regulatory requirements.",
      points: [
        "Tender participation and execution",
        "Government procurement compliance",
        "Infrastructure and system delivery",
        "Long-term project coordination",
      ],
    },
    {
      id: "03",
      title: "Construction & Infrastructure",
      overview:
        "Supplying materials, systems, and execution support for infrastructure development.",
      details:
        "We work with contractors and developers to provide sourcing, logistics coordination, and infrastructure support for construction and large-scale development projects.",
      points: [
        "Construction materials sourcing",
        "Infrastructure systems deployment",
        "Supplier coordination",
        "Project delivery support",
      ],
    },
    {
      id: "04",
      title: "Commercial & Industrial Operations",
      overview:
        "Supporting businesses with procurement, energy systems, and operational infrastructure.",
      details:
        "We provide sourcing, energy solutions, and systems support to commercial and industrial clients looking to optimize operations and reduce dependency risks.",
      points: [
        "Operational procurement",
        "Energy system deployment",
        "Infrastructure support",
        "Efficiency optimization",
      ],
    },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Contact", href: "/#contact" },
  ];

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
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors duration-300 ${
                  item.label === "Industries"
                    ? "font-medium text-slate-950"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="rounded-full bg-[#c8f701] px-5 py-2.5 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]"
          >
            Contact Us
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
              className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
            >
              <div>
                <motion.div
                  variants={fadeUp}
                  className="mb-6 inline-flex rounded-full border border-[#dff57a] bg-[#f7ffd1] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700"
                >
                  Industries
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl"
                >
                  Operating Across Critical Sectors
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl"
                >
                  We support industries where reliability, structured
                  procurement, and execution discipline are essential to
                  operations.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 h-2 w-16 rounded-full bg-[#c8f701]" />
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Multi-Sector Delivery
                </div>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Structured systems designed to operate across industries where
                  continuity, compliance, and execution matter.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <SectionHeader
                eyebrow="Positioning"
                title="Sector-Focused Delivery"
                description="Kwanza Capital Africa operates in environments where operational continuity, compliance, and precision are critical."
              />

              <motion.div
                variants={fadeUp}
                className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-600"
              >
                <p>
                  Our approach is designed to support industries that depend on
                  reliable supply chains, stable energy systems, and disciplined
                  project execution.
                </p>

                <p>
                  We align our services to sector-specific requirements,
                  ensuring that each engagement is structured, compliant, and
                  execution-ready.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Core Sectors"
              title="Industries We Support"
              description="Built for demanding environments where reliability is essential."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {industries.map((industry) => (
                <motion.div
                  key={industry.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#dff57a]"
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Sector {industry.id}
                  </div>

                  <div className="mb-4 h-2 w-14 rounded-full bg-[#c8f701]" />

                  <h3 className="text-2xl font-medium text-slate-950">
                    {industry.title}
                  </h3>

                  <p className="mt-4 font-medium text-slate-700">
                    {industry.overview}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">
                    {industry.details}
                  </p>

                  <div className="mt-6 space-y-3">
                    {industry.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ALIGNMENT */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Execution Model"
              title="Industry-Aligned Execution"
              description="Each sector requires a different level of coordination, compliance, and delivery structure."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                "Structured procurement systems",
                "Supplier and logistics coordination",
                "Compliance-driven delivery",
                "Scalable operational models",
              ].map((item, index) => (
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
          </div>
        </section>

        {/* CROSS SECTOR */}
        <section className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Capability"
              title="Built for Multi-Sector Operations"
              description="Our strength lies in the ability to operate across sectors while maintaining consistency in delivery."
              light
            />

            <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-300">
              <p>
                We leverage shared systems, supplier networks, and execution
                processes to support diverse industries without compromising
                quality or reliability.
              </p>

              <p>
                This allows us to scale across markets and regions while
                maintaining operational discipline.
              </p>
            </div>
          </div>
        </section>

        {/* POSITIONING BLOCK */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-[#dff57a] bg-[#fbffe8] px-8 py-12 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Positioning Statement
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              We do not operate as a sector-specific contractor.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              We operate as a systems-driven partner capable of delivering
              across industries where execution matters.
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
              Engage with a Partner Built for Critical Environments
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Whether in mining, public sector, infrastructure, or commercial
              operations, we provide the structure and capability to deliver.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-full bg-[#c8f701] px-6 py-3 text-sm font-medium text-black hover:bg-[#b4e600]"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900"
              >
                Discuss a Project
              </Link>
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
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
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