import generateUniqueKey from "../utils";

const Rating = ({ rating }) => {
  const starIcon = <i className="fa fa-star"></i>;

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
