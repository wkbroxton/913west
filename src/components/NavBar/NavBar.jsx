import React from "react";
import * as usersService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar(props) {
  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">913 WEST</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                New Project
              </a>
            </li>
            <h3>Welcome, {props.user.name}</h3>      
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Explore
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/dashboard">
                  Dashboard
                </a>
                <a class="dropdown-item" href="/">
                  New Project
                </a>
                <a class="dropdown-item" href="/about">
                  About Us
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/founders">
                  Founders
                </a>
              </div>
            </li>
          </ul>
          <div class="d-flex">
            <button
              class="btn btn-secondary my-2 my-sm-0"
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