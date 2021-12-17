// This is a React Router v6 app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Welcome from "../components/Welcome";
import Images from "../components/Images";
import Facts from "../components/Facts";
import Navbar from "../components/Navbar";
import Messages from "../components/Messages";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="images" element={<Images />} />
        <Route path="facts" element={<Facts />} />
        <Route path="messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}
