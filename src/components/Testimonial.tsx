"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-12, 12]);
  const t = content.testimonial;

  return (
    <section ref={ref} className="bg-bg py-20 md:py-32 border-b border-ink/15">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 grid grid-cols-12 gap-x-4 md:gap-x-8">
        <div className="col-span-12 md:col-span-2 mb-6 md:mb-0">
          <span className="label text-accent">{t.label}</span>
        </div>
        <motion.figure style={{ x }} className="col-span-12 md:col-span-10">
          <motion.blockquote
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.02em] text-ink max-w-[36ch]"
          >
            <span
              className="display italic text-accent block text-[4rem] leading-[0.6] mb-2"
              aria-hidden
            >
              &ldquo;
            </span>
            {t.quote}
          </motion.blockquote>
          <figcaption className="mt-8 grid grid-cols-[auto_1fr] items-center gap-4 max-w-[400px]">
            <span className="w-12 h-12 rounded-full bg-accent flex items-center justify-center display text-[1.5rem] text-on-accent" aria-hidden>
              N
            </span>
            <div>
              <div className="text-ink font-medium">{t.attribution}</div>
              <div className="label text-ink-muted mt-1">{t.role}</div>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
