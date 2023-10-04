import React, { useState } from "react";

//Composant slider (carrousel)
function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  //Utilisation d'un modulo pour faire la rotation des images (max+1=min/min-1=max)
  const changeImage = (increment) => {
    setCurrentIndex(
      (index) => (index + increment + images.length) % images.length
    );
  };

  return (
    <div className="image-slider">
      <div className="slider-image-container">
        <img src={images[currentIndex]} alt={`${currentIndex + 1}`} />
        <span className="slider-number">
          {currentIndex + 1}/{images.length}
        </span>
        <i className="fa fa-angle-left" onClick={() => changeImage(-1)}></i>
        <i className="fa fa-angle-right" onClick={() => changeImage(1)}></i>
      </div>
    </div>
  );
}

export default Slider;
