import { SectionTag, SectionTitle } from "./UI";
import T from "../styles/tokens";
import Falseceiling from "../../public/images/Falseceiling.jpeg";
import smallImg from "../../public/images/smallimg.jpeg";
export default function About() {
  return (
    <section
      id="about"
      className="about-grid"
      style={{
        padding: "8rem 5rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "7rem",
        alignItems: "center",
        background: T.cream,
      }}
    >
      {/* Images */}
      <div
        className="about-imgs reveal"
        style={{ position: "relative", height: 600 }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 80,
            bottom: 80,
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
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 260,
            height: 280,
            overflow: "hidden",
            border: `10px solid ${T.cream}`,
          }}
        >
          <img
            src={smallImg}
            alt="Cream sofa detail"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "2rem",
            right: "5.5rem",
            background: T.mintDark,
            color: T.white,
            padding: ".8rem 1.4rem",
            fontSize: ".6rem",
            letterSpacing: ".2em",
            textTransform: "uppercase",
          }}
        >
          Chennai · Kanyakumari ·
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="reveal">
          <SectionTag text="The Studio" />
        </div>
        <div className="reveal d1">
          <SectionTitle style={{ marginBottom: "2rem" }}>
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
              lineHeight: 2,
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
        <div
          className="reveal d4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "2rem",
            marginTop: "3.5rem",
            paddingTop: "3rem",
            borderTop: `1px solid ${T.mintPale}`,
          }}
        >
          {[
            ["100+", "Projects"],
            ["5", "Years"],
            // ["8", "Awards"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "2.8rem",
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
