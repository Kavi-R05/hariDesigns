import { useRef } from 'react'
import { useScrolledNav } from '../hooks'
import T from '../styles/tokens'

const links = [['#work','Work'],['#about','Studio'],['#services','Services'],['#contact','Contact']]

export default function Nav() {
  const navRef = useRef(null)
  useScrolledNav(navRef)

  return (
    <nav ref={navRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '2rem 5rem',
                                transition: 'background .5s, padding .4s, box-shadow .4s' }}>
      <a href="#" style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.35rem',
                           fontWeight: 400, color: T.charcoal, letterSpacing: '.06em' }}>
        Élara <em style={{ color: T.mintDeep, fontStyle: 'italic' }}>Voss</em>
      </a>

      <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
        {links.map(([href, label]) => (
          <li key={href}>
            <a href={href}
               style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
                        color: T.warmGray, transition: 'color .3s' }}
               onMouseEnter={e => e.target.style.color = T.mintDark}
               onMouseLeave={e => e.target.style.color = T.warmGray}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta-btn"
         style={{ fontSize: '.68rem', letterSpacing: '.18em', textTransform: 'uppercase',
                  color: T.white, background: T.mintDark, padding: '.7rem 1.8rem',
                  transition: 'background .3s' }}
         onMouseEnter={e => e.currentTarget.style.background = T.mintDeep}
         onMouseLeave={e => e.currentTarget.style.background = T.mintDark}>
        Book a Consultation
      </a>
    </nav>
  )
}
