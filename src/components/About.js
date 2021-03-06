import React from "react";

import "./style.css";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src="\img\about.jpg" alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            web developer with extensive knowledge and have experience,working in web technoloies and in programming delivering
            quality work.
          </p>
          {/*
            <div className="about__info">
              <div>
                <span className="about__info-title">08+</span>
                <span className="about__info-name">
                  Years <br /> experience
                </span>
              </div>

              <div>
                <span className="about__info-title">20+</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>

              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">
                  Companies <br /> worked
                </span>
              </div>
            </div>
*/}
          <div className="div about__buttons">
            <a
              download=""
              href="\img\avinResume.pdf"
              className="button button--flex"
            >
              Download CV<i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
