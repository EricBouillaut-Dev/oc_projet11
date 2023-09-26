import { useParams, Navigate } from "react-router-dom";

function CardID({ data }) {
  // Récupérer l'ID de la carte à partir des paramètres de route
  const { cardid } = useParams();

  // Trouver la carte correspondante dans les données
  const card = data.find((item) => item.id === cardid);

  if (!card) {
    // Gérer le cas où la carte n'est pas trouvée
    return <Navigate to="/error" />;
  }

  return (
    <div className="cardid">
      <h1>{card.title}</h1>
      <p>Rating: {card.rating}</p>
      <p>Description: {card.description}</p>
    </div>
  );
}

export default CardID;
