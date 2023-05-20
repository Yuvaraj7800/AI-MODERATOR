import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

const Navbar = () => {

  const { loggedIn, setLoggedIn, logout } = useUserContext();

  const showLoggedIn = () => {
    if (!loggedIn) {
      return (
        // <ul className="navbar-nav">
        <>
          {/* <li className="nav-item"> */}
          <NavLink className="nav-link" aria-current="page" to="/main/login">
              Login
          </NavLink>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <NavLink className="nav-link" aria-current="page" to="/main/signup">
              SignUp
          </NavLink>
          {/* </li> */}
        </>
        // </ul >

      );
    }
  }

  const showLogout = () => {
    if (loggedIn) {
      return (
        <ul className="navbar-nav">
          {/* // <li className="nav-item"> */}
          {/* <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                        Logout
                    </button> */}
          <button type="button" className="btn btn-primary me-3 mb-2" onClick={logout}>
            LogOut
          </button>
          {/* // </li> */}
        </ul>
      );
    }
  }





  return (
    <>

      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
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
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Signup
                </NavLink>
              </li> */}
              {showLoggedIn()}
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/aboutus">
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/contactus">
                  ContactUs
                </NavLink>
              </li>
              {showLogout()}



              <li className="nav-item">

              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            
            {/* Avatar */}
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