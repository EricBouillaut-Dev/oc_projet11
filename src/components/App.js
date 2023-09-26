import { Routes, Route } from "react-router-dom";
import "../css/app.css";
import Home from "../pages/Home";
import CardID from "../pages/CardID";
import Error from "../pages/Error";
import About from "../pages/About";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import jsonData from "../datas/logements.json";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home data={jsonData} />} />
        <Route path="/card/:cardid" element={<CardID data={jsonData} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
