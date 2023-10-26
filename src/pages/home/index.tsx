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
import { ContactTouch } from "@/components/contact";
import Reports from "@/components/reports";

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
      title: "All our scaffolders are trained and certified",
      // { title: "2)Satisfaction guaranteed on every project" },
      // { title: "3)Residential and Commercial services" },
      // { title: " 4) 15 Years of Combined Experience" },
      // { title: " 5) All types of extensions" },
      class: "one",
    },
    {
      id: 1,
      title: "Satisfaction guaranteed on every project",
      // { title: "2)Satisfaction guaranteed on every project" },
      // { title: "3)Residential and Commercial services" },
      // { title: " 4) 15 Years of Combined Experience" },
      // { title: " 5) All types of extensions" },
      class: "two",
    },
    {
      id: 3,
      title: "Residential and Commercial services",
      class: "three",
    },
    {
      id: 4,
      title: "15 Years of Combined Experience",
      class: "four",
    },
    {
      id: 4,
      title: "All types of extensions",
      class: "five",
    },
  ];

  return (
    <Page title="Home">
      <Hero />
      <AboutUs />
      <Features
        data={features}
        title={
          "WE HAVE A SPOTLESS TRACK-RECORD WITH CUSTOMERS AND CLIENTS ACROSS A RANGE OF INDUSTRY VERTICALS/SERVICES IN MULTIPLE LOCATIONS."
        }
      />
      <h1 className="trustet-title  title-lg container container-sm features-container">
        Trusted companies
      </h1>

      <Contract color="white" sliders={contractList} />
      <CaseStudySlider />
      <Info />
      <Counter
        // title="OUR WORKS"
        heading={`Explore Our Remarkable Achievements   in <br />  the   Scaffolding Industry.`}
        trackColor="#314d79"
        color="#ff5e14"
        textColor="#ff5e14"
        bgColor="#fff"
        detailsColor="#00235a"
        titleColor="#f4f4f4"
      />
      <h1 className="trustet-title  title-lg container container-sm features-container">
        Reports
      </h1>
      <Reports />
      <News />
      <ContactTouch />
    </Page>
  );
};

export default Home;
