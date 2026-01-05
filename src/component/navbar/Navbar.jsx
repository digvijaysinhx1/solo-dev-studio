import GetBtn from "../btn/GetBtn";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "What We Do", "How it Works", "Services"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-center items-center w-[90%] pt-4">
      <div className="bg-white/20 backdrop-blur-xs text-[#F1F1F1]  px-4 py-3 w-full max-w-7xl flex justify-between items-center rounded-4xl sm:text-[1rem]">
        {/* Logo */}
        <h1
          className="text-3xl sm:text-2xl lg:text-4xl  font-medium gap-4 cursor-default"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="top-0 left-0 w-full h-screen m-0  bg-white/20 backdrop-blur-[3xl] text-[#f1f1f1] flex flex-col items-center gap-6 py-8 text-xl sm:hidden sticky shadow-lg ">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
