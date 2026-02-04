import CursorDot from "./component/Cursor Dot/CursorDot"
import Footer from "./component/Footer/Footer"
import Hero from "./component/Hero Section/Hero"
import MultiCardsHiw from "./component/how it works/MultiCardsHiw"
import Talk from "./component/Lets Talk/Talk"
import Navbar from "./component/navbar/Navbar"
import Sec3 from "./component/Section 3/Sec3"
import MultiCardsWwd from "./component/what we do Section/MultiCardsWwd"
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const App = () => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureOrientation: "vertical",
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
    <CursorDot/>
      <Navbar/>
      <Hero/>
      <MultiCardsWwd/>
      <Sec3/>
      <MultiCardsHiw/>
      <Talk/>
      <Footer/>
    </>
  )
}

export default App
