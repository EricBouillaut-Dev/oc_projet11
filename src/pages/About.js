import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Banner_About from "../assets/banner_About.jpg";
import AboutData from "../datas/AboutData";

function About() {
  return (
    <div>
      <Banner imagesrc={Banner_About} text="" />
      <div className="about">
        {Object.entries(AboutData).map(([key, value]) => (
          <Collapse key={key} title={key} description={value} />
        ))}
      </div>
    </div>
  );
}

export default About;
