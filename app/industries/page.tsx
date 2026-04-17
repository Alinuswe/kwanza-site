"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, HeroSignalLines, HeroWaveField, PrimaryButton, SecondaryButton, SectionHeader, stagger, SurfaceCard, SystemGrid, TechWaveMesh } from "@/app/components/ui";

export default function IndustriesPage() {
  const industries = [
    {
      id: "01",
      title: "Mining",
      description:
        "Supporting mining environments with procurement reliability, resilient power systems, and execution coordination in remote and high-demand settings.",
      focus: ["Equipment and material sourcing", "Energy continuity", "Project delivery governance"],
    },
    {
      id: "02",
      title: "Public Sector",
      description:
        "Delivering structured tender execution and infrastructure implementation aligned with compliance, accountability, and long-term service delivery.",
      focus: ["Tender participation support", "Compliance-aligned execution", "Public infrastructure delivery"],
    },
    {
      id: "03",
      title: "Construction & Infrastructure",
      description:
        "Providing procurement, systems deployment, and schedule-focused coordination to keep major infrastructure projects moving predictably.",
      focus: ["Supply chain control", "Site-ready systems support", "Milestone management"],
    },
    {
      id: "04",
      title: "Commercial & Industrial Facilities",
      description:
        "Enabling facilities to operate efficiently through reliable procurement, scalable power solutions, and operational systems deployment.",
      focus: ["Operational procurement", "Power and reliability upgrades", "Infrastructure readiness"],
    },
  ];

  const engagementDrivers = [
    "High uptime requirements",
    "Compliance-heavy procurement environments",
    "Infrastructure delivery under strict schedules",
    "Demand for visibility and controlled implementation",
  ];

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white px-6 pb-24 pt-10 lg:px-10">
        <SystemGrid className="opacity-35" />
        <HeroWaveField className="opacity-70" />
        <HeroSignalLines className="opacity-45" />
        <TechWaveMesh className="opacity-45" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
              Industries
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-5xl text-5xl font-semibold tracking-tight md:text-6xl">
              Sector expertise tailored to high-demand operating environments
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-4xl text-lg leading-8 text-slate-600 md:text-xl">
              We work across sectors where execution reliability determines operational outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Core Sectors"
            title="Structured delivery support across diverse industries"
            description="Each sector engagement is aligned to practical constraints, compliance needs, and long-term performance requirements."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <motion.div key={industry.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -4 }}>
                <SurfaceCard>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Industry {industry.id}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{industry.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{industry.description}</p>
                  <div className="mt-6 space-y-2.5">
                    {industry.focus.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Engagement Drivers"
              title="Where Kwanza Capital Africa creates the most value"
              description="Our capability set is built for organizations facing operational complexity, execution risk, and infrastructure pressure."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {engagementDrivers.map((driver) => (
                <motion.div key={driver} variants={fadeUp}>
                  <SurfaceCard className="bg-slate-50">
                    <p className="text-base text-slate-700">{driver}</p>
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
