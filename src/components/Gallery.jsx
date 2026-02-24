import { useState, useEffect } from "react";
import { galleryItems } from "../data";
import { SectionTag, SectionTitle } from "./UI";
import T from "../styles/tokens";

function GalleryItem({ item, delay, isMobile }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className={`gallery-item reveal ${delay}`}
      style={{
        overflow: "hidden",
        position: "relative",
        background: T.creamDeep,
        flex: isMobile ? "0 0 85%" : "none",
        gridColumn: !isMobile && item.wide ? "span 2" : "auto",
        height: isMobile ? 450 : 260,
        cursor: "none",
        scrollSnapAlign: isMobile ? "center" : "none",
        borderRadius: isMobile ? "4px" : "0",
      }}
      onMouseEnter={() => !isMobile && setHov(true)}
      onMouseLeave={() => !isMobile && setHov(false)}
      onClick={() => isMobile && setHov(!hov)}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: hov ? "scale(1.08)" : "scale(1)",
          transition: "transform .7s cubic-bezier(.25,.46,.45,.94)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem",
          background:
            "linear-gradient(to top, rgba(30,37,32,0.8) 0%, transparent 100%)",
          opacity: hov ? 1 : 0,
          transform: hov ? "translateY(0)" : "translateY(10px)",
          transition: "opacity .4s, transform .4s",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: ".65rem",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: T.white,
          }}
        >
          {item.caption}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <section
      style={{
        padding: isMobile ? "4rem 0 4rem 1.5rem" : "5rem 3rem",
        background: T.creamDark,
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
          marginBottom: isMobile ? "2.5rem" : "4rem",
          paddingRight: isMobile ? "1.5rem" : "0",
        }}
      >
        <div>
          <SectionTag text="Visual Journal" />
          <SectionTitle style={{ marginBottom: 0 }}>
            Designs that{" "}
            <em style={{ fontStyle: "italic", color: T.mintDeep }}>elevate</em>
            <br />
            your space
          </SectionTitle>
        </div>
        <a
          href="#"
          style={{
            fontSize: ".65rem",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: T.mintDark,
            marginTop: isMobile ? "1rem" : "0",
          }}
        >
          All Projects →
        </a>
      </div>

      <div
        className="gallery-grid"
        style={{
          display: isMobile ? "flex" : "grid",

          overflowX: isMobile ? "auto" : "visible",
          scrollSnapType: isMobile ? "x mandatory" : "none",
          WebkitOverflowScrolling: "touch",
          paddingRight: isMobile ? "1.5rem" : "0",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          gridTemplateColumns: !isMobile ? "repeat(4, 1fr)" : "none",
          gap: isMobile ? "1rem" : "1rem",
        }}
      >
        <style>{`.gallery-grid::-webkit-scrollbar { display: none; }`}</style>

        {galleryItems.slice(0, 6).map((item, i) => (
          <GalleryItem
            key={i}
            item={item}
            delay={`d${(i % 3) + 1}`}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
}
