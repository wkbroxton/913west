import React from "react";
import * as usersService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar(props) {
  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">913 WEST</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/dashboard">Home
            <span className="visually-hidden">(current)</span>
          </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/">
                New Project
              </a>
            </li>
            <h3>Welcome, {props.user.name}</h3>      
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/founders"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Explore
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/dashboard">
                  Dashboard
                </a>
                <a className="dropdown-item" href="/">
                  New Project
                </a>
                <a className="dropdown-item" href="/about">
                  About Us
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/founders">
                  Founders
                </a>
              </div>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-secondary my-2 my-sm-0"
              href=""
              onClick={handleLogOut}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}