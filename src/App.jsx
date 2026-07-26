import { useState } from "react";
import "/favicon.avif";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import AllProjects from "./sections/AllProjects";
import FrontendMentor from "./sections/FrontendMentor";

function App() {
  const [currentView, setCurrentView] = useState("main");

  const handleNavigate = (sectionId) => {
    if (currentView !== "main") {
      setCurrentView("main");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      <main>
        {currentView === "main" ? (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects
              onViewAllProjects={() => {
                setCurrentView("all-projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            <FrontendMentor />
            <Education />
            <Experience />
            <Contact />
          </>
        ) : (
          <AllProjects
            onBack={() => {
              setCurrentView("main");
              setTimeout(() => {
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }, 150);
            }}
          />
        )}
      </main>
      <Footer currentView={currentView} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
