import React from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar(props) {
  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Dashboard
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/project">
                New Project?
              </a>
            </li>
            <h3>Welcome, {props.user.name}</h3>
            <li class="nav-item">
              <a class="nav-link" href="/confirmation">
                Confirmation
              </a>
            </li>
            <li class="nav-item dropdown">
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
                <a class="dropdown-item" href="/">
                  Dashboard
                </a>
                <a class="dropdown-item" href="/intake">
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