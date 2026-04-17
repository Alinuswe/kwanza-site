"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, PrimaryButton, SectionHeader, stagger, SurfaceCard } from "@/app/components/ui";

export default function AboutPage() {
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

  const beliefs = [
    "Execution matters more than intent",
    "Systems outperform improvisation",
    "Reliability is a competitive advantage",
    "Scale is built through structure, not speed",
  ];

  return (
    <PageShell>
      <section className="px-6 pb-20 pt-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                About Kwanza Capital Africa
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-tight md:text-6xl">
                Built on Systems. Driven by Execution.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                We are an industrial procurement and energy solutions company focused on structured sourcing, reliable infrastructure,
                and disciplined project execution for mission-critical environments.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <SurfaceCard>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Operating Principles</p>
                <div className="mt-5 space-y-3">
                  {beliefs.map((belief) => (
                    <div key={belief} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {belief}
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Problem to Solution" title="The gap we address" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <SurfaceCard>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Problem</p>
              <div className="mt-5 space-y-3">
                {problems.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </SurfaceCard>
            <SurfaceCard>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Solution</p>
              <div className="mt-5 space-y-3">
                {solutions.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Execution Focus"
              title="Structured to support environments where reliability is non-negotiable"
              description="Our model is purpose-built for long-term performance, with consistency at every stage from sourcing to delivery."
            />
            <motion.div variants={fadeUp} className="mt-10">
              <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
