// import { useState } from "react";
// import { galleryItems } from "../data";
// import { SectionTag, SectionTitle } from "./UI";
// import T from "../styles/tokens";

// function GalleryItem({ item, delay }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <div
//       className={`gallery-item reveal ${delay} ${
//         item.wide ? "gal-wide" : "gal-item"
//       }`}
//       style={{
//         overflow: "hidden",
//         position: "relative",
//         background: T.creamDeep,
//         gridColumn: item.wide ? "span 2" : "auto",
//         height: 260,
//         cursor: "none",
//       }}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//     >
//       <img
//         src={item.src}
//         alt={item.alt}
//         loading="lazy"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           display: "block",
//           transform: hov ? "scale(1.08)" : "scale(1)",
//           transition: "transform .7s cubic-bezier(.25,.46,.45,.94)",
//         }}
//       />
//       <div
//         className="gallery-caption"
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           padding: "1.2rem 1.5rem",
//           background:
//             "linear-gradient(to top,rgba(30,37,32,.7) 0%,transparent 100%)",
//           opacity: hov ? 1 : 0,
//           transform: hov ? "translateY(0)" : "translateY(6px)",
//           transition: "opacity .4s, transform .4s",
//         }}
//       >
//         <span
//           style={{
//             fontSize: ".62rem",
//             letterSpacing: ".18em",
//             textTransform: "uppercase",
//             color: T.white,
//           }}
//         >
//           {item.caption}
//         </span>
//       </div>
//     </div>
//   );
// }

// export default function Gallery() {
//   return (
//     <section style={{ padding: "8rem 5rem", background: T.creamDark }}>
//       <div
//         className="reveal"
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-end",
//           marginBottom: "4rem",
//         }}
//       >
//         <div>
//           <SectionTag text="Visual Journal" />
//           <SectionTitle style={{ marginBottom: 0 }}>
//             Designs that{" "}
//             <em style={{ fontStyle: "italic", color: T.mintDeep }}>elevate</em>
//             <br />
//             your space
//           </SectionTitle>
//         </div>
//         <a
//           href="#"
//           style={{
//             fontSize: ".65rem",
//             letterSpacing: ".2em",
//             textTransform: "uppercase",
//             color: T.mintDark,
//             display: "flex",
//             alignItems: "center",
//             gap: ".8rem",
//           }}
//         >
//           All Projects →
//         </a>
//       </div>
//       <div
//         className="gallery-grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4,1fr)",
//           gap: "1rem",
//         }}
//       >
//         {galleryItems.map((item, i) => (
//           <GalleryItem key={i} item={item} delay={`d${(i % 3) + 1}`} />
//         ))}
//       </div>
//     </section>
//   );
// }

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
        gridColumn: isMobile ? "span 1" : item.wide ? "span 2" : "auto",
        height: isMobile ? 320 : 260,
        cursor: "none",
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
          padding: "1.2rem 1.5rem",
          background:
            "linear-gradient(to top, rgba(30,37,32,0.8) 0%, transparent 100%)",
          opacity: isMobile || hov ? 1 : 0,
          transform: isMobile || hov ? "translateY(0)" : "translateY(10px)",
          transition: "opacity .4s, transform .4s",
        }}
      >
        <span
          style={{
            fontSize: ".62rem",
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
        padding: isMobile ? "4rem 1.5rem" : "8rem 5rem",
        background: T.creamDark,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
          marginBottom: isMobile ? "2.5rem" : "4rem",
          gap: "1rem",
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
          }}
        >
          All Projects →
        </a>
      </div>

      <div
        className="gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          gap: isMobile ? "1.5rem" : "1rem",
        }}
      >
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
