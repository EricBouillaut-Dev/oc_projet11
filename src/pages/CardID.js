import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

function CardID({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { cardid } = useParams();
  const card = data.find((item) => item.id === cardid);

  if (!card) {
    return <Navigate to="/error" />;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === card.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? card.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="card-id">
      <div className="image-carousel">
        {/* Image du carrousel avec des chevrons incrustés */}
        <div className="carousel-image-container">
          <img
            src={card.pictures[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
          {/* Numéro de l'image actuelle */}
          <span className="carousel-number">
            {currentImageIndex + 1}/{card.pictures.length}
          </span>
          {/* Chevrons incrustés pour la navigation */}
          <div className="carousel-chevron left" onClick={prevImage}>
            &#8249;
          </div>
          <div className="carousel-chevron right" onClick={nextImage}>
            &#8250;
          </div>
        </div>
      </div>
      <h1>{card.title}</h1>
      <p>Rating: {card.rating}</p>
      <p>Description: {card.description}</p>
    </div>
  );
}

export default CardID;
