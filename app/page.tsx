"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import {
  fadeUp,
  PrimaryButton,
  SecondaryButton,
  SectionHeader,
  stagger,
  SurfaceCard,
} from "@/app/components/ui";

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

const industries = [
  "Mining",
  "Public Sector",
  "Construction and Infrastructure",
  "Commercial and Industrial Facilities",
];

function PremiumFlowGraphic() {
  const columns = [18, 34, 50, 66, 82];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6">
        {columns.map((x, idx) => (
          <motion.div
            key={x}
            className="h-10 rounded-2xl border border-slate-200 bg-slate-100"
            initial={{ x: -18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.12, duration: 0.55 }}
          >
            <motion.div
              className="h-full rounded-2xl bg-slate-800"
              initial={{ width: "0%" }}
              animate={{ width: `${x}%` }}
              transition={{ delay: 0.2 + idx * 0.14, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <p className="text-sm font-medium text-slate-800">Operational Delivery Flow</p>
        <p className="mt-1 text-sm text-slate-600">Sourcing • Validation • Deployment • Execution • Reporting</p>
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <PageShell>
      <section className="px-6 pb-20 pt-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
            >
              Structured procurement and energy systems
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Precision Infrastructure for Reliability-Critical Operations
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Kwanza Capital Africa delivers procurement, power systems, and disciplined project execution for sectors where
              consistency, compliance, and performance are non-negotiable.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
              <SecondaryButton href="/capabilities">View Capabilities</SecondaryButton>
            </motion.div>
          </motion.div>

          <PremiumFlowGraphic />
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <SectionHeader
              eyebrow="Core Services"
              title="Execution capabilities designed for structure, continuity, and scale"
              description="Our operating model combines procurement discipline with practical deployment capability across mission-critical environments."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <motion.div key={service.title} variants={fadeUp} whileHover={{ y: -4 }}>
                  <SurfaceCard>
                    <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  </SurfaceCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-20 lg:px-10">
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
                  <SurfaceCard className="bg-slate-50">
                    <p className="text-lg font-medium text-slate-900">{industry}</p>
                  </SurfaceCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
