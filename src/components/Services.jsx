import { useState } from 'react'
import { servicesList } from '../data'
import { SectionTag, SectionTitle } from './UI'
import T from '../styles/tokens'

function ServiceCard({ s, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div className={`reveal ${delay}`}
         style={{ background: hov ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.06)',
                  border: hov ? '1px solid rgba(255,255,255,.2)' : '1px solid rgba(255,255,255,.1)',
                  padding: '3rem 2.5rem',
                  transform: hov ? 'translateY(-4px)' : 'none',
                  transition: 'background .4s, transform .3s, border-color .4s',
                  position: 'relative', overflow: 'hidden', cursor: 'default' }}
         onMouseEnter={() => setHov(true)}
         onMouseLeave={() => setHov(false)}>
      <div style={{ position: 'absolute', bottom: 0, left: 0, height: 2,
                    background: T.mintLight, width: hov ? '100%' : 0, transition: 'width .5s ease' }} />
      <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '2rem' }}>{s.icon}</span>
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '.8rem',
                     color: T.mintLight, display: 'block', marginBottom: '.8rem' }}>{s.num}</span>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem',
                    fontWeight: 300, color: T.white, lineHeight: 1.2, marginBottom: '1rem' }}>{s.name}</div>
      <p style={{ fontSize: '.8rem', lineHeight: 1.85, color: 'rgba(255,255,255,.55)' }}>{s.desc}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services"
             style={{ padding: '8rem 5rem', background: T.mintDark, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-3rem', bottom: '-3rem',
                    fontFamily: "'Playfair Display',serif", fontSize: '20rem',
                    fontWeight: 300, color: 'rgba(255,255,255,.04)',
                    whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none' }}>
        DESIGN
      </div>
      <div className="reveal">
        <SectionTag text="What We Do" light />
        <SectionTitle style={{ color: T.white, maxWidth: '100%' }}>
          Full-spectrum<br /><em style={{ fontStyle: 'italic', color: T.mintLight }}>design</em> services
        </SectionTitle>
      </div>
      <div className="services-grid"
           style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
        {servicesList.map((s, i) => <ServiceCard key={i} s={s} delay={`d${(i % 3) + 1}`} />)}
      </div>
    </section>
  )
}
