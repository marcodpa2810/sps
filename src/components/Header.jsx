import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  /* ── Scroll listener (replaces useScroll + useMotionValueEvent) ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group rounded-xl">
            <img
              src="/sps-logo.png"
              alt="SPS - Service Petroleum and Supply"
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegacion principal">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className="relative px-4 py-2 text-sm font-medium group">
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-steel-300 group-hover:text-white'
                      }`}
                    >
                      {label}
                    </span>
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-blue" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="ml-3 inline-flex items-center gap-1.5 bg-brand-red hover:bg-[#D81E34] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Cotizar
              <ArrowUpRight size={15} weight="bold" />
            </Link>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
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
        className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-in-out"
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
                      ? 'text-white bg-white/[0.06] border border-white/10'
                      : 'text-steel-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-white/10">
            <Link
              to="/contacto"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-5 py-3 rounded-xl text-sm"
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