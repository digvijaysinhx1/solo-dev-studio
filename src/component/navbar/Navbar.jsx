import GetBtn from "../btn/GetBtn";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "What We Do", "How it Works", "Services"];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
  <>
  
    <nav className="sticky top-0 z-50 flex justify-center items-center w-full pt-4 px-4">
      <div className="bg-white/20 backdrop-blur-sm text-[#F1F1F1] px-4 py-2 w-full max-w-7xl flex  justify-between items-center rounded-4xl sm:text-[1rem]">
        {/* Logo */}
        <h1
          className="text-2xl lg:text-4xl font-medium cursor-default"
          style={{ fontFamily: "Syne" }}
        >
          PRAXIS
        </h1>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center  xl:text-xl sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, "-").toLowerCase()}`}
              className="hover:underline hover:transition-transform hover:ease-in-out"
            >
              {link}
            </a>
          ))}
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
      className={`fixed top-0 left-0 w-full min-h-screen md:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 40, backgroundColor: "rgba(0,0,0,0.45)", WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }}
      aria-hidden={!isOpen}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-start gap-6 pt-20 text-[#F1F1F1]">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={closeMenu}
            className="hover:opacity-80 transition"
          >
            {link}
          </a>
        ))}

        <GetBtn onClick={closeMenu} />
      </div>
    </div>
    </>
  );
};

export default Navbar;
