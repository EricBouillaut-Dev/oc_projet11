function Banner({ imagesrc, text }) {
  return (
    <div className="banner">
      <img src={imagesrc} alt="Logo" />
      <h1>{text}</h1>
    </div>
  );
}

export default Banner;
