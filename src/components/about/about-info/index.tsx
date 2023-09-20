import AboutImg1 from "@/assets/images/about-07.jpg";
import AboutImg2 from "@/assets/images/about-08.jpg";

const AboutInfo = () => {
  return (
    <section className="about-info">
      <div className="container container-sm about-info__container">
        <div className="about-info__wrapper">
          <img
            className="about-info__wrapper-img"
            src={AboutImg1}
            alt="Worker"
          />
          <img
            className="about-info__wrapper-worker-img"
            src={AboutImg2}
            alt="Worker"
          />
        </div>
        <div className="about-info__details">
          <h3 className="title-sm about-info__details-title">About Us</h3>
          <h2 className="title-lg about-info__details-heading">
            Depending on ours need
          </h2>
          <p className="about-info__details-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="about-info__experience">
            <h2 className="about-info__experience-year">
              25<sub>+</sub>
            </h2>
            <div className="about-info__experience-wrapper">
              <h3 className="about-info__experience-title-sm">Years of</h3>
              <h2 className="about-info__experience-title-lg">Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
