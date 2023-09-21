import BasicPlanImg from "@/assets/images/price-machine.png";
import EmergencyImg from "@/assets/images/price-emergency.png";
import ConsultancyImg from "@/assets/images/price-consultancy.png";
import { Link } from "react-router-dom";

const PricePlans = () => {
  const prices = [
    {
      id: 1,
      type: "Basic Plan",
      title: "Appointment",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      price: "10",
      img: BasicPlanImg,
      class: "",
    },
    {
      id: 2,
      type: "Emergency",
      title: "Advanced Plan",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      price: "40",
      img: EmergencyImg,
      class: "active",
    },
    {
      id: 3,
      type: "Consultancy",
      title: "Classic Plan",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      price: "90",
      img: ConsultancyImg,
      class: "",
    },
  ];

  return (
    <section className="price-plans">
      <h2 className="price-plans__title">Pricing</h2>
      <div className="container container-sm price-plans__container">
        <h3 className="title-sm price-plans__container-title">Pricing</h3>
        <h2 className="title-lg price-plans__container-heading">
          Pricing & Plans
        </h2>
        <ul className="price-plans__list">
          {prices.map((item) => (
            <li className={`price-plans__item ${item.class}`} key={item.id}>
              <h3 className="title-sm price-plans__item-type">{item.type}</h3>
              <h2 className="price-plans__item-title">{item.title}</h2>
              <p className="price-plans__item-text">{item.text}</p>
              <img
                className="price-plans__item-img"
                src={item.img}
                alt={item.type}
              />
              <p className="price-plans__item-price">
                <span className="price-plans__item-price-symbol">$</span>
                <span className="price-plans__item-price-number">
                  {item.price}k
                </span>
              </p>
              <Link className="price-plans__item-link" to={"/contact"}>
                Purchase Now
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PricePlans;
