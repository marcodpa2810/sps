import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Phone } from '@phosphor-icons/react'

const pages = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

const services = [
  { to: '/servicios#vapor', label: 'Vapor y recuperacion' },
  { to: '/servicios#manejo', label: 'Manejo y saneamiento' },
  { to: '/servicios#automatizacion', label: 'Automatizacion y control' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-steel-300">
      <div className="h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-blueLight" />
      <div className="absolute inset-0 bp-grid opacity-25" />

      <div className="relative mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.7fr_.7fr_1fr]">
          <div>
            <img src="/sps-logo.png" alt="SPS - Service Petroleum and Supply" className="h-16 w-auto object-contain" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-steel-400">
              Servicios petroleros, recuperacion de crudo, vapor, saneamiento, automatizacion
              y soporte industrial desde Zulia, Venezuela.
            </p>
          </div>

          <nav aria-label="Empresa">
            <h3 className="mb-5 font-display text-lg font-bold text-white">Empresa</h3>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to} className="text-base text-steel-400 transition-colors hover:text-white">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h3 className="mb-5 font-display text-lg font-bold text-white">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.to}>
                  <Link to={service.to} className="text-base text-steel-400 transition-colors hover:text-white">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 font-display text-lg font-bold text-white">Contacto</h3>
            <div className="space-y-4">
              <p className="flex items-start gap-3 text-base leading-relaxed text-steel-400">
                <MapPin size={20} className="mt-1 shrink-0 text-brand-blueLight" />
                Av. 5, Calle 13, N 26A-162, San Francisco, Maracaibo, Zulia.
              </p>
              <p className="flex items-start gap-3 text-base leading-relaxed text-steel-400">
                <Phone size={20} className="mt-1 shrink-0 text-brand-blueLight" />
                <span>
                  <a href="tel:+582613226494" className="block hover:text-white">0261 322 6494</a>
                  <a href="tel:+584146361373" className="block hover:text-white">+58 414 636 1373</a>
                </span>
              </p>
            </div>
            <Link to="/contacto" className="mt-6 inline-flex items-center gap-2 font-bold text-white hover:text-brand-blueLight">
              Solicitar atencion <ArrowUpRight size={18} weight="bold" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-steel-500 sm:flex-row">
          <p>SPS &copy; {new Date().getFullYear()}. Todos los derechos reservados.</p>
          <p>Service Petroleum and Supply C.A.</p>
        </div>
      </div>
    </footer>
  )
}
