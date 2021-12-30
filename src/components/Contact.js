import { useState } from "react";
import "./style.css";
import emailjs from "emailjs-com";
const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon</p>
  );
};

function Contact() {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8jb96pn",
        "template_p9clb9j",
        e.target,
        "user_E0W0gOi0EUsxXTqCBQTNC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="ui uil-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                aveenmeena1998@gmail.com
              </span>
            </div>
          </div>

          <div className="contact__information">
            <i className="ui uil-map-marker contact__icon"></i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Village-Badgaon,Kota,Rajasthan
              </span>
            </div>
          </div>
        </div>

        <form
          id="contact-form"
          className="contact__form grid"
          onSubmit={sendEmail}
        >
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                type="text"
                className="contact__input"
                id="name"
                name="name"
              />
            </div>

            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="contact__input"
                id="email"
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="subject" className="contact__label">
              Subject
            </label>
            <input type="text" className="contact__input" name="subject" />
          </div>

          <div className="contact__content">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              name="message"
              cols="0"
              rows="7"
              className="contact__input"
              id="message"
            />
          </div>

          <div>
            <button className="button button--flex contact__button">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
            <div className="row">{result ? <Result /> : null}</div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
