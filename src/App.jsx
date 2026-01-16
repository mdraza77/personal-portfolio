import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* Baaki sections yaha aayenge */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
