import React from "react";
import "./style.css";

function Certi() {
  return (
    <section className="certificate section" id="certificate">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">What i have done</span>

      <div className="certificate__container container grid">
        {/*=========================Certificate 1 ===========================*/}
        <div className="certificate__content">
          <div>
            <h3 className="certificate__title">
              NPTEL <br /> Competitive Programming
            </h3>
          </div>
          <a
            href="https://nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS99S3385002503109561"
            className="button button--flex button--small button--link certificate__button"
          >
            View Certificate
          </a>
        </div>

        {/*=========================Certificate 2 ===========================*/}
        <div className="certificate__content">
          <div>
            <h3 className="certificate__title">
              {" "}
              Coursera <br />
              Introduction to HTML5
            </h3>
          </div>
          <a
            href="https://drive.google.com/file/d/1OzXscDPkv3T1UUI7JqO1DUK99tu1MQpj/view?usp=sharing"
            className="button button--flex button--small button--link certificate__button"
          >
            View Certificate
          </a>
        </div>

        {/*=========================Certificate 3 ===========================*/}
        <div className="certificate__content">
          <div>
            <h3 className="certificate__title">
              UDEMY <br /> Web Development
            </h3>
          </div>
          <a
            href="https://drive.google.com/file/d/1n8gft_Kfm1NujJCRfWCZj8h4fWSobGcO/view?usp=sharing"
            className="button button--flex button--small button--link certificate__button"
          >
            View Certificate
          </a>
        </div>

        {/*=========================Certificate 5 ===========================*/}
        <div className="certificate__content">
          <div>
            <h3 className="certificate__title">
              Coding Ninja <br /> Coding Event
            </h3>
          </div>
          <a
            href="https://drive.google.com/file/d/1xOLFmA1nnD1wKdTcDnNkg08tS31bsCQ-/view?usp=sharing"
            className="button button--flex button--small button--link certificate__button"
          >
            View Certificate
          </a>
        </div>

        <div className="certificate__content">
          <div>
            <h3 className="certificate__title">
              GOOGLE(Coursera) <br /> Python
            </h3>
          </div>
          <a
            href="https://drive.google.com/file/d/1OzXscDPkv3T1UUI7JqO1DUK99tu1MQpj/view?usp=sharing"
            className="button button--flex button--small button--link certificate__button"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certi;
