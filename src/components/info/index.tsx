import BuildingImg from "@/assets/images/building.png";
import BuildingWhiteImg from "@/assets/images/building-white.png";
import PainterImg from "@/assets/images/painter.png";
import { Link } from "react-router-dom";
import "./info.scss";

type PropTypes = {
  wrapperClass?: string;
  itemClass?: string;
};

const Info = ({ itemClass, wrapperClass }: PropTypes) => {
  return (
    <section className={`info ${wrapperClass ? wrapperClass : ""}`}>
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
            <h2 className="info-item__title">DEMOLISH WITH NEW TECHNOLOGY.</h2>
            <p className="info-item__text">
              Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do
              eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut en
              im ad minim veniam, quis nostrud.
            </p>
            <Link className="info-item__link" to="/services">
              +
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
            <h2 className="info-item__title">DEMOLISH WITH NEW TECHNOLOGY.</h2>
            <p className="info-item__text">
              Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do
              eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut en
              im ad minim veniam, quis nostrud.
            </p>
            <Link className="info-item__link" to="/services">
              +
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
