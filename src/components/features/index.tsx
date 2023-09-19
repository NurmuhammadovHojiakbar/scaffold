import { Link } from "react-router-dom";
import "./features.scss";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "REAL & PURE STEEL",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      class: "beam",
    },
    {
      id: 2,
      title: "EXPERT WORKER",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      class: "hammer",
    },
  ];
  return (
    <section className="features">
      <h2 className="features-title">Features</h2>
      <div className="container container-sm features-container">
        <div className="features-wrapper">
          <h3 className="title-sm features-wrapper__title">Core Features</h3>
          <h2 className="title-lg features-wrapper__heading">
            BUILD SERVICES FOR DEVELOPERS
          </h2>

          <ul className="features-list">
            {features.map((fet) => (
              <li className="features-item" key={fet.id}>
                <div className={`features-item__img ${fet.class}`}></div>
                <div className="features-item__detail">
                  <h3 className="features-item__title">{fet.title}</h3>
                  <p className="features-item__text">{fet.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link className="btn" to="/about">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
