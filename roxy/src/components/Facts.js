import React, { useState } from "react";
import Text from "./Text";
import Progress from "./Progress";
import RandomFacts from "./RandomFacts";
// import Sentence from "./Sentence";
import "./Facts.css";

export default function Facts() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <img
          className="img-thumbnail d-block  mx-auto"
          style={loaded ? { maxHeight: "55%" } : { display: "none" }}
          src={"/roxy_cover.jpg"}
          alt="Roxy cover"
          onLoad={() => setLoaded(true)}
        />
        {!loaded ? <Progress /> : null}

        <Text />
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-xs-6 col-lg-12">
          <a href="#section1" className="btn roxy-button">
            More about Roxy
          </a>
        </div>
      </div>
      <RandomFacts />
    </div>
  );
}
