import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
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
      <h2>{card.title}</h2>
      <p className="rating" data-rating={card.rating}></p>
      <p>Location: {card.location}</p>

      <p className="product-host-name">{card.host.name}</p>
      <img
        className="product-host-picture"
        src={card.host.picture}
        alt={card.host.name}
      />

      <div className="tags">
        {card.tags.map((tag) => (
          <Tag key={generateUniqueKey()} name={tag} />
        ))}
      </div>
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
