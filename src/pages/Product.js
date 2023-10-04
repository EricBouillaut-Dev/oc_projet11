import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import InfoCard from "../components/InfoCard";
import generateUniqueKey from "../utils";

//Composant du produit (détail de la carte)
function Product({ data }) {
  const { productid } = useParams(); //On récupère l'ID de la carte via le paramètre de l'url
  const card = data.find((item) => item.id === productid); //On recherche si l'ID de la carte existe

  //Si l'ID n'existe pas, on est redirigé vers la page d'erreur
  if (!card) {
    return <Navigate to="/error" />;
  }

  //On récupère les équipements de la carte
  const equipmentList = card.equipments.map((equipment) => (
    <li key={generateUniqueKey()}>{equipment}</li>
  ));

  return (
    <div className="product">
      {/* Affichage du composant slider (carousel) */}
      <Slider images={card.pictures} />

      {/* Affichage du composant informations de la cartes */}
      <InfoCard card={card} />

      {/* Affichage du composant collapse */}
      <div className="product-collapse">
        <Collapse
          key={generateUniqueKey()}
          title="Descripton"
          description={card.description}
        />
        <Collapse
          key={generateUniqueKey()}
          title="Équipements"
          description={equipmentList}
        />
      </div>
    </div>
  );
}

export default Product;
