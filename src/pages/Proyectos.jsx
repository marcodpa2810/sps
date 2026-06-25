import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, FunnelSimple, Images, MapPin } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { clients, media, projectCases } from '../data/spsContent'
import FieldImage from '../components/FieldImage'

const galleryImages = [
  { src: media.fracModern01, label: 'Frac tanks' },
  { src: media.fracModern02, label: 'Equipos moviles' },
  { src: media.bajoGrandePatio, label: 'Patio de tanques' },
  { src: media.bajoGrandeEquipos, label: 'Control de campo' },
  { src: media.boscanFosa, label: 'Fosas petrolizadas' },
  { src: media.boscanCosta, label: 'Saneamiento' },
  { src: media.tiaJuana01, label: 'Estacion B5' },
  { src: media.patioVapor03, label: 'Patio de vapor' },
]

export default function Proyectos() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(projectCases.map((item) => item.category)))],
    [],
  )
  const visibleCases = useMemo(
    () =>
      activeCategory === 'Todos'
        ? projectCases
        : projectCases.filter((item) => item.category === activeCategory),
    [activeCategory],
  )
  const featuredCase = visibleCases[0]

  return (
    <>
      <PageHero
        kicker="Informe visual"
        title="Proyectos reales,"
        accent="imagenes reales."
        subtitle="Trabajos petroleros e industriales documentados en Boscan, Tia Juana, Bajo Grande, costas, patios y estaciones."
        image={media.heroProjects}
      >
        <div className="mt-10 grid max-w-4xl border border-white/20 bg-ink-950/75 text-left backdrop-blur sm:grid-cols-3">
          {[
            ['Registro', 'Antes / despues'],
            ['Frentes', 'Vapor, saneamiento, control'],
            ['Soporte', 'Fotos reales de campo'],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-white/15 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-brand-blueLight">{label}</span>
              <strong className="mt-3 block font-display text-xl font-bold leading-tight text-white">{value}</strong>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-white py-20 text-ink-900 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[18rem_1fr] lg:px-8">
          <Reveal>
            <div className="sticky top-28 rounded-[1.5rem] border border-steel-200 bg-steel-50 p-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center bg-brand-blue text-white">
                  <FunnelSimple size={22} weight="bold" />
                </span>
                <div>
                  <p className="mono-label text-brand-red">Portafolio SPS</p>
                  <h2 className="font-display text-xl font-bold leading-tight text-ink-900">Filtrar por frente</h2>
                </div>
              </div>
              <div className="grid gap-2">
                {categories.map((category) => {
                  const selected = activeCategory === category

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`min-h-12 cursor-pointer border px-4 py-3 text-left text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                        selected
                          ? 'border-brand-blue bg-brand-blue text-white'
                          : 'border-steel-200 bg-white text-ink-900/72 hover:border-brand-red hover:text-ink-900'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
              <div className="mt-6 border-t border-steel-200 pt-5">
                <p className="text-sm font-semibold leading-relaxed text-steel-600">
                  {visibleCases.length} proyectos visibles con ubicacion, categoria y doble imagen de evidencia.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            {featuredCase && (
              <Reveal>
                <article className="mb-6 grid overflow-hidden rounded-[1.5rem] border border-steel-200 bg-ink-950 text-white shadow-lift lg:grid-cols-[1.15fr_.85fr]">
                  <div className="grid min-h-[34rem] sm:grid-cols-2">
                    <FieldImage src={featuredCase.image} className="h-full min-h-[18rem] w-full object-cover" />
                    <FieldImage src={featuredCase.secondImage} className="h-full min-h-[18rem] w-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <p className="mono-label mb-4 text-brand-blueLight">{featuredCase.category}</p>
                    <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">{featuredCase.title}</h2>
                    <p className="mt-5 flex items-center gap-2 text-sm font-bold text-steel-200">
                      <MapPin size={18} className="text-brand-redLight" /> {featuredCase.location}
                    </p>
                    <p className="mt-6 text-sm leading-relaxed text-steel-200">{featuredCase.description}</p>
                  </div>
                </article>
              </Reveal>
            )}

            <Stagger className="grid gap-5 md:grid-cols-2">
              {visibleCases.slice(1).map((item) => (
                <StaggerItem key={item.title}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white transition-[transform,border-color,box-shadow] duration-300 ease-field hover:-translate-y-1 hover:border-brand-blue hover:shadow-lift">
                    <div className="grid h-72 grid-cols-2 overflow-hidden border-b border-steel-200">
                      <FieldImage src={item.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <FieldImage src={item.secondImage} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="mono-label mb-3 text-brand-blue">{item.category}</p>
                      <h3 className="font-display text-xl font-bold leading-tight text-ink-900">{item.title}</h3>
                      <p className="mt-4 flex items-center gap-2 text-sm font-bold text-steel-600">
                        <MapPin size={17} className="shrink-0 text-brand-red" /> {item.location}
                      </p>
                      <p className="mt-5 text-sm leading-relaxed text-steel-600">{item.description}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 bg-steel-50 text-ink-900">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[15rem_1fr] lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-500">
            Operaciones asociadas
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {clients.map((client) => (
              <span key={client} className="text-sm font-bold uppercase text-ink-900">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-ink-900 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mono-label mb-4 text-brand-blueLight">Galeria operativa</p>
              <h2 className="font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
                Equipos, fosas, tanques y patios de trabajo.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Imagenes grandes para inspeccion visual.', 'Categorias visibles sin saturar la foto.'].map((item) => (
                <p key={item} className="flex items-start gap-3 rounded-2xl border border-steel-200 bg-steel-50 p-4 text-sm font-semibold text-steel-700">
                  <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-brand-blueLight" />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
          <Stagger className="grid auto-rows-[17rem] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <StaggerItem key={image.src} className={index === 0 || index === 4 ? 'sm:col-span-2' : ''}>
                <figure className="group relative h-full overflow-hidden rounded-[1.25rem] border border-steel-200 bg-white shadow-sm">
                  <FieldImage src={image.src} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <figcaption className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent px-5 pb-5 pt-12 text-sm font-bold uppercase tracking-wide text-white">
                    <Images size={18} weight="bold" className="text-brand-blueLight" /> {image.label}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 text-ink-900">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <h2 className="max-w-4xl font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
            Documentamos el servicio desde el inicio para que cada cierre tenga evidencia tecnica.
          </h2>
          <Link to="/contacto" className="btn-red text-sm">
            Solicitar servicio <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
