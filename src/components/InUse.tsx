"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

const colSpans = [
  "md:col-span-6",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-5",
  "md:col-span-3",
];

export default function InUse() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-40, 60]);

  const u = content.inUse;

  return (
    <section id="in-use" ref={ref} className="bg-bg-section py-20 md:py-32 border-b border-ink/15">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-2">
            <span className="label text-accent">{u.label}</span>
          </div>
          <div className="col-span-12 md:col-span-10">
            <motion.h2
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-ink"
            >
              {u.heading}
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {u.images.map((img, i) => (
            <motion.figure
              key={i}
              style={{ y: i % 2 === 0 ? yA : yB }}
              className={`col-span-12 ${colSpans[i] ?? "md:col-span-4"} group`}
            >
              <div className="relative aspect-[4/5] bg-ink/10 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 label text-on-accent bg-ink/85 px-2 py-1">
                  {String(i + 1).padStart(2, "0")} / IN USE
                </span>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
