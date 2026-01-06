import Card from "./component/card/Card"
import Hero from "./component/Hero Section/Hero"
import Navbar from "./component/navbar/Navbar"

const App = () => {
  return (
    <>
    <div className="flex flex-col max-w-full relative gap-10 justify-center items-center overflow-x-hidden">
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <Card/>
    </div>
    
    </>
  )
}

export default App
