import "./Hero.css";
import heroImage from "../../images/Group-81.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>
          Amazing <br /> Experiences from Our Wonderful Customers
        </h1>
        <p>
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </p>
      </div>
      <div className="hero__img">
        <img src={heroImage} alt="hero caption" />
      </div>
    </div>
  );
}

export default Hero;
