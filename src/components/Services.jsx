import { useState, useEffect } from "react";
import { servicesList } from "../data";
import { SectionTag, SectionTitle } from "./UI";
import T from "../styles/tokens";

function ServiceCard({ s, delay, isMobile }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className={`reveal ${delay}`}
      style={{
        background: hov ? "rgba(255,255,255,.1)" : "rgba(255,255,255,.06)",
        border: hov
          ? "1px solid rgba(255,255,255,.2)"
          : "1px solid rgba(255,255,255,.1)",
        padding: isMobile ? "2.5rem 2rem" : "3rem 2.5rem",
        transform: hov && !isMobile ? "translateY(-4px)" : "none",
        transition: "background .4s, transform .3s, border-color .4s",
        position: "relative",
        overflow: "hidden",
        cursor: "default",

        flex: isMobile ? "0 0 85%" : "none",
        scrollSnapAlign: isMobile ? "center" : "none",
        minHeight: isMobile ? "380px" : "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      onMouseEnter={() => !isMobile && setHov(true)}
      onMouseLeave={() => !isMobile && setHov(false)}
      onClick={() => isMobile && setHov(!hov)}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: T.mintLight,
          width: hov || isMobile ? "100%" : 0,
          transition: "width .5s ease",
        }}
      />
      <span
        style={{ fontSize: "1.6rem", display: "block", marginBottom: "2rem" }}
      >
        {s.icon}
      </span>
      <span
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: ".8rem",
          color: T.mintLight,
          display: "block",
          marginBottom: ".8rem",
        }}
      >
        {s.num}
      </span>
      <div
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: isMobile ? "1.3rem" : "1.4rem",
          fontWeight: 300,
          color: T.white,
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}
      >
        {s.name}
      </div>
      <p
        style={{
          fontSize: ".85rem",
          lineHeight: 1.85,
          color: "rgba(255,255,255,.55)",
        }}
      >
        {s.desc}
      </p>
    </div>
  );
}

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="services"
      style={{
        padding: isMobile ? "5rem 0 5rem 1.5rem" : "5rem 3rem",
        background: T.mintDark,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: isMobile ? "-1rem" : "-3rem",
          bottom: isMobile ? "-1rem" : "-3rem",
          fontFamily: "'Playfair Display',serif",
          fontSize: isMobile ? "8rem" : "20rem",
          fontWeight: 300,
          color: "rgba(255,255,255,.04)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        DESIGN
      </div>

      <div
        className="reveal"
        style={{ marginBottom: "3rem", paddingRight: isMobile ? "1.5rem" : 0 }}
      >
        <SectionTag text="What We Do" light />
        <SectionTitle
          style={{
            color: T.white,
            maxWidth: "100%",
            fontSize: isMobile ? "2rem" : "2.6rem",
          }}
        >
          Full-Home
          <br />
          <em style={{ fontStyle: "italic", color: T.mintLight }}>
            design
          </em>{" "}
          services
        </SectionTitle>
      </div>

      <div
        className="services-grid"
        style={{
          display: isMobile ? "flex" : "grid",

          overflowX: isMobile ? "auto" : "visible",
          scrollSnapType: isMobile ? "x mandatory" : "none",
          gap: isMobile ? "1rem" : "1.5rem",
          paddingRight: isMobile ? "1.5rem" : "0",
          scrollbarWidth: "none",
          msOverflowStyle: "none",

          gridTemplateColumns: !isMobile ? "repeat(3, 1fr)" : "none",
        }}
      >
        <style>{`.services-grid::-webkit-scrollbar { display: none; }`}</style>

        {servicesList.map((s, i) => (
          <ServiceCard
            key={i}
            s={s}
            delay={`d${(i % 3) + 1}`}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
}
