import Card from "../components/Card";
import Banner from "../components/Banner";
import Banner_Home from "../assets/banner_Home.jpg";

function Home({ data }) {
  return (
    <div>
      <Banner imagesrc={Banner_Home} text="Chez vous, partout et ailleurs" />
      <div className="home">
        {data.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
