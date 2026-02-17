import { useCursor, useReveal, useSmoothScroll } from "./hooks";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Featured from "./components/Featured";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
// import Testimonials from './components/Testimonials'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useCursor();
  useReveal();
  useSmoothScroll();

  return (
    <>
      <div id="ev-cursor" className="ev-cursor" />
      <div id="ev-ring" className="ev-ring" />

      <Nav />
      <Hero />
      <Marquee />
      <Featured />
      <About />
      <Services />
      <Gallery />
      <Process />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
