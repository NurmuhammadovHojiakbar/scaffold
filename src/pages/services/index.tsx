import Contract from "@/components/contracts";
import Features from "@/components/features";
import { useMemo } from "react";
import Container from "@/layout/container";
import Sponsor1 from "@/assets/images/sponsor-1.png";
import Sponsor2 from "@/assets/images/sponsor-2.png";
import Sponsor3 from "@/assets/images/sponsor-3.png";
import Sponsor4 from "@/assets/images/sponsor-4.png";
import Sponsor5 from "@/assets/images/sponsor-5.png";
import Sponsor6 from "@/assets/images/sponsor-6.png";
import Sponsor7 from "@/assets/images/sponsor-7.png";
import { PricePlans } from "@/components/services";
import Counter from "@/components/counter";

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
  return (
    <Container title="Services" linksList={links} headerTitle="Services">
      <PricePlans />
      <Counter
        trackColor="#314d79"
        color="#ff5e14"
        textColor="#fff"
        bgColor="#00235a"
        detailsColor="#fff"
        titleColor="#0B316C"
      />
      <Features />
      <Contract sliders={sponsors} />
    </Container>
  );
};

export default Services;
