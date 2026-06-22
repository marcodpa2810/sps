import FieldImage from './FieldImage'

export default function PageHero({ kicker, title, accent, subtitle, image, children, align = 'left' }) {
  const centered = align === 'center'

  return (
    <section className="relative min-h-[64dvh] overflow-hidden bg-ink-950 pt-32 pb-16 text-white lg:pt-40 lg:pb-24">
      {image && (
        <FieldImage
          src={image}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.94)_0%,rgba(7,13,24,.78)_42%,rgba(7,13,24,.42)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      <div className="absolute inset-0 bp-grid opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className={`${centered ? 'mx-auto text-center' : ''} max-w-4xl`}>
          {kicker && (
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blueLight">
              {kicker}
            </p>
          )}
          <h1
            className="max-w-[21.5rem] break-words font-display font-bold leading-[0.98] tracking-tight text-white [overflow-wrap:anywhere] sm:max-w-4xl sm:leading-[0.95]"
            style={{ fontSize: 'clamp(2.2rem, 9vw, 6.2rem)', textWrap: 'wrap' }}
          >
            {title} {accent && <span className="text-brand-blueLight">{accent}</span>}
          </h1>
          {subtitle && (
            <p className={`${centered ? 'mx-auto' : ''} mt-6 max-w-[21.5rem] text-lg leading-relaxed text-steel-100 sm:max-w-2xl sm:text-xl`}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
