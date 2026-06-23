import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { capabilityIcons, media } from '../data/spsContent'
import FieldImage from '../components/FieldImage'

const principles = [
  'Respuesta rapida ante requerimientos de campo.',
  'Seguridad industrial como condicion de trabajo.',
  'Mejora continua en equipos, procesos y personal.',
  'Coordinacion con clientes y empresas aliadas.',
  'Respeto ambiental en operaciones con hidrocarburos.',
]

export default function Nosotros() {
  return (
    <>
      <PageHero
        kicker="La empresa"
        title="SPS trabaja donde la operacion"
        accent="no puede detenerse."
        subtitle="Service Petroleum and Supply C.A. es una empresa venezolana enfocada en servicios petroleros, recuperacion de crudo, vapor, automatizacion y soporte industrial."
        image={media.heroAbout}
      />

      <section className="bg-white py-20 text-ink-900 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <Reveal>
            <FieldImage src={media.bajoGrandeCaldera} className="h-full min-h-[30rem] w-full rounded-[1.5rem] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="mono-label mb-4 text-brand-red">Service Petroleum and Supply C.A.</p>
            <h2 className="font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">Una empresa de campo, no solo de escritorio.</h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-steel-600">
              <p>
                SPS presta servicios para recuperacion de crudo, inyeccion de vapor, manejo de
                hidrocarburos, saneamiento, automatizacion, control de procesos, instrumentacion,
                SCADA y PLC.
              </p>
              <p>
                Su trabajo se reconoce en estaciones, patios de tanques, pozos, fosas y plantas
                industriales: lugares donde la respuesta tecnica debe llegar con equipos,
                personal y criterio operativo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
        <FieldImage src={media.fracLine01} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.96),rgba(7,13,24,.7))]" />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <Reveal>
            <p className="mono-label mb-4 text-brand-blueLight">Como trabajamos</p>
            <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Entrar, resolver y dejar evidencia.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {principles.map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-4 border border-white/12 bg-white/[0.05] p-5 backdrop-blur">
                  <CheckCircle size={26} weight="fill" className="mt-0.5 shrink-0 text-brand-blueLight" />
                  <p className="text-sm leading-snug text-steel-100">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-ink-900 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-4xl">
            <p className="mono-label mb-4 text-brand-red">Capacidades</p>
            <h2 className="font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">La empresa combina mecanica, vapor, fluidos, electricidad y control.</h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {capabilityIcons.map(({ label, icon: Icon }) => (
              <StaggerItem key={label}>
                <div className="h-full rounded-[1.25rem] border border-steel-200 bg-steel-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-lift">
                  <Icon size={30} weight="bold" className="text-brand-blue" />
                  <p className="mt-4 text-sm font-bold leading-tight text-ink-900">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-steel-50 py-20 text-ink-900">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="rounded-[1.5rem] border border-steel-200 border-l-brand-blue bg-white p-8">
            <p className="mono-label mb-4 text-brand-blue">Mision</p>
            <h2 className="font-display text-xl font-bold text-ink-900">Prestar servicios confiables en condiciones exigentes.</h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-600">
              Garantizar calidad, seguridad y continuidad operativa en servicios petroleros e
              industriales, con personal tecnico preparado y mejora permanente del proceso.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[1.5rem] border border-steel-200 border-l-brand-red bg-white p-8">
            <p className="mono-label mb-4 text-brand-red">Vision</p>
            <h2 className="font-display text-xl font-bold text-ink-900">Ser reconocidos por respuesta y excelencia operacional.</h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-600">
              Consolidarse como aliado tecnico para operaciones petroleras, manufactureras e
              industriales por capacidad, responsabilidad y calidad de servicio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <h2 className="max-w-4xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            Conoce los servicios que SPS puede llevar a tu operacion.
          </h2>
          <Link to="/servicios" className="btn-primary rounded-none text-sm">
            Ver servicios <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
