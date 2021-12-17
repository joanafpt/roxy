import React from "react";
import "./Navbar.css";
import Heart from "./Heart";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="section0"
        style={{ backgroundColor: "hotpink", color: "white" }}
      >
        <div className="container-fluid">
          <span>
            ROXY <Heart />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className="btn btn-default sidemenu" to="/">
                Home
              </NavLink>{" "}
              <NavLink className="btn btn-default sidemenu" to="/images">
                Roxy images
              </NavLink>
              <NavLink className="btn btn-default sidemenu" to="/facts">
                Roxy facts
              </NavLink>
              <NavLink className="btn btn-default sidemenu" to="/messages">
                Messages
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
