import openSocket from 'socket.io-client';
 // start the client socket
 const socket = openSocket('http://localhost:5000/');

 export default socket;
 