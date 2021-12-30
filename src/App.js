import React, { useState } from "react";

import About from "./components/About";
import Certi from "./components/Certi";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Main from "./components/Main";
import Project from "./components/Project";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import "./components/style.css";

import Link from "react-scroll/modules/components/Link";
import {
  UilEstate,
  UilUser,
  UilBriefcaseAlt,
  UilFileAlt,
  UilTimes,
  UilScenery,
  UilApps,
  UilMessage,
} from "@iconscout/react-unicons";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((curr) => !curr);
  };
  return (
    <div className={darkMode ? "dark-theme" : "light-mode"}>
      <header class="header" id="header">
        <nav class="nav container">
          <a href="#" class="nav__logo">
            Avin
          </a>
          <div
            class={sidebar ? "nav__menu active" : "nav__menu"}
            onClick={showSidebar}
            id="nav-menu"
          >
            <ul class="nav__list grid">
              <li class="nav__item">
                <Link className="nav__link" to="home">
                  <UilEstate class="nav__icon" />
                  Home
                </Link>
              </li>
              <li class="nav__item">
                <Link className="nav__link" to="about">
                  <UilUser class="nav__icon" />
                  About
                </Link>
              </li>
              <li class="nav__item">
                <Link className="nav__link" to="skills">
                  <UilFileAlt class="nav__icon" />
                  Skills
                </Link>
              </li>
              <li class="nav__item">
                <Link className="nav__link" to="certificate">
                  <UilBriefcaseAlt class="nav__icon" /> Certificate
                </Link>
              </li>
              <li class="nav__item">
                <Link className="nav__link" to="project">
                  <UilScenery class="nav__icon" /> Projects
                </Link>
              </li>
              <li class="nav__item">
                <Link className="nav__link" to="contact">
                  <UilMessage class="nav__icon" /> Contact Me
                </Link>
              </li>
            </ul>
            <UilTimes class="nav__close" id="nav-close" onClick={showSidebar} />
          </div>

          <div class="nav__btns">
            {/*Change theme button */}
            <div onClick={handleClick}>
              <i
                className={
                  click
                    ? "uil uil-sun change-theme"
                    : "uil uil-moon change-theme"
                }
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>
            <div class="nav__toggle" id="nav-toggle" onClick={showSidebar}>
              <UilApps />
            </div>
          </div>
        </nav>
      </header>
      <Main />
      <About />
      <Skills />
      <Qualification />
      <Certi />
      <Project />
      <Contact />
      <Footer />
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </div>
  );
}

export default App;
