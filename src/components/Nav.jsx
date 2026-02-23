// import { useRef } from "react";
// import { useScrolledNav } from "../hooks";
// import T from "../styles/tokens";
// import Logo from "../../public/images/hrlogo.png";

// const links = [
//   ["#work", "Projects"],
//   ["#about", "About"],
//   ["#services", "Services"],
//   ["#contact", "Contact"],
// ];

// export default function Nav() {
//   const navRef = useRef(null);
//   useScrolledNav(navRef);

//   return (
//     <nav
//       ref={navRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 200,
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "2rem 5rem",
//         transition: "background .5s, padding .4s, box-shadow .4s",
//       }}
//     >
//       {/* <a
//         href="#"
//         style={{
//           fontFamily: "'Playfair Display',serif",
//           fontSize: "1.35rem",
//           fontWeight: 400,
//           color: T.charcoal,
//           letterSpacing: ".06em",
//         }}
//       >
//         Hari <em style={{ color: T.mintDeep, fontStyle: "italic" }}>Designs</em>
//       </a> */}

//       <a
//         href="#"
//         style={{
//           display: "inline-block",
//           lineHeight: 0,
//         }}
//       >
//         <img
//           src={Logo}
//           alt="Hari Designs Logo"
//           style={{
//             height: "40px",
//             width: "auto",
//             display: "block",
//           }}
//         />
//       </a>

//       <ul style={{ display: "flex", gap: "3rem", listStyle: "none" }}>
//         {links.map(([href, label]) => (
//           <li key={href}>
//             <a
//               href={href}
//               style={{
//                 fontSize: ".7rem",
//                 letterSpacing: ".2em",
//                 textTransform: "uppercase",
//                 color: T.warmGray,
//                 transition: "color .3s",
//               }}
//               onMouseEnter={(e) => (e.target.style.color = T.mintDark)}
//               onMouseLeave={(e) => (e.target.style.color = T.warmGray)}
//             >
//               {label}
//             </a>
//           </li>
//         ))}
//       </ul>

//       <a
//         href="#contact"
//         className="nav-cta-btn"
//         style={{
//           fontSize: ".68rem",
//           letterSpacing: ".18em",
//           textTransform: "uppercase",
//           color: T.white,
//           background: T.mintDark,
//           padding: ".7rem 1.8rem",
//           transition: "background .3s",
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.background = T.mintDeep)}
//         onMouseLeave={(e) => (e.currentTarget.style.background = T.mintDark)}
//       >
//         Free Consultation
//       </a>
//     </nav>
//   );
// }

import { useRef, useState, useEffect } from "react";
import { useScrolledNav } from "../hooks";
import T from "../styles/tokens";
import Logo from "../../public/images/hrlogo.png";

const links = [
  ["#work", "Projects"],
  ["#about", "About"],
  ["#services", "Services"],
  ["#contact", "Contact"],
];

export default function Nav() {
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrolledNav(navRef);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 968);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "1.2rem 1.5rem" : "2rem 5rem",
        transition: "background .5s, padding .4s, box-shadow .4s",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: "inline-block", lineHeight: 0 }}>
        <img
          src={Logo}
          alt="Hari Designs Logo"
          style={{ height: isMobile ? "32px" : "40px", width: "auto" }}
        />
      </a>

      {/* Desktop Links - Hidden on Mobile */}
      {!isMobile && (
        <ul style={{ display: "flex", gap: "3rem", listStyle: "none" }}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontSize: ".7rem",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: T.warmGray,
                  transition: "color .3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = T.mintDark)}
                onMouseLeave={(e) => (e.target.style.color = T.warmGray)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Right Section: CTA or Hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {!isMobile && (
          <a
            href="#contact"
            style={{
              fontSize: ".68rem",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: T.white,
              background: T.mintDark,
              padding: ".7rem 1.8rem",
              transition: "background .3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = T.mintDeep)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = T.mintDark)
            }
          >
            Free Consultation
          </a>
        )}

        {isMobile && (
          <button
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              color: T.charcoal,
              zIndex: 301,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: menuOpen ? 0 : "-100%",
            width: "80%",
            height: "100vh",
            background: T.white,
            boxShadow: "-10px 0 30px rgba(0,0,0,0.05)",
            transition: "right 0.4s ease-in-out",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
            zIndex: 300,
          }}
        >
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1rem",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: T.charcoal,
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: ".8rem",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: T.white,
              background: T.mintDark,
              padding: "1rem 2rem",
            }}
          >
            Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
