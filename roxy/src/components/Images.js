import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import AlbumIntro from "./AlbumIntro";
import { images } from "../constants/constants";

export default class Images extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <AlbumIntro />
        </div>

        <div className="row">
          <StackGrid
            columnWidth={300}
            monitorImagesLoaded={true}
            duration={600}
            gutterWidth={2}
            gutterHeight={2}
            appearDelay={60}
          >
            {images.map((img, i) => {
              return (
                <img
                  key={i}
                  className="img-thumbnail"
                  // style={{ maxWidth: "33%" }}
                  src={img.url}
                  alt={img.alt}
                />
              );
            })}
          </StackGrid>
        </div>

        {/* <div className="row" id="comment-album">
          comment photos here
        </div> */}
      </div>
    );
  }
}
