import { useReducedMotion } from '../lib/animations'

/**
 * Marquee — endless horizontal logo/word strip. CSS-driven, GPU-friendly.
 * Collapses to a static wrap under prefers-reduced-motion.
 * Use at most once per page (brand strip).
 */
export default function Marquee({ items, className = '' }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
        {items.map((it) => (
          <MarqueeChip key={it} label={it} />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((it) => (
          <MarqueeChip key={`a-${it}`} label={it} />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]"
      >
        {items.map((it) => (
          <MarqueeChip key={`b-${it}`} label={it} />
        ))}
      </div>
    </div>
  )
}

function MarqueeChip({ label }) {
  return (
    <span className="whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 font-display text-sm font-semibold text-white/62 transition-colors duration-300 hover:border-brand-blue/50 hover:text-brand-blueLight">
      {label}
    </span>
  )
}
