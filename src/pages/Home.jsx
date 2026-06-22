import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, PhoneCall } from '@phosphor-icons/react'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { clients, featuredServices, media, projectCases, serviceGroups } from '../data/spsContent'
import FieldImage from '../components/FieldImage'

export default function Home() {
  const mainCases = projectCases.slice(0, 3)

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-ink-950 text-white">
        <FieldImage src={media.heroHome} className="absolute inset-0 h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.92)_0%,rgba(7,13,24,.72)_42%,rgba(7,13,24,.12)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/10" />

        <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="mb-6 inline-flex border border-white/20 bg-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur">
              Service Petroleum and Supply C.A.
            </p>
            <h1
              className="max-w-5xl font-display font-bold leading-[0.94] tracking-tight text-white"
              style={{ fontSize: 'clamp(3rem, 8vw, 7.4rem)' }}
            >
              Operaciones petroleras ejecutadas en campo.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-steel-100 sm:text-2xl">
              Vapor, recuperacion de crudo, saneamiento, tanques, automatizacion y soporte
              industrial con equipos reales en sitio.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/servicios" className="btn-primary w-full rounded-none text-base sm:w-auto">
                Ver servicios <ArrowRight size={20} weight="bold" />
              </Link>
              <Link to="/contacto" className="btn-ghost-light w-full rounded-none text-base sm:w-auto">
                Hablar con SPS <PhoneCall size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[15rem_1fr] lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-500">
            Presencia en operaciones
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {clients.map((client) => (
              <span key={client} className="text-base font-bold uppercase text-ink-900">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-4xl">
            <p className="mono-label mb-4 text-brand-red">Servicios principales</p>
            <h2 className="h-section">
              Cada servicio tiene una foto, un equipo y una operacion detras.
            </h2>
          </Reveal>

          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map(({ title, copy, image, icon: Icon }) => (
              <StaggerItem key={title}>
                <Link to="/servicios" className="group block h-full overflow-hidden border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative h-64 overflow-hidden">
                    <FieldImage src={image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center bg-brand-blue text-white">
                      <Icon size={25} weight="bold" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">{title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-steel-600">{copy}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <Reveal>
            <p className="mono-label mb-4 text-brand-blue">Frentes de trabajo</p>
            <h2 className="h-section">Vapor, saneamiento y control industrial en una misma empresa.</h2>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">
              El sitio deja de sonar generico cuando muestra lo que SPS realmente hace:
              movilizar equipos, intervenir areas petroleras y sostener operaciones con personal tecnico.
            </p>
          </Reveal>
          <div className="divide-y divide-steel-200 border-y border-steel-200">
            {serviceGroups.map(({ title, intro, icon: Icon, id }) => (
              <Link key={id} to={`/servicios#${id}`} className="group grid gap-5 py-7 transition-colors hover:bg-steel-50 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:px-5">
                <span className="flex h-14 w-14 items-center justify-center bg-ink-950 text-white">
                  <Icon size={28} weight="bold" />
                </span>
                <span>
                  <strong className="block font-display text-2xl text-ink-900">{title}</strong>
                  <span className="mt-2 block text-base leading-relaxed text-steel-600">{intro}</span>
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                  Abrir <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
        <FieldImage src={media.boscanFosa} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.95),rgba(7,13,24,.72))]" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mono-label mb-4 text-brand-blueLight">Evidencia de campo</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              Proyectos que se pueden ver, no solo prometer.
            </h2>
          </Reveal>

          <Stagger className="grid gap-5 lg:grid-cols-3">
            {mainCases.map((item) => (
              <StaggerItem key={item.title}>
                <article className="h-full border border-white/15 bg-ink-950/72 backdrop-blur">
                  <FieldImage src={item.image} className="h-60 w-full object-cover" />
                  <div className="p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-blueLight">{item.category}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-steel-300">{item.location}</p>
                    <p className="mt-4 text-base leading-relaxed text-steel-300">{item.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10">
            <Link to="/proyectos" className="btn-ghost-light rounded-none">
              Ver informe visual <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <Reveal>
            <FieldImage src={media.fracModern02} className="h-full min-h-[26rem] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="mono-label mb-4 text-brand-red">Preparados para obra</p>
            <h2 className="h-section">Equipos, seguridad y respuesta para operaciones exigentes.</h2>
            <div className="mt-8 space-y-4">
              {[
                'Personal tecnico para servicios en campo.',
                'Equipos moviles para vapor, tanques y manejo de fluidos.',
                'Registro fotografico para respaldar avances y cierre de trabajos.',
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 text-lg text-steel-700">
                  <CheckCircle size={24} weight="fill" className="mt-0.5 shrink-0 text-brand-blue" />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="mono-label mb-4 text-brand-blueLight">Hablemos de tu operacion</p>
            <h2 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              Si necesitas vapor, recuperacion, saneamiento o control, SPS puede entrar al campo.
            </h2>
          </div>
          <Link to="/contacto" className="btn-red rounded-none text-base">
            Solicitar atencion <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
