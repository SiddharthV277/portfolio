import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="grid-bg min-h-screen text-white">

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <Contact />

    </div>
  );
}

export default App;