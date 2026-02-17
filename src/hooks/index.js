import { useEffect } from 'react'

/* ── useCursor ───────────────────────────────────── */
export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('ev-cursor')
    const ring   = document.getElementById('ev-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0, rafId

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top  = my + 'px'
    }

    const loop = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      rafId = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])
}

/* ── useReveal ───────────────────────────────────── */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  })
}

/* ── useScrolledNav ──────────────────────────────── */
export function useScrolledNav(ref, threshold = 60) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fn = () => el.classList.toggle('nav-scrolled', window.scrollY > threshold)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [ref, threshold])
}

/* ── useSmoothScroll ─────────────────────────────── */
export function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target.closest("a[href^='#']")
      if (!anchor) return
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
}
