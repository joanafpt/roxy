import React, { useState, useEffect } from "react";
import "./Form.css";
import { tokenize, isLongerThanTwenty, isEmpty } from "../functions/functions";
import * as tf from "@tensorflow/tfjs";
import { useStore } from "../store/AppProvider";

export default function Form() {
  const MODEL_JSON_URL = "./assets/model.json";
  const SPAM_THRESHOLD = 0.75;
  var model = undefined;
  const { state, comment, getListOfComments } = useStore();
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getListOfComments();
  }, []);

  const inputData = (event) => {
    setError("");
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "msg") {
      setMsg(event.target.value);
    }
  };

  async function loadAndPredict(inputTensor, comment) {
    if (model === undefined) {
      model = await tf.loadLayersModel(MODEL_JSON_URL);
    }
    var results = await model.predict(inputTensor);
    results.print();
    results.data().then((dataArray) => {
      if (dataArray[1] > SPAM_THRESHOLD) {
        // console.log("SPAM");
      } else {
        // console.log("not spam");
        setShowMsg(comment);
      }
    });
  }

  const sendData = () => {
    if (isLongerThanTwenty(msg)) {
      return;
    }
    if (isEmpty(name, msg)) {
      setError("Please, provide a name and a comment.");
      return;
    }
    let lowercaseSentenceArray = msg.toLowerCase().replace(/[^\w\s]/g, " ");
    loadAndPredict(tokenize(lowercaseSentenceArray), msg).then(function () {
      comment({ name: name, msg: msg, date: new Date() });
    });
    state.socket.emit("comment", { name: name, msg: msg, date: new Date() });
    setName("");
    setMsg("");
  };

  return (
    <>
      <div className="col-12">
        <p>Leave a message to Roxy! </p>
      </div>
      <div className="col-12">
        <label htmlFor="exampleFormControlInput1" style={{ color: "#cc0052" }}>
          Name
        </label>
        <input
          type="text"
          className="form-control input-data"
          id="name"
          placeholder="Your name"
          name="name"
          onChange={inputData}
          value={name}
        />
      </div>

      <div className="col-12">
        <label
          htmlFor="exampleFormControlTextarea1"
          style={{ color: "#cc0052" }}
        >
          Message
        </label>
        <textarea
          className="form-control input-data"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Your message"
          name="msg"
          onChange={inputData}
          value={msg}
        />
      </div>
      <span style={{ color: "red" }}>{error}</span>

      <div className="col-12">
        <button className="btn btn-roxy  mt-1" onClick={sendData}>
          Send
        </button>
      </div>
    </>
  );
}
