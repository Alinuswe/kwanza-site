"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, PrimaryButton, SectionHeader, stagger, SurfaceCard } from "@/app/components/ui";

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

  return (
    <PageShell>
      <section className="px-6 pb-20 pt-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
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

      <section className="border-y border-slate-200 bg-white px-6 py-20 lg:px-10">
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

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Next Step"
            title="Discuss your sector-specific requirements with our team"
            description="We structure engagement around procurement priorities, infrastructure constraints, and execution needs unique to your environment."
          />
          <div className="mt-10">
            <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
