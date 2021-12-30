import { useState, useEffect } from "react";
import Typist from "react-typist";
import "./style.css";
import { UilGithubAlt, UilLinkedinAlt } from "@iconscout/react-unicons";

function Main() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <section class="home section" id="home">
      <div class="home__container container grid">
        <div class="home__content grid">
          <div class="home__social">
            <a
              href="https://www.linkedin.com/in/avinmeena/"
              target="_blank"
              class="home__social-icon"
            >
              <UilLinkedinAlt />
            </a>
            <a
              href="https://github.com/avinmeena"
              target="_blank"
              class="home__social-icon"
            >
              <UilGithubAlt />
            </a>
          </div>
          <div class="home__img">
            <svg
              class="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  class="home__blob-img"
                  x="-30"
                  y="8"
                  href=".\img\profile.png"
                />
              </g>
            </svg>
          </div>
          <div class="home__data">
            <h1 class="home__title">Hi, I'am Avin </h1>
            <h3 class="home__subtitle">
              {count ? (
                <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                  <span>Web Developer</span>
                  <Typist.Backspace count={13} delay={1000} />
                  <span>Software Developer</span>
                  <Typist.Backspace count={18} delay={1000} />
                </Typist>
              ) : (
                ""
              )}
            </h3>
            <p class="home__decription">
              A Web and Software Developer activelly looking for a new
              possition. I love to explore new technologies and always try to
              enhance my skills through develop some projects.
            </p>
            <a href="#contact" class="button button--flex">
              Hire Me <i class="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>
        <div class="home__scroll">
          <a href="#about" class="home__scroll-button button--flex">
            <i class="uil uil-mouse-alt home__scroll-mouse"></i>
            <span class="home__scroll-name">Scroll Down</span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
