/* eslint-disable jsx-a11y/alt-text */
import heroImage from "../images/lo.svg";
const Hero = () => {
  return (
    <div className="column is-half hero">
      <div className="hero-body">
        <h1 className="title mb-6 " width="526" height="104">
          You have a vision ! <br />
          we bring it to life
        </h1>
        <p className="subtitle">
          We are multi-disciplinary digital agency, specialised in creating
          experiences and engagements in various channels with a special focus
          on the healthcare, education and travel sectors.
        </p>
      </div>
      <footer className="footer">
        <img src={heroImage} />
      </footer>
    </div>
  );
};
export default Hero;
