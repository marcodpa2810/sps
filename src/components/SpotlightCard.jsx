import { useRef } from 'react'

/**
 * SpotlightCard — sets CSS vars --mx/--my from the pointer so the
 * .spotlight-card border highlight follows the cursor. Pure CSS does the paint;
 * no React state, no re-renders.
 */
export default function SpotlightCard({ as: Comp = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight-card ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  )
}
