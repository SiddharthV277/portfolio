import { useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "backdrop-blur-md bg-black/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-cyan-400">
          Siddharth
        </h1>

        <ul className="flex space-x-8 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer transition">Home</li>
          <a href="#about">
  <li className="hover:text-cyan-400 cursor-pointer transition">About</li>
</a>
          <a href="#projects">
  <li className="hover:text-cyan-400 cursor-pointer transition">
    Projects
  </li>
</a>
          <a href="#skills">
  <li className="hover:text-cyan-400 cursor-pointer transition">
    Skills
  </li>
</a>
          <a href="#contact">
  <li className="hover:text-cyan-400 cursor-pointer transition">
    Contact
  </li>
</a>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;