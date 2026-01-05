import Hero from "./component/Hero Section/Hero"
import Navbar from "./component/navbar/Navbar"
import Span from "./component/spans/Span"

const App = () => {
  return (
    <>
    <div className="flex flex-col w-full relative gap-10 justify-center items-center overflow-x-hidden">
      <Navbar/>
      <Hero/>
    </div>
    
    </>
  )
}

export default App
