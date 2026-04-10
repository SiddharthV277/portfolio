import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition border-b-2 border-transparent ${
        scrolled
          ? "backdrop-blur-md bg-[#0b0614]/80 border-[#36294a] shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-[#ffb07c] drop-shadow-[2px_2px_0px_#1a1025]">
          Siddharth
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#e5e5e5] text-lg uppercase">
          <li className="hover:text-[#ff2a6d] hover:-translate-y-1 transform transition cursor-pointer drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#ff2a6d] hover:-translate-y-1 transform transition cursor-pointer drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#ff2a6d] hover:-translate-y-1 transform transition cursor-pointer drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#ff2a6d] hover:-translate-y-1 transform transition cursor-pointer drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-[#ff2a6d] hover:-translate-y-1 transform transition cursor-pointer drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#ffb07c] transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2 bg-[#ff2a6d]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ffb07c] transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ffb07c] transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2 bg-[#ff2a6d]" : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#1a1025]/95 backdrop-blur-lg flex flex-col items-center justify-center border-l-4 border-[#ff2a6d] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full" /* slide in from left like retro menu */
        }`}
      >
        <ul className="flex flex-col space-y-8 text-3xl uppercase text-[#e5e5e5] text-center drop-shadow-[3px_3px_0px_#000]">
          <li className="hover:text-[#ffb07c] cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#ffb07c] cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#ffb07c] cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#ffb07c] cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-[#ffb07c] cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;