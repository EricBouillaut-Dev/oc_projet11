import { Link } from "react-router-dom";

//Composant carte
function Card({ cardData }) {
  return (
    <div className="card">
      {/* Lien de la carte */}
      <Link to={`/card/${cardData.id}`}>
        <img src={cardData.cover} alt={cardData.title} />
        <h3>{cardData.title}</h3>
      </Link>
    </div>
  );
}

export default Card;
