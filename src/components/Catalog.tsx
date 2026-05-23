"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Catalog() {
  const reduced = useReducedMotion();
  const c = content.catalog;

  return (
    <section id="catalog" className="relative bg-bg-section py-20 md:py-32 border-b border-ink/15">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8">
        {/* Section header — broken grid */}
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-4 mb-16 md:mb-24 items-end">
          <div className="col-span-12 md:col-span-2">
            <span className="label text-accent">{c.label}</span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink max-w-[24ch]"
            >
              {c.heading.split(" ").map((w, i) => (
                <span key={i} className={i === 0 || i === 1 ? "italic text-accent" : ""}>
                  {w}{" "}
                </span>
              ))}
            </motion.h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <a
              href="#process"
              className="label text-ink-muted hover:text-accent inline-flex items-center gap-2"
            >
              How we draw them ↓
            </a>
          </div>
        </div>

        {/* Catalog rows */}
        <ol className="border-t-2 border-ink">
          {c.items.map((item, i) => (
            <motion.li
              key={item.slug}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.04 * i }}
              className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 py-10 md:py-14 border-b border-ink/30 group"
            >
              {/* Number + meta col */}
              <div className="col-span-12 md:col-span-2">
                <span className="label text-accent">{item.number}</span>
                <div className="mt-3 label text-ink-muted">{item.releaseQuarter}</div>
                <div className="mt-2 label text-ink-faint">
                  Drawn by<br />
                  {item.designer}
                </div>
              </div>

              {/* Giant glyph */}
              <Link
                href={`#${item.slug}`}
                aria-label={`${item.name} specimen`}
                className="col-span-5 md:col-span-3 flex items-start justify-start"
              >
                <span
                  className="display text-ink leading-[0.78] tracking-[-0.04em] text-[clamp(7rem,13vw,12rem)] block group-hover:text-accent transition-colors"
                  aria-hidden
                >
                  {item.glyph}
                </span>
              </Link>

              {/* Name + sample + description */}
              <div className="col-span-7 md:col-span-4">
                <h3 className="display text-[clamp(2rem,3.5vw,3.25rem)] leading-[1] tracking-[-0.02em] text-ink">
                  {item.name}
                </h3>
                <div className="mt-3 label text-ink-muted">{item.classification}</div>
                <p className="mt-5 text-ink leading-[1.6] text-[0.98rem] max-w-[42ch]">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 label text-ink-muted">
                  {item.features.map((f) => (
                    <li key={f} className="border border-ink/25 px-2 py-1">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing column */}
              <div className="col-span-12 md:col-span-3 md:border-l md:border-ink/20 md:pl-6">
                <div className="label text-ink-faint mb-3">Licensing</div>
                <ul className="space-y-2">
                  {item.pricing.map((p) => (
                    <li
                      key={p.license}
                      className="flex items-baseline justify-between border-b border-ink/15 pb-2 text-[0.9rem] text-ink"
                    >
                      <span className="text-ink-muted">{p.license}</span>
                      <span className="mono text-ink font-medium">{p.price}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${item.slug}`}
                  className="mt-5 inline-flex items-center gap-2 label text-accent hover:text-ink transition-colors min-h-[44px]"
                >
                  Specimen + trial OTF →
                </a>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
