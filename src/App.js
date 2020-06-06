import React from "react";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRegister from "./pages/UserRegister";
import DashboardHome from "./pages/DashboardHome";
import UserLogin from "./pages/UserLogin"
import DashboardCrashes from "./pages/DashboardCrashes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import socket from './utility/socketioConnection';

 // socket.io implementation
 const unitName = localStorage.getItem('nameOfUnit');
 socket.on(unitName, (data) => {
   console.log(data);
   const { accidentLocation } = data;
   const message = `${accidentLocation.lat}, ${accidentLocation.lon}`;
   alert(`There is an accident at this location: ${message}`);
   // response.append(`<p> There is an accident at this location: ${message} </p>`);
 });

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user-login">
          <UserLogin />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/user-register">
          <UserRegister />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/dashboard">
          <DashboardHome />
        </Route>
        <Route path="/crashes">
          <DashboardCrashes />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
