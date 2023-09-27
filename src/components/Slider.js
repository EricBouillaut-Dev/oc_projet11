import React, { useState } from "react";

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <div className="slider-image-container">
        <img src={images[currentIndex]} alt={`${currentIndex + 1}`} />
        <span className="slider-number">
          {currentIndex + 1}/{images.length}
        </span>
        <div className="slider-chevron left" onClick={prevImage}>
          &#8249;
        </div>
        <div className="slider-chevron right" onClick={nextImage}>
          &#8250;
        </div>
      </div>
    </div>
  );
}

export default Slider;
