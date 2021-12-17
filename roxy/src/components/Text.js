import React from "react";
import {
  hello,
  welcome,
  description,
  descriptionTwo,
  descriptionThree,
  thanks,
} from "../constants/constants";
import "./Text.css";

export default function Text() {
  return (
    <div className="col-12 mt-5">
      <span className="display-4" style={{ color: "hotpink" }}>
        {" "}
        {hello}
      </span>{" "}
      <br />
      <span className="parag"> {welcome}</span>
      <br />
      <span className="parag"> {description}</span> <br />
      <span className="parag">
        {descriptionTwo}
        <br />
        {descriptionThree}
      </span>
      <br />
      <span className="parag2">{thanks}</span>
    </div>
  );
}
