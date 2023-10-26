import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

type PropType = {
  title: string;
  heading: string;
  about: string | React.ReactNode;
  class: string;
  image: string;
  desc: string;
};

const HeroItem = ({
  title,
  about,
  class: heroClass,
  heading,
  image,
  desc,
}: PropType) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`hero ${heroClass}`}
    >
      <div className="container container-sm hero-container">
        <h2 className="hero-title empty">{title}</h2>
        <h2 className="hero-title full">{heading}</h2>
        <h2 className="hero-title empty">{parse(`${desc}`)}</h2>
        <p className="hero-about">{about}</p>
        <div className="hero-buttons">
          <Link className="btn hero-button" to={"/about"}>
            Learn more
          </Link>
          <Link className="hero-button white" to={"/contact"}>
            Get a quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
