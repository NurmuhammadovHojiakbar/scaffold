import React from "react";
import { Link } from "react-router-dom";

type PropType = {
  title: string;
  heading: string;
  about: string | React.ReactNode;
  class: string;
};

const HeroItem = ({ title, about, class: heroClass, heading }: PropType) => {
  return (
    <div className={`hero ${heroClass}`}>
      <div className="container container-sm hero-container">
        <h2 className="hero-title empty">{title}</h2>
        <h2 className="hero-title full">{heading}</h2>
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
