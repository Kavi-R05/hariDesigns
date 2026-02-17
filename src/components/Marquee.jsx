import T from '../styles/tokens'

const items = ['Residential Design','Luxury Hospitality','Commercial Spaces',
               'Bespoke Furniture','Art Curation','Lighting Design','Space Planning','Project Management']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{ background: T.mintDark, padding: '1rem 0', overflow: 'hidden' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span style={{ fontSize: '.6rem', letterSpacing: '.28em', textTransform: 'uppercase',
                           color: T.mintPale, padding: '0 2.5rem' }}>{item}</span>
            <span style={{ color: T.gold, opacity: .8 }}> ✦ </span>
          </span>
        ))}
      </div>
    </div>
  )
}
