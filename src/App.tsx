import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen antialiased">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
}
