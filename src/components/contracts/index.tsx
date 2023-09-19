import { Swiper, SwiperSlide } from "swiper/react";
import "./contracts.scss";
import useWindowWidth from "@/hooks/use-window-width";

type PropType = {
  color?: string;
  sliders: { id: number; img: string }[];
};

const Contract = ({ color = "", sliders = [] }: PropType) => {
  const size = useWindowWidth();

  const count =
    size > 1200 ? 5 : size > 1000 ? 4 : size > 800 ? 3 : size > 500 ? 2 : 1;

  return (
    <div className={`contract ${color}`}>
      <div className="container container-sm contract-container">
        <Swiper spaceBetween={40} slidesPerView={count}>
          {sliders.map((img) => (
            <SwiperSlide>
              <div className="img-container">
                <img src={img.img} alt="Contracts" key={img.id} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Contract;
