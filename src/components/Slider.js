import React, { useState } from "react";

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (increment) => {
    setCurrentIndex(
      (index) => (index + increment + images.length) % images.length
    );
  };

  return (
    <div className="image-slider">
      <div className="slider-image-container">
        {images.length > 1 && (
          <>
            <img src={images[currentIndex]} alt={`${currentIndex + 1}`} />
            <span className="slider-number">
              {currentIndex + 1}/{images.length}
            </span>
            <i className="fa fa-angle-left" onClick={() => changeImage(-1)}></i>
            <i className="fa fa-angle-right" onClick={() => changeImage(1)}></i>
          </>
        )}
        {images.length === 1 && <img src={images[0]} alt="1" />}
      </div>
    </div>
  );
}

export default Slider;
