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
      <Features />
      <Contract color="white" sliders={contractList} />
      <Info />
    </Page>
  );
};

export default Home;
