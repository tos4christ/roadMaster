import React from "react";
import logo from "../assets/img/logo.JPG";
import rlogo from "../assets/img/responderLogo.JPG";

const DashboardHome = () => {
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  return (
    <div>
      <div id="mySidenav" class="sidenav">
        <a href class="closebtn" onClick={() => closeNav()}>
          <h3>
            <span className="fa fa-times"></span>
          </h3>
        </a>
        <div className="text-center">
          <img src={logo} alt="logo" />
          <img
            src={rlogo}
            alt="r-logo"
            className="rounded-circle my-2 r-logo"
          />
          <div className="mx-auto" style={{ width: 100 }}>
            <h5 className="text-dark font-weight-bold">
              Ikoyi Fire Service Unit
            </h5>
          </div>
        </div>
        <div>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Clients</a>
          <a href="/">Contact</a>
        </div>
      </div>
      {/* <!-- Use any element to open the sidenav --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="text-dark">
          <a href onClick={() => openNav()}>
            <h1>
              <span className="fa fa-bars"></span>
            </h1>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
      <div id="main">
        <h1>Hello World</h1>
      </div>
      ;
    </div>
  );
};

export default DashboardHome;
