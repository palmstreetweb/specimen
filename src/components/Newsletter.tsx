"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function Newsletter() {
  const reduced = useReducedMotion();
  const n = content.newsletter;
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("We'll need an email to send the bulletin.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That doesn't look like a valid email.");
      return;
    }
    setError(null);
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  };

  return (
    <section id="newsletter" className="bg-bg-section py-20 md:py-32 border-b border-ink/15">
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10">
        <div className="col-span-12 md:col-span-5">
          <span className="label text-accent">{n.label}</span>
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.02] tracking-[-0.025em] text-ink mt-3 max-w-[16ch]"
          >
            {n.heading.split(" ").map((w, i) => (
              <span key={i} className={i === 1 ? "italic text-accent" : ""}>
                {w}{" "}
              </span>
            ))}
          </motion.h2>
          <p className="mt-5 text-ink-muted text-[1rem] leading-[1.65] max-w-[42ch]">
            {n.body}
          </p>
        </div>

        <div className="col-span-12 md:col-span-7 md:pl-8 md:border-l md:border-ink/25">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-ink text-on-accent p-8 md:p-10"
                role="status"
              >
                <div className="label text-accent">RECEIPT</div>
                <h3 className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight mt-2">
                  Welcome to the bulletin.
                </h3>
                <p className="mt-3 text-on-accent/80 leading-[1.65] max-w-[40ch]">
                  Your address is on the list. The next issue ships first Tuesday of January.
                  Until then, nothing in your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                  }}
                  className="mt-6 label text-accent hover:text-on-accent transition-colors min-h-[44px]"
                >
                  Subscribe another →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                noValidate
                className="grid gap-5"
              >
                <label htmlFor="newsletter-email" className="label text-ink-muted">
                  Your email
                </label>
                <div className="grid grid-cols-[1fr_auto] gap-3 border-b-2 border-ink pb-1">
                  <input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                    placeholder="you@somewhere"
                    aria-invalid={!!error}
                    aria-describedby={error ? "newsletter-err" : undefined}
                    className="bg-transparent text-[1.1rem] md:text-[1.25rem] py-3 outline-none text-ink placeholder:text-ink-faint min-h-[48px]"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-ink text-on-accent px-5 py-3 label hover:bg-accent transition-colors disabled:opacity-60 min-h-[48px]"
                  >
                    {status === "submitting" ? "Sending…" : "Subscribe"}
                  </button>
                </div>
                {error && (
                  <span id="newsletter-err" className="label text-accent">
                    {error}
                  </span>
                )}
                <ul className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    "Quarterly. Never more.",
                    "No tracking pixels.",
                    "Unsubscribe in one click.",
                  ].map((t) => (
                    <li
                      key={t}
                      className="label text-ink-muted border-t border-ink/30 pt-3"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
