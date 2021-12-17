import React from "react";
import Sentence from "./Sentence";
import "./Facts.css";

export default function RandomFacts() {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div
          className="col-12 mt-5 morefacts jumbotron d-flex align-items-center"
          id="section1"
        >
          <Sentence />
        </div>
      </div>
    </>
  );
}
