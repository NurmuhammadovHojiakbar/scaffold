import { Experience } from "@/components/about";
import HelmetImg from "@/assets/images/helmet.png";
import SawMachineImg from "@/assets/images/cutting-machine.png";
import ToolsImg from "@/assets/images/repair-tools.png";
import DrillImg from "@/assets/images/driller.png";

const AboutUs = () => {
  const needs = [
    {
      id: 1,
      img: HelmetImg,
      text: "BUILDING REPAIR & CONSTRUCTION",
    },
    {
      id: 2,
      img: SawMachineImg,
      text: "ANY KIND PROJECT PLANNING",
    },
    {
      id: 3,
      img: ToolsImg,
      text: "HOME, OFFICE INTERIOR DESIGN",
    },
    {
      id: 4,
      img: DrillImg,
      text: "CUSTOM CONTRACT & MANAGEMENT",
    },
  ];

  return (
    <section className="about-us">
      <div className="about-us__wrapper">
        <Experience />
      </div>
      <div className="container container-sm about-us__container">
        <header className="about-us__header">
          <div className="about-us__header-wrapper">
            <h3 className="title-sm about-us__header-title">About Us</h3>
            <h2 className="title-lg about-us__header-heading">
              Depending on <br /> your needs
            </h2>
          </div>
          <p className="about-us__header-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </header>
        <ul className="about-us__list">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
