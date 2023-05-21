import React from "react";
import { NavLink } from "react-router-dom";








const Navbar = () => {
  
  return (
    <>
    
      {/* Navbar */}
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                 
                src="/logo2.png"
               
                height={50}
                width={60}
                alt="AI MODERATOR"
                loading="lazy"
              />
              
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/manage">
                  Manage Users
                </NavLink>
              </li>
              
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            
            <div className="dropdown">
              <a>
                
                <img
                  src="/yuvi.jpeg"
                  className="rounded-circle"
                  height={25}
                  //alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;