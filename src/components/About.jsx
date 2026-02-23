// // import { SectionTag, SectionTitle } from "./UI";
// // import T from "../styles/tokens";
// // import Falseceiling from "../../public/images/Falseceiling.jpeg";
// // import smallImg from "../../public/images/smallimg.jpeg";
// // import { useEffect, useState } from "react";

// // export default function About() {
// //   // Simple hook to handle responsiveness if you aren't using a CSS framework like Tailwind
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => setIsMobile(window.innerWidth < 1024);
// //     handleResize(); // Check on mount
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   return (
// //     <section
// //       id="about"
// //       className="about-grid"
// //       style={{
// //         padding: isMobile ? "4rem 1.5rem" : "8rem 5rem", // Reduced padding for mobile
// //         display: "grid",
// //         gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", // Stack columns on mobile/tablet
// //         gap: isMobile ? "4rem" : "7rem",
// //         alignItems: "center",
// //         background: T.cream,
// //       }}
// //     >
// //       {/* Images Section */}
// //       <div
// //         className="about-imgs reveal"
// //         style={{
// //           position: "relative",
// //           height: isMobile ? 450 : 600, // Slightly shorter height on mobile
// //           width: "100%",
// //         }}
// //       >
// //         {/* Main Background Image */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             top: 0,
// //             left: 0,
// //             right: isMobile ? 40 : 80,
// //             bottom: isMobile ? 40 : 80,
// //             overflow: "hidden",
// //           }}
// //         >
// //           <img
// //             src={Falseceiling}
// //             alt="modularkitchen at home"
// //             loading="lazy"
// //             style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //           />
// //         </div>

// //         {/* Floating Detail Image */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             bottom: 0,
// //             right: 0,
// //             width: isMobile ? 180 : 260, // Smaller detail image on mobile
// //             height: isMobile ? 200 : 280,
// //             overflow: "hidden",
// //             border: `10px solid ${T.cream}`,
// //             zIndex: 2,
// //           }}
// //         >
// //           <img
// //             src={smallImg}
// //             alt="Cream sofa detail"
// //             loading="lazy"
// //             style={{ width: "100%", height: "100%", objectFit: "cover" }}
// //           />
// //         </div>

// //         {/* Location Badge */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             top: isMobile ? "1rem" : "2rem",
// //             right: isMobile ? "1rem" : "5.5rem",
// //             background: T.mintDark,
// //             color: T.white,
// //             padding: ".8rem 1.4rem",
// //             fontSize: ".6rem",
// //             letterSpacing: ".2em",
// //             textTransform: "uppercase",
// //             zIndex: 3,
// //           }}
// //         >
// //           Chennai · Kanyakumari
// //         </div>
// //       </div>

// //       {/* Content Section */}
// //       <div>
// //         <div className="reveal">
// //           <SectionTag text="The Studio" />
// //         </div>
// //         <div className="reveal d1">
// //           <SectionTitle
// //             style={{
// //               marginBottom: "2rem",
// //               fontSize: isMobile ? "2rem" : "inherit", // Adjust title size for mobile
// //             }}
// //           >
// //             Designing with{" "}
// //             <em style={{ fontStyle: "italic", color: T.mintDeep }}>
// //               intention,
// //             </em>
// //             <br />
// //             not trend
// //           </SectionTitle>
// //         </div>

// //         {[
// //           "Founded in Nagercoil, Kanyakumari in 2022, our studio is dedicated to translating the unique narratives of our clients into spaces of lasting beauty. We operate at the vibrant intersection of architecture, art, and craft—always prioritizing the emotional resonance of a space before defining its aesthetic.",
// //           "Our palette centres on the timeless harmony of cream, sage, and natural materials — warm, breathing, enduring. Every project begins with deep listening.",
// //         ].map((text, i) => (
// //           <p
// //             key={i}
// //             className={`reveal d${i + 2}`}
// //             style={{
// //               fontSize: ".88rem",
// //               lineHeight: 1.8,
// //               color: T.warmGray,
// //               marginBottom: "1.5rem",
// //               maxWidth: 500,
// //             }}
// //           >
// //             {text}
// //           </p>
// //         ))}

// //         <div
// //           className="reveal d3"
// //           style={{
// //             fontFamily: "'Playfair Display',serif",
// //             fontSize: "2rem",
// //             fontStyle: "italic",
// //             fontWeight: 300,
// //             color: T.mintDark,
// //             marginTop: "2.5rem",
// //           }}
// //         >
// //           Hari Suthan
// //         </div>
// //         <div
// //           className="reveal d3"
// //           style={{
// //             fontSize: ".65rem",
// //             letterSpacing: ".2em",
// //             textTransform: "uppercase",
// //             color: T.warmGray,
// //             marginTop: ".3rem",
// //           }}
// //         >
// //           Founder &amp; Creative Director
// //         </div>

// //         {/* Stats Grid */}
// //         <div
// //           className="reveal d4"
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "repeat(3, 1fr)",
// //             gap: isMobile ? "1rem" : "2rem",
// //             marginTop: "3.5rem",
// //             paddingTop: "3rem",
// //             borderTop: `1px solid ${T.mintPale}`,
// //           }}
// //         >
// //           {[
// //             ["100+", "Projects"],
// //             ["5", "Years"],
// //           ].map(([n, l]) => (
// //             <div key={l}>
// //               <div
// //                 style={{
// //                   fontFamily: "'Playfair Display',serif",
// //                   fontSize: isMobile ? "2.2rem" : "2.8rem",
// //                   fontWeight: 300,
// //                   color: T.mintDark,
// //                 }}
// //               >
// //                 {n}
// //               </div>
// //               <div
// //                 style={{
// //                   fontSize: ".6rem",
// //                   letterSpacing: ".18em",
// //                   textTransform: "uppercase",
// //                   color: T.warmGray,
// //                   marginTop: ".4rem",
// //                 }}
// //               >
// //                 {l}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { SectionTag, SectionTitle } from "./UI";
// import T from "../styles/tokens";
// import Falseceiling from "../../public/images/Falseceiling.jpeg";
// import smallImg from "../../public/images/smallimg.jpeg";
// import { useEffect, useState } from "react";

// export default function About() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1024);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section
//       id="about"
//       style={{
//         padding: isMobile ? "5rem 1.5rem" : "8rem 5rem",
//         display: "grid",
//         // '1fr' for mobile stacks the image on top of the text
//         gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//         gap: isMobile ? "3.5rem" : "7rem",
//         alignItems: "center",
//         background: T.cream,
//         overflow: "hidden", // Prevents potential scroll issues with floating elements
//       }}
//     >
//       {/* Images Section */}
//       <div
//         style={{
//           position: "relative",
//           height: isMobile ? "380px" : "600px",
//           width: "100%",
//           // Moves the image section to the top on mobile
//           order: isMobile ? 1 : 0,
//         }}
//       >
//         {/* Main Background Image */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: isMobile ? 30 : 80,
//             bottom: isMobile ? 30 : 80,
//             overflow: "hidden",
//             boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
//           }}
//         >
//           <img
//             src={Falseceiling}
//             alt="Interior design view"
//             loading="lazy"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>

//         {/* Floating Detail Image */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 0,
//             right: 0,
//             width: isMobile ? 150 : 260,
//             height: isMobile ? 170 : 280,
//             overflow: "hidden",
//             border: `8px solid ${T.cream}`, // Thinner border for mobile
//             zIndex: 2,
//             boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//           }}
//         >
//           <img
//             src={smallImg}
//             alt="Detail view"
//             loading="lazy"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>

//         {/* Location Badge */}
//         <div
//           style={{
//             position: "absolute",
//             top: isMobile ? "1rem" : "2rem",
//             right: isMobile ? "1rem" : "5.5rem",
//             background: T.mintDark,
//             color: T.white,
//             padding: isMobile ? ".6rem 1rem" : ".8rem 1.4rem",
//             fontSize: isMobile ? ".55rem" : ".6rem",
//             letterSpacing: ".2em",
//             textTransform: "uppercase",
//             zIndex: 3,
//           }}
//         >
//           Chennai · Kanyakumari
//         </div>
//       </div>

//       {/* Content Section */}
//       <div style={{ order: isMobile ? 2 : 0 }}>
//         <SectionTag text="The Studio" />

//         <SectionTitle
//           style={{
//             marginBottom: "1.5rem",
//             fontSize: isMobile ? "1.8rem" : "2.6rem", // Scaled title
//             lineHeight: 1.2,
//           }}
//         >
//           Designing with{" "}
//           <em style={{ fontStyle: "italic", color: T.mintDeep }}>intention,</em>
//           <br />
//           not trend
//         </SectionTitle>

//         {[
//           "Founded in Nagercoil, Kanyakumari in 2022, our studio is dedicated to translating the unique narratives of our clients into spaces of lasting beauty.",
//           "Our palette centres on the timeless harmony of cream, sage, and natural materials — warm, breathing, enduring.",
//         ].map((text, i) => (
//           <p
//             key={i}
//             style={{
//               fontSize: isMobile ? ".85rem" : ".88rem",
//               lineHeight: 1.8,
//               color: T.warmGray,
//               marginBottom: "1.5rem",
//               maxWidth: isMobile ? "100%" : 500,
//             }}
//           >
//             {text}
//           </p>
//         ))}

//         <div
//           style={{
//             fontFamily: "'Playfair Display',serif",
//             fontSize: isMobile ? "1.6rem" : "2rem",
//             fontStyle: "italic",
//             fontWeight: 300,
//             color: T.mintDark,
//             marginTop: isMobile ? "1.5rem" : "2.5rem",
//           }}
//         >
//           Hari Suthan
//         </div>
//         <div
//           style={{
//             fontSize: ".6rem",
//             letterSpacing: ".2em",
//             textTransform: "uppercase",
//             color: T.warmGray,
//             marginTop: ".3rem",
//           }}
//         >
//           Founder &amp; Creative Director
//         </div>

//         {/* Stats Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2, 1fr)", // Changed to 2 columns for better mobile fit
//             gap: "1.5rem",
//             marginTop: "3rem",
//             paddingTop: "2.5rem",
//             borderTop: `1px solid ${T.mintPale}`,
//           }}
//         >
//           {[
//             ["100+", "Projects"],
//             ["5+", "Years"],
//           ].map(([n, l]) => (
//             <div key={l}>
//               <div
//                 style={{
//                   fontFamily: "'Playfair Display',serif",
//                   fontSize: isMobile ? "2rem" : "2.8rem",
//                   fontWeight: 300,
//                   color: T.mintDark,
//                 }}
//               >
//                 {n}
//               </div>
//               <div
//                 style={{
//                   fontSize: ".55rem",
//                   letterSpacing: ".18em",
//                   textTransform: "uppercase",
//                   color: T.warmGray,
//                   marginTop: ".4rem",
//                 }}
//               >
//                 {l}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { SectionTag, SectionTitle } from "./UI";
import T from "../styles/tokens";
import Falseceiling from "../../public/images/Falseceiling.jpeg";
import smallImg from "../../public/images/smallimg.jpeg";
import { useEffect, useState } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "5rem 1.5rem" : "8rem 5rem",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "3.5rem" : "7rem",
        alignItems: "center",
        background: T.cream,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          height: isMobile ? "380px" : "600px",
          width: "100%",
          order: isMobile ? 1 : 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: isMobile ? 30 : 80,
            bottom: isMobile ? 30 : 80,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src={Falseceiling}
            alt="Interior design view"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: isMobile ? 150 : 260,
            height: isMobile ? 170 : 280,
            overflow: "hidden",
            border: `8px solid ${T.cream}`,
            zIndex: 2,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={smallImg}
            alt="Detail view"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: isMobile ? "1rem" : "2rem",
            right: isMobile ? "1rem" : "5.5rem",
            background: T.mintDark,
            color: T.white,
            padding: isMobile ? ".6rem 1rem" : ".8rem 1.4rem",
            fontSize: isMobile ? ".55rem" : ".6rem",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            zIndex: 3,
          }}
        >
          Chennai · Kanyakumari
        </div>
      </div>

      <div style={{ order: isMobile ? 2 : 0 }}>
        <SectionTag text="The Studio" />

        <SectionTitle
          style={{
            marginBottom: "1.5rem",
            fontSize: isMobile ? "1.8rem" : "2.6rem",
            lineHeight: 1.2,
          }}
        >
          Designing with{" "}
          <em style={{ fontStyle: "italic", color: T.mintDeep }}>intention,</em>
          <br />
          not trend
        </SectionTitle>

        {[
          "Founded in Nagercoil, Kanyakumari in 2022, our studio is dedicated to translating the unique narratives of our clients into spaces of lasting beauty.",
          "Our palette centres on the timeless harmony of cream, sage, and natural materials — warm, breathing, enduring.",
        ].map((text, i) => (
          <p
            key={i}
            style={{
              fontSize: isMobile ? ".85rem" : ".88rem",
              lineHeight: 1.8,
              color: T.warmGray,
              marginBottom: "1.5rem",
              maxWidth: isMobile ? "100%" : 500,
            }}
          >
            {text}
          </p>
        ))}

        <div
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: isMobile ? "1.6rem" : "2rem",
            fontStyle: "italic",
            fontWeight: 300,
            color: T.mintDark,
            marginTop: isMobile ? "1.5rem" : "2.5rem",
          }}
        >
          Hari Suthan
        </div>
        <div
          style={{
            fontSize: ".6rem",
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            marginTop: "3rem",
            paddingTop: "2.5rem",
            borderTop: `1px solid ${T.mintPale}`,
          }}
        >
          {[
            ["100+", "Projects"],
            ["5+", "Years"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: isMobile ? "2rem" : "2.8rem",
                  fontWeight: 300,
                  color: T.mintDark,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: ".55rem",
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
