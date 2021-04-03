import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import MainPage from "./components/MainPage";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import ContactUs from "./components/Contact-Us";

class App extends Component {
  render() {
    return (
      <AnimatePresence>
        <Router>
          <Navigation />

          <Route path="/" exact component={MainPage} />
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LogIn} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </AnimatePresence>
    );
  }
}

export default App;
