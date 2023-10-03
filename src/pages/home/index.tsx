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
import { AboutUs, News } from "@/components/home";
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

  return (
    <Page title="Home">
      <AboutUs />
      <Features />
      <Contract color="white" sliders={contractList} />
      <CaseStudySlider />
      <Info />
      <Counter
        title="Counter"
        heading={`Get Amazing Puried <br /> With Us.`}
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
