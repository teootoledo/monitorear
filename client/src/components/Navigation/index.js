import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppLogo from "../../assets/NavbarLogo.svg";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="app-logo" src={AppLogo} alt="Monitorear"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link btn" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link btn" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link btn" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link btn login-btn" to="/login">
                  Log in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn register-btn" to="/register">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
