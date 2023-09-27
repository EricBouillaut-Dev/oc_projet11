import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/Slider";

function Product({ data }) {
  const { productid } = useParams();
  const card = data.find((item) => item.id === productid);

  if (!card) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="card-id">
      <Slider images={card.pictures} />
      <h1>{card.title}</h1>
      <p>Rating: {card.rating}</p>
      <p>Description: {card.description}</p>
    </div>
  );
}

export default Product;
