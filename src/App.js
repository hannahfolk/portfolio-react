// Dependencies
import React from "react";

// Custom Styles
import "./App.scss";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
