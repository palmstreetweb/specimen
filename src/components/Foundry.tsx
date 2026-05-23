"use client";

import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Foundry() {
  const reduced = useReducedMotion();
  const a = content.about;

  return (
    <section id="about" className="relative bg-bg py-20 md:py-32 border-y border-ink/15">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12">
        {/* Label sticky col */}
        <div className="col-span-12 md:col-span-2">
          <span className="label text-accent">{a.label}</span>
        </div>

        {/* Title */}
        <div className="col-span-12 md:col-span-10">
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-ink max-w-[24ch]"
          >
            {a.title.split(" ").map((w, i) => (
              <span
                key={i}
                className={w === "type" || w === "exist" ? "italic text-accent" : ""}
              >
                {w}{" "}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* Body — 3 paragraphs in equal columns */}
        <div className="col-span-12 md:col-start-3 md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-ink/25 pt-8">
          {a.body.map((p, i) => (
            <motion.p
              key={i}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              className="text-ink-muted text-[0.98rem] leading-[1.65]"
            >
              <span className="label text-ink-faint block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              {p}
            </motion.p>
          ))}
        </div>

        {/* Stats */}
        <div className="col-span-12 md:col-start-3 md:col-span-10 mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-ink/25 pt-8">
          {a.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.02em] text-ink">
                {s.value}
              </span>
              <span className="mt-2 label text-ink-muted">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
