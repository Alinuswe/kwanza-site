import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navItems = ["Home", "About", "Services", "Industries", "Capabilities", "Contact"];

const services = [
  {
    title: "Industrial Procurement",
    description:
      "Sourcing and supply of equipment, materials, and mission-critical components for operational continuity.",
  },
  {
    title: "Energy Solutions",
    description:
      "Design, supply, and deployment of solar and hybrid power systems for resilient operations.",
  },
  {
    title: "Tender and Contract Execution",
    description:
      "Structured delivery of awarded contracts with disciplined coordination, compliance, and execution.",
  },
  {
    title: "ICT and Infrastructure",
    description:
      "Deployment of systems, hardware, and supporting infrastructure for enterprise environments.",
  },
];

const industries = [
  "Mining",
  "Public Sector",
  "Construction and Infrastructure",
  "Commercial and Industrial Facilities",
];

const values = [
  "Structured procurement processes",
  "Supplier and sourcing network coordination",
  "Technical and operational execution capability",
  "Compliance-oriented delivery standards",
  "Scalable systems for long-term growth",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function AnimatedNetwork() {
  const nodes = [
    { id: 1, x: "18%", y: "24%", label: "Supply" },
    { id: 2, x: "48%", y: "14%", label: "Energy" },
    { id: 3, x: "76%", y: "30%", label: "Execution" },
    { id: 4, x: "28%", y: "70%", label: "Infrastructure" },
    { id: 5, x: "64%", y: "74%", label: "Systems" },
  ];

  const lines = [
    { x1: "18%", y1: "24%", x2: "48%", y2: "14%" },
    { x1: "48%", y1: "14%", x2: "76%", y2: "30%" },
    { x1: "18%", y1: "24%", x2: "28%", y2: "70%" },
    { x1: "28%", y1: "70%", x2: "64%", y2: "74%" },
    { x1: "76%", y1: "30%", x2: "64%", y2: "74%" },
    { x1: "48%", y1: "14%", x2: "64%", y2: "74%" },
  ];

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map((line, index) => (
          <g key={index}>
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(15,23,42,0.18)"
              strokeWidth="0.45"
            />
            <motion.circle
              r="1.1"
              fill="rgba(15,23,42,0.7)"
              initial={{ opacity: 0.2, offsetDistance: "0%" }}
              animate={{ opacity: [0.2, 1, 0.2], offsetDistance: ["0%", "100%"] }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.25,
              }}
              style={{
                offsetPath: `path('M ${parseFloat(line.x1)} ${parseFloat(line.y1)} L ${parseFloat(line.x2)} ${parseFloat(line.y2)}')`,
              }}
            />
          </g>
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.12 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-slate-900/10 blur-xl"
            animate={{ scale: [1, 1.35, 1], opacity: [0.16, 0.3, 0.16] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
          />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-slate-300 bg-white/90 shadow-lg backdrop-blur transition-colors duration-300 group-hover:border-slate-500">
            <div className="h-3.5 w-3.5 rounded-full bg-slate-900" />
          </div>
          <div className="mt-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            {node.label}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-5 left-5 right-5 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 backdrop-blur-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
          <span className="font-medium text-slate-900">Operational Network</span>
          <span>Procurement • Energy • Execution • Systems</span>
        </div>
      </motion.div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div variants={fadeUp} className="max-w-3xl">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}

export default function KwanzaHomepage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      {/* keep the rest of your JSX exactly here */}
    </div>
  );
}