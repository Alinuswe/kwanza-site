"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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
  light?: boolean;
};

type ServiceItem = {
  id: number;
  title: string;
  short: string;
  expanded: string;
};

function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div variants={fadeUp} className="max-w-3xl">
      <div
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${
          light ? "text-[#e8ff9d]" : "text-slate-500"
        }`}
      >
        {eyebrow}
      </div>

      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 text-base leading-7 md:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function ServiceAccordion({
  service,
  isOpen,
  onToggle,
}: {
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#dff57a]"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 px-8 py-7 text-left"
      >
        <div className="max-w-3xl">
          <div className="mb-4 h-2 w-14 rounded-full bg-[#c8f701]" />
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Service 0{service.id}
          </div>
          <h3 className="mt-3 text-2xl font-medium tracking-tight text-slate-950">
            {service.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {service.short}
          </p>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-200 px-8 pb-8 pt-6">
              <p className="max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
                {service.expanded}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [openId, setOpenId] = useState<number>(1);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Industrial Procurement",
      short: "Coordinated sourcing and supply of mission-critical materials.",
      expanded:
        "We manage end-to-end procurement processes including supplier identification, evaluation, sourcing, and delivery coordination. Our approach ensures consistency, compliance, and reliability across supply chains.",
    },
    {
      id: 2,
      title: "Energy Solutions",
      short: "Scalable solar and hybrid energy systems.",
      expanded:
        "We design and deploy energy systems tailored for operational continuity, including solar and hybrid solutions. Our focus is on reliability, efficiency, and long-term cost optimization.",
    },
    {
      id: 3,
      title: "Tender & Contract Execution",
      short: "Structured delivery of awarded contracts.",
      expanded:
        "We execute contracts through disciplined coordination, compliance management, and delivery oversight. Our systems ensure projects are completed on time, within scope, and aligned with requirements.",
    },
    {
      id: 4,
      title: "ICT & Infrastructure",
      short: "Systems, hardware, and enterprise infrastructure.",
      expanded:
        "We deploy ICT systems and infrastructure to support operational environments, including hardware supply, installation, and integration into existing systems.",
    },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/#industries" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950"
          >
            Kwanza Capital Africa
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors duration-300 ${
                  item.label === "Services"
                    ? "font-medium text-slate-950"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="rounded-full bg-[#c8f701] px-5 py-2.5 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      <main>
        <section className="px-6 pb-24 pt-32 md:pt-40">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
            >
              <div>
                <motion.div
                  variants={fadeUp}
                  className="mb-6 inline-flex rounded-full border border-[#dff57a] bg-[#f7ffd1] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-700"
                >
                  Services
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl"
                >
                  Structured Services Built for Execution
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl"
                >
                  Our services are designed to support procurement, infrastructure,
                  and energy requirements in environments where reliability,
                  compliance, and delivery precision are critical.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 h-2 w-16 rounded-full bg-[#c8f701]" />
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Service Model
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Independent capabilities delivered through one structured
                  operating model focused on reliability, compliance, and scale.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              <SectionHeader
                eyebrow="Expandable Services"
                title="Built to operate independently or as one unified system"
                description="Select a service to view the full delivery approach."
              />

              <div className="mt-14 space-y-6">
                {services.map((service) => (
                  <ServiceAccordion
                    key={service.id}
                    service={service}
                    isOpen={openId === service.id}
                    onToggle={() =>
                      setOpenId(openId === service.id ? 0 : service.id)
                    }
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionHeader
                eyebrow="Integration Model"
                title="Integrated Delivery Model"
                description="Each service operates independently or as part of a unified system."
                light
              />

              <motion.div
                variants={fadeUp}
                className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.04] p-8"
              >
                <div className="grid gap-4 md:grid-cols-4 md:items-center">
                  {["Sourcing", "Coordination", "Delivery", "Execution"].map(
                    (step, index, arr) => (
                      <React.Fragment key={step}>
                        <div className="text-center text-lg font-medium text-white/90">
                          {step}
                        </div>
                        {index < arr.length - 1 && (
                          <div className="hidden text-center text-[#c8f701] md:block">
                            →
                          </div>
                        )}
                      </React.Fragment>
                    )
                  )}
                </div>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-10 max-w-4xl text-lg leading-8 text-slate-300"
              >
                We integrate procurement, infrastructure, and execution into a
                structured delivery model designed for scalability and consistency.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Engage
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Engage with a partner focused on structured execution and long-term capability
              </h2>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="rounded-full bg-[#c8f701] px-6 py-3 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/about"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all hover:border-slate-950"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
              Kwanza Capital Africa Limited
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Lusaka, Zambia
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-600">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/#capabilities">Capabilities</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <div className="text-sm leading-7 text-slate-600">
            <div>info@kwanzacapitalafrica.com</div>
            <div>+260 762 336 792</div>
          </div>
        </div>

        <div className="border-t border-slate-200 px-6 py-5 text-center text-xs uppercase tracking-[0.18em] text-slate-500">
          © Kwanza Capital Africa Limited
        </div>
      </footer>
    </div>
  );
}