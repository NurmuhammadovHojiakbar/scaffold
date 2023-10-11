import { Swiper, SwiperSlide } from "swiper/react";
import HeroItem from "../hero-item";
import { Navigation } from "swiper/modules";

const Hero = () => {
  const heros = [
    {
      id: 1,
      title: "We Create",
      heading: "Space for life",
      about: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
          <br />
          mod tempor incididunt ut labore et dolore magna aliqua.
        </>
      ),
      class: "",
    },
    {
      id: 2,
      title: "We Create",
      heading: "Space for life",
      about: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius
          <br />
          mod tempor incididunt ut labore et dolore magna aliqua.
        </>
      ),
      class: "blue",
    },
  ];
  return (
    <section className="site-hero">
      <Swiper navigation={true} modules={[Navigation]}>
        {heros.map((hero) => (
          <SwiperSlide key={hero.id}>
            <HeroItem {...hero} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
