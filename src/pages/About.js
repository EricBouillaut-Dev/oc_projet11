import Banner from "../components/Banner";
import Banner_About from "../assets/banner_About.jpg";

function About() {
  return (
    <div>
      <Banner imagesrc={Banner_About} text="" />
      <div className="about">{/* {} */}</div>
    </div>
  );
}

export default About;
