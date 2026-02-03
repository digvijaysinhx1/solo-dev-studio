import Hero from "./component/Hero Section/Hero"
import Navbar from "./component/navbar/Navbar"
import Sec3 from "./component/Section 3/Sec3"
import MultiCardsWwd from "./component/what we do Section/MultiCardsWwd"

const App = () => {
  return (
    <>
    <div className="flex flex-col max-w-full h-full relative gap-15 justify-center items-center">
      <Navbar/>
      <Hero/>
      <MultiCardsWwd/>
      <Sec3/>
    </div>
    
    </>
  )
}

export default App
