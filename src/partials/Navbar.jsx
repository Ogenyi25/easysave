import React from "react";
import {Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content row container-fluid">
        <div className="logo col-md-3">
          easySave
        </div>
        <div className="navs col-md-6">
          <Link to='/about' className="nav-links">About</Link>
          <Link to='/about' className="nav-links">How It Works</Link>
          <Link to='/about' className="nav-links">FAQ</Link>
        </div>
        <div className="account col-md-3">
        <button type="button" className="btn btn-primary">Sign Up</button>
        <Link to='/login'>
        <button type="button" className="btn btn-success">Login</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
