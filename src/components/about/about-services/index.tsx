import Process1 from "@/assets/images/tools.png";
import Process2 from "@/assets/images/painter-blue.png";
import Process3 from "@/assets/images/building-white.png";

const AboutServices = () => {
  const services = [
    {
      id: 1,
      img: Process1,
      title: "Tailored Solutions",
      text: "We recognize that no two projects are the same. Our team works closely with you to develop a scaffolding solution that perfectly fits your unique requirements.",
    },
    {
      id: 2,
      img: Process2,
      title: "Safety First",
      text: "The safety of our clients and our team is our top priority. We adhere to rigorous safety standards and conduct regular inspections to ensure the safety and well-being of everyone involved.",
    },
    {
      id: 3,
      img: Process2,
      title: "Timely Execution",
      text: "We understand that time is of the essence. Our efficiency and punctuality are second to none, ensuring your project stays on schedule",
    },
    {
      id: 4,
      img: Process3,
      title: "Clear Communication",
      text: "Our transparent communication ensures you are always in the loop, from project planning to completion. We keep you informed and engaged throughout the process.",
    },
  ];
  return (
    <section className="about-services">
      <h2 className="about-services__title">Services</h2>
      <div className="container container-sm about-services__container">
        <h3 className="title-sm about-services__container-title">Services</h3>
        <h2 className="title-lg about-services__container-heading">
          What we do
        </h2>
        <div className="about-services__wrapper">
          <ul className="about-services__list">
            {services.map((serv) => (
              <li className="about-services__item">
                <img
                  className="about-services__item-img"
                  src={serv.img}
                  alt="Process"
                  width={70}
                  height={70}
                />
                <h4 className="about-services__item-title">{serv.title}</h4>
                <p className="about-services__item-text">{serv.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
