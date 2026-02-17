import { SectionTag } from "./UI";
import T from "../styles/tokens";

const inputStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: `1px solid ${T.creamDeep}`,
  padding: ".8rem 0",
  fontFamily: "'Raleway',sans-serif",
  fontSize: ".88rem",
  fontWeight: 300,
  color: T.charcoal,
  outline: "none",
  transition: "border-color .3s",
};

export default function Contact() {
  const focus = (e) => (e.target.style.borderBottomColor = T.mintDeep);
  const blur = (e) => (e.target.style.borderBottomColor = T.creamDeep);

  return (
    <section
      id="contact"
      className="contact-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "70vh",
      }}
    >
      {/* Left */}
      <div
        style={{
          background: T.mintDark,
          padding: "7rem 5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <SectionTag text="Get in Touch" light />
        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(2.5rem,4vw,4rem)",
            fontWeight: 300,
            color: T.white,
            lineHeight: 1.1,
            margin: "1.5rem 0 2rem",
          }}
        >
          Let's make
          <br />
          something{" "}
          <em style={{ fontStyle: "italic", color: T.mintLight }}>beautiful</em>
          <br />
          together
        </h2>
        <p
          style={{
            fontSize: ".85rem",
            lineHeight: 1.9,
            color: "rgba(255,255,255,.6)",
            maxWidth: 400,
            marginBottom: "3rem",
          }}
        >
          Every great interior begins with a conversation. Tell us about your
          space, your vision, and how you live — we'll handle the rest.
        </p>
        {[
          // ["Studio", "12 Rue du Bac, 75007 Paris"],
          ["Email", "harisuthan7716@gmail.com"],
          ["Phone", "+91 82206 02993"],
          ["Hours", "Mon–Sat, 9:00 AM – 6:00 PM"],
        ].map(([l, v]) => (
          <div
            key={l}
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "baseline",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: ".6rem",
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: T.mintLight,
                minWidth: 70,
              }}
            >
              {l}
            </span>
            <span style={{ fontSize: ".85rem", color: "rgba(255,255,255,.7)" }}>
              {v}
            </span>
          </div>
        ))}
      </div>

      {/* Right */}
      <div
        style={{
          background: T.cream,
          padding: "7rem 5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {["First Name", "Last Name"].map((label) => (
            <div key={label}>
              <label
                style={{
                  display: "block",
                  fontSize: ".6rem",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: T.mintDeep,
                  marginBottom: ".6rem",
                }}
              >
                {label}
              </label>
              <input
                type="text"
                placeholder={`Your ${label.toLowerCase()}`}
                style={inputStyle}
                onFocus={focus}
                onBlur={blur}
              />
            </div>
          ))}
        </div>

        {[
          ["Email Address", "your@email.com", "email"],
          ["Project Type", "Residential / Commercial / Hospitality", "text"],
          ["Budget Range", "e.g. ₹50,000 – ₹150,000", "text"],
        ].map(([label, ph, type]) => (
          <div key={label} style={{ marginBottom: "2rem" }}>
            <label
              style={{
                display: "block",
                fontSize: ".6rem",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: T.mintDeep,
                marginBottom: ".6rem",
              }}
            >
              {label}
            </label>
            <input
              type={type}
              placeholder={ph}
              style={inputStyle}
              onFocus={focus}
              onBlur={blur}
            />
          </div>
        ))}

        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "block",
              fontSize: ".6rem",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: T.mintDeep,
              marginBottom: ".6rem",
            }}
          >
            Tell Us About Your Project
          </label>
          <textarea
            rows={4}
            placeholder="Describe your space, your vision, and the feeling you'd like to create..."
            style={{ ...inputStyle, resize: "none" }}
            onFocus={focus}
            onBlur={blur}
          />
        </div>

        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1.2rem",
            background: T.mintDark,
            color: T.white,
            border: "none",
            padding: "1.1rem 2.5rem",
            fontFamily: "'Raleway',sans-serif",
            fontSize: ".7rem",
            fontWeight: 400,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            cursor: "pointer",
            alignSelf: "flex-start",
            transition: "background .3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = T.charcoal)}
          onMouseLeave={(e) => (e.currentTarget.style.background = T.mintDark)}
        >
          Send Enquiry →
        </button>
      </div>
    </section>
  );
}
