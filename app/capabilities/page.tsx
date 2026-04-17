"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function CapabilitiesPage() {
  const capabilities = [
    {
      id: "01",
      title: "Procurement Systems & Sourcing",
      overview:
        "Structured procurement processes designed for consistency and scale.",
      details:
        "We manage sourcing workflows from supplier identification to delivery coordination, ensuring quality, compliance, and reliability across supply chains.",
      points: [
        "Supplier sourcing and evaluation",
        "Vendor coordination",
        "Procurement lifecycle management",
        "Supply chain optimization",
      ],
    },
    {
      id: "02",
      title: "Energy Systems Deployment",
      overview: "Design and deployment of scalable power solutions.",
      details:
        "We deliver solar and hybrid energy systems tailored for operational continuity, particularly in environments with unstable or limited grid access.",
      points: [
        "Solar and hybrid system design",
        "Installation and deployment",
        "Energy optimization strategies",
        "Long-term operational support",
      ],
    },
    {
      id: "03",
      title: "Tender & Contract Execution",
      overview: "Disciplined execution of awarded contracts.",
      details:
        "We coordinate awarded tenders through structured execution frameworks, ensuring alignment with scope, timelines, and compliance requirements.",
      points: [
        "Tender participation and structuring",
        "Contract execution management",
        "Compliance and documentation",
        "Delivery oversight",
      ],
    },
    {
      id: "04",
      title: "Infrastructure & Systems Implementation",
      overview: "Deployment of systems and operational infrastructure.",
      details:
        "We provide infrastructure solutions including ICT systems, hardware deployment, and integration into operational environments.",
      points: [
        "ICT systems deployment",
        "Hardware sourcing and installation",
        "Infrastructure coordination",
        "Systems integration",
      ],
    },
  ];

  const differentiators = [
    "Systems-driven execution, not ad hoc delivery",
    "Structured procurement rather than transactional sourcing",
    "Capability to operate across sectors",
    "Focus on reliability and long-term performance",
    "Alignment with compliance-driven environments",
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Contact", href: "/contact" },
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
                  item.label === "Capabilities"
                    ? "font-medium text-slate-950"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[#c8f701] px-5 py-2.5 text-sm font-medium text-black transition-all hover:scale-[1.04] hover:bg-[#b4e600]"
          >
            Request a Brief
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
                  Capabilities
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl"
                >
                  Built for Complex Procurement and Execution
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl"
                >
                  We deliver structured procurement, energy systems, and project
                  execution capabilities across sectors where reliability,
                  compliance, and scale are critical.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-5 h-2 w-16 rounded-full bg-[#c8f701]" />
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Positioning
                </div>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  We are not a general contractor. We are a systems-driven
                  operator built to deliver across procurement, infrastructure,
                  and energy environments.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Core Capabilities"
              title="Execution capabilities built for structure, consistency, and scale"
              description="Each capability is designed to operate independently or within a unified delivery framework."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {capabilities.map((item) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#dff57a]"
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Capability {item.id}
                  </div>

                  <div className="mb-4 h-2 w-14 rounded-full bg-[#c8f701]" />

                  <h3 className="text-2xl font-medium text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-medium text-slate-700">
                    {item.overview}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.details}
                  </p>

                  <div className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <SectionHeader
                eyebrow="Track Record"
                title="Proven Delivery and Execution"
                description="Capability demonstrated through structured procurement and contract delivery across sectors."
              />

              <motion.div
                variants={fadeUp}
                className="mt-10 rounded-[32px] border border-[#dff57a] bg-[#fbffe8] px-8 py-10"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Highlight
                </div>

                <h3 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Over $10,000,000 in awarded tenders delivered in collaboration
                  with clients and partners.
                </h3>

                <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-slate-700">
                  <p>
                    Our experience includes supporting and executing procurement
                    and contract delivery across multiple sectors, with a
                    cumulative value exceeding ten million dollars.
                  </p>

                  <p>
                    This reflects our ability to operate within structured
                    procurement environments, coordinate delivery across
                    stakeholders, and execute at scale.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    "Multi-sector contract execution",
                    "Public and private sector engagements",
                    "Supplier coordination across networks",
                    "End-to-end delivery participation",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#eef9bd] bg-white px-5 py-4 text-slate-700"
                    >
                      <span className="font-medium text-slate-950">
                        0{index + 1}.{" "}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Operating Model"
              title="Execution Framework"
              description="Our operational model is built on structured systems that ensure consistency across engagements."
              light
            />

            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
              <div className="grid gap-4 md:grid-cols-5">
                {["Sourcing", "Coordination", "Delivery", "Execution", "Scale"].map(
                  (step) => (
                    <div
                      key={step}
                      className="text-center text-lg font-medium text-white/90"
                    >
                      {step}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-300">
              <p>
                We integrate procurement, logistics, and execution into a
                unified framework that supports both small-scale and large-scale
                projects.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Scalability"
              title="Built to Scale Across Markets"
              description="Our systems are designed to scale across industries and regions."
            />

            <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-600">
              <p>
                By standardizing procurement processes, supplier coordination,
                and execution frameworks, we are able to expand operations
                without compromising delivery quality.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Differentiation"
              title="What Sets Us Apart"
              description="A capability model built for structured delivery rather than ad hoc execution."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {differentiators.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-5"
                >
                  <span className="font-medium text-slate-950">
                    0{index + 1}.{" "}
                  </span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-[#dff57a] bg-[#fbffe8] px-8 py-12 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Closing Position
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              We build systems that deliver — not just services that promise.
            </h2>
          </div>
        </section>

        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Engage
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Engage a Partner Built for Execution at Scale
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From procurement to infrastructure and energy systems, we deliver
              structured solutions aligned with your operational requirements.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#c8f701] px-6 py-3 text-sm font-medium text-black hover:bg-[#b4e600]"
              >
                Discuss a Project
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900"
              >
                Request a Capability Brief
              </Link>
            </div>
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
            <Link href="/capabilities">Capabilities</Link>
            <Link href="/contact">Contact</Link>
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