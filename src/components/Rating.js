import generateUniqueKey from "../utils";

//Composant rating
const Rating = ({ rating }) => {
  const starIcon = <i className="fa fa-star"></i>;

  //On définit un tableau de 5 étoiles
  //et on ajoute la classe "active" sur le nombre d'étoile correspondant au rating
  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <span
        key={generateUniqueKey()}
        className={`star ${index < rating ? "active" : ""}`}
      >
        {starIcon}
      </span>
    ));

  return <div className="rating">{stars}</div>;
};

export default Rating;
