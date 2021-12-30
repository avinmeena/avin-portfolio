import { useState, useEffect } from "react";
import Link from "react-scroll/modules/components/Link";
import Typist from "react-typist";
import "./style.css";
function Footer() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Avin</h1>
            <span className="footer__subtitle">
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
            </span>
          </div>

          <ul className="footer__links">
            <li>
              <Link to="project" className="footer__link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="certificate" className="footer__link">
                Certificate
              </Link>
            </li>
            <li>
              <Link to="contact" className="footer__link">
                <span>Hire</span>
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/aveen.meena.10"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/avinmeena/?hl=en"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://twitter.com/bababerupiya"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">Made With &#128151; By Avin</p>
      </div>
    </footer>
  );
}

export default Footer;
