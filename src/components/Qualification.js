import { useState } from "react";
import "./style.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section class="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>
      <div class="qualification__container container">
        <div className="qualification__tabs">
          <div>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            <span
              className={
                toggleState === 1
                  ? "qualification__button button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              Education
            </span>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>
        <div className="qualication__sections">
          {/*=========================Qualification content 1 ===========================*/}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
          >
            {/*=========================Qualification 1 ===========================*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Computer Science Engineer
                </h3>
                <span className="qualification__subtitle">
                  Rajasthan Technical University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*=========================Qualification 2 ===========================*/}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Class 12th(CBSE)</h3>
                <span className="qualification__subtitle">
                  Guru Nanak Public School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2017
                </div>
              </div>
            </div>

            {/*=========================Qualification 3 ===========================*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Class 10th (CBSE)</h3>
                <span className="qualification__subtitle">
                  Guru Nanak Public School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2014 - 2015
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span>  */}
              </div>
            </div>
          </div>

          {/*=========================Qualification content 2 ===========================*/}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
          >
            {/*=========================Qualification 1 ===========================*/}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
              <div>
                <h3 className="qualification__title">Fresher</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
