import { Routes, Route } from "react-router-dom";
import "../css/app.css";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Error from "../pages/Error";
import About from "../pages/About";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import jsonData from "../datas/logements.json";

// Composant principal App
function App() {
  return (
    // Définition de l'affichage suivant la route (url)
    <div>
      {/* Affichage du composant barre de navigation (header) */}
      <NavBar />

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Home data={jsonData} />} />

        {/* On met en paramètre de l'url l'ID de la carte */}
        <Route path="/card/:productid" element={<Product data={jsonData} />} />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Affichage du composant footer */}
      <Footer />
    </div>
  );
}

export default App;
