import React from "react";
// import Navbar from "../components/Navbar";
import "./Home.css";
// import SideMenu from "./SideMenu";
// import Welcome from "./Welcome";
// import Contents from "./Contents";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ overflow: "hidden" }}>
            <img className="background-image" src={"/w1.jpg"} alt="Roxy" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
