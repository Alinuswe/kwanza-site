"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const labelJustify = align === "center" ? "justify-center" : "justify-start";

  return (
    <motion.div variants={fadeUp} className={`max-w-3xl ${alignment}`}>
      <p className={`mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 ${labelJustify}`}>
        <span className="h-px w-8 bg-[#c8f701]" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p> : null}
    </motion.div>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-800"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#c8f701]" />
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 hover:text-slate-950"
    >
      {children}
    </Link>
  );
}

export function SurfaceCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_-24px_rgba(15,23,42,0.55)] md:p-8 ${className}`}>
      {children}
    </div>
  );
}

export function SystemGrid({ className = "" }: { className?: string }) {
  return <div className={`pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:40px_40px] ${className}`} />;
}
