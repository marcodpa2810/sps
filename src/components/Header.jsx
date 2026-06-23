import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { List, X, ArrowUpRight } from '@phosphor-icons/react'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex justify-center border-b border-steel-200 bg-white px-3 shadow-[0_16px_50px_-36px_rgba(11,20,38,.45)]"
    >
      <div className="w-full max-w-[1400px] px-3 md:px-6">
        <div className="flex h-20 items-center justify-between md:h-24 lg:h-28">
          <Link to="/" className="group flex items-center gap-3 rounded-xl">
            <img
              src="/sps-logo.png"
              alt="SPS - Service Petroleum and Supply"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-16 lg:h-20"
            />
          </Link>

          <nav className="hidden items-center gap-3 md:flex" aria-label="Navegacion principal">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className="group relative px-4 py-3 text-sm font-extrabold">
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive ? 'text-brand-blue' : 'text-ink-900/72 group-hover:text-ink-900'
                      }`}
                    >
                      {label}
                    </span>
                    {isActive && (
                      <span className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-brand-blueLight" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="ml-3 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-extrabold text-white transition-all duration-200 hover:gap-3 hover:bg-brand-blueLight active:scale-[0.97]"
            >
              Cotizar
              <ArrowUpRight size={15} weight="bold" />
            </Link>
          </nav>

          <button
            className="rounded-full p-2 text-ink-900 transition-colors hover:bg-steel-100 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — CSS transition instead of AnimatePresence */}
      <div
        className="absolute left-3 right-3 top-20 overflow-hidden rounded-b-3xl border border-t-0 border-steel-200 bg-white transition-all duration-300 ease-in-out md:hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <nav className="px-4 py-5 flex flex-col gap-1" aria-label="Menu movil">
          {navLinks.map(({ to, label }, i) => (
            <div
              key={to}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-12px)',
                transition: `opacity 0.3s ease ${0.05 + i * 0.05}s, transform 0.3s ease ${0.05 + i * 0.05}s`,
              }}
            >
              <NavLink
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-blue bg-brand-blue/10 border border-brand-blue/20'
                      : 'text-ink-900/70 hover:text-ink-900 hover:bg-steel-100'
                  }`
                }
              >
                {label}
              </NavLink>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-steel-200">
            <Link
              to="/contacto"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-extrabold text-white"
            >
              Solicitar cotizacion
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
