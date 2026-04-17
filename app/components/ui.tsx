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

  return (
    <motion.div variants={fadeUp} className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
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
      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-700"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 hover:text-slate-950"
    >
      {children}
    </Link>
  );
}

export function SurfaceCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8 ${className}`}>{children}</div>
  );
}
