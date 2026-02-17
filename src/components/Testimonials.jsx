import { useState, useRef, useEffect, useCallback } from 'react'
import { testimonials } from '../data'
import { SectionTag, SectionTitle } from './UI'
import T from '../styles/tokens'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)

  const slide = useCallback((dir) => {
    setIdx(prev => (prev + dir + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!trackRef.current) return
    const cardW = (trackRef.current.children[0]?.offsetWidth || 0) + 32
    const maxIdx = Math.max(0, testimonials.length - 2)
    trackRef.current.style.transform = `translateX(-${Math.min(idx, maxIdx) * cardW}px)`
  }, [idx])

  return (
    <section style={{ padding: '8rem 5rem', background: T.mintPale, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-2rem', left: '3rem',
                    fontFamily: "'Playfair Display',serif", fontSize: '22rem',
                    fontWeight: 300, color: 'rgba(157,191,173,.2)', lineHeight: 1,
                    userSelect: 'none', pointerEvents: 'none' }}>"</div>

      <div className="reveal"
           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <div>
          <SectionTag text="Client Words" />
          <SectionTitle style={{ marginBottom: 0 }}>
            What our clients <em style={{ fontStyle: 'italic', color: T.mintDeep }}>say</em>
          </SectionTitle>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[['←', -1], ['→', 1]].map(([arrow, dir]) => (
            <button key={arrow} onClick={() => slide(dir)}
                    style={{ width: 44, height: 44, borderRadius: '50%',
                             border: `1.5px solid ${T.mintDeep}`, background: 'transparent',
                             color: T.mintDark, fontSize: '1rem', cursor: 'pointer',
                             display: 'flex', alignItems: 'center', justifyContent: 'center',
                             transition: 'background .3s, color .3s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = T.mintDark; e.currentTarget.style.color = T.white }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.mintDark }}>
              {arrow}
            </button>
          ))}
        </div>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <div ref={trackRef} className="testi-track" style={{ display: 'flex', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card"
                 style={{ minWidth: 'calc(50% - 1rem)', flexShrink: 0,
                          background: T.white, padding: '3.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: T.mintDeep }} />
              <div style={{ color: T.gold, fontSize: '.9rem', marginBottom: '1.5rem' }}>★★★★★</div>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem',
                          fontStyle: 'italic', fontWeight: 300, lineHeight: 1.8,
                          color: T.charcoal, marginBottom: '2.5rem' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: T.mintPale,
                              flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: T.mintDark }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase',
                                fontWeight: 500, color: T.charcoal }}>{t.name}</div>
                  <div style={{ fontSize: '.65rem', letterSpacing: '.1em', color: T.mintDeep, marginTop: '.3rem' }}>{t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
