import { useEffect, useState } from "react";
import T from "../styles/tokens";

const items = [
  "Residential Design",
  "Luxury Hospitality",
  "Commercial Spaces",
  "Home & Shop Interiors",
  "Mosquito Nets",
  "Wall Ceiling",
  "Plywood Works",
];

export default function Marquee() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const doubled = [...items, ...items, ...items];

  return (
    <div
      style={{
        background: T.mintDark,
        padding: isMobile ? "0.8rem 0" : "1.2rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        borderTop: `1px solid ${T.mintPale}22`,
        borderBottom: `1px solid ${T.mintPale}22`,
      }}
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .marquee-track {
            display: flex;
            align-items: center;
            width: max-content;
            animation: marquee ${isMobile ? "20s" : "40s"} linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: isMobile ? ".55rem" : ".65rem",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: T.mintPale,
                padding: isMobile ? "0 1.5rem" : "0 3rem",
                fontWeight: 300,
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: T.gold || "#D4AF37",
                opacity: 0.6,
                fontSize: isMobile ? "0.6rem" : "0.8rem",
              }}
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
