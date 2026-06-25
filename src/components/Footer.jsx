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
      <div className="bp-grid absolute inset-0 opacity-25" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.07]" />

      <div className="section-shell relative py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.65fr_.75fr_1fr]">
          <div className="max-w-md">
            <img
              src="/sps-logo.png"
              alt="SPS - Service Petroleum and Supply"
              className="h-16 w-auto rounded-xl bg-white p-2 object-contain"
              width="180"
              height="80"
            />
            <p className="mt-6 text-sm font-medium leading-relaxed text-steel-300">
              Servicios petroleros, recuperacion de crudo, vapor, saneamiento,
              automatizacion y soporte industrial desde Zulia, Venezuela.
            </p>
            <Link to="/contacto" className="btn-ghost-light mt-7">
              Solicitar atencion
              <ArrowUpRight size={17} weight="bold" />
            </Link>
          </div>

          <FooterNav title="Empresa" label="Empresa" items={pages} />
          <FooterNav title="Servicios" label="Servicios" items={services} />

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">Contacto</h3>
            <div className="mt-5 space-y-4">
              <p className="flex items-start gap-3 text-sm leading-relaxed text-steel-300">
                <MapPin size={20} className="mt-1 shrink-0 text-brand-redLight" weight="bold" />
                Av. 5, Calle 13, N 26A-162, San Francisco, Maracaibo, Zulia.
              </p>
              <p className="flex items-start gap-3 text-sm leading-relaxed text-steel-300">
                <Phone size={20} className="mt-1 shrink-0 text-brand-blueLight" weight="bold" />
                <span>
                  <a href="tel:+582613226494" className="block font-bold transition-colors hover:text-white">0261 322 6494</a>
                  <a href="tel:+584146361373" className="block font-bold transition-colors hover:text-white">+58 414 636 1373</a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-steel-500 sm:flex-row">
          <p>SPS &copy; {new Date().getFullYear()}. Todos los derechos reservados.</p>
          <p>Service Petroleum and Supply C.A.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterNav({ title, label, items }) {
  return (
    <nav aria-label={label}>
      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="text-sm font-semibold text-steel-400 transition-colors hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
