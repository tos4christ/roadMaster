import React from "react";
import DashboardNavUser from "../components/Header/DashboardNavUser";
import socket from "../utility/socketioConnection";

const DashboardHomeUser = () => {
  // Sending the SOS button action
  function sendSOS() {
    // onsubmit function to relate with backend api for database purposes
    function SosPost(accidentLocation, description, userId) {
      const url =
        "https://covid-19-tos4christ.herokuapp.com/api/v1/on-covid-19/sos";
      const data = {
        userId,
        reportType: "SOS",
        lat: accidentLocation.lat,
        lon: accidentLocation.lon,
        description: description,
      };
      fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => response)
        .catch((e) => console.error(e));
    }
    function forwardToServer(accidentLocation, userId) {
      socket.emit("sos", { accidentLocation, userId });
      SosPost(accidentLocation, "Accident", userId);
    }
    function sendPosition(position) {
      const accidentLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      const userId = localStorage.getItem("userId");
      forwardToServer(accidentLocation, userId);
    }
    function handleError(err) {
      const error = new Error("Device does not support geolocation");
      console.error(error.message, err);
    }
    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sendPosition, handleError);
    } else {
      const err = new Error("Device does not support geolocation");
      handleError(err);
    }
  }
  const sosStyle = {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const body = (
    <div className="container-fluid">
      <div style={{ height: "80vh" }} className="row">
        <button
          type="button"
          className="my-auto"
          onClick={sendSOS}
          style={sosStyle}
        >
          S.O.S
        </button>
      </div>
    </div>
  );
  return <DashboardNavUser body={body} />;
};

export default DashboardHomeUser;
