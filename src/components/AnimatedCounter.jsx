import { useEffect, useRef } from 'react'
import { useInView, useReducedMotion } from '../lib/animations'

/**
 * AnimatedCounter — counts up to a target when scrolled into view.
 * Supports a numeric `value` plus optional `prefix`/`suffix` (e.g. "+", "%").
 * Non-numeric values (like "1.500") fall back gracefully.
 */
export default function AnimatedCounter({ value, prefix = '', suffix = '', className = '' }) {
  const ref = useRef(null)
  const [observerRef, inView] = useInView({ once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  // Parse a number out of strings like "7+", "100%", "1.500", "5"
  const cleaned = String(value).replace(/[^\d.,]/g, '')
  const isThousand = cleaned.includes('.') && !cleaned.includes(',')
  const target = parseFloat(cleaned.replace(/\./g, isThousand ? '' : '.').replace(',', '.')) || 0
  const trailingSuffix = suffix || (String(value).match(/[^\d.,]+$/)?.[0] ?? '')

  useEffect(() => {
    if (reduce) return
    if (!inView) return

    const duration = 1500
    const startTime = performance.now()
    let running = true

    const animate = (now) => {
      if (!running) return
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target
      const formatted = isThousand
        ? Math.round(current).toLocaleString('es-VE')
        : Number.isInteger(target)
          ? Math.round(current).toString()
          : current.toFixed(1)
      if (ref.current) ref.current.textContent = `${prefix}${formatted}${trailingSuffix}`
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
    return () => { running = false }
  }, [inView, reduce, target, isThousand, prefix, trailingSuffix])

  return (
    <span ref={(el) => { ref.current = el; observerRef.current = el }} className={className}>
      {reduce ? value : `${prefix}0${trailingSuffix}`}
    </span>
  )
}
