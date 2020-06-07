import React from "react";
import DashboardNavUser from '../components/Header/DashboardNavUser';
import AccidentAreas from '../components/Charts/AccidentAreas';
import AccidentRep from '../components/Charts/AccidentsRep';
import socket from "../utility/socketioConnection";

const DashboardHomeUser = () => {

    // Sending the SOS button action
  function sendSOS() {
    // onsubmit function to relate with backend api for database purposes
    function SosPost(accidentLocation, description, userId) {
      const url = "https://covid-19-tos4christ.herokuapp.com/api/v1/on-covid-19/sos";
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
      .then(response => response)
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

  const body = <div className='container-fluid' >
  <div className="row">
  <button type="button" onClick={sendSOS} style={{borderRadius: '50%', width: '70px', height: '70px'}}>
    S.O.S
  </button>
  </div>
    <div className="row my-4 pt-4 text-justify">
      <div className="col-sm-4">
        <div className='bg-white shadow m-1 p-3'>
          <AccidentAreas/>
        </div>
        {/* <div className="row mt-4">
          <div className="col-sm-6 ">
            <div className="bg-white shadow m-1 p-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas, non molestias voluptate
            vero veniam! </p></div>

          </div>
          <div className="col-sm-6 ">
            <div className="bg-white shadow m-1 p-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas, non molestias voluptate
            vero veniam! </p></div>

          </div>
          </div> */}
      </div>
      <div className="col-sm-8">
        <div className='bg-white shadow m-1 p-3'><AccidentRep/></div>
        {/* <div className="row mt-4">
          <div className="col-sm-6 ">
            <div className="bg-white shadow m-1 p-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas, non molestias voluptate
             vero veniam! In aliquid provident quisquam eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, officiis,
              laboriosam rerum molestiae tempora numquam optio cumque 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur! Lorem, ipsum dolor sit amet 
             consectetur adipisicing elit. Cumque, nesciunt? accusamus hic temporibus animi soluta, maxime recusandae voluptate 
             natus magni delectus vero ut.</p></div>
            
          </div>
          <div className="col-sm-6 ">
            <div className="bg-white shadow m-1 p-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas, non molestias voluptate
             vero veniam! In aliquid provident quisquam eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, officiis,
              laboriosam rerum molestiae tempora numquam optio cumque 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur! Lorem, ipsum dolor sit amet 
             consectetur adipisicing elit. Cumque, nesciunt? accusamus hic temporibus animi soluta, maxime recusandae voluptate 
             natus magni delectus vero ut.</p></div>
            
          </div>
        </div> */}
      </div>
    </div>
  </div>
  return(
    <DashboardNavUser body={body}/>
  )
};

export default DashboardHomeUser;
