import { Link } from "react-router-dom";

function Home({ data }) {
  return (
    <div className="home">
      {data.map((card) => (
        <div key={card.id} className="card">
          <Link to={`/card/${card.id}`} key={card.id} className="cardid">
            <img src={card.cover} alt={card.title} />
            <h3 className="card-title">{card.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
