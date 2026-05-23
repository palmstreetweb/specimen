"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (e.key === "Tab" && open && drawerRef.current) {
        const f = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-bg/95 backdrop-blur border-b border-ink/15" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1500px] mx-auto px-5 md:px-8 h-[64px] md:h-[72px] grid grid-cols-12 items-center gap-x-4 md:gap-x-8">
          <a href="#top" className="col-span-3 text-[1.7rem] md:text-[1.95rem] text-ink hover:text-accent transition-colors">
            <Logo />
          </a>

          <ul className="hidden lg:flex col-span-6 items-center justify-center gap-6 xl:gap-9">
            {content.nav.links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="label text-ink hover:text-accent transition-colors flex items-baseline gap-1.5"
                >
                  <span className="text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="col-span-9 lg:col-span-3 flex items-center justify-end gap-4 md:gap-6">
            <span className="hidden md:inline label text-ink-faint">SPC-001</span>
            <a
              href={content.nav.cta.href}
              className="hidden md:inline-flex items-center gap-2 bg-ink text-on-accent px-4 py-2.5 label hover:bg-accent hover:text-on-accent transition-colors min-h-[44px]"
            >
              {content.nav.cta.name} →
            </a>
            <button
              ref={triggerRef}
              type="button"
              className="lg:hidden p-3 -mr-3 min-h-[48px] min-w-[48px] flex flex-col items-end gap-1.5 justify-center"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="block w-7 h-px bg-ink" />
              <span className="block w-5 h-px bg-ink" />
              <span className="block w-7 h-px bg-ink" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={drawerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-ink text-on-accent flex flex-col"
          >
            <div className="flex items-center justify-between h-[64px] px-5 border-b border-on-accent/15">
              <span className="text-[1.7rem] text-on-accent">
                <Logo mono />
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="label text-on-accent min-h-[48px] min-w-[48px] flex items-center gap-2 justify-end"
                aria-label="Close menu"
              >
                Close
                <span aria-hidden className="text-accent">×</span>
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center gap-2">
              {content.nav.links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduced ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                  className="border-b border-on-accent/15 py-2"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 text-on-accent hover:text-accent group"
                  >
                    <span className="label text-accent w-8">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-[10vw] sm:text-[7rem] leading-[0.95] tracking-[-0.02em]">
                      {link.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 py-6 border-t border-on-accent/15 flex justify-between items-center">
              <a
                href={content.nav.cta.href}
                onClick={() => setOpen(false)}
                className="label text-accent inline-flex items-center gap-2 min-h-[48px]"
              >
                {content.nav.cta.name} →
              </a>
              <span className="label text-on-accent/55">NYC · Q4 / 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
