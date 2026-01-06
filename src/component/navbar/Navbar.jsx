import GetBtn from "../btn/GetBtn";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "What We Do", "How it Works", "Services"];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
  <>
  
    <nav className="sticky top-0 z-50 flex justify-center items-center w-full lg:w-[80%] pt-4 px-4">
      <div className="bg-white/20 backdrop-blur-sm text-[#F1F1F1] px-4 py-2 w-full max-w-7xl flex  justify-between items-center rounded-4xl sm:text-[1rem]">
        {/* Logo */}
        <a href="#"
          className="text-2xl font-medium"
          style={{ fontFamily: "Syne" }}
        >
          PRAXIS
        </a>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center  xl:text-xl sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          
            <a href="#"
              className="relative inline-block
         after:content-['']
         after:absolute after:left-0 after:bottom-0
         after:h-0.5 after:w-0
         after:bg-white
         after:transition-all after:duration-300
         hover:after:w-full "
            >Home
            </a>
            <a href="#"
              className="relative inline-block
         after:content-['']
         after:absolute after:left-0 after:bottom-0
         after:h-0.5 after:w-0
         after:bg-white
         after:transition-all after:duration-300
         hover:after:w-full "
            >What We Do
            </a>
            <a href="#"
              className="relative inline-block
         after:content-['']
         after:absolute after:left-0 after:bottom-0
         after:h-0.5 after:w-0
         after:bg-white
         after:transition-all after:duration-300
         hover:after:w-full "
            >How it Works
            </a>
            <a href="#"
              className="relative inline-block
         after:content-['']
         after:absolute after:left-0 after:bottom-0
         after:h-0.5 after:w-0
         after:bg-white
         after:transition-all after:duration-300
         hover:after:w-full "
            >Services 
            </a>
          <GetBtn />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>

    {/* Overlay sibling rendered after nav so it sits behind the navbar */}
    <div
      className={`fixed top-0 left-0 w-full min-h-screen md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 40, backgroundColor: "rgba(0,0,0,0.45)", WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }}
      aria-hidden={!isOpen}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-start gap-6 pt-20 text-[#F1F1F1]">
        
          <a href="#"
            onClick={closeMenu}
            className="hover:opacity-80 transition"
          >Home
          </a>
          <a href="#"
            onClick={closeMenu}
            className="hover:opacity-80 transition"
          >What We Do
          </a>
          <a href="#"
            onClick={closeMenu}
            className="hover:opacity-80 transition"
          >How it Works
          </a>
          <a href="#"
            onClick={closeMenu}
            className="hover:opacity-80 transition"
          >Services
          </a>

        <GetBtn onClick={closeMenu} />
      </div>
    </div>
    </>
  );
};

export default Navbar;
