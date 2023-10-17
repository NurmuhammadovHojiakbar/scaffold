import Contract from "@/components/contracts";
import Features from "@/components/features";
import { useMemo, useState } from "react";
import Container from "@/layout/container";
import Sponsor1 from "@/assets/images/sponsor-1.png";
import Sponsor2 from "@/assets/images/sponsor-2.png";
import Sponsor3 from "@/assets/images/sponsor-3.png";
import Sponsor4 from "@/assets/images/sponsor-4.png";
import Sponsor5 from "@/assets/images/sponsor-5.png";
import Sponsor6 from "@/assets/images/sponsor-6.png";
import Sponsor7 from "@/assets/images/sponsor-7.png";
import { ServicesList } from "@/components/services";
import HelmetImg from "@/assets/images/helmet.png";
import SawMachineImg from "@/assets/images/cutting-machine.png";
import ToolsImg from "@/assets/images/repair-tools.png";
import DrillImg from "@/assets/images/driller.png";
import Counter from "@/components/counter";
import "./services.scss";

const Services = () => {
  const sponsors = useMemo(
    () => [
      {
        id: 1,
        img: Sponsor1,
      },
      {
        id: 2,
        img: Sponsor2,
      },
      {
        id: 3,
        img: Sponsor3,
      },
      {
        id: 4,
        img: Sponsor4,
      },
      {
        id: 5,
        img: Sponsor5,
      },
      {
        id: 6,
        img: Sponsor6,
      },
      {
        id: 7,
        img: Sponsor7,
      },
    ],
    []
  );
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
  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      title: "Services",
    },
  ];
  const features = [
    {
      id: 1,
      title: "Top-Rated Scaffolders",
      text: "Our reputation as London's top-rated scaffolders has been built on a foundation of trust, reliability, and expertise. We understand the unique scaffolding needs of the dynamic and diverse London landscape. With years of experience, our highly skilled team has consistently delivered exceptional scaffolding services to a wide range of clients, from small-scale projects to large commercial developments.",
      class: "beam",
    },
    {
      id: 2,
      title: "High-Quality Scaffolding",
      text: "Quality is the cornerstone of our scaffolding services. We use only the finest materials that adhere to the industry's highest standards. Our scaffolding structures are not only sturdy and secure but also designed to meet the specific needs of your project. Whether it's for new construction, maintenance, or any other application, our scaffolding is engineered for excellence and safety.",
      class: "hammer",
    },
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleShowMore = (itemId: null | number) => {
    setExpandedItem(itemId === expandedItem ? null : itemId);
  };

  return (
    <Container title="Services" headerTitle="">
      <ServicesList />
      {/* <PricePlans /> */}
      <h1
        style={{
          marginTop: "0",
          paddingTop: "0",
          marginBottom: "80px",
        }}
        className="trustet-title title-lg container container-sm features-container"
      >
        Our services
      </h1>
      <div className="container services container-sm about-us__container">
        <ul
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="about-us__list"
        >
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
      <Counter
        trackColor="#314d79"
        color="#ff5e14"
        textColor="#fff"
        bgColor="#00235a"
        detailsColor="#fff"
        titleColor="#0B316C"
      />
      <Features
        title={" Your project deserves nothing less than the very best."}
        data={features}
      />
      <Contract sliders={sponsors} />
    </Container>
  );
};

export default Services;
