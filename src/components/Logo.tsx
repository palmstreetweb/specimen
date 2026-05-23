type LogoProps = { className?: string; mono?: boolean };

/**
 * Specimen wordmark — tier 1 refined wordmark.
 * A serif lowercase set with deliberate letter-spacing.
 * The single dot of the i is the only accent moment.
 */
export default function Logo({ className = "", mono = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-baseline leading-none tracking-[-0.02em] ${className}`}
      aria-label="Specimen"
      style={{
        fontFamily: "var(--font-display)",
        color: "currentColor",
      }}
    >
      <span>spec</span>
      <span className="relative">
        i
        <span
          aria-hidden
          className="absolute -top-[0.05em] left-1/2 -translate-x-1/2 w-[0.18em] h-[0.18em] rounded-full"
          style={{
            background: mono ? "currentColor" : "var(--color-accent)",
          }}
        />
      </span>
      <span>men</span>
    </span>
  );
}
