"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, PrimaryButton, SecondaryButton, SectionHeader, stagger, SurfaceCard, SystemGrid } from "@/app/components/ui";

export default function CapabilitiesPage() {
  const capabilities = [
    {
      id: "01",
      title: "Procurement Systems & Sourcing",
      details:
        "Structured procurement processes from supplier evaluation to delivery management, designed for quality, compliance, and continuity.",
    },
    {
      id: "02",
      title: "Energy Systems Deployment",
      details:
        "Solar and hybrid solutions tailored for operational resilience in environments with constrained or unstable grid access.",
    },
    {
      id: "03",
      title: "Tender & Contract Execution",
      details:
        "Execution frameworks that maintain control over scope, timelines, and obligations throughout the contract lifecycle.",
    },
    {
      id: "04",
      title: "Infrastructure & Systems Implementation",
      details:
        "Deployment of ICT systems and operational infrastructure to strengthen readiness and long-term performance.",
    },
  ];

  const differentiators = [
    "Systems-driven execution",
    "Structured procurement methodology",
    "Cross-sector operational delivery",
    "Reliability-first implementation",
    "Compliance-focused governance",
  ];

  const capabilityOutcomes = [
    "Reduced procurement uncertainty",
    "Faster mobilization for awarded projects",
    "Improved infrastructure continuity",
    "Consistent reporting and decision visibility",
  ];

  return (
    <PageShell>
      <section className="relative overflow-hidden px-6 pb-24 pt-10 lg:px-10">
        <SystemGrid className="opacity-35" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
                Capabilities
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-tight md:text-6xl">
                Built for complex procurement and execution environments
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Our capabilities are configured for organizations that require predictable outcomes, structured delivery controls, and operational reliability.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <SurfaceCard className="bg-slate-50">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Differentiators</p>
                <div className="mt-5 space-y-3">
                  {differentiators.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Capability Set"
            title="Execution capabilities built for consistency and scale"
            description="Each capability can be deployed independently or integrated into an end-to-end delivery model."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
              <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -4 }}>
                <SurfaceCard>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Capability {item.id}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.details}</p>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Outcome Focus"
              title="Capabilities tied to measurable business outcomes"
              description="Our engagements are engineered to improve continuity, predictability, and delivery confidence."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {capabilityOutcomes.map((outcome) => (
                <motion.div key={outcome} variants={fadeUp}>
                  <SurfaceCard className="bg-slate-50">
                    <p className="text-base text-slate-700">{outcome}</p>
                  </SurfaceCard>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
              <SecondaryButton href="/services">View Services</SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
