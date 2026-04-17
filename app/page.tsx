"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, PrimaryButton, SecondaryButton, SectionHeader, stagger, SurfaceCard, SystemGrid } from "@/app/components/ui";

const services = [
  {
    title: "Industrial Procurement",
    description:
      "Sourcing and supply of mission-critical equipment, materials, and components for uninterrupted operations.",
  },
  {
    title: "Energy Solutions",
    description:
      "Design and deployment of solar and hybrid power systems to improve continuity and resilience.",
  },
  {
    title: "Tender & Contract Execution",
    description:
      "Structured delivery of awarded contracts with disciplined coordination, compliance, and oversight.",
  },
  {
    title: "ICT & Infrastructure",
    description:
      "Deployment of systems, hardware, and supporting infrastructure across enterprise environments.",
  },
];

const performancePillars = [
  "Governed sourcing and supplier assurance",
  "Systems-led execution controls",
  "Technical deployment readiness",
  "Operational reporting and accountability",
];

const industries = [
  "Mining",
  "Public Sector",
  "Construction and Infrastructure",
  "Commercial and Industrial Facilities",
];

const deliveryIndicators = [
  { label: "Programs delivered", value: "120+" },
  { label: "Supplier network", value: "350+" },
  { label: "Average uptime target", value: "99.2%" },
  { label: "Execution regions", value: "12" },
];

const networkNodes = [
  { x: 12, y: 16, size: 8 },
  { x: 31, y: 28, size: 9 },
  { x: 18, y: 48, size: 8 },
  { x: 44, y: 57, size: 8 },
  { x: 62, y: 20, size: 9 },
  { x: 74, y: 40, size: 8 },
  { x: 85, y: 62, size: 9 },
  { x: 57, y: 74, size: 8 },
];

const networkLinks = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 4],
  [2, 3],
  [3, 7],
  [3, 5],
  [4, 5],
  [5, 6],
  [7, 6],
  [4, 7],
];

function OperationalNetworkPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[2rem] border border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 text-slate-100 shadow-[0_36px_70px_-44px_rgba(2,6,23,0.95)]"
    >
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:30px_30px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8f701]/70 to-transparent" />

      <div className="relative flex items-center justify-between border-b border-slate-700/80 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Live Operational Topology</p>
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-200"
          animate={{ borderColor: ["rgba(71,85,105,1)", "rgba(200,247,1,0.8)", "rgba(71,85,105,1)"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
          Synced
        </motion.span>
      </div>

      <div className="relative mt-6 h-[320px] rounded-2xl border border-slate-700/70 bg-slate-950/60 p-4">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {networkLinks.map(([from, to], idx) => {
            const a = networkNodes[from];
            const b = networkNodes[to];
            const path = `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
            return (
              <g key={`${from}-${to}`}>
                <path d={path} stroke="rgba(148,163,184,0.35)" strokeWidth="0.7" fill="none" />
                <motion.path
                  d={path}
                  stroke="#c8f701"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="2 10"
                  animate={{ strokeDashoffset: [12, 0] }}
                  transition={{ duration: 2.5 + idx * 0.2, repeat: Infinity, ease: "linear" }}
                  opacity={0.9}
                />
              </g>
            );
          })}

          {networkNodes.map((node, idx) => (
            <g key={`${node.x}-${node.y}`}>
              <circle cx={node.x} cy={node.y} r={node.size / 4.5} fill="#0f172a" stroke="rgba(200,247,1,0.8)" strokeWidth="0.6" />
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size / 3.2}
                fill="none"
                stroke="rgba(200,247,1,0.45)"
                strokeWidth="0.4"
                animate={{ r: [node.size / 4.5, node.size / 2.2], opacity: [0.7, 0.15] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: idx * 0.25, ease: "easeOut" }}
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
        {["Supply Coordination", "Energy Continuity", "Field Deployment", "Performance Reporting"].map((item, idx) => (
          <motion.div
            key={item}
            className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-xs text-slate-200"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3.2 + idx * 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 pb-24 pt-12 lg:px-10 lg:pt-14">
        <SystemGrid className="opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-100 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
              Structured procurement and energy systems
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Industrial Execution, Orchestrated With Precision and Systems Intelligence
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Kwanza Capital Africa aligns procurement, power, and deployment operations under one disciplined operating model—
              delivering measurable continuity for organizations where downtime, delay, and compliance drift are unacceptable.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
              <SecondaryButton href="/capabilities">View Capabilities</SecondaryButton>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {deliveryIndicators.map((indicator) => (
                <div key={indicator.label} className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 shadow-[0_20px_45px_-42px_rgba(15,23,42,0.7)]">
                  <p className="text-2xl font-semibold text-slate-950">{indicator.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">{indicator.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <OperationalNetworkPanel />
        </div>
      </section>

      <section className="relative px-6 py-24 lg:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHeader
              eyebrow="Operational Pillars"
              title="Built to maintain control across procurement, deployment, and execution"
              description="Our model creates visibility and measurable outcomes across complex delivery environments."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {performancePillars.map((pillar, idx) => (
                <motion.div key={pillar} variants={fadeUp}>
                  <SurfaceCard className="relative overflow-hidden border-slate-200 bg-gradient-to-b from-white to-slate-50">
                    <SystemGrid className="opacity-15" />
                    <div className="relative flex items-start gap-4">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c8f701]" />
                      <div>
                        <p className="text-base text-slate-700">{pillar}</p>
                        <p className="mt-2 text-sm text-slate-500">Control layer {String(idx + 1).padStart(2, "0")}</p>
                      </div>
                    </div>
                  </SurfaceCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHeader
              eyebrow="Core Services"
              title="Execution capabilities designed for structure, continuity, and scale"
              description="Our operating model combines procurement discipline with practical deployment capability across mission-critical environments."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service, idx) => (
                <motion.div key={service.title} variants={fadeUp} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 220, damping: 24 }}>
                  <SurfaceCard className="h-full border-slate-200 bg-gradient-to-b from-white to-slate-50">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-700">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  </SurfaceCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Industry Coverage"
              title="Trusted in operationally demanding sectors"
              description="We support organizations that require structured coordination, technical reliability, and disciplined implementation."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {industries.map((industry) => (
                <motion.div key={industry} variants={fadeUp}>
                  <SurfaceCard className="bg-gradient-to-b from-slate-50 to-white">
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
                      <p className="text-lg font-medium text-slate-900">{industry}</p>
                    </div>
                  </SurfaceCard>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
              <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
              <SecondaryButton href="/industries">Explore Industries</SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
