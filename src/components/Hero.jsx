import T from "../styles/tokens";
import HomeImg from "../../public/images/HomeImages.png";

export default function Hero() {
  return (
    <section
      className="hero-grid"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
        background: T.cream,
      }}
    >
      {/* Left */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10rem 5rem 6rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="hero-anim-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".8rem",
            marginBottom: "2.5rem",
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
            Luxury Interior Design ·
          </span>
        </div>

        <h1
          className="hero-anim-2"
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(3.5rem,5.5vw,6.5rem)",
            fontWeight: 300,
            lineHeight: 0.95,
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
              WebkitTextStroke: `1.5px ${T.charcoal}`,
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
            fontSize: ".88rem",
            lineHeight: 1.9,
            color: T.warmGray,
            marginTop: "2.5rem",
          }}
        >
          We design interiors of rare beauty — spaces shaped by the rhythm of
          your life, the quality of light, and materials chosen for how they
          age, not just how they look.
        </p>

        <div
          className="hero-anim-4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            marginTop: "3.5rem",
          }}
        >
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              background: T.mintDark,
              color: T.white,
              padding: "1rem 2.5rem",
              fontSize: ".72rem",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              transition: "background .3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = T.mintDeep)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = T.mintDark)
            }
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
              transition: "color .3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.charcoal)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.warmGray)}
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

      {/* Right */}
      <div
        className="hero-right-col"
        style={{ position: "relative", overflow: "hidden" }}
      >
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
            Chennai · Kanyakumari ·
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 60,
            overflow: "hidden",
          }}
        >
          <img
            className="hero-img"
            src={HomeImg}
            // src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85&auto=format&fit=crop"
            alt="Luxury cream living room"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg,rgba(248,244,238,.3) 0%,transparent 50%,rgba(61,107,88,.08) 100%)",
            }}
          />
        </div>

        <div
          className="hero-anim-5"
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "-1rem",
            zIndex: 5,
            background: T.white,
            padding: "1.5rem 2rem",
            boxShadow: "0 20px 60px rgba(30,37,32,.12)",
            minWidth: 220,
          }}
        >
          {[
            ["100+", "Projects Delivered"],
            ["5", "Years of Excellence"],
            // ["8", "Design Awards"],
          ].map(([n, l], i) => (
            <div key={i}>
              {i > 0 && (
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
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: T.charcoal,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: ".6rem",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: T.mintDeep,
                  marginTop: ".3rem",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
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
          className="scroll-line"
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
    </section>
  );
}
