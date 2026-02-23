// import { useState } from "react";
// import { processSteps } from "../data";
// import { SectionTag, SectionTitle } from "./UI";
// import T from "../styles/tokens";

// function Step({ step, delay }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <div
//       className={`reveal ${delay}`}
//       style={{ textAlign: "center" }}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//     >
//       <div
//         style={{
//           width: 56,
//           height: 56,
//           borderRadius: "50%",
//           border: `1.5px solid ${hov ? T.mintDark : T.mintLight}`,
//           background: hov ? T.mintDark : T.white,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           margin: "0 auto 2rem",
//           position: "relative",
//           zIndex: 1,
//           transform: hov ? "scale(1.1)" : "none",
//           transition: "background .3s, border-color .3s, transform .3s",
//         }}
//       >
//         <span
//           style={{
//             fontFamily: "'Playfair Display',serif",
//             fontSize: ".9rem",
//             fontStyle: "italic",
//             color: hov ? T.white : T.mintDark,
//             transition: "color .3s",
//           }}
//         >
//           {step.num}
//         </span>
//       </div>
//       <h3
//         style={{
//           fontFamily: "'Playfair Display',serif",
//           fontSize: "1.25rem",
//           fontWeight: 400,
//           color: T.charcoal,
//           marginBottom: ".8rem",
//         }}
//       >
//         {step.title}
//       </h3>
//       <p style={{ fontSize: ".78rem", lineHeight: 1.9, color: T.warmGray }}>
//         {step.desc}
//       </p>
//     </div>
//   );
// }

// export default function Process() {
//   return (
//     <section style={{ padding: "8rem 5rem", background: T.white }}>
//       <div className="reveal" style={{ textAlign: "center" }}>
//         <SectionTag text="How We Work" center />
//         <SectionTitle style={{ textAlign: "center", margin: "1.5rem auto 0" }}>
//           Our{" "}
//           <em style={{ fontStyle: "italic", color: T.mintDeep }}>process,</em>{" "}
//           refined
//           <br />
//           over 5 years
//         </SectionTitle>
//       </div>
//       <div
//         className="process-grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4,1fr)",
//           gap: "2.5rem",
//           marginTop: "5rem",
//           position: "relative",
//         }}
//       >
//         <div
//           className="process-line"
//           style={{
//             position: "absolute",
//             top: 28,
//             left: "calc(12.5% + 16px)",
//             width: "calc(75% - 32px)",
//             height: 1,
//             background: `linear-gradient(90deg,${T.mintPale},${T.mintLight},${T.mintPale})`,
//           }}
//         />
//         {processSteps.map((step, i) => (
//           <Step key={i} step={step} delay={`d${i + 1}`} />
//         ))}
//       </div>
//     </section>
//   );
// }

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
        gap: isMobile ? "0.5rem" : "0",
        position: "relative",
      }}
      onMouseEnter={() => !isMobile && setHov(true)}
      onMouseLeave={() => !isMobile && setHov(false)}
    >
      <div
        style={{
          width: 56,
          height: 56,
          flexShrink: 0, // Prevent icon from squishing
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

      <div>
        <h3
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: isMobile ? "1.1rem" : "1.25rem",
            fontWeight: 400,
            color: T.charcoal,
            marginBottom: ".5rem",
            marginTop: isMobile ? "0.5rem" : "0",
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
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)",
          gap: isMobile ? "0.6rem" : "2.5rem",
          marginTop: isMobile ? "3.5rem" : "5rem",
          position: "relative",
        }}
      >
        {/* Connector Line Logic */}
        <div
          className="process-line"
          style={{
            position: "absolute",
            zIndex: 1,
            background: `linear-gradient(${isMobile ? "180deg" : "90deg"},${
              T.mintPale
            },${T.mintLight},${T.mintPale})`,
            // Desktop: Horizontal line
            // Mobile: Vertical line behind icons
            top: isMobile ? 28 : 28,
            left: isMobile ? 28 : "calc(12.5% + 16px)",
            width: isMobile ? 1 : "calc(75% - 32px)",
            height: isMobile ? "calc(100% - 60px)" : 1,
          }}
        />

        {processSteps.map((step, i) => (
          <Step key={i} step={step} delay={`d${i + 1}`} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}
