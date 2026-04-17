"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, PrimaryButton, SectionHeader, stagger, SurfaceCard } from "@/app/components/ui";

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
      points: [
        "System design and sizing",
        "Deployment and implementation",
        "Operational continuity planning",
        "Performance optimization",
      ],
    },
    {
      id: "03",
      title: "Tender & Contract Execution",
      overview: "Disciplined delivery of awarded opportunities.",
      details:
        "We execute tenders and contracts through structured controls that maintain alignment to scope, milestones, and compliance requirements.",
      points: [
        "Execution planning",
        "Timeline and milestone management",
        "Stakeholder coordination",
        "Performance tracking and reporting",
      ],
    },
    {
      id: "04",
      title: "ICT & Infrastructure",
      overview: "Operational systems and supporting infrastructure.",
      details:
        "We deliver ICT systems, hardware, and supporting infrastructure to strengthen capability, reliability, and operational readiness.",
      points: [
        "Systems and hardware sourcing",
        "Infrastructure deployment",
        "Integration support",
        "Operational handover",
      ],
    },
  ];

  return (
    <PageShell>
      <section className="px-6 pb-20 pt-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
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

      <section className="border-y border-slate-200 bg-white px-6 py-20 lg:px-10">
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

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Engagement"
            title="Need a delivery partner with a structured approach?"
            description="Share your project scope and our team will respond with a focused, execution-oriented path forward."
          />
          <div className="mt-10">
            <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
