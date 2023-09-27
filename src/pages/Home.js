import Card from "../components/Card";

function Home({ data }) {
  return (
    <div className="home">
      {data.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
  );
}

export default Home;
