import { useEffect, useState } from "react";
import T from "../styles/tokens";
import HomeImg from "../../public/images/HomeImages.png";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="hero-grid"
      style={{
        minHeight: isMobile ? "auto" : "100vh",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        position: "relative",
        overflow: "hidden",
        background: T.cream,
      }}
    >
      {/* Left Column: Text Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile ? "7rem 1.5rem 4rem" : "10rem 5rem 6rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="hero-anim-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".8rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: T.mintDeep,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: ".65rem",
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: T.mintDark,
            }}
          >
            Luxury Interior Design
          </span>
        </div>

        <h1
          className="hero-anim-2"
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: isMobile ? "3rem" : "clamp(3.5rem,5.5vw,6.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-.01em",
            color: T.charcoal,
          }}
        >
          Design{" "}
          <em style={{ fontStyle: "italic", color: T.mintDeep }}>spaces</em>
          <br />
          that feels like
          <br />
          <span
            style={{
              WebkitTextStroke: isMobile
                ? `1px ${T.charcoal}`
                : `1.5px ${T.charcoal}`,
              color: "transparent",
            }}
          >
            Home
          </span>
        </h1>

        <p
          className="hero-anim-3"
          style={{
            maxWidth: 400,
            fontSize: isMobile ? ".85rem" : ".88rem",
            lineHeight: 1.8,
            color: T.warmGray,
            marginTop: "1.5rem",
          }}
        >
          We design interiors of rare beauty — spaces shaped by the rhythm of
          your life and materials chosen for how they age.
        </p>

        <div
          className="hero-anim-4"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "1.5rem" : "2.5rem",
            marginTop: "3rem",
          }}
        >
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: isMobile ? "100%" : "auto",
              background: T.mintDark,
              color: T.white,
              padding: "1.1rem 2.5rem",
              fontSize: ".72rem",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background .3s",
            }}
          >
            View Our Work →
          </a>
          <a
            href="#about"
            style={{
              fontSize: ".72rem",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: T.warmGray,
              display: "flex",
              alignItems: "center",
              gap: ".8rem",
              textDecoration: "none",
            }}
          >
            Our Story
            <span
              style={{
                width: 35,
                height: 1,
                background: T.mintDeep,
                display: "inline-block",
              }}
            />
          </a>
        </div>
      </div>

      {/* Right Column: Image */}
      <div
        className="hero-right-col"
        style={{
          position: "relative",
          overflow: "hidden",
          height: isMobile ? "400px" : "auto", // Set a fixed height for the image on mobile
        }}
      >
        {/* Side Location Bar (Hidden on Mobile) */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 60,
              background: T.mintPale,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontSize: ".55rem",
                letterSpacing: ".35em",
                textTransform: "uppercase",
                color: T.mintDeep,
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Chennai · Kanyakumari
            </span>
          </div>
        )}

        {/* Main Hero Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: isMobile ? 0 : 60,
            overflow: "hidden",
          }}
        >
          <img
            src={HomeImg}
            alt="Luxury cream living room"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg,rgba(248,244,238,.2) 0%,transparent 100%)",
            }}
          />
        </div>

        {/* Floating Stats Card (Centered on Mobile) */}
        <div
          className="hero-anim-5"
          style={{
            position: "absolute",
            bottom: isMobile ? "1rem" : "3rem",
            left: isMobile ? "50%" : "-1rem",
            transform: isMobile ? "translateX(-50%)" : "none",
            zIndex: 15,
            background: T.white,
            padding: isMobile ? "1rem 1.5rem" : "1.5rem 2rem",
            boxShadow: "0 20px 60px rgba(30,37,32,.12)",
            minWidth: isMobile ? "280px" : 220,
            display: isMobile ? "flex" : "block",
            justifyContent: isMobile ? "space-around" : "initial",
            gap: isMobile ? "1rem" : "0",
          }}
        >
          {[
            ["100+", "Projects"],
            ["5", "Years"],
          ].map(([n, l], i) => (
            <div key={i} style={{ textAlign: isMobile ? "center" : "left" }}>
              {i > 0 && !isMobile && (
                <div
                  style={{
                    height: 1,
                    background: T.mintPale,
                    margin: ".8rem 0",
                  }}
                />
              )}
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  fontWeight: 300,
                  color: T.charcoal,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: ".55rem",
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  color: T.mintDeep,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator (Hidden on Mobile for cleaner UI) */}
      {!isMobile && (
        <div
          className="hero-anim-6"
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: 1,
              height: 50,
              background: `linear-gradient(to bottom, ${T.mintDeep}, transparent)`,
            }}
          />
          <span
            style={{
              fontSize: ".6rem",
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: T.warmGray,
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
        </div>
      )}
    </section>
  );
}
