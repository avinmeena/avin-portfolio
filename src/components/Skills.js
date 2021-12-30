import "./style.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div class="accordion" id="accordionExample">
          {/*=========================skills 1 ===========================*/}

          <div className="skills__content">
            <div
              className="skills__header collapsed accordion-header"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              id="headingOne"
            >
              <i class="uil uil-arrow skills__icon"></i>
              <div>
                <h1 className="skills__titles">Frontend developer</h1>
{/* <span className="skills__subtitle">More than 4 years</span> */}
              </div>
              <i className="uil uil-angle-up skills__arrow"></i>
            </div>
            <div
              className="skills__list grid accordion-collapse collapse"
              id="collapseOne"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__bootstrap"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>

          {/*=========================skills 2 ===========================*/}

          <div className="skills__content">
            <div
              className="skills__header collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i className="uil uil-server-network skills__icon"></i>
              <div>
                <h1 className="skills__titles">Backend developer</h1>
                {/* <span className="skills__subtitle">More than 4 years</span> */}
              </div>
              <i className="uil uil-angle-up skills__arrow"></i>
            </div>
            <div
              className="skills__list grid accordion-collapse collapse"
              id="collapseTwo"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Mysql</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sql"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Node Js</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
            </div>
          </div>

          {/*=========================skills 3 ===========================*/}

          <div className="skills__content">
            <div
              className="skills__header collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <i className="uil uil-brackets-curly skills__icon"></i>
              <div>
                <h1 className="skills__titles">Programming</h1>
                {/* <span className="skills__subtitle">More than 4 years</span> */}
              </div>
              <i className="uil uil-angle-up skills__arrow"></i>
            </div>
            <div
              className="skills__list grid accordion-collapse collapse"
              id="collapseThree"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">C++</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__cpp"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">C</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__c"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">DSA</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__dsa"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">OOPS</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__oops"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
