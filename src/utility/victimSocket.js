/* eslint-disable func-names */
/* eslint-disable no-undef */
$(() => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(xhr.statusText);
      }
    };
    const url = 'http://localhost:3000/sos';
    const formdata = new FormData();
  
    // make connection
    // const socket = io.connect('https://covid-19-tos4christ.herokuapp.com/');
    const socket = io.connect('http://localhost:3001');
    socket.username = 'Anonymous';
    console.log(socket.username);
  
    // victim button to send SOS to response and display div for response from server
    const sendSOS = $('#sendSOS');
    const display = $('#display');
    const socketname = $('#socketname');
    const signins = $('#signin');
    socketname.append(socket.username);
  
    // onsubmit function to relate with backend api for database purposes
    function sos() {
      xhr.open('POST', url, true);
      xhr.send(formdata);
    }
  
    function forwardToServer(accidentLocation) {
      socket.emit('sos', { accidentLocation });
    }
  
    function sendPosition(position) {
      const accidentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      forwardToServer(accidentLocation);
    }
  
    function handleError(err) {
      const error = new Error('Device does not support geolocation');
      console.error(error.message, err);
    }
  
    socket.on('reply', (data) => {
      // alert('message has arrived');
      display.append(data.message);
    });
    socket.on('usernameChange', (data) => {
      socketname.append(data.username);
    });
  
    function signin(event) {
      event.preventDefault();
      socket.emit('userSignin', { name: 'tosin' });
    }
  
    signins.click(signin);
  
    sendSOS.click(() => {
      event.preventDefault();
      // Try HTML5 geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          sendPosition,
          handleError
        );
      } else {
        handleError(err);
      }
    });
  });
  