import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import InfoCard from "../components/InfoCard";
import generateUniqueKey from "../utils";

function Product({ data }) {
  const { productid } = useParams();
  const card = data.find((item) => item.id === productid);

  if (!card) {
    return <Navigate to="/error" />;
  }

  const equipmentList = card.equipments.map((equipment) => (
    <li key={generateUniqueKey()}>{equipment}</li>
  ));

  return (
    <div className="product">
      <Slider images={card.pictures} />
      <InfoCard card={card} />
      <div className="product-collapse">
        <Collapse
          key={generateUniqueKey()}
          title="Descripton"
          description={card.description}
        />
        <Collapse
          key={generateUniqueKey()}
          title="Équipements"
          description={<ul>{equipmentList}</ul>}
        />
      </div>
    </div>
  );
}

export default Product;
