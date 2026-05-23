"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const letterScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.08]);
  const letterY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -120]);

  const h = content.hero;

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-[88px] md:pt-[110px] pb-12 md:pb-16 overflow-hidden"
    >
      {/* 12-col grid */}
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 grid grid-cols-12 gap-x-4 md:gap-x-8">
        {/* Issue meta — col 1-4 */}
        <div className="col-span-12 md:col-span-4 border-t-2 border-ink pt-3 md:pt-4">
          <span className="label text-ink">{h.issue}</span>
        </div>
        {/* — col 5-8 (empty for grid rhythm) */}
        <div className="hidden md:block md:col-span-4 border-t-2 border-ink pt-4">
          <span className="label text-ink-muted">Q4 / 2026 → HALYARD · 14 STYLES</span>
        </div>
        {/* Status — col 9-12 */}
        <div className="hidden md:flex md:col-span-4 border-t-2 border-ink pt-4 items-center justify-between">
          <span className="label text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            <span className="blink">ON PRESS</span>
          </span>
          <span className="label text-ink-muted">SHIPS 06 OCT</span>
        </div>
      </div>

      {/* Headline + sample letter (broken grid) */}
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 mt-12 md:mt-20 grid grid-cols-12 gap-x-4 md:gap-x-8 items-start">
        {/* Sample letter A — col 1-7 */}
        <motion.div
          style={{ scale: letterScale, y: letterY }}
          className="col-span-12 md:col-span-7 relative"
        >
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display text-ink leading-[0.78] tracking-[-0.045em] text-[clamp(11rem,33vw,30rem)] origin-bottom-left"
          >
            <span className="relative inline-block">
              {h.sampleLetter}
              <span
                className="absolute -bottom-4 -right-1 label text-accent"
                aria-hidden
              >
                ↘ SAMPLE / HALYARD BLACK
              </span>
            </span>
          </motion.h2>
        </motion.div>

        {/* Headline + meta — col 8-12 */}
        <div className="col-span-12 md:col-span-5 md:pl-4 md:mt-6">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-ink"
          >
            <span>Type that </span>
            <span className="italic text-accent">earns</span>
            <span> its space.</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-ink-muted text-[1rem] md:text-[1.05rem] leading-[1.6] max-w-[42ch]"
          >
            {h.subhead}
          </motion.p>

          <motion.dl
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-ink/25 pt-5"
          >
            {h.metaRows.map((r) => (
              <div key={r.label} className="contents">
                <dt className="label text-ink-faint">{r.label}</dt>
                <dd className="text-ink text-[0.95rem]">{r.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 bg-ink text-on-accent px-5 py-3 label hover:bg-accent transition-colors min-h-[48px]"
            >
              Browse the catalogue
              <span aria-hidden>→</span>
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 border border-ink/25 px-5 py-3 label text-ink hover:border-accent hover:text-accent transition-colors min-h-[48px]"
            >
              How we make it
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom rule + columns */}
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 mt-14 md:mt-20 border-t border-ink/25 pt-4 grid grid-cols-12 gap-x-4 md:gap-x-8">
        <span className="col-span-6 md:col-span-2 label text-ink-faint">A 5 13×8</span>
        <span className="col-span-6 md:col-span-2 label text-ink-faint">14 PT TRACKING ZERO</span>
        <span className="hidden md:inline-block md:col-span-4 label text-ink-faint">
          STROKE 1.2 · COUNTER 4.6 · X-HEIGHT 0.55
        </span>
        <span className="hidden md:inline-block md:col-span-4 label text-ink-faint text-right">
          OPEN UPSTAIRS · CENTRE STREET, NY
        </span>
      </div>
    </section>
  );
}
