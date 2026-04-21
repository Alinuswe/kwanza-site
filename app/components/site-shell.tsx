"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { companyIdentity, contactDetails, footerCopy, footerCopyright, legalNav, primaryNav, siteName } from "@/app/lib/site";
import { PrimaryButton } from "@/app/components/ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
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

        <div className="flex items-center gap-2">
          <div className="scale-[0.92] sm:scale-100">
            <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Open mobile menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950/45 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[84%] max-w-sm flex-col border-l border-slate-200 bg-white p-5 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Navigation</p>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition-colors hover:bg-slate-100"
                  aria-label="Close mobile menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1">
                {primaryNav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-base transition-colors ${
                        active ? "bg-slate-100 font-semibold text-slate-950" : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-6">
                <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.25fr_0.75fr_0.75fr] lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-white">
            <span className="h-2 w-2 rounded-full bg-[#c8f701]" />
            {siteName}
          </p>
          <p className="mt-3 text-sm font-medium text-slate-200">Kwanza Capital Africa</p>
          <p className="mt-2 text-sm text-slate-400">{contactDetails.location}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{companyIdentity}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{footerCopy}</p>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p className="break-all">Email: {contactDetails.email}</p>
            <p>Phone: {contactDetails.phone}</p>
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Navigation</p>
          <div className="grid grid-cols-1 gap-3 text-sm">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-300 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Legal & Policy</p>
          <div className="grid grid-cols-1 gap-3 text-sm">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-300 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:px-6 sm:text-sm lg:px-10">
          <p>{footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main className="pt-24 sm:pt-28 md:pt-32">{children}</main>
      <SiteFooter />
    </div>
  );
}
