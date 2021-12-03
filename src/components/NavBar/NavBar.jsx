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
        <a class="navbar-brand" href="#">
          <span>Welcome, {props.user.name}</span>
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
              <a class="nav-link active" href="#">
              <Link to="/">Home</Link>
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/intake">Intake Form</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>Welcome, {props.user.name}</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="" onClick={handleLogOut}>
                  Log Out
                </Link>
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
                <a class="dropdown-item" href="#">
                  <Link to="/">Dashboard</Link>
                </a>
                <a class="dropdown-item" href="#">
                  <Link to="/intake">Intake Form</Link>
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
          </form>
        </div>
      </div>
    </nav>
  );
}
