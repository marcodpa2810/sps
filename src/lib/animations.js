import { useEffect, useRef, useState } from 'react'

/**
 * useInView — simple IntersectionObserver hook replacement.
 */
export function useInView(opts = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); if (opts.once) obs.unobserve(el) } },
      { threshold: opts.amount ?? 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [opts.once, opts.amount])
  return [ref, inView]
}

/**
 * useReducedMotion — matches prefers-reduced-motion media query.
 */
export function useReducedMotion() {
  const [reduce, setReduce] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduce(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduce
}

/**
 * CSS ease-out bezier matching EASE = [0.16, 1, 0.3, 1]
 */
export const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'
