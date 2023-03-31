import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      id="app"
      className=" bg-gradient-to-r from-secondary via-[#01103C] to-primery z-0 relative"
    >
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
      {/* <div className="h-[2000px]"></div> */}
    </div>
  );
};

export default App;
