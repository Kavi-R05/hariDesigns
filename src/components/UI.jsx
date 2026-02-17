import { useState } from 'react'
import T from '../styles/tokens'

export const SectionTag = ({ text, light = false, center = false }) => (
  <div style={{ display: 'flex', alignItems: 'center',
                justifyContent: center ? 'center' : 'flex-start',
                gap: '1rem', marginBottom: '1.5rem' }}>
    <span style={{ width: 30, height: 1, background: light ? T.mintLight : T.mintDeep, display: 'block' }} />
    <span style={{ fontSize: '.62rem', letterSpacing: '.28em', textTransform: 'uppercase',
                   color: light ? T.mintLight : T.mintDeep }}>
      {text}
    </span>
    {center && <span style={{ width: 30, height: 1, background: light ? T.mintLight : T.mintDeep, display: 'block' }} />}
  </div>
)

export const SectionTitle = ({ children, style = {} }) => (
  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem,4vw,4rem)',
               fontWeight: 300, lineHeight: 1.1, marginBottom: '4rem', ...style }}>
    {children}
  </h2>
)

export const BtnPrimary = ({ children, href = '#', style = {} }) => {
  const [hov, setHov] = useState(false)
  return (
    <a href={href}
       style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem',
                background: hov ? T.mintDeep : T.mintDark, color: T.white,
                padding: '1rem 2.5rem', fontSize: '.72rem', letterSpacing: '.2em',
                textTransform: 'uppercase', transition: 'background .3s', ...style }}
       onMouseEnter={() => setHov(true)}
       onMouseLeave={() => setHov(false)}>
      {children}
    </a>
  )
}
