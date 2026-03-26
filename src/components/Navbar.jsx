import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "backdrop-blur-md bg-black/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-yellow-400">
          Siddharth
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          <li className="hover:text-yellow-400 cursor-pointer transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-yellow-400 transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-yellow-400 transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-yellow-400 transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-lg flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col space-y-8 text-2xl text-gray-300 text-center">
          <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition" onClick={() => setIsOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;