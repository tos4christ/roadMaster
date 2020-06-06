import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/img/logo.JPG";
import rlogo from "../../assets/img/responderLogo.JPG";
import socket from "../../utility/socketioConnection";

const DashboardNav = ({ body }) => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const route = history.location.pathname;

  // Sending the SOS button action
  function sendSOS() {
    // onsubmit function to relate with backend api for database purposes
    function SosPost(accidentLocation, description, userId) {
      const url = "http://localhost:5000/api/v1/on-covid-19/sos";
      const data = {
        userId,
        reportType: 'SOS',
        lat: accidentLocation.lat,
        lon: accidentLocation.lon,
        description: description
      }
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(e => console.error(e));
      
    }  
    function forwardToServer(accidentLocation, userId) {    
      socket.emit('sos', { accidentLocation, userId });
      SosPost(accidentLocation, 'Accident', userId);
    }  
    function sendPosition(position) {
      const accidentLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };
      const userId = localStorage.getItem('userId');
      forwardToServer(accidentLocation, userId);
    }  
    function handleError(err) {
      const error = new Error('Device does not support geolocation');
      console.error(error.message, err);
    }  
    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        sendPosition,
        handleError
      );
    } else {
      const err = new Error('Device does not support geolocation')
      handleError(err);
    }  
  }

  const changeToggle = () => {
    if (!toggle) {
      openNav();
      setToggle((prevState) => !prevState);
    } else {
      closeNav();
      setToggle((prevState) => !prevState);
    }
  };
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
      <div id="mySidenav" className="sidenav">
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
        <div className="bg-light mt-4">
          <a
            className={route === "/dashboard" ? "active" : ""}
            href="/dashboard"
          >
            <span className="fa fa-user"></span> Dashboard
          </a>
          <a className={route === "/dashboard" ? "" : "active"} href="/crashes">
            {" "}
            <span className="fa fa-car"></span> Crashes
          </a>
          <a href>
            {" "}
            <span className="fa fa-institution"></span> Accident Reports
          </a>
          <a href>
            {" "}
            <span className="fa fa-list"> </span> Summary
          </a>
          <a href="/">
            {" "}
            <span className="fa fa-sign-out"> </span> Logout
          </a>
        </div>
      </div>
      {/* <!-- Use any element to open the sidenav --> */}
      {/* <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
      <div id="main" className="bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
          <div className="text-secondary toggle">
            <a href onClick={() => changeToggle()}>
              <h1>
                <span className="fa fa-bars"></span>
              </h1>
            </a>
          </div>
          <div
            className="mr-auto d-flex pl-3"
            id="navbarSupportedContent"
            style={{ width: 200 }}
          >
            <h3 className="">Responders Dashboard</h3>
          </div>
          <div>
            <button type="button" onClick={sendSOS} style={{borderRadius: '50%', width: '70px', height: '70px'}}>
                S.O.S
            </button>
            <span id="display"></span>
          </div>
          <div className="ml-auto d-flex " id="navbarSupportedContent">
            <a href>
              <h2>
                <span className="fa fa-bell mr-4 text-secondary"></span>
              </h2>
            </a>
            <a href>
              <h2>
                <span className="fa fa-envelope mr-4 text-secondary"></span>
              </h2>
            </a>
            <a href>
              <h2>
                <span className="fa fa-gear text-secondary"></span>
              </h2>
            </a>
          </div>
        </nav>
        {body}
      </div>
      ;
    </div>
  );
};

export default DashboardNav;
