import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import { Reveal, Stagger, StaggerItem } from '../lib/motion'
import { media, projectCases } from '../data/spsContent'
import FieldImage from '../components/FieldImage'

export default function Proyectos() {
  return (
    <>
      <PageHero
        kicker="Informe visual"
        title="Proyectos reales,"
        accent="imagenes reales."
        subtitle="Una muestra de trabajos petroleros e industriales: Boscán, Tía Juana, Bajo Grande, saneamiento, frac tanks y automatización."
        image={media.heroProjects}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-4xl">
            <p className="mono-label mb-4 text-brand-red">Portafolio SPS</p>
            <h2 className="h-section">
              Fotos de campo tratadas para verse limpias, legibles y profesionales sin perder autenticidad.
            </h2>
          </Reveal>

          <div className="space-y-20">
            {projectCases.map((item, index) => (
              <section key={item.title} className="grid gap-0 overflow-hidden border border-steel-200 bg-steel-50 lg:grid-cols-[1.2fr_.8fr]">
                <div className={`grid gap-0 sm:grid-cols-2 ${index % 2 ? 'lg:order-2' : ''}`}>
                  <div className="relative min-h-[22rem]">
                    <FieldImage src={item.image} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="relative min-h-[22rem]">
                    <FieldImage src={item.secondImage} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                </div>
                <Reveal className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="mono-label mb-4 text-brand-blue">{item.category}</p>
                  <h2 className="font-display text-4xl font-bold leading-tight text-ink-900">{item.title}</h2>
                  <p className="mt-4 flex items-center gap-2 text-base font-bold text-steel-600">
                    <MapPin size={18} className="text-brand-red" /> {item.location}
                  </p>
                  <p className="mt-6 text-lg leading-relaxed text-steel-600">{item.description}</p>
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 max-w-3xl">
            <p className="mono-label mb-4 text-brand-blueLight">Galeria operativa</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              Equipos, fosas, tanques y patios de trabajo.
            </h2>
          </Reveal>
          <Stagger className="grid auto-rows-[16rem] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              media.fracModern01,
              media.fracModern02,
              media.bajoGrandePatio,
              media.bajoGrandeEquipos,
              media.boscanFosa,
              media.boscanCosta,
              media.tiaJuana01,
              media.patioVapor03,
            ].map((image, index) => (
              <StaggerItem key={image} className={index === 0 || index === 4 ? 'sm:col-span-2' : ''}>
                <FieldImage src={image} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <h2 className="h-section max-w-4xl">
            Si quieres que tu proyecto aparezca con esta claridad, documentamos el servicio desde el inicio.
          </h2>
          <Link to="/contacto" className="btn-red rounded-none text-base">
            Solicitar servicio <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
