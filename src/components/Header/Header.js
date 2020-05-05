import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

const Header = () => {
  window.addEventListener("scroll", () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 128) {
      setBg(
        "linear-gradient(to right,#001a00 1%, #006600 24%, #009900 67%, #00b300 100% )"
      );
    } else {
      setBg("inherit");
    }
  });
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [bg, setBg] = useState("inherit");
  const toggle = () => {
    setShow((prevSate) => !prevSate);
  };
  const toggleStyle = {
    display: show ? "block" : "none",
    transition: "width 2s",
    transitionTimingFunction: "ease-in",
  };
  const headerStyle = {
    background: bg,
  };
  const route = history.location.pathname;

  return (
    <header className="header" style={headerStyle}>
      <div className="container">
        <div className="row flexbox-center">
          <div className="col-lg-2 col-md-3 col-6">
            <div className="logo move">
              <Link to="/">
                {/* <img src="assets/img/logo.png" alt="logo" /> */}
                ROADMASTER
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-md-9 col-6">
            <div className="responsive-menu">
              <div className="slicknav_menu">
                <button
                  onClick={toggle}
                  style={{ border: "none" }}
                  className="slicknav_btn slicknav_collapsed"
                >
                  <span className="slicknav_menutxt">MENU</span>
                  <span className="slicknav_icon">
                    <span className="slicknav_icon-bar"></span>
                    <span className="slicknav_icon-bar"></span>
                    <span className="slicknav_icon-bar"></span>
                  </span>
                </button>
                <ul
                  className="slicknav_nav slicknav_hidden"
                  aria-hidden="true"
                  role="menu"
                  style={toggleStyle}
                >
                  <li>
                    <Link
                      className={route === "/" ? "nav-link active" : "nav-link"}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  {route === "/" ? (
                    <>
                      <li>
                        <ScrollLink
                          to="HIW"
                          spy={true}
                          smooth={true}
                          duration={500}
                          className="nav-link text-light pointer"
                        >
                          How It Works
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="features"
                          spy={true}
                          smooth={true}
                          duration={500}
                          className="nav-link text-light pointer"
                        >
                          Features
                        </ScrollLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link className="nav-link" to="/">
                          How It Works
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/">
                          Features
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <Link
                      className={route === "/" ? "nav-link" : "nav-link active"}
                      to="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mainmenu">
              <ul id="primary-menu">
                <li>
                  <Link
                    className={route === "/" ? "nav-link active" : "nav-link"}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {route === "/" ? (
                  <>
                    <li>
                      <ScrollLink
                        to="HIW"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="nav-link text-light pointer"
                      >
                        How It Works
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="features"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="nav-link text-light pointer"
                      >
                        Features
                      </ScrollLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="nav-link" to="/">
                        How It Works
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/">
                        Features
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link
                    className={route === "/" ? "nav-link" : "nav-link active"}
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="">
                  <a className="unseen" href="true">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
