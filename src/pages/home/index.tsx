import { useMemo } from "react";
import Page from "@/layout/page";
import Features from "@/components/features";
import Contract from "@/components/contracts";
import Info from "@/components/info";
import LogotypeImg from "@/assets/images/logotype.png";
import DuragasImg from "@/assets/images/duragas.png";
import MaxtonImg from "@/assets/images/maxton.png";
import TerrenoImg from "@/assets/images/terreno.png";
import TurbologoImg from "@/assets/images/turbologo.png";
import HeartCareImg from "@/assets/images/heartcare.png";
import SafeImg from "@/assets/images/safeguard.png";
import Counter from "@/components/counter";
import { AboutUs, Hero, News } from "@/components/home";
import { CaseStudySlider } from "@/components/case-study";

const Home = () => {
  const contractList = useMemo(
    () => [
      {
        id: 1,
        img: LogotypeImg,
      },
      {
        id: 2,
        img: DuragasImg,
      },
      {
        id: 3,
        img: MaxtonImg,
      },
      {
        id: 4,
        img: TerrenoImg,
      },
      {
        id: 5,
        img: TurbologoImg,
      },
      {
        id: 6,
        img: HeartCareImg,
      },
      {
        id: 7,
        img: SafeImg,
      },
    ],
    []
  );
  const features = [
    {
      id: 1,
      title:
        "We have a spotless track-record with customers and clients across a range of industry Verticals/Services in multiple locations.",
      text: `1)All our scaffolders are trained and certified
      2)Satisfaction guaranteed on every project
      3)Residential and Commercial services
      4) 15 Years of Combined Experience
      5) All types of extensions`,
      class: "beam",
    },
    {
      id: 2,
      title: "High-Quality Scaffolding",
      text: "Quality is the cornerstone of our scaffolding services. We use only the finest materials that adhere to the industry's highest standards. Our scaffolding structures are not only sturdy and secure but also designed to meet the specific needs of your project. Whether it's for new construction, maintenance, or any other application, our scaffolding is engineered for excellence and safety.",
      class: "hammer",
    },
  ];

  return (
    <Page title="Home">
      <Hero />
      <AboutUs />
      <Features
        data={features}
        title={
          "Trusted Scaffolding Services in London Range of Projects, Certified Scaffolders, 10 Years Experience"
        }
      />
      <Contract color="white" sliders={contractList} />
      <CaseStudySlider />
      <Info />
      <Counter
        title="OUR WORKS"
        heading={`Browse Our Recent Proudly  <br /> Completed Projects.`}
        trackColor="#314d79"
        color="#ff5e14"
        textColor="#ff5e14"
        bgColor="#fff"
        detailsColor="#00235a"
        titleColor="#f4f4f4"
      />
      <News />
    </Page>
  );
};

export default Home;
