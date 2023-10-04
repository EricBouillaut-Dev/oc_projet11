import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Banner_About from "../assets/banner_About.jpg";
import AboutData from "../datas/AboutData";
import generateUniqueKey from "../utils";

//Composant de la page "A propos"
function About() {
  return (
    <div>
      {/* Affichage du composant bannière */}
      <Banner imagesrc={Banner_About} text="" />

      {/* Affichage des composants collapses */}
      <div className="about">
        {Object.entries(AboutData).map(([key, value]) => (
          <Collapse key={generateUniqueKey()} title={key} description={value} />
        ))}
      </div>
    </div>
  );
}

export default About;
