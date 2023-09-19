import Process1 from "@/assets/images/tools.png";
import Process2 from "@/assets/images/painter-blue.png";
import Process3 from "@/assets/images/building-white.png";

const AboutServices = () => {
  const services = [
    {
      id: 1,
      img: Process1,
      title: "PROCESS ONE: DEFINE",
      text: "Lorem ipsum dolor sit amet, conse ctetur ai dipi sicing elit, sed do eiu smod tempor inci didunt.",
    },
    {
      id: 2,
      img: Process2,
      title: "PROCESS TWO: ESTIMATE",
      text: "Lorem ipsum dolor sit amet, conse ctetur ai dipi sicing elit, sed do eiu smod tempor inci didunt.",
    },
    {
      id: 3,
      img: Process3,
      title: "PROCESS THREE: SOLUTIONS",
      text: "Lorem ipsum dolor sit amet, conse ctetur ai dipi sicing elit, sed do eiu smod tempor inci didunt.",
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
