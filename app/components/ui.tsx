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
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_-24px_rgba(15,23,42,0.55)] transition-transform duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-28px_rgba(15,23,42,0.62)] md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function SystemGrid({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:40px_40px] ${className}`}
      animate={{ backgroundPosition: ["0px 0px", "40px 24px", "0px 0px"] }}
      transition={{ duration: 28, ease: "linear", repeat: Infinity }}
    />
  );
}

export function HeroNetworkMatrix({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 8, y: 20 },
    { x: 18, y: 42 },
    { x: 30, y: 25 },
    { x: 38, y: 58 },
    { x: 52, y: 24 },
    { x: 60, y: 46 },
    { x: 72, y: 34 },
    { x: 84, y: 52 },
    { x: 92, y: 22 },
  ];

  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [4, 6],
    [5, 7],
    [6, 7],
    [6, 8],
  ] as const;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.svg
        viewBox="0 0 100 70"
        className="absolute right-[-4%] top-[8%] h-[84%] w-[70%] opacity-95"
        animate={{ x: [0, 12, 0], y: [0, -7, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {links.map(([from, to], idx) => {
          const a = nodes[from];
          const b = nodes[to];
          const path = `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
          return (
            <g key={`${from}-${to}`}>
              <path d={path} stroke="rgba(148,163,184,0.42)" strokeWidth="0.18" fill="none" />
              <motion.path
                d={path}
                stroke="#c8f701"
                strokeWidth="0.28"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="0.8 2.2"
                animate={{ strokeDashoffset: [6, 0], opacity: [0.2, 0.86, 0.2] }}
                transition={{ duration: 1.6 + idx * 0.22, repeat: Infinity, ease: "linear" }}
              />
            </g>
          );
        })}
        {nodes.map((node, idx) => (
          <g key={`${node.x}-${node.y}`}>
            <circle cx={node.x} cy={node.y} r="0.52" fill="#c8f701" opacity="0.95" />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="0.52"
              fill="none"
              stroke="rgba(200,247,1,0.65)"
              strokeWidth="0.18"
              animate={{ r: [0.52, 2.4], opacity: [0.92, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: idx * 0.2, ease: "easeOut" }}
            />
          </g>
        ))}
      </motion.svg>
    </div>
  );
}

export function TechWaveMesh({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-x-[-16%] top-[18%] h-[62%] opacity-75"
        animate={{ x: [0, 20, -8, 0], y: [0, 8, -4, 0] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      >
        <svg viewBox="0 0 1200 460" className="h-full w-full">
          {[
            "M-50 112 C100 72 236 196 392 146 C558 92 700 204 864 152 C980 118 1060 148 1240 120",
            "M-30 178 C122 150 250 264 420 210 C588 152 742 258 904 206 C1024 168 1092 194 1240 172",
            "M-10 250 C152 220 292 326 456 276 C628 220 770 320 940 274 C1074 238 1120 256 1240 238",
          ].map((path, idx) => (
            <g key={path}>
              <path d={path} stroke="rgba(148,163,184,0.18)" strokeWidth="1.1" fill="none" />
              <motion.path
                d={path}
                stroke="#c8f701"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="6 12"
                animate={{ strokeDashoffset: [0, -140], opacity: [0.24, 0.62, 0.24] }}
                transition={{ duration: 5.2 + idx, ease: "linear", repeat: Infinity }}
                opacity={0.52}
              />
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

export function HeroWaveField({
  className = "",
  strength = "subtle",
}: {
  className?: string;
  strength?: "subtle" | "strong";
}) {
  const waveOpacity = strength === "strong" ? 0.78 : 0.34;
  const dashOpacity = strength === "strong" ? 0.44 : 0.22;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -right-[12%] top-[8%] h-[72%] w-[72%]"
        animate={{ x: [0, 20, -9, 0], y: [0, -15, 10, 0], rotate: [0, 1.2, -0.8, 0] }}
        transition={{ duration: strength === "strong" ? 13 : 24, ease: "easeInOut", repeat: Infinity }}
      >
        <svg viewBox="0 0 900 520" className="h-full w-full">
          <defs>
            <linearGradient id="hero-lime-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(200,247,1,0)" />
              <stop offset="45%" stopColor="rgba(200,247,1,0.72)" />
              <stop offset="100%" stopColor="rgba(200,247,1,0)" />
            </linearGradient>
          </defs>
          {[
            "M-20 100 C120 120 190 12 320 44 C470 82 540 8 700 48 C810 74 890 30 940 50",
            "M-20 165 C130 190 212 92 342 122 C495 160 560 82 720 126 C822 152 910 102 960 122",
            "M-20 240 C130 266 222 168 352 196 C505 226 578 148 742 194 C845 222 922 168 972 188",
            "M-20 320 C142 346 236 258 370 286 C518 314 600 240 760 280 C865 308 936 258 986 280",
            "M-20 402 C146 430 256 342 388 370 C534 396 625 324 790 360 C888 388 950 336 1000 360",
          ].map((path, idx) => (
            <g key={path}>
              <path d={path} stroke={`rgba(148,163,184,${dashOpacity})`} strokeWidth="0.85" fill="none" />
              <motion.path
                d={path}
                stroke="url(#hero-lime-wave)"
                strokeWidth={strength === "strong" ? 1.5 : 1.2}
                strokeLinecap="round"
                fill="none"
                strokeDasharray="8 17"
                animate={{ strokeDashoffset: [0, -180], opacity: [waveOpacity * 0.55, waveOpacity, waveOpacity * 0.55] }}
                transition={{ duration: (strength === "strong" ? 3.9 : 7.2) + idx * 0.9, ease: "linear", repeat: Infinity }}
                opacity={waveOpacity}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      <motion.div
        className="absolute -left-[10%] bottom-[-14%] h-64 w-64 rounded-full border border-slate-300/55"
        animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-[12%] top-[20%] h-32 w-32 rounded-full border border-slate-300/45"
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
        transition={{ duration: 9.5, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
      />
    </div>
  );
}

export function HeroSignalLines({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg viewBox="0 0 1000 460" className="absolute inset-x-0 top-8 h-full w-full opacity-60">
        {[
          "M-80 70 C120 30 230 132 390 80 C560 24 690 118 860 70 C930 46 980 54 1060 40",
          "M-90 140 C100 106 236 202 396 152 C562 100 680 196 840 146 C925 120 992 126 1070 114",
          "M-90 220 C114 184 254 282 414 234 C562 190 702 276 856 226 C940 198 996 208 1074 196",
          "M-90 300 C118 266 256 356 424 312 C580 266 726 350 882 302 C950 282 1000 278 1078 272",
        ].map((path, idx) => (
          <motion.path
            key={path}
            d={path}
            stroke="#c8f701"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="1 7"
            animate={{ strokeDashoffset: [14, 0], opacity: [0.14, 0.46, 0.14] }}
            transition={{ duration: 3.5 + idx * 0.5, ease: "linear", repeat: Infinity, delay: idx * 0.24 }}
          />
        ))}
      </svg>
    </div>
  );
}
