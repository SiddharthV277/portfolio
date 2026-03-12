import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import InteractiveGrid from "./components/InteractiveGrid";


function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      <CustomCursor />
      <InteractiveGrid />

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