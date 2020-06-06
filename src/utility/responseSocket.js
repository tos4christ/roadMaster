/* eslint-disable no-undef */
$(() => {
    // make connection
    const socket = io.connect('https://covid-19-tos4christ.herokuapp.com/');
  
    socket.username = "Response";
    console.log(socket.username);
    // response div to display info
    const response = $('#response');
  
    socket.on('response', (data) => {
      const { accidentLocation } = data.data.data;
      console.log(Object.keys(data), 'this is it');
      const message = `${accidentLocation.lat}, ${accidentLocation.lng}`;
      response.append(`<p> There is an accident at this location: ${message} </p>`);
    });
  });
  