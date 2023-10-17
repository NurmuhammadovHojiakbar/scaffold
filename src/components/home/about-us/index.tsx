import { Experience } from "@/components/about";
import HelmetImg from "@/assets/images/helmet.png";
import SawMachineImg from "@/assets/images/cutting-machine.png";
import ToolsImg from "@/assets/images/repair-tools.png";
import DrillImg from "@/assets/images/driller.png";
import { useState } from "react";

const AboutUs = () => {
  const needs = [
    {
      id: 0,
      img: HelmetImg,
      text: "Roofing",
      title:
        "We provide reliable and stable roofing Scaffold for all your roof repairs for any type extensive range of requirements in and around the city of London",
    },
    {
      id: 1,
      img: SawMachineImg,
      text: "Chimney Access",
      title:
        "Need to repaint industrial scaffolding or for scaffold hire repair a chimney? Contact us for any front access scaffolding your requirements. We have everything for the ultimate front access scaffolding business experience.",
    },
    {
      id: 2,
      img: ToolsImg,
      text: "Mobile towers",
      title:
        "Mobile towers can serve as the ideal scaffolding solution for your project, offering self-supporting, freestanding scaffold units.",
    },
    {
      id: 3,
      img: DrillImg,
      text: "New build scaffolding",
      title:
        "For new construction projects, whether it's a residential or commercial site, your go-to choice for scaffolding solutions is Betascaffolding Contractors",
    },
    {
      id: 4,
      img: DrillImg,
      text: "Temporary Roofing",
      title:
        "Place your trust in the time-honored legacy of London scaffolding, distinguished by its unwavering commitment to impeccable work processes, stringent quality control, top-tier services and equipment, rigorous health and safety standards, comprehensive training, and cutting-edge technology.",
    },
  ];
  const [expandedItem, setExpandedItem] = useState(null);

  const handleShowMore = (itemId) => {
    setExpandedItem(itemId === expandedItem ? null : itemId);
  };
  return (
    <section className="about-us">
      <div
        style={{
          paddingTop: "50px",
        }}
        data-aos="fade-left"
        className="about-us__wrapper"
      >
        <Experience />
      </div>
      <div className="container container-sm about-us__container">
        <header data-aos="fade-left" className="about-us__header">
          <div className="about-us__header-wrapper">
            {/* <h3 className="title-sm about-us__header-title">About Us</h3> */}
            <h2 className="title-lg about-us__header-heading">
              Welcome to Betascaffolding
              <br /> Your Trusted Partner for Scaffolding Solutions
            </h2>
          </div>
          <p className="about-us__header-text">
            Our team in London is here to help with any scaffolding queries you
            may have. We offer a 24 hour emergency call out service so you can
            call us anytime.
          </p>
        </header>
        <ul data-aos="zoom-in" className="about-us__list">
          {needs.map((el) => (
            <li className="about-us__item" key={el.id}>
              <h2 className="about-us__item-heading">0{el.id}</h2>
              <img
                className="about-us__item-img"
                src={el.img}
                alt="Tools"
                width={90}
                height={90}
              />
              <h3 className="about-us__item-title">{el.text}</h3>
              <p className="services-cards-item-text">
                {expandedItem === el.id || el.title.length <= 100
                  ? el.title
                  : `${el.title.slice(0, 100)}`}
                {el.title.length > 150 && (
                  <button
                    className="service-cards-show-more-button"
                    onClick={() => handleShowMore(el.id)}
                  >
                    {expandedItem === el.id ? " " : "..."}
                  </button>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
