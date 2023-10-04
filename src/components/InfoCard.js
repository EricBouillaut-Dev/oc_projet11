import Rating from "./Rating";
import Tag from "../components/Tag";
import generateUniqueKey from "../utils";

//Composant des informations de la carte
function InfoCard({ card }) {
  return (
    <div className="info-card">
      <div className="info-card_left">
        <h2>{card.title}</h2>
        <p>{card.location}</p>
        <div className="tags">
          {/* Affichage des composants tags */}
          {card.tags.map((tag) => (
            <Tag key={generateUniqueKey()} name={tag} />
          ))}
        </div>
      </div>
      <div className="info-card_right">
        <div className="info-card_host">
          <p className="info-card_hostname">{card.host.name}</p>
          <img src={card.host.picture} alt={card.host.name} />
        </div>
        <Rating rating={card.rating} />
      </div>
    </div>
  );
}

export default InfoCard;
