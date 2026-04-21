"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/app/components/site-shell";
import { HeroSignalLines, HeroWaveField, SystemGrid, TechWaveMesh, fadeUp, stagger } from "@/app/components/ui";

type LegalSection = {
  title: string;
  body: string[];
};

export function LegalPageTemplate({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-10">
        <SystemGrid className="opacity-35" />
        <HeroWaveField className="opacity-45 sm:opacity-70" />
        <HeroSignalLines className="opacity-20 sm:opacity-35" />
        <TechWaveMesh className="opacity-20 sm:opacity-35" />

        <div className="relative mx-auto max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
              {eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl space-y-5">
          {sections.map((section) => (
            <motion.article
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_-24px_rgba(15,23,42,0.5)] sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">{section.title}</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
