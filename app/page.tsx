import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
              stroke="rgba(15,23,42,0.18)"
              strokeWidth="0.45"
            />
            <motion.circle
              r="1.1"
              fill="rgba(15,23,42,0.7)"
              initial={{ opacity: 0.2, offsetDistance: "0%" }}
              animate={{ opacity: [0.2, 1, 0.2], offsetDistance: ["0%", "100%"] }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.25,
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
          transition={{ duration: 0.7, delay: 0.2 + index * 0.12 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-slate-900/10 blur-xl"
            animate={{ scale: [1, 1.35, 1], opacity: [0.16, 0.3, 0.16] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
          />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-slate-300 bg-white/90 shadow-lg backdrop-blur transition-colors duration-300 group-hover:border-slate-500">
            <div className="h-3.5 w-3.5 rounded-full bg-slate-900" />
          </div>
          <div className="mt-3 text-center text-xs font-medium tracking-[0.18em] text-slate-500 uppercase">
            {node.label}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-5 left-5 right-5 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 backdrop-blur-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
          <span className="font-medium text-slate-900">Operational Network</span>
          <span>Procurement • Energy • Execution • Systems</span>
        </div>
      </motion.div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div variants={fadeUp} className="max-w-3xl">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p> : null}
    </motion.div>
  );
}

export default function KwanzaHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="text-sm font-semibold tracking-[0.24em] text-slate-950 uppercase">
            Kwanza Capital Africa
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-slate-600 transition-colors duration-300 hover:text-slate-950"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-slate-800">
            Request a Quote
          </button>
        </div>
      </div>

      <main>
        <section className="relative overflow-hidden pt-32 md:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.07),transparent_42%)]" />
          <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 shadow-sm"
              >
                Structured procurement and energy systems
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 md:text-6xl lg:text-7xl"
              >
                Industrial Procurement and Energy Solutions
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
              >
                Delivering reliable supply, power systems, and project execution for mining, infrastructure, and enterprise clients across Zambia.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="group inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-900 transition-all duration-300 hover:border-slate-950 hover:bg-slate-50">
                  View Capabilities
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <AnimatedNetwork />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65 }}
              className="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between"
            >
              <span className="font-medium text-slate-900">Supporting operations across mining, public infrastructure, and enterprise environments.</span>
              <span>Reliable sourcing • Structured delivery • Scalable systems</span>
            </motion.div>
          </div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        >
          <SectionHeader
            eyebrow="Core Services"
            title="Built for contracts, projects, and long-term operational support"
            description="A disciplined service model designed for sectors where reliability, procurement accuracy, and execution matter." 
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-6 h-px w-12 bg-slate-300 transition-all duration-300 group-hover:w-20 group-hover:bg-slate-900" />
                <h3 className="text-2xl font-medium tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="bg-slate-950"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <SectionHeader
              eyebrow="Industries"
              title="Focused on sectors where precision and continuity are critical"
              description="We operate across environments that require dependable sourcing, structured compliance, and disciplined project execution."
            />

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {industries.map((industry) => (
                <motion.div
                  key={industry}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 text-lg font-medium text-white/90 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        >
          <SectionHeader
            eyebrow="Why Work With Us"
            title="A systems-driven model built for reliability and scale"
            description="We are building around disciplined procurement, delivery intelligence, and operational clarity rather than generic contracting." 
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 px-6 py-5"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-950" />
                <div className="text-base leading-7 text-slate-700">
                  <span className="font-medium text-slate-950">0{index + 1}. </span>
                  {value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-6 pb-24 lg:px-10"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-8 py-12 md:px-12 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_36%)]" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Capability</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Built around disciplined procurement, supplier coordination, and execution systems
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Our model is designed to support complex sourcing requirements and long-term project delivery with a clear path toward scalable regional operations.
                </p>
              </div>
              <button className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
                View Full Capabilities
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7 }}
          className="border-t border-slate-200"
        >
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Engage</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Have a project, requirement, or tender?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Engage with us for structured sourcing, supply, and delivery aligned with operational and procurement requirements.
            </p>
            <div className="mt-10 flex justify-center">
              <button className="group inline-flex items-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">Kwanza Capital Africa Limited</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">Lusaka, Zambia</p>
          </div>
          <div className="grid gap-3 text-sm text-slate-600">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition-colors duration-300 hover:text-slate-950">
                {item}
              </a>
            ))}
          </div>
          <div className="text-sm leading-7 text-slate-600">
            <div>info@kwanzacapitalafrica.com</div>
            <div>+260 XXX XXX XXX</div>
          </div>
        </div>
        <div className="border-t border-slate-200 px-6 py-5 text-center text-xs tracking-[0.18em] text-slate-500 uppercase">
          © Kwanza Capital Africa Limited
        </div>
      </footer>
    </div>
  );
}
