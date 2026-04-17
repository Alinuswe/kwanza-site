"use client";

import React from "react";
import { motion } from "framer-motion";

const ArrowRight = () => <span style={{ marginLeft: 8 }}>→</span>;

const navItems = ["Home", "About", "Services", "Industries", "Capabilities", "Contact"];

const services = [
  {
    title: "Industrial Procurement",
    description:
      "Sourcing and supply of equipment, materials, and mission-critical components for operational continuity.",
  },
  {
    title: "Energy Solutions",
    description:
      "Design, supply, and deployment of solar and hybrid power systems for resilient operations.",
  },
  {
    title: "Tender and Contract Execution",
    description:
      "Structured delivery of awarded contracts with disciplined coordination, compliance, and execution.",
  },
  {
    title: "ICT and Infrastructure",
    description:
      "Deployment of systems, hardware, and supporting infrastructure for enterprise environments.",
  },
];

const industries = [
  "Mining",
  "Public Sector",
  "Construction and Infrastructure",
  "Commercial and Industrial Facilities",
];

const values = [
  "Structured procurement processes",
  "Supplier and sourcing network coordination",
  "Technical and operational execution capability",
  "Compliance-oriented delivery standards",
  "Scalable systems for long-term growth",
];

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

function AnimatedNetwork() {
  const nodes = [
    { id: 1, x: "18%", y: "24%", label: "Supply" },
    { id: 2, x: "48%", y: "14%", label: "Energy" },
    { id: 3, x: "76%", y: "30%", label: "Execution" },
    { id: 4, x: "28%", y: "70%", label: "Infrastructure" },
    { id: 5, x: "64%", y: "74%", label: "Systems" },
  ];

  const lines = [
    { x1: "18%", y1: "24%", x2: "48%", y2: "14%" },
    { x1: "48%", y1: "14%", x2: "76%", y2: "30%" },
    { x1: "18%", y1: "24%", x2: "28%", y2: "70%" },
    { x1: "28%", y1: "70%", x2: "64%", y2: "74%" },
    { x1: "76%", y1: "30%", x2: "64%", y2: "74%" },
    { x1: "48%", y1: "14%", x2: "64%", y2: "74%" },
  ];

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map((line, index) => (
          <g key={index}>
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(15,23,42,0.2)"
              strokeWidth="0.45"
            />
            <motion.circle
              r="1.2"
              fill="#c8f701"
              initial={{ opacity: 0, offsetDistance: "0%" }}
              animate={{ opacity: [0, 1, 0], offsetDistance: ["0%", "100%"] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.4,
              }}
              style={{
                offsetPath: `path('M ${parseFloat(line.x1)} ${parseFloat(line.y1)} L ${parseFloat(line.x2)} ${parseFloat(line.y2)}')`,
              }}
            />
          </g>
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          whileHover={{ scale: 1.08 }}
        >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-slate-300 bg-white shadow-lg">
            <div className="h-3.5 w-3.5 rounded-full bg-[#c8f701]" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div variants={fadeUp} className="max-w-3xl">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

export default function KwanzaHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
            Kwanza Capital Africa
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm text-slate-600 hover:text-slate-950">
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full bg-[#c8f701] px-5 py-2.5 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]">
            Request a Quote
          </button>
        </div>
      </div>

      <main>
        <section className="relative overflow-hidden pt-32 md:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,247,1,0.15),transparent_40%)]" />
          <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-2 lg:px-10">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1 variants={fadeUp} className="text-6xl font-semibold tracking-tight">
                Industrial Procurement and Energy Solutions
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-lg text-slate-600">
                Delivering reliable supply, power systems, and project execution across Zambia.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex gap-4">
                <button className="group inline-flex items-center rounded-full bg-[#c8f701] px-6 py-3 text-black transition-all hover:scale-[1.05]">
                  Request a Quote <ArrowRight />
                </button>
              </motion.div>
            </motion.div>

            <AnimatedNetwork />
          </div>
        </section>
      </main>
    </div>
  );
}

// ================= ABOUT PAGE =================

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-tight md:text-6xl">
            Built on Systems. Driven by Execution.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-slate-600">
            Kwanza Capital Africa is a procurement and energy solutions company focused on
            delivering structured sourcing, reliable infrastructure, and scalable project
            execution across Zambia and beyond.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 md:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="mb-4 text-2xl font-semibold">What We Do</h2>
          <p className="leading-7 text-slate-600">
            We operate at the intersection of procurement, energy systems, and project delivery.
            Our model is designed to support industries where reliability, compliance, and
            execution determine success.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="mb-4 text-2xl font-semibold">Our Approach</h2>
          <p className="leading-7 text-slate-600">
            We focus on structured processes, supplier coordination, and disciplined execution.
            Rather than operating as a generic contractor, we build systems that scale across
            sectors and geographies.
          </p>
        </motion.div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3 className="text-sm uppercase tracking-widest text-slate-400">Vision</h3>
            <p className="mt-4 text-xl leading-8">
              To build a leading African enterprise in industrial procurement and energy
              infrastructure, operating across regional and global markets.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3 className="text-sm uppercase tracking-widest text-slate-400">Mission</h3>
            <p className="mt-4 text-xl leading-8">
              To deliver reliable sourcing, scalable systems, and disciplined project execution
              for critical industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="mb-6 text-3xl font-semibold">Leadership</h2>
          <p className="max-w-3xl leading-7 text-slate-600">
            The company is led by a founder with a background in computing, procurement, and
            tender management, combining technical capability with operational execution. The
            focus is on building a company that is both systems-driven and capable of delivering
            real-world projects at scale.
          </p>
        </motion.div>
      </section>

      <section className="pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-4xl font-semibold">Work With Us</h2>
          <p className="mt-4 text-slate-600">
            Engage with a team focused on structured delivery and scalable execution.
          </p>

          <div className="mt-8">
            <button className="rounded-full bg-[#c8f701] px-6 py-3 text-black transition-all hover:scale-105">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}export function AboutPage() {
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

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,247,1,0.14),transparent_42%)]" />
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
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
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <SectionHeader
              eyebrow="Company Overview"
              title="Who We Are"
              description="Kwanza Capital Africa operates at the intersection of procurement, energy systems, and project delivery."
            />

            <motion.div variants={fadeUp} className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-600">
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

      {/* PROBLEM -> SOLUTION */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
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
                    <div key={item} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
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
                    <div key={item} className="flex items-start gap-4 rounded-2xl border border-[#eef9bd] bg-[#fbffe8] px-5 py-4">
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

      {/* CORE CAPABILITIES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
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

      {/* OPERATING MODEL */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <div className="max-w-3xl">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8ff9d]">
                Operating Model
              </div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How We Operate</h2>
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 md:flex-row md:items-center md:justify-between"
            >
              {["Sourcing", "Coordination", "Delivery", "Execution", "Scale"].map((step, index) => (
                <React.Fragment key={step}>
                  <div className="text-lg font-medium text-white/90">{step}</div>
                  {index < 4 && <div className="hidden text-[#c8f701] md:block">→</div>}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-300">
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

      {/* VISION & MISSION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
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

      {/* LEADERSHIP */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
            <SectionHeader eyebrow="Leadership" title="Leadership" />
            <motion.div variants={fadeUp} className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Kwanza Capital Africa is led by a founder with a background in computing,
                procurement, and tender management, combining technical capability with operational
                execution.
              </p>
              <p>
                The company is built on a practical understanding of both systems and real-world
                delivery — ensuring that strategy translates into results.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
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

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
    </div>
  );
}