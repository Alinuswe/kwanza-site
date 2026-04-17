"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { companyIdentity, contactDetails, footerCopy, primaryNav, siteName } from "@/app/lib/site";
import { PrimaryButton } from "@/app/components/ui";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-950">
          <span className="h-2 w-2 rounded-full bg-[#c8f701] transition-transform group-hover:scale-110" />
          {siteName}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-colors duration-200 ${
                  active ? "font-semibold text-slate-950" : "text-slate-600 hover:text-slate-950"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-[#c8f701]" /> : null}
              </Link>
            );
          })}
        </nav>

        <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
      </div>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-white">
            <span className="h-2 w-2 rounded-full bg-[#c8f701]" />
            {siteName}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{companyIdentity}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{footerCopy}</p>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p>Email: {contactDetails.email}</p>
            <p>Phone: {contactDetails.phone}</p>
            <p>{contactDetails.location}</p>
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Navigation</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-300 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main className="pt-28 md:pt-32">{children}</main>
      <SiteFooter />
    </div>
  );
}
