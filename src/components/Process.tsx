"use client";

import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Process() {
  const reduced = useReducedMotion();
  const p = content.process;

  return (
    <section id="process" className="relative bg-ink text-on-accent py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-2">
            <span className="label text-accent">{p.label}</span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1] tracking-[-0.025em] max-w-[20ch]"
            >
              {p.heading.split(" ").map((w, i) => (
                <span key={i} className={i === 1 ? "italic text-accent" : ""}>
                  {w}{" "}
                </span>
              ))}
            </motion.h2>
          </div>
        </div>

        {/* Process steps — grid that breaks */}
        <ol className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12">
          {p.steps.map((step, i) => (
            <motion.li
              key={step.num}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.06 * i }}
              className={`col-span-12 md:col-span-6 grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 ${
                i % 2 === 1 ? "md:mt-12" : ""
              }`}
            >
              <span className="display text-accent text-[4rem] md:text-[6rem] leading-[0.85]">
                {step.num}
              </span>
              <div>
                <h3 className="display text-[1.85rem] md:text-[2.5rem] leading-tight tracking-[-0.015em] text-on-accent">
                  {step.title}
                </h3>
                <p className="mt-3 text-on-accent/75 leading-[1.65] text-[1rem] max-w-[40ch]">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
