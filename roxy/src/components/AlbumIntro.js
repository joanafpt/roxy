import React from "react";
import { NavLink } from "react-router-dom";
import { roxyMoments, lead } from "../constants/constants";
import "./AlbumIntro.css";

export default function AlbumIntro() {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">{roxyMoments}</h1>
          <p className="lead text-muted">{lead}</p>
          <p>
            <NavLink className="btn roxy-button my-2" to="/">
              Home
            </NavLink>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
