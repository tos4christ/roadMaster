import React from "react";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardHome from "./pages/DashboardHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/dashboard">
          <DashboardHome />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
