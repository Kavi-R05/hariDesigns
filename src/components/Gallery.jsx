import { useState } from 'react'
import { galleryItems } from '../data'
import { SectionTag, SectionTitle } from './UI'
import T from '../styles/tokens'

function GalleryItem({ item, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div className={`gallery-item reveal ${delay} ${item.wide ? 'gal-wide' : 'gal-item'}`}
         style={{ overflow: 'hidden', position: 'relative', background: T.creamDeep,
                  gridColumn: item.wide ? 'span 2' : 'auto', height: 260, cursor: 'none' }}
         onMouseEnter={() => setHov(true)}
         onMouseLeave={() => setHov(false)}>
      <img src={item.src} alt={item.alt} loading="lazy"
           style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transform: hov ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform .7s cubic-bezier(.25,.46,.45,.94)' }} />
      <div className="gallery-caption"
           style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '1.2rem 1.5rem',
                    background: 'linear-gradient(to top,rgba(30,37,32,.7) 0%,transparent 100%)',
                    opacity: hov ? 1 : 0,
                    transform: hov ? 'translateY(0)' : 'translateY(6px)',
                    transition: 'opacity .4s, transform .4s' }}>
        <span style={{ fontSize: '.62rem', letterSpacing: '.18em',
                       textTransform: 'uppercase', color: T.white }}>{item.caption}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section style={{ padding: '8rem 5rem', background: T.creamDark }}>
      <div className="reveal"
           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <div>
          <SectionTag text="Visual Journal" />
          <SectionTitle style={{ marginBottom: 0 }}>
            Details that <em style={{ fontStyle: 'italic', color: T.mintDeep }}>define</em><br />a space
          </SectionTitle>
        </div>
        <a href="#" style={{ fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase',
                             color: T.mintDark, display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          All Projects →
        </a>
      </div>
      <div className="gallery-grid"
           style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
        {galleryItems.map((item, i) => (
          <GalleryItem key={i} item={item} delay={`d${(i % 3) + 1}`} />
        ))}
      </div>
    </section>
  )
}
