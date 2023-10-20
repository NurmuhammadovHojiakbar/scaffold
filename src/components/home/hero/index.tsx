import { Swiper, SwiperSlide } from "swiper/react";
import HeroItem from "../hero-item";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  // const heros = [
  //   {
  //     id: 1,
  //     title: "We Create",
  //     heading: "Space for life",
  //     about: (
  //       <>
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
  //         <br />
  //         mod tempor incididunt ut labore et dolore magna aliqua.
  //       </>
  //     ),
  //     class: "",
  //   },
  //   {
  //     id: 2,
  //     title: "We Create",
  //     heading: "Space for life",
  //     about: (
  //       <>
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
  //         <br />
  //         mod tempor incididunt ut labore et dolore magna aliqua.
  //       </>
  //     ),
  //     class: "blue",
  //   },
  // ];
  // const [data, setData] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://admin.betascaffolding.com/api/blog/banner/`)
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  type PropType = {
    title: string;
    heading: string;
    about: string | React.ReactNode;
    class: string;
    id: number;
    image: string;
  };
  return (
    <section data-aos="fade-down" className="site-hero">
      <Swiper
        navigation={false}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        effect="fade"
        modules={[Navigation, Autoplay, EffectFade]}
      >
        {data?.map((hero: PropType) => (
          <SwiperSlide key={hero.id}>
            <HeroItem {...hero} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
