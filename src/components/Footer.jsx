import T from '../styles/tokens'

export default function Footer() {
  return (
    <footer style={{ background: T.charcoal, padding: '3rem 5rem' }}>
      <div className="footer-inner"
           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem',
                      fontWeight: 300, color: T.white }}>
          Élara <em style={{ fontStyle: 'italic', color: T.mintLight }}>Voss</em> Studio
        </div>
        <div style={{ fontSize: '.62rem', letterSpacing: '.14em', color: 'rgba(255,255,255,.35)' }}>
          © 2025 Élara Voss Studio. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {['Instagram','Pinterest','LinkedIn','Houzz'].map(s => (
            <a key={s} href="#"
               style={{ fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,.45)', transition: 'color .3s' }}
               onMouseEnter={e => e.target.style.color = T.mintLight}
               onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.45)'}>
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
