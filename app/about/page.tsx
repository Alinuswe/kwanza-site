"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { fadeUp, HeroSignalLines, HeroWaveField, PrimaryButton, SecondaryButton, SectionHeader, stagger, SurfaceCard, SystemGrid, TechWaveMesh } from "@/app/components/ui";

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

  const operatingModel = [
    "Define scope and risk boundaries",
    "Structure sourcing and technical pathways",
    "Execute with governance and milestone discipline",
    "Report outcomes and continuous improvements",
  ];

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-white px-6 pb-24 pt-10 lg:px-10">
        <SystemGrid className="opacity-35" />
        <HeroWaveField className="opacity-75" />
        <HeroSignalLines className="opacity-50" />
        <TechWaveMesh className="opacity-45" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
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

      <section className="border-y border-slate-300 bg-gradient-to-b from-white via-slate-100 to-slate-200 px-6 py-24 lg:px-10">
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

      <section className="bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Execution Model"
              title="A disciplined operating sequence from brief to delivery"
              description="Every engagement follows a sequence that protects quality, timeline control, and governance integrity."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {operatingModel.map((step, index) => (
                <motion.div variants={fadeUp} key={step}>
                  <SurfaceCard className="bg-slate-50">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Stage 0{index + 1}</p>
                    <p className="mt-3 text-base text-slate-700">{step}</p>
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
