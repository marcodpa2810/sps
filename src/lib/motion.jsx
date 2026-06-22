import { useRef, createContext, useContext } from 'react'
import { useInView, useReducedMotion } from '../lib/animations'

export const EASE = [0.16, 1, 0.3, 1]

const StaggerCtx = createContext({ inView: false, reduce: false, gap: 0.08, indexRef: null })

/**
 * Reveal — fades + slides content in as it enters the viewport.
 * Honors prefers-reduced-motion (renders static).
 */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = '',
  as = 'div',
  amount = 0.25,
  once = true,
}) {
  const [ref, inView] = useInView({ once, amount })
  const reduce = useReducedMotion()
  const Tag = as
  const d = reduce ? 0 : delay
  const show = inView || reduce

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${d}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${d}s`,
      }}
    >
      {children}
    </Tag>
  )
}

/**
 * Stagger — parent that orchestrates staggered children.
 * Pair with <StaggerItem>.
 */
export function Stagger({
  children,
  className = '',
  gap = 0.08,
  amount = 0.2,
  once = true,
  as = 'div',
}) {
  const [ref, inView] = useInView({ once, amount })
  const reduce = useReducedMotion()
  const Tag = as
  const indexRef = useRef(0)
  indexRef.current = 0

  return (
    <StaggerCtx.Provider value={{ inView, reduce, gap, indexRef }}>
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    </StaggerCtx.Provider>
  )
}

export function StaggerItem({ children, className = '', y = 24, as = 'div' }) {
  const { inView, reduce, gap, indexRef } = useContext(StaggerCtx)
  const Tag = as
  const i = indexRef.current++
  const delay = i * gap
  const show = inView || reduce

  return (
    <Tag
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  )
}