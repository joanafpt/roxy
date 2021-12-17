import React from "react";
import "./CardMessage.css";

const CardMessage = (props) => {
  // console.log(props);
  return (
    <>
      <div className="card" style={{ width: "35rem", borderColor: "white" }}>
        <div className="card-body">
          <img
            style={{
              width: "10%",
              borderWidth: "1rem",
            }}
            src="https://www.mcicon.com/wp-content/uploads/2021/03/xCat-20-600x600.jpg.pagespeed.ic.4SEXe8A0km.webp"
            alt="cat"
          />

          <h5
            className="lead"
            style={{ color: "hotpink" }}
          >{`Message from ${props.name}`}</h5>
          <p className="card-text">{props.message}</p>
          {/* <p className="minilead">{props.date}</p> */}
          <p className="minilead">{new Date(props.date).toDateString()}</p>
        </div>
      </div>
      <hr className="separator" />
    </>
  );
};

export default CardMessage;
