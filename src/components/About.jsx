import { SectionTag, SectionTitle } from './UI'
import T from '../styles/tokens'

export default function About() {
  return (
    <section id="about" className="about-grid"
             style={{ padding: '8rem 5rem', display: 'grid', gridTemplateColumns: '1fr 1fr',
                      gap: '7rem', alignItems: 'center', background: T.cream }}>

      {/* Images */}
      <div className="about-imgs reveal" style={{ position: 'relative', height: 600 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 80, bottom: 80, overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85&auto=format&fit=crop"
               alt="Interior designer at work" loading="lazy"
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 260, height: 280,
                      overflow: 'hidden', border: `10px solid ${T.cream}` }}>
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=85&auto=format&fit=crop"
               alt="Cream sofa detail" loading="lazy"
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', top: '2rem', right: '5.5rem', background: T.mintDark,
                      color: T.white, padding: '.8rem 1.4rem',
                      fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase' }}>
          Paris · Milan · NY
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="reveal"><SectionTag text="The Studio" /></div>
        <div className="reveal d1">
          <SectionTitle style={{ marginBottom: '2rem' }}>
            Designing with <em style={{ fontStyle: 'italic', color: T.mintDeep }}>intention,</em><br />not trend
          </SectionTitle>
        </div>
        {[
          'Founded in Paris in 2012, our studio has spent over a decade translating the narratives of our clients into spaces of lasting beauty. We work at the intersection of architecture, art, and craft — always asking what a space should feel like before we consider how it looks.',
          'Our palette centres on the timeless harmony of cream, sage, and natural materials — warm, breathing, enduring. Every project begins with deep listening.',
        ].map((text, i) => (
          <p key={i} className={`reveal d${i + 2}`}
             style={{ fontSize: '.88rem', lineHeight: 2, color: T.warmGray, marginBottom: '1.5rem', maxWidth: 500 }}>
            {text}
          </p>
        ))}
        <div className="reveal d3" style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem',
                                             fontStyle: 'italic', fontWeight: 300, color: T.mintDark, marginTop: '2.5rem' }}>
          Élara Voss
        </div>
        <div className="reveal d3" style={{ fontSize: '.65rem', letterSpacing: '.2em',
                                             textTransform: 'uppercase', color: T.warmGray, marginTop: '.3rem' }}>
          Founder &amp; Creative Director
        </div>
        <div className="reveal d4"
             style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem',
                      marginTop: '3.5rem', paddingTop: '3rem', borderTop: `1px solid ${T.mintPale}` }}>
          {[['140+','Projects'],['12','Years'],['8','Awards']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.8rem',
                            fontWeight: 300, color: T.mintDark }}>{n}</div>
              <div style={{ fontSize: '.6rem', letterSpacing: '.18em',
                            textTransform: 'uppercase', color: T.warmGray, marginTop: '.4rem' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
