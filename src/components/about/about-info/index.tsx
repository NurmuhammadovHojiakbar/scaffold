import AboutImg1 from "@/assets/images/top-image.jpeg";
import AboutImg2 from "@/assets/images/about-08.jpg";
import Experience from "../experience";

const AboutInfo = () => {
  return (
    <section className="about-info">
      <div className="container container-sm about-info__container">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="about-info__wrapper"
        >
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
        <div data-aos="fade-left" className="about-info__details">
          {/* <h3 className="title-sm about-info__details-title">About Us</h3> */}
          <h2 className="title-lg about-info__details-heading">
            Betascaffolding London's Premier Scaffolding Partner
          </h2>
          <p className="about-info__details-text">
            At Betascaffolding, we are London's top-rated scaffolders, dedicated
            to providing high-quality scaffolding and exceptional services. With
            a wealth of experience, our expert team delivers tailored, safe, and
            timely scaffolding solutions for your diverse projects. Choose
            Betascaffolding for excellence from start to finish. Your project
            deserves the best.
          </p>
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
