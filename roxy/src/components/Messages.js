import React from "react";
import Form from "./Form";
import MessagesList from "./MessagesList";

const Messages = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className="img-thumbnail" src={"/IMG_4170.png"} alt="roxy" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            style={{
              overflowY: "scroll",
              height: "55vh",
              margin: "auto",
              overflowX: "hidden",
            }}
          >
            <MessagesList />
          </div>
          <div className="row mb-5 mt-5">
            <div className="col-12">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Messages;
