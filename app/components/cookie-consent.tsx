"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const COOKIE_PREFERENCES_EVENT = "kwanza-open-cookie-preferences";
const STORAGE_KEY = "kwanza-cookie-consent-v1";

type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  updatedAt: string;
};

type PreferenceDraft = Omit<CookieConsent, "updatedAt">;

const defaultDraft: PreferenceDraft = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

function persistConsent(consent: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  document.documentElement.dataset.analyticsConsent = consent.analytics ? "granted" : "denied";
  document.documentElement.dataset.marketingConsent = consent.marketing ? "granted" : "denied";
  document.documentElement.dataset.preferencesConsent = consent.preferences ? "granted" : "denied";
  window.dispatchEvent(new CustomEvent("kwanza-cookie-consent-updated", { detail: consent }));
}

function getStoredConsent() {
  if (typeof window === "undefined") {
    return null;
  }

  const savedConsent = localStorage.getItem(STORAGE_KEY);
  if (!savedConsent) {
    return null;
  }

  try {
    const parsed = JSON.parse(savedConsent) as CookieConsent;
    return {
      necessary: true,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      preferences: !!parsed.preferences,
      updatedAt: parsed.updatedAt || new Date().toISOString(),
    } as CookieConsent;
  } catch {
    return null;
  }
}

export function CookieConsentManager() {
  const [initialConsent] = useState<CookieConsent | null>(() => getStoredConsent());
  const [showBanner, setShowBanner] = useState(() => !initialConsent);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [draft, setDraft] = useState<PreferenceDraft>(() =>
    initialConsent
      ? {
          necessary: true,
          analytics: initialConsent.analytics,
          marketing: initialConsent.marketing,
          preferences: initialConsent.preferences,
        }
      : defaultDraft,
  );

  useEffect(() => {
    if (initialConsent) {
      persistConsent(initialConsent);
    }

    const openPreferencesPanel = () => {
      setIsPanelOpen(true);
      setShowBanner(false);
    };

    window.addEventListener(COOKIE_PREFERENCES_EVENT, openPreferencesPanel);

    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, openPreferencesPanel);
    };
  }, [initialConsent]);

  const saveConsent = (prefs: PreferenceDraft) => {
    const consent: CookieConsent = {
      ...prefs,
      necessary: true,
      updatedAt: new Date().toISOString(),
    };

    setDraft({
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      preferences: prefs.preferences,
    });
    persistConsent(consent);
    setShowBanner(false);
    setIsPanelOpen(false);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true, preferences: true });
  const rejectNonEssential = () => saveConsent({ necessary: true, analytics: false, marketing: false, preferences: false });

  return (
    <>
      <AnimatePresence>
        {showBanner ? (
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-md rounded-3xl border border-slate-700 bg-slate-950/96 p-5 text-slate-100 shadow-[0_24px_50px_-30px_rgba(2,6,23,1)] backdrop-blur sm:inset-x-auto sm:left-6 sm:bottom-6"
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
          >
            <p className="text-sm leading-6 text-slate-200">
              We use cookies to improve site performance, analyse traffic, and enhance your experience. You can accept all
              cookies, reject non-essential cookies, or manage your preferences.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-slate-600 hover:bg-slate-700"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-full border border-slate-600 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() => setIsPanelOpen(true)}
                className="rounded-full border border-[#c8f701]/60 bg-[#c8f701]/10 px-4 py-2 text-sm font-medium text-[#e5ff7e] transition-colors hover:bg-[#c8f701]/20"
              >
                Manage preferences
              </button>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isPanelOpen ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/50 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.section
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Cookie preferences"
            >
              <h2 className="text-lg font-semibold tracking-tight">Cookie preferences</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Strictly necessary cookies are required for core website functionality. Other cookies help us understand
                usage, remember preferences, and improve communication.
              </p>

              <div className="mt-5 space-y-3">
                <CookieToggle title="Strictly necessary cookies" description="Always active for security and core functionality." checked disabled />
                <CookieToggle
                  title="Analytics cookies"
                  description="Help us understand website traffic and performance in aggregate."
                  checked={draft.analytics}
                  onChange={(checked) => setDraft((prev) => ({ ...prev, analytics: checked }))}
                />
                <CookieToggle
                  title="Marketing cookies"
                  description="Support campaign effectiveness and communication relevance."
                  checked={draft.marketing}
                  onChange={(checked) => setDraft((prev) => ({ ...prev, marketing: checked }))}
                />
                <CookieToggle
                  title="Preferences cookies"
                  description="Remember your choices and improve the browsing experience."
                  checked={draft.preferences}
                  onChange={(checked) => setDraft((prev) => ({ ...prev, preferences: checked }))}
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => saveConsent(draft)}
                  className="rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                >
                  Save preferences
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-slate-400"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-slate-400"
                >
                  Reject non-essential
                </button>
              </div>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function CookieToggle({
  title,
  description,
  checked,
  onChange,
  disabled = false,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <span>
        <span className="block text-sm font-medium text-slate-900">{title}</span>
        <span className="mt-1 block text-xs leading-5 text-slate-600">{description}</span>
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-1 inline-flex h-6 w-11 shrink-0 rounded-full border transition-colors ${
          checked ? "border-slate-700 bg-slate-900" : "border-slate-300 bg-slate-200"
        } ${disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${checked ? "translate-x-5" : "translate-x-0"}`}
        />
      </button>
    </label>
  );
}
