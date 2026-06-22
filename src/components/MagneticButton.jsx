import { useRef, useCallback } from 'react'
import { useReducedMotion } from '../lib/animations'
import { Link } from 'react-router-dom'

/**
 * MagneticButton — subtle pull toward the cursor (ref-based, no framer-motion).
 * Renders as a router <Link> when `to` is set, otherwise an <a>.
 */
export default function MagneticButton({ to, href, className = '', children, strength = 0.32, ...rest }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const rafId = useRef(null)

  const onMove = useCallback((e) => {
    if (reduce || !ref.current) return
    cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * strength
      const y = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.transform = `translate(${x}px, ${y}px)`
    })
  }, [reduce, strength])

  const reset = useCallback(() => {
    cancelAnimationFrame(rafId.current)
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.transition = 'transform 0.3s ease'
    setTimeout(() => { if (el) el.style.transition = '' }, 300)
  }, [])

  const common = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: reset,
    className,
    ...rest,
  }

  if (to) return <Link to={to} {...common}>{children}</Link>
  return <a href={href} {...common}>{children}</a>
}