import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollTop from "./ScrollTop";
import ScrollToTop from 'react-scroll-to-top';
import Footer from './components/Footer';
import MouseBlob from './components/effects/Transition';
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Hero from './components/Hero'
import About from './components/About';
import Skills from './components/Skills';
import SplashScreen from './components/effects/SplashScreen';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("ashok_folio_theme") || "dark");
  useEffect(() => {
    localStorage.setItem("ashok_folio_theme", theme);
  }, [theme]);
  

  return (
    <div className={`theme ${theme === "dark" ? "dark" : "light"}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollTop>
        <Hero />
        <Projects />
        <Skills />
        {/* <Journey /> */}
        <About />
        <Contact />
      </ScrollTop>
      <ScrollToTop />
      <Footer />
      {/* <SplashScreen /> */}
    </div>
  )
}

export default App