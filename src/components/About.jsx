import { SectionTag, SectionTitle } from "./UI";
import T from "../styles/tokens";
import Falseceiling from "../../public/images/Falseceiling.jpeg";
import smallImg from "../../public/images/smallimg.jpeg";
import { useEffect, useState } from "react";

export default function About() {
  // Simple hook to handle responsiveness if you aren't using a CSS framework like Tailwind
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className="about-grid"
      style={{
        padding: isMobile ? "4rem 1.5rem" : "8rem 5rem", // Reduced padding for mobile
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", // Stack columns on mobile/tablet
        gap: isMobile ? "4rem" : "7rem",
        alignItems: "center",
        background: T.cream,
      }}
    >
      {/* Images Section */}
      <div
        className="about-imgs reveal"
        style={{
          position: "relative",
          height: isMobile ? 450 : 600, // Slightly shorter height on mobile
          width: "100%",
        }}
      >
        {/* Main Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: isMobile ? 40 : 80,
            bottom: isMobile ? 40 : 80,
            overflow: "hidden",
          }}
        >
          <img
            src={Falseceiling}
            alt="modularkitchen at home"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Floating Detail Image */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: isMobile ? 180 : 260, // Smaller detail image on mobile
            height: isMobile ? 200 : 280,
            overflow: "hidden",
            border: `10px solid ${T.cream}`,
            zIndex: 2,
          }}
        >
          <img
            src={smallImg}
            alt="Cream sofa detail"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Location Badge */}
        <div
          style={{
            position: "absolute",
            top: isMobile ? "1rem" : "2rem",
            right: isMobile ? "1rem" : "5.5rem",
            background: T.mintDark,
            color: T.white,
            padding: ".8rem 1.4rem",
            fontSize: ".6rem",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            zIndex: 3,
          }}
        >
          Chennai · Kanyakumari
        </div>
      </div>

      {/* Content Section */}
      <div>
        <div className="reveal">
          <SectionTag text="The Studio" />
        </div>
        <div className="reveal d1">
          <SectionTitle
            style={{
              marginBottom: "2rem",
              fontSize: isMobile ? "2rem" : "inherit", // Adjust title size for mobile
            }}
          >
            Designing with{" "}
            <em style={{ fontStyle: "italic", color: T.mintDeep }}>
              intention,
            </em>
            <br />
            not trend
          </SectionTitle>
        </div>

        {[
          "Founded in Nagercoil, Kanyakumari in 2022, our studio is dedicated to translating the unique narratives of our clients into spaces of lasting beauty. We operate at the vibrant intersection of architecture, art, and craft—always prioritizing the emotional resonance of a space before defining its aesthetic.",
          "Our palette centres on the timeless harmony of cream, sage, and natural materials — warm, breathing, enduring. Every project begins with deep listening.",
        ].map((text, i) => (
          <p
            key={i}
            className={`reveal d${i + 2}`}
            style={{
              fontSize: ".88rem",
              lineHeight: 1.8, // Slightly tighter line height for mobile
              color: T.warmGray,
              marginBottom: "1.5rem",
              maxWidth: 500,
            }}
          >
            {text}
          </p>
        ))}

        <div
          className="reveal d3"
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "2rem",
            fontStyle: "italic",
            fontWeight: 300,
            color: T.mintDark,
            marginTop: "2.5rem",
          }}
        >
          Hari Suthan
        </div>
        <div
          className="reveal d3"
          style={{
            fontSize: ".65rem",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: T.warmGray,
            marginTop: ".3rem",
          }}
        >
          Founder &amp; Creative Director
        </div>

        {/* Stats Grid */}
        <div
          className="reveal d4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: isMobile ? "1rem" : "2rem",
            marginTop: "3.5rem",
            paddingTop: "3rem",
            borderTop: `1px solid ${T.mintPale}`,
          }}
        >
          {[
            ["100+", "Projects"],
            ["5", "Years"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: isMobile ? "2.2rem" : "2.8rem",
                  fontWeight: 300,
                  color: T.mintDark,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: ".6rem",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: T.warmGray,
                  marginTop: ".4rem",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
