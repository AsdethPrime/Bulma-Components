// Might be okay to remove the div className="container"
// Navbar parent element can have is-dark and has-shadow to give it darker look"
// navbar-brand comes first which contains a navbar-item which has the company logo
/* 
  <div className="navbar is-dark has-shadow>
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src=".." />
      </a>
    </div>
  </div>
*/

import React, { useState } from "react";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  function handleNavbarMenuClick() {
    setIsNavbarOpen(!isNavbarOpen);
    console.log(`Is navbar open? ${isNavbarOpen ? "Yes" : "No"}`);
  }

  return (
    <nav className="navbar is-info has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h1 className="title">Learn Meteor</h1>
          </div>
          <span
            className={`navbar-burger burger ${
              isNavbarOpen ? "is-active" : ""
            }`}
            data-target="navbarMenu"
            onClick={handleNavbarMenuClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          className={`navbar-menu ${isNavbarOpen ? "is-active" : ""}`}
          id="navbarMenu"
        >
          <div className="navbar-end">
            <a className="navbar-item">React</a>
            <a className="navbar-item">Meteor</a>
            <a className="navbar-item">Mongo</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
