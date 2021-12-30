import React from "react";
import "./style.css";
function Project() {
  return (
    <section className="project section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="project__container container swiper">
        <div className="swiper-wrapper">
          {/*======================project 1=================*/}
          <div className="project__content grid swiper-slide">
            <img src="\img\project1.png" alt="" className="project__img" />

            <div className="project__data">
              <h3 className="project__title">My Portfolio </h3>
              <p className="project__description">
                I developed and designed a website using <b>ReactJS</b> and
                <b> Bootstrap</b> HTML, CSS, hosted on Github Pages, to showcase
                my web presence, story, work experience, education, projects,
                and achievements in an interactive and visually-appealing
                format.
              </p>
              <a
                href="https://github.com/avinmeena/portfolio-website.git"
                className="button button--flex button--small project__button"
              >
                Check It Out
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="swiper-button-next">
          <i className="uil uil-angle-right-b swiper-project-icon"></i>
        </div>
        <div class="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-project-icon"></i>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Project;
