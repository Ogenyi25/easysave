import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content row container-fluid">
        <div className="logo col-md-5">
          easySave
        </div>
        <div className="navs col-md-6">
          <a href="" className="nav-links">About</a>
          <a href="" className="nav-links">How it works</a>
          <a href="" className="nav-links">FAQ</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
