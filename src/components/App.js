import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../css/app.css";
import Home from "../pages/Home";
import CardID from "../pages/CardID";
import Error from "../pages/Error";
import About from "../pages/About";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/card/:cardid" element={<CardID />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
