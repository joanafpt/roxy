import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./store/AppProvider";
import { initialState } from "./store/initialState";
import { stateReducer } from "./store/stateReducer";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider initialState={initialState} stateReducer={stateReducer}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
