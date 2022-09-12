import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import { HiArrowUp } from "react-icons/hi";

import { Link } from "react-scroll";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <main>
        <NavBar toggleNav={toggleNav} nav={nav} closeNav={closeNav} />
        <Home nav={nav} />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
        {showTopBtn && (
          <Link to="home" smooth={true} duration={500}>
            <div
              className="fixed right-6 bottom-[10%] inline-flex p-3 text-xl z-10 
              bg-gray-700 text-white cursor-pointer hover:scale-110"
            >
              <HiArrowUp />
            </div>
          </Link>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
