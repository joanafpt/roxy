import React, { useState, useEffect } from "react";
import { getIndex } from "../functions/functions";
import { facts } from "../constants/constants";
import "./Sentence.css";
function Sentence() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(getIndex(0, facts.length - 1));
  }, [currentIndex]);

  return (
    <div className="bg-light p-5 rounded-lg m-3 ">
      <h1 className="display-4">Roxy facts!</h1>
      <p className="lead">
        On this section, we gathered some curiosities and stories about Roxy,
        the cat. Click on Learn more button below to get random facts about our
        star.
      </p>
      <hr className="my-4" />
      <p className="random-sentence">{facts[currentIndex]}</p>

      <button
        className="btn roxy-button me-1"
        onClick={() => setCurrentIndex(getIndex(0, facts.length - 1))}
      >
        Learn more
      </button>
      <a href="#section0" className="btn roxy-button">
        Back to top
      </a>
    </div>
  );
}

export default Sentence;
