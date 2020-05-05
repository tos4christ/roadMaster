import React from "react";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;