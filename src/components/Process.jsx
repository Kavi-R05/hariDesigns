import { useState, useEffect } from "react";
import { processSteps } from "../data";
import { SectionTag, SectionTitle } from "./UI";
import T from "../styles/tokens";

function Step({ step, delay, isMobile }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className={`reveal ${delay}`}
      style={{
        textAlign: isMobile ? "left" : "center",
        display: isMobile ? "flex" : "block",
        gap: isMobile ? "1.5rem" : "0",
        position: "relative",
        marginBottom: isMobile ? "2.5rem" : "0",
      }}
      onMouseEnter={() => !isMobile && setHov(true)}
      onMouseLeave={() => !isMobile && setHov(false)}
    >
      {/* Icon Circle */}
      <div
        style={{
          width: 56,
          height: 56,
          flexShrink: 0,
          borderRadius: "50%",
          border: `1.5px solid ${hov ? T.mintDark : T.mintLight}`,
          background: hov ? T.mintDark : T.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: isMobile ? "0" : "0 auto 2rem",
          position: "relative",
          zIndex: 2,
          transform: hov ? "scale(1.1)" : "none",
          transition: "background .3s, border-color .3s, transform .3s",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: ".9rem",
            fontStyle: "italic",
            color: hov ? T.white : T.mintDark,
            transition: "color .3s",
          }}
        >
          {step.num}
        </span>
      </div>

      {/* Text Content */}
      <div style={{ paddingTop: isMobile ? "0.5rem" : "0" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: isMobile ? "1.15rem" : "1.25rem",
            fontWeight: 400,
            color: T.charcoal,
            marginBottom: ".6rem",
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontSize: ".78rem",
            lineHeight: 1.8,
            color: T.warmGray,
            maxWidth: isMobile ? "100%" : "200px",
            margin: isMobile ? "0" : "0 auto",
          }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
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
        padding: isMobile ? "5rem 1.5rem" : "8rem 5rem",
        background: T.white,
      }}
    >
      <div className="reveal" style={{ textAlign: "center" }}>
        <SectionTag text="How We Work" center />
        <SectionTitle style={{ textAlign: "center", margin: "1.5rem auto 0" }}>
          Our{" "}
          <em style={{ fontStyle: "italic", color: T.mintDeep }}>process,</em>{" "}
          refined
          <br />
          over 5 years
        </SectionTitle>
      </div>

      <div
        className="process-grid"
        style={{
          display: isMobile ? "flex" : "grid",
          flexDirection: "column",
          gridTemplateColumns: !isMobile ? "repeat(4,1fr)" : "none",
          gap: isMobile ? "0" : "2.5rem",
          marginTop: isMobile ? "4rem" : "5rem",
          position: "relative",
          maxWidth: isMobile ? "400px" : "100%",
          marginInline: "auto",
        }}
      >
        {/* Connector Line */}
        <div
          className="process-line"
          style={{
            position: "absolute",
            zIndex: 1,
            background: `linear-gradient(${isMobile ? "180deg" : "90deg"},${
              T.mintPale
            },${T.mintLight},${T.mintPale})`,

            top: 28,
            left: isMobile ? 28 : "calc(12.5% + 16px)",
            width: isMobile ? 1 : "calc(75% - 32px)",
            height: isMobile ? "calc(100% - 80px)" : 1,
          }}
        />

        {processSteps.map((step, i) => (
          <Step key={i} step={step} delay={`d${i + 1}`} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}
