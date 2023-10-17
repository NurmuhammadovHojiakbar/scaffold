import { Link } from "react-router-dom";
import "./features.scss";

type PropType = {
  title: string;
  data: {
    id: number;
    title: string;
    text: string;
    class: string;
  }[];
};

const Features = ({ title, data }: PropType) => {
  return (
    <section className="features">
      <h2 className="features-title">Features</h2>
      <div className="container container-sm features-container">
        <div className="features-wrapper">
          <h3 className="title-sm features-wrapper__title">Core Features</h3>
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="title-lg features-wrapper__heading"
          >
            {title ? title : null}
          </h2>

          <ul
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="features-list"
          >
            {data.map((fet) => (
              <li className="features-item" key={fet.id}>
                <div className={`features-item__img ${fet.class}`}></div>
                <div className="features-item__detail">
                  <h3 className="features-item__title">{fet.title}</h3>
                  <p className="features-item__text">
                    {Array.isArray(fet.text) ? (
                      <ul>
                        {fet.text.map((item, index) => (
                          <li key={index}>{item.title}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{fet.text}</p>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link className="btn" to="/about">
            Our Cases
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
