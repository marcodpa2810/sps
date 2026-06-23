import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check } from '@phosphor-icons/react'
import { clients, featuredServices, media, projectCases, serviceGroups } from '../data/spsContent'
import FieldImage from '../components/FieldImage'

const ease = [0.16, 1, 0.3, 1]

function WordsPullUp({ text, className = '', showAsterisk = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap overflow-hidden ${className}`}>
      {words.map((word, index) => {
        const final = showAsterisk && index === words.length - 1

        return (
          <span key={`${word}-${index}`} className="overflow-hidden pr-[0.08em]">
            <motion.span
              className="relative inline-block"
              initial={{ y: 36, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: index * 0.08, ease }}
            >
              {word}
              {final && (
                <span className="absolute -right-[0.28em] top-[0.62em] text-[0.28em] leading-none">*</span>
              )}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}

function MultiStyleHeading({ segments, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const words = segments.flatMap((segment) =>
    segment.text.split(' ').map((word) => ({ word, className: segment.className || '' })),
  )

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center overflow-hidden ${className}`}>
      {words.map(({ word, className: wordClass }, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden pr-[0.12em]">
          <motion.span
            className={`inline-block ${wordClass}`}
            initial={{ y: 24, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.045, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

function ScrollText({ text }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.82', 'end 0.22'] })
  const chars = text.split('')

  return (
    <p ref={ref} className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-primary md:text-sm">
      {chars.map((char, index) => {
        return (
          <AnimatedChar
            key={`${char}-${index}`}
            char={char}
            index={index}
            total={chars.length}
            progress={scrollYProgress}
          />
        )
      })}
    </p>
  )
}

function AnimatedChar({ char, index, total, progress }) {
  const start = Math.max(0, index / total - 0.08)
  const end = Math.min(1, index / total + 0.04)
  const opacity = useTransform(progress, [start, end], [0.24, 1])

  return <motion.span style={{ opacity }}>{char}</motion.span>
}

export default function Home() {
  const mainCases = projectCases.slice(0, 3)
  const heroImage = '/assets/sps-field/hero-home-field.jpg'

  return (
    <>
      <section className="min-h-screen bg-white px-3 pb-8 pt-28 text-white md:px-5 lg:pt-36">
        <div className="relative mx-auto min-h-[calc(100dvh-9rem)] max-w-[1400px] overflow-hidden rounded-[2rem] border border-steel-200 bg-ink-950 shadow-lift">
          <img
            src={heroImage}
            alt="Patio operativo SPS con equipos, tanques y caldera en campo"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,13,24,.92)_0%,rgba(7,13,24,.78)_34%,rgba(7,13,24,.35)_62%,rgba(7,13,24,.04)_100%)]" />
          <div className="relative flex min-h-[calc(100dvh-9rem)] max-w-3xl flex-col justify-end p-6 sm:p-8 lg:p-12">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-redLight">
              Service Petroleum and Supply C.A.
            </p>
            <h1 className="mt-8">
                <WordsPullUp
                  text="SPS"
                  showAsterisk
                  className="font-display text-[18vw] font-black leading-[0.86] tracking-[-0.035em] text-white sm:text-[13vw] lg:text-[6.4vw] 2xl:text-[5.8vw]"
                />
            </h1>
            <motion.div
              className="mt-8 max-w-xl"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
            >
              <h2 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Operaciones petroleras con equipos reales en campo.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-steel-100 sm:text-sm">
                Vapor, recuperacion de crudo, saneamiento, automatizacion y soporte industrial
                para frentes que necesitan respuesta tecnica clara.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/servicios"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-2 text-sm font-extrabold text-white shadow-lift-blue transition-all duration-300 hover:gap-4 hover:bg-brand-blueLight sm:text-sm"
                >
                  Ver servicios
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={18} weight="bold" />
                  </span>
                </Link>
                <Link
                  to="/proyectos"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 py-2 text-sm font-bold text-white transition-colors hover:border-brand-redLight hover:bg-brand-red/20 sm:text-sm"
                >
                  Ver proyectos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6 text-ink-900 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-x-8 gap-y-3 border-y border-steel-200 py-6">
          {clients.map((client) => (
            <span key={client} className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-500">
              {client}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-ink-900 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-steel-200 bg-steel-50 px-5 py-16 text-center sm:px-8 lg:px-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-red">Quienes somos</p>
          <h2 className="mx-auto mt-7 max-w-4xl text-2xl font-normal leading-tight text-ink-900 sm:text-3xl md:text-4xl">
            <MultiStyleHeading
              segments={[
                { text: 'Una empresa de campo,' },
                { text: 'no de escritorio.', className: 'font-serif italic' },
                { text: 'Preparada para operaciones exigentes.' },
              ]}
            />
          </h2>
          <ScrollText text="SPS combina personal tecnico, equipos moviles y criterio operativo para atender pozos, estaciones, patios de tanques, fosas y plantas industriales. Su valor esta en entrar al sitio, resolver con seguridad y dejar evidencia del trabajo realizado." />
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-ink-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-redLight">Servicios principales</p>
            <h2 className="mt-5 text-xl font-normal leading-tight text-white sm:text-2xl lg:text-3xl">
              <MultiStyleHeading
                className="justify-start"
                segments={[
                  { text: 'Capacidades industriales para campo petrolero.' },
                  { text: 'Vapor, fluidos y control en una sola operacion.', className: 'text-brand-blueLight' },
                ]}
              />
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:min-h-[500px]">
            <motion.article
              className="relative min-h-[26rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] shadow-sm lg:col-span-1"
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease }}
            >
              <FieldImage src={media.bajoGrandeCaldera} className="h-full min-h-[26rem] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-xl font-extrabold leading-tight text-white">
                Equipos reales para operaciones reales.
              </p>
            </motion.article>

            {featuredServices.slice(0, 3).map(({ title, copy, image }, index) => (
              <motion.article
                key={title}
                className="group flex min-h-[26rem] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-sm transition-colors duration-300 hover:bg-white/[0.08]"
                initial={{ scale: 0.96, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.12 * (index + 1), ease }}
              >
                <div>
                  <img src={image} alt="" className="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
                  <div className="mt-8 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-extrabold leading-tight text-white">{title}</h3>
                    <span className="font-mono text-xs text-brand-redLight">0{index + 1}</span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-steel-300">{copy}</p>
                </div>
                <Link to="/servicios" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blueLight">
                  Ver detalle <ArrowRight size={18} weight="bold" className="-rotate-45 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 px-4 py-20 text-ink-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-4xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-red">Frentes de trabajo</p>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
              Tres lineas operativas que explican que hace SPS en campo.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-steel-600">
              Cada bloque resume un area principal de servicio: vapor y recuperacion,
              manejo de hidrocarburos, y automatizacion industrial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-3">
          {serviceGroups.map(({ id, title, intro, image }, index) => (
            <Link
              key={id}
              to={`/servicios#${id}`}
              className="group relative min-h-[28rem] overflow-hidden rounded-[1.5rem] border border-steel-200 bg-white shadow-sm"
            >
              <FieldImage src={image} className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-xs text-brand-redLight">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-extrabold leading-tight text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 pb-20 text-ink-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border border-white/10 bg-ink-950 p-5 text-white sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-redLight">Evidencia de campo</p>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white md:text-3xl">Proyectos visibles.</h2>
            </div>
            <Link to="/proyectos" className="group inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-brand-red px-5 py-2 text-sm font-extrabold text-white transition-all hover:gap-4 hover:bg-brand-redLight">
              Ver informe
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-red transition-transform group-hover:scale-110">
                <ArrowRight size={18} weight="bold" />
              </span>
            </Link>
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            {mainCases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.04] shadow-sm">
                <FieldImage src={item.image} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blueLight">{item.category}</p>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight text-white">{item.title}</h3>
                  <p className="mt-4 flex items-start gap-2 text-sm text-steel-300">
                    <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-brand-blueLight" />
                    {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-24 text-ink-900 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 border-t border-steel-200 pt-12 md:flex-row md:items-center">
          <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-ink-900 md:text-3xl">
            Hablemos de tu proxima operacion.
          </h2>
          <Link to="/contacto" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-blue px-5 py-2 text-sm font-extrabold text-white transition-all hover:gap-4 hover:bg-brand-blueLight">
            Solicitar atencion
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue transition-transform group-hover:scale-110">
              <ArrowRight size={18} weight="bold" />
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
