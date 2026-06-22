import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { featuredServices, media, serviceGroups } from '../data/spsContent'
import FieldImage from '../components/FieldImage'

export default function Servicios() {
  return (
    <>
      <PageHero
        kicker="Servicios SPS"
        title="Soluciones de campo,"
        accent="sin rodeos."
        subtitle="Vapor, calentamiento, manejo de hidrocarburos, saneamiento, tanques, mantenimiento, telemetria y automatizacion industrial."
        image={media.heroServices}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          {serviceGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="btn-ghost-light rounded-none">
              {group.eyebrow}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-4xl">
            <p className="mono-label mb-4 text-brand-red">Catalogo operativo</p>
            <h2 className="h-section">
              La lista de servicios se presenta como la veria un cliente industrial: clara, directa y respaldada por fotos.
            </h2>
          </Reveal>

          <div className="space-y-16">
            {serviceGroups.map(({ id, title, eyebrow, intro, image, icon: Icon, services }, index) => (
              <section
                key={id}
                id={id}
                className="scroll-mt-24 grid overflow-hidden border border-steel-200 bg-steel-50 lg:grid-cols-[.88fr_1.12fr]"
              >
                <div className={`relative min-h-[28rem] ${index % 2 ? 'lg:order-2' : ''}`}>
                  <FieldImage src={image} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex h-14 w-14 items-center justify-center bg-brand-blue text-white">
                      <Icon size={30} weight="bold" />
                    </span>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/75">{eyebrow}</p>
                  </div>
                </div>
                <div className="p-6 sm:p-10 lg:p-12">
                  <h2 className="font-display text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">{title}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-steel-600">{intro}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <div key={service} className="flex items-start gap-3 bg-white p-4 text-base leading-snug text-ink-800 shadow-sm">
                        <CheckCircle size={21} weight="fill" className="mt-0.5 shrink-0 text-brand-blue" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mono-label mb-4 text-brand-blueLight">Servicios destacados</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              Lo que mas se ve en campo.
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map(({ title, copy, image, icon: Icon }) => (
              <StaggerItem key={title}>
                <article className="group h-full overflow-hidden border border-white/12 bg-white/[0.04]">
                  <div className="relative h-64 overflow-hidden">
                    <FieldImage src={image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 to-transparent" />
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center bg-brand-red text-white">
                      <Icon size={25} weight="bold" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-steel-300">{copy}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="mono-label mb-4 text-brand-red">Cotizacion y visita tecnica</p>
            <h2 className="h-section max-w-4xl">
              Cuéntanos el area, el fluido, el equipo disponible y la urgencia. SPS arma la respuesta.
            </h2>
          </div>
          <Link to="/contacto" className="btn-primary rounded-none text-base">
            Contactar ahora <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
