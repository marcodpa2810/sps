import { Children, cloneElement, createContext, isValidElement, useContext } from 'react'
import { useInView, useReducedMotion } from '../lib/animations'

const StaggerCtx = createContext({ inView: false, reduce: false, gap: 0.08 })

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
  const staggeredChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child
    return cloneElement(child, { staggerIndex: index })
  })

  return (
    <StaggerCtx.Provider value={{ inView, reduce, gap }}>
      <Tag ref={ref} className={className}>
        {staggeredChildren}
      </Tag>
    </StaggerCtx.Provider>
  )
}

export function StaggerItem({ children, className = '', y = 24, as = 'div', staggerIndex = 0 }) {
  const { inView, reduce, gap } = useContext(StaggerCtx)
  const Tag = as
  const delay = staggerIndex * gap
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
