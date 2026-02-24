import { SectionTag } from "./UI";
import T from "../styles/tokens";
import { useEffect, useState } from "react";

const inputStyle = (isMobile) => ({
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: `1px solid ${T.creamDeep}`,
  padding: isMobile ? ".6rem 0" : ".8rem 0",
  fontFamily: "'Raleway',sans-serif",
  fontSize: ".88rem",
  fontWeight: 300,
  color: T.charcoal,
  outline: "none",
  transition: "border-color .3s",
});

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const focus = (e) => (e.target.style.borderBottomColor = T.mintDeep);
  const blur = (e) => (e.target.style.borderBottomColor = T.creamDeep);

  return (
    <section
      id="contact"
      className="contact-grid"
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        minHeight: isMobile ? "auto" : "70vh",
      }}
    >
      <div
        style={{
          background: T.mintDark,
          padding: isMobile ? "5rem 1.5rem" : "7rem 5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <SectionTag text="Get in Touch" light />
        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: isMobile ? "2.5rem" : "clamp(2.5rem,4vw,4rem)",
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
            lineHeight: 1.8,
            color: "rgba(255,255,255,.6)",
            maxWidth: 400,
            marginBottom: "3rem",
          }}
        >
          Every great interior begins with a conversation. Tell us about your
          space, your vision, and how you live — we'll handle the rest.
        </p>

        {[
          ["Email", "harisuthan7716@gmail.com"],
          ["Phone", "+91 82206 02993"],
          ["Hours", "Mon–Sat, 9:00 AM – 6:00 PM"],
        ].map(([l, v]) => (
          <div
            key={l}
            style={{
              display: "flex",
              gap: isMobile ? "1rem" : "1.5rem",
              alignItems: "baseline",
              marginBottom: "1.2rem",
            }}
          >
            <span
              style={{
                fontSize: ".6rem",
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: T.mintLight,
                minWidth: isMobile ? 60 : 70,
              }}
            >
              {l}
            </span>
            <span
              style={{
                fontSize: isMobile ? ".8rem" : ".85rem",
                color: "rgba(255,255,255,.7)",
                wordBreak: "break-word",
              }}
            >
              {v}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          background: T.cream,
          padding: isMobile ? "5rem 1.5rem" : "7rem 5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1rem" : "2rem",
            marginBottom: "1.5rem",
          }}
        >
          {["First Name", "Last Name"].map((label) => (
            <div key={label}>
              <label style={labelStyle}>{label}</label>
              <input
                type="text"
                placeholder={`Your ${label.toLowerCase()}`}
                style={inputStyle(isMobile)}
                onFocus={focus}
                onBlur={blur}
              />
            </div>
          ))}
        </div>

        {[
          ["Email Address", "your@email.com", "email"],
          ["Project Type", "Residential / Commercial", "text"],
          ["Budget Range", "e.g. ₹50,000 – ₹150,000", "text"],
        ].map(([label, ph, type]) => (
          <div key={label} style={{ marginBottom: "1.5rem" }}>
            <label style={labelStyle}>{label}</label>
            <input
              type={type}
              placeholder={ph}
              style={inputStyle(isMobile)}
              onFocus={focus}
              onBlur={blur}
            />
          </div>
        ))}

        <div style={{ marginBottom: "2.5rem" }}>
          <label style={labelStyle}>Tell Us About Your Project</label>
          <textarea
            rows={isMobile ? 3 : 4}
            placeholder="Describe your space..."
            style={{ ...inputStyle(isMobile), resize: "none" }}
            onFocus={focus}
            onBlur={blur}
          />
        </div>

        {/* <a
          href="https://wa.me/+918220602993?text=Hello Hari Designs! I'm interested in discussing a project."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start", // Center button on mobile
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
            transition: "background .3s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = T.charcoal)}
          onMouseLeave={(e) => (e.currentTarget.style.background = T.mintDark)}
        >
          Send Enquiry →
        </a> */}
        <a
          href="https://wa.me/+918220602993?text=Hello Hari Designs!..."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            background: T.mintDark,
            color: T.white,
            padding: isMobile ? "1rem 2rem" : "0.9rem 2rem",
            fontFamily: "'Raleway',sans-serif",
            fontSize: ".65rem",
            fontWeight: 500,
            letterSpacing: ".15em",
            textTransform: "uppercase",
            cursor: "pointer",
            alignSelf: "flex-start",
            transition: "all .3s ease",
            textDecoration: "none",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = T.charcoal;
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = T.mintDark;
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Send Enquiry →
        </a>
      </div>
    </section>
  );
}

const labelStyle = {
  display: "block",
  fontSize: ".6rem",
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: T.mintDeep,
  marginBottom: ".6rem",
};
