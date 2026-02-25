import { useState, useEffect } from "react";
import { projects } from "../data";
import { SectionTag, SectionTitle } from "./UI";
import T from "../styles/tokens";

function FeatCard({ project, delay = "", isMobile }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className={`feat-card reveal ${delay}`}
      style={{
        position: "relative",
        overflow: "hidden",
        gridRow: project.big && !isMobile ? "1/3" : "auto",

        flex: isMobile ? "0 0 88%" : "none",
        height:
          project.big && !isMobile ? "100%" : isMobile ? "420px" : "380px",
        cursor: isMobile ? "pointer" : "none",
        scrollSnapAlign: isMobile ? "center" : "none",
      }}
      onMouseEnter={() => !isMobile && setHov(true)}
      onMouseLeave={() => !isMobile && setHov(false)}
      onClick={() => isMobile && setHov(!hov)}
    >
      <img
        src={project.img}
        alt={project.name.replace("\n", " ")}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: hov ? "scale(1.05)" : "scale(1)",
          transition: "transform .9s cubic-bezier(.25,.46,.45,.94)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hov
            ? "linear-gradient(to top,rgba(30,37,32,.9) 0%,rgba(30,37,32,.4) 100%)"
            : "linear-gradient(to top,rgba(30,37,32,.8) 0%,rgba(30,37,32,.2) 50%,transparent 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: isMobile ? "1.8rem" : "2rem 2.2rem",
          transition: "background .4s",
        }}
      >
        <span
          style={{
            fontSize: ".58rem",
            letterSpacing: ".25em",
            textTransform: "uppercase",
            color: T.mintLight,
            marginBottom: ".5rem",
          }}
        >
          {project.tag}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: isMobile ? "1.4rem" : "1.5rem",
            fontWeight: 300,
            color: T.white,
            lineHeight: 1.2,
            whiteSpace: "pre-line",
          }}
        >
          {project.name}
        </h3>
        <a
          href={`#${project.id}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".7rem",
            marginTop: "1.2rem",
            fontSize: ".62rem",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: T.mintLight,
            textDecoration: "none",
          }}
        >
          <span
            style={{
              width: 25,
              height: 1,
              background: T.mintLight,
              display: "inline-block",
            }}
          />
          View Project
        </a>
      </div>
    </div>
  );
}

export default function Featured() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="work"
      style={{
        padding: isMobile ? "4rem 0 4rem 1.5rem" : "8rem 5rem",
        background: T.white,
      }}
    >
      <div
        className="reveal"
        style={{
          marginBottom: isMobile ? "2.5rem" : "4rem",
          paddingRight: isMobile ? "1.5rem" : 0,
        }}
      >
        <SectionTag text="Selected Works" />
        <SectionTitle style={{ fontSize: isMobile ? "2.5rem" : "2.6rem" }}>
          Spaces crafted with{" "}
          <em style={{ fontStyle: "italic", color: T.mintDeep }}>intention</em>{" "}
          and precision
        </SectionTitle>
      </div>

      <div
        className="feat-grid"
        style={{
          display: isMobile ? "flex" : "grid",

          overflowX: isMobile ? "auto" : "visible",
          scrollSnapType: isMobile ? "x mandatory" : "none",
          gap: isMobile ? "1.2rem" : "1.2rem",
          paddingRight: isMobile ? "1.5rem" : "0",
          scrollbarWidth: "none",
          msOverflowStyle: "none",

          gridTemplateColumns: !isMobile ? "1.5fr 1fr 1fr" : "none",
          gridTemplateRows: !isMobile ? "380px 380px" : "auto",
        }}
      >
        <style>{`.feat-grid::-webkit-scrollbar { display: none; }`}</style>

        {projects.map((p, i) => (
          <FeatCard
            key={p.id}
            project={p}
            delay={`d${i}`}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
}
