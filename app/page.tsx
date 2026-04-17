"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

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

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

function AnimatedNetwork() {
  const nodes = [
    { id: 1, x: "16%", y: "26%", label: "Supply" },
    { id: 2, x: "46%", y: "14%", label: "Energy" },
    { id: 3, x: "79%", y: "29%", label: "Execution" },
    { id: 4, x: "29%", y: "73%", label: "Infrastructure" },
    { id: 5, x: "66%", y: "76%", label: "Systems" },
  ];

  const lines = [
    { x1: "16%", y1: "26%", x2: "46%", y2: "14%" },
    { x1: "46%", y1: "14%", x2: "79%", y2: "29%" },
    { x1: "16%", y1: "26%", x2: "29%", y2: "73%" },
    { x1: "29%", y1: "73%", x2: "66%", y2: "76%" },
    { x1: "79%", y1: "29%", x2: "66%", y2: "76%" },
    { x1: "46%", y1: "14%", x2: "66%", y2: "76%" },
  ];

  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-[#f8ffd9] shadow-[0_30px_100px_rgba(15,23,42,0.12)]">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 16px", "0px 0px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {lines.map((line, index) => (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={index % 2 === 0 ? "rgba(200,247,1,0.6)" : "rgba(15,23,42,0.18)"}
            strokeWidth="0.45"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.2 + index * 0.14,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.88, y: 12 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.7, delay: 0.3 + index * 0.12 },
            scale: { duration: 0.7, delay: 0.3 + index * 0.12 },
            y: {
              duration: 4.2 + index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.06 }}
        >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#d9f86d] bg-white/90 shadow-[0_15px_35px_rgba(15,23,42,0.12)] backdrop-blur transition-all duration-300 group-hover:border-[#c8f701]">
            <motion.div
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: "#c8f701" }}
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />
          </div>

          <div className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
            {node.label}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#e6f7a6] bg-white/80 px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.8 }}
      >
        <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-medium text-slate-950">Operational Network</span>
          <span className="text-slate-600">Procurement • Energy • Execution • Systems</span>
        </div>
      </motion.div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description, light = false }: SectionHeaderProps) {
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

function BrandButton({
  children,
  dark = true,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 ${
        dark
          ? "bg-slate-950 text-white hover:bg-slate-800"
          : "border border-[#dff57a] bg-[#f7ffd1] text-slate-950 hover:border-[#c8f701] hover:bg-[#f2ffc0]"
      }`}
      style={
        dark
          ? {
              boxShadow: "0 14px 34px rgba(200,247,1,0.18)",
            }
          : undefined
      }
    >
      {children}
    </motion.button>
  );
}

export default function KwanzaHomepage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <motion.div
        className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
            Kwanza Capital Africa
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.06, duration: 0.45 }}
              >
                <Link
                  href={item.href}
                  className="text-sm text-slate-600 transition-colors duration-300 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <BrandButton>Request a Quote</BrandButton>
        </div>
      </motion.div>

      <main>
        <section className="relative overflow-hidden pt-32 md:pt-40">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top, rgba(200,247,1,0.16), transparent 34%)",
            }}
          />

          <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center rounded-full border border-[#e0f67e] bg-[#f8ffd8] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700 shadow-sm"
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
                Delivering reliable supply, power systems, and project execution for mining,
                infrastructure, and enterprise clients across Zambia.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <BrandButton>
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </BrandButton>

                <Link href="#capabilities">
                  <BrandButton dark={false}>View Capabilities</BrandButton>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <AnimatedNetwork />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-gradient-to-r from-slate-50 via-[#fbffe9] to-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65 }}
              className="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between"
            >
              <span className="font-medium text-slate-900">
                Supporting operations across mining, public infrastructure, and enterprise
                environments.
              </span>
              <span>Reliable sourcing • Structured delivery • Scalable systems</span>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
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
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#dff57a] hover:shadow-[0_20px_60px_rgba(200,247,1,0.10)]"
              >
                <motion.div
                  className="mb-6 h-px w-12 bg-slate-300"
                  whileHover={{ width: 80 }}
                  transition={{ duration: 0.3 }}
                />
                <div
                  className="mb-5 h-2 w-14 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(200,247,1,0.95), rgba(200,247,1,0.35))",
                  }}
                />
                <h3 className="text-2xl font-medium tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="industries"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="relative overflow-hidden bg-slate-950"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <SectionHeader
              eyebrow="Industries"
              title="Focused on sectors where precision and continuity are critical"
              description="We operate across environments that require dependable sourcing, structured compliance, and disciplined project execution."
              light
            />

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {industries.map((industry) => (
                <motion.div
                  key={industry}
                  variants={fadeUp}
                  whileHover={{ x: 4, y: -2 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 text-lg font-medium text-white/90 transition-all duration-300 hover:border-[#c8f701]/50 hover:bg-white/[0.06]"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="capabilities"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
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
                whileHover={{ y: -3 }}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-[#fbffe8] px-6 py-5 transition-all duration-300 hover:border-[#dff57a]"
              >
                <div
                  className="mt-1 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "#c8f701" }}
                />
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
          <div className="relative overflow-hidden rounded-[32px] border border-[#e4f89a] bg-gradient-to-br from-[#fbffe8] via-white to-slate-50 px-8 py-12 md:px-12 md:py-16">
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Capability
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Built around disciplined procurement, supplier coordination, and execution systems
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Our model is designed to support complex sourcing requirements and long-term
                  project delivery with a clear path toward scalable regional operations.
                </p>
              </div>

              <BrandButton>View Full Capabilities</BrandButton>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7 }}
          className="border-t border-slate-200"
        >
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Engage
            </div>

            <motion.h2
              className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Have a project, requirement, or tender?
            </motion.h2>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.7 }}
            >
              Engage with us for structured sourcing, supply, and delivery aligned with operational
              and procurement requirements.
            </motion.p>

            <div className="mt-10 flex justify-center">
              <BrandButton>
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </BrandButton>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200 bg-gradient-to-r from-slate-50 via-[#fbffe7] to-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
              Kwanza Capital Africa Limited
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">Lusaka, Zambia</p>
          </div>

          <div className="grid gap-3 text-sm text-slate-600">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors duration-300 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors duration-300 hover:text-slate-950"
                >
                  {item.label}
                </a>
              )
            )}
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