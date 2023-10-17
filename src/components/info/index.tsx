import BuildingImg from "@/assets/images/building.png";
import BuildingWhiteImg from "@/assets/images/scaffolding.png";
import PainterImg from "@/assets/images/stairs.png";
import { Link } from "react-router-dom";
import "./info.scss";

type PropTypes = {
  wrapperClass?: string;
  itemClass?: string;
};

const Info = ({ itemClass, wrapperClass }: PropTypes) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className={`info ${wrapperClass ? wrapperClass : ""}`}
    >
      <div className="info-img"></div>
      <div className="info-wrapper">
        <div className={`info-item ${itemClass ? itemClass : ""}`}>
          <div className="info-item__wrapper">
            <img
              className="info-item__img"
              src={itemClass === "white" ? BuildingWhiteImg : BuildingImg}
              alt="building"
              width={99}
              height={99}
            />
            <h2 className="info-item__title">Betascaffolding Structure </h2>
            <p className="info-item__text">
              We craft our scaffolding structures using materials that meet the
              most stringent industry standards for top-notch quality. Every
              scaffolding structure we create undergoes regular, meticulous
              inspections to ensure it remains free from defects and maintains
              its unyielding strength. When it comes to scaffolding in London
              takes the crown as the unrivaled leader.
            </p>
            <Link className="info-item__link" to="/services">
              Learn more
            </Link>
          </div>
        </div>
        <div className="info-item orange">
          <div className="info-item__wrapper">
            <img
              className="info-item__img"
              src={PainterImg}
              alt="building"
              width={99}
              height={99}
            />
            <h2 className="info-item__title">Scaffolding Design</h2>
            <p className="info-item__text bottom">
              We take boundless pride in each and every project we embark upon
              for our esteemed clients. Our commitment is unwavering, ensuring
              that each job and project is executed with unparalleled perfection
              and the highest standards of quality. When we take on a contract,
              our first step is to conduct an onsite visit to meticulously
              prepare a tailor-made scaffolding design, setting the stage for
              excellence.
            </p>
            <Link className="info-item__link" to="/services">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
