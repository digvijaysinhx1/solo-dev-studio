import CursorDot from "./component/Cursor Dot/CursorDot"
import Hero from "./component/Hero Section/Hero"
import MultiCardsHiw from "./component/how it works/MultiCardsHiw"
import Talk from "./component/Lets Talk/Talk"
import Navbar from "./component/navbar/Navbar"
import Sec3 from "./component/Section 3/Sec3"
import MultiCardsWwd from "./component/what we do Section/MultiCardsWwd"

const App = () => {
  return (
    <>
    <CursorDot/>
      <Navbar/>
      <Hero/>
      <MultiCardsWwd/>
      <Sec3/>
      <MultiCardsHiw/>
      <Talk/>
    </>
  )
}

export default App
