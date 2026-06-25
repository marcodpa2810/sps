import FieldImage from './FieldImage'

export default function PageHero({ kicker, title, accent, subtitle, image, children, align = 'left' }) {
  const centered = align === 'center'

  return (
    <section className="relative isolate flex min-h-[100dvh] items-end overflow-hidden bg-ink-950 pb-16 pt-36 text-white lg:pb-24 lg:pt-44">
      {image && (
        <FieldImage
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.96)_0%,rgba(7,13,24,.82)_42%,rgba(7,13,24,.36)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-ink-950/45" />
      <div className="bp-grid absolute inset-0 opacity-25" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="section-shell relative w-full">
        <div className={`${centered ? 'mx-auto text-center' : ''} max-w-5xl`}>
          {kicker && (
            <p className="mono-label mb-5 text-brand-blueLight">
              {kicker}
            </p>
          )}
          <h1
            className="max-w-[22rem] font-display font-black uppercase leading-[0.9] tracking-tightest text-white sm:max-w-5xl"
            style={{ fontSize: 'clamp(3rem, 8.4vw, 7.8rem)' }}
          >
            {title} {accent && <span className="text-brand-blueLight">{accent}</span>}
          </h1>
          {subtitle && (
            <p className={`${centered ? 'mx-auto' : ''} mt-7 max-w-2xl text-sm font-medium leading-relaxed text-steel-100 sm:text-base`}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
