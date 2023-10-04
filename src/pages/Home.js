import Card from "../components/Card";
import Banner from "../components/Banner";
import Banner_Home from "../assets/banner_Home.jpg";

// Composant de la page d'accueil
function Home({ data }) {
  return (
    <div>
      {/* Affichage du composant bannière */}
      <Banner imagesrc={Banner_Home} text="Chez vous, partout et ailleurs" />

      {/* Affichage des composants cartes */}
      <div className="home">
        {data.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
