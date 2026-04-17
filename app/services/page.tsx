"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, PrimaryButton, SecondaryButton, SectionHeader, stagger, SurfaceCard, SystemGrid } from "@/app/components/ui";

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Industrial Procurement",
      overview: "Structured sourcing for mission-critical operations.",
      details:
        "We coordinate suppliers, procurement workflows, and delivery execution with quality and compliance controls across the full procurement lifecycle.",
      points: [
        "Supplier identification and evaluation",
        "Procurement planning and coordination",
        "Logistics and delivery oversight",
        "Compliance-aligned documentation",
      ],
    },
    {
      id: "02",
      title: "Energy Systems Deployment",
      overview: "Scalable solar and hybrid systems for continuity.",
      details:
        "Our team designs and deploys resilient power solutions tailored to operational environments with unstable or limited grid infrastructure.",
      points: ["System design and sizing", "Deployment and implementation", "Operational continuity planning", "Performance optimization"],
    },
    {
      id: "03",
      title: "Tender & Contract Execution",
      overview: "Disciplined delivery of awarded opportunities.",
      details:
        "We execute tenders and contracts through structured controls that maintain alignment to scope, milestones, and compliance requirements.",
      points: ["Execution planning", "Timeline and milestone management", "Stakeholder coordination", "Performance tracking and reporting"],
    },
    {
      id: "04",
      title: "ICT & Infrastructure",
      overview: "Operational systems and supporting infrastructure.",
      details:
        "We deliver ICT systems, hardware, and supporting infrastructure to strengthen capability, reliability, and operational readiness.",
      points: ["Systems and hardware sourcing", "Infrastructure deployment", "Integration support", "Operational handover"],
    },
  ];

  const deliveryAssurance = [
    "Scope controls and documented acceptance criteria",
    "Structured supplier and partner coordination",
    "Milestone-led reporting cadence",
    "Safety, compliance, and governance alignment",
  ];

  return (
    <PageShell>
      <section className="relative overflow-hidden px-6 pb-24 pt-10 lg:px-10">
        <SystemGrid className="opacity-35" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
              Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-5xl text-5xl font-semibold tracking-tight md:text-6xl">
              Delivery capabilities for complex procurement and operational execution
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-4xl text-lg leading-8 text-slate-600 md:text-xl">
              Our services are designed for organizations that need structured systems, reliable implementation, and strong execution discipline.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Core Offerings"
            title="Comprehensive services built for reliability, compliance, and scale"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((item) => (
              <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -4 }}>
                <SurfaceCard>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Service {item.id}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 font-medium text-slate-700">{item.overview}</p>
                  <p className="mt-3 leading-7 text-slate-600">{item.details}</p>
                  <div className="mt-6 space-y-2.5">
                    {item.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                        {point}
                      </div>
                    ))}
                  </div>
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
              eyebrow="Delivery Assurance"
              title="Governance and control built into every engagement"
              description="Our teams work within a measurable execution framework that protects project continuity and accountability."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {deliveryAssurance.map((point) => (
                <motion.div key={point} variants={fadeUp}>
                  <SurfaceCard className="bg-slate-50">
                    <p className="text-base text-slate-700">{point}</p>
                  </SurfaceCard>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
              <SecondaryButton href="/capabilities">View Capabilities</SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
