"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const f = content.faq;

  return (
    <section id="faq" className="bg-bg py-20 md:py-32 border-b border-ink/15">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 grid grid-cols-12 gap-x-4 md:gap-x-8">
        <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
          <span className="label text-accent">{f.label}</span>
          <h2 className="display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-ink mt-3 max-w-[16ch]">
            {f.heading}
          </h2>
        </div>
        <ul className="col-span-12 md:col-span-9 border-t border-ink/30">
          {f.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="border-b border-ink/30">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full grid grid-cols-12 gap-x-4 md:gap-x-8 items-baseline py-6 md:py-8 text-left min-h-[64px] group"
                  aria-expanded={isOpen}
                >
                  <span className="col-span-1 label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 display text-[1.25rem] md:text-[1.6rem] leading-[1.15] tracking-[-0.015em] text-ink group-hover:text-accent transition-colors">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="col-span-1 justify-self-end display text-[1.6rem] text-accent leading-none"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden grid grid-cols-12 gap-x-4 md:gap-x-8"
                    >
                      <div className="col-start-2 col-span-10 pb-7 pr-2 md:pr-12 max-w-[60ch] text-ink-muted leading-[1.65] text-[0.98rem]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
