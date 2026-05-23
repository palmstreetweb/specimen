import { business } from "@/lib/business";
import { content } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-bg pt-16 pb-10 px-5 md:px-8 border-t-2 border-ink">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[1.85rem] md:text-[2.25rem] text-ink">
              <Logo />
            </span>
            <p className="mt-5 text-ink-muted leading-[1.6] text-[0.98rem] max-w-[40ch]">
              {business.tagline}
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h3 className="label text-accent mb-4">Explore</h3>
            <ul className="space-y-3 text-ink">
              {content.nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h3 className="label text-accent mb-4">Studio</h3>
            <ul className="space-y-3 text-ink">
              {business.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {s.name} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <h3 className="label text-accent mb-4">Visit</h3>
            <address className="not-italic text-ink-muted text-[0.95rem] leading-[1.6]">
              {business.address}
              <br />
              <a href={`mailto:${business.email}`} className="text-ink hover:text-accent transition-colors block mt-3 break-all">
                {business.email}
              </a>
              <a href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`} className="text-ink hover:text-accent transition-colors block">
                {business.phone}
              </a>
            </address>
          </div>
        </div>

        {/* Mega wordmark */}
        <div
          className="display text-ink mt-16 mb-10 leading-[0.78] tracking-[-0.05em] text-[18vw] md:text-[20rem] text-center select-none"
          aria-hidden
        >
          <span className="italic text-accent">A</span>aBb<span className="italic">Cc</span>
        </div>

        <div className="border-t border-ink/30 pt-6 grid grid-cols-12 gap-x-4 gap-y-3 items-center">
          <p className="col-span-12 md:col-span-8 label text-ink-muted">{content.footer.copyright}</p>
          <ul className="col-span-12 md:col-span-4 flex gap-6 md:justify-end label text-ink-muted">
            {content.footer.links.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="hover:text-accent transition-colors">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
