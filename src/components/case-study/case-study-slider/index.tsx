import { useGetCasesQuery } from "@/store/api/case-study";
import { Swiper, SwiperSlide } from "swiper/react";
import { CaseStudyItem } from "..";
import useWindowWidth from "@/hooks/use-window-width";
import { Link } from "react-router-dom";

const CaseStudySlider = () => {
  const { data: cases } = useGetCasesQuery(1);
  const width = useWindowWidth();

  return (
    <div className="projects-slider">
      <h2 className="projects-slider__title">Projects</h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container container-sm projects-slider__container"
      >
        {/* <h3 className="title-sm projects-slider__container-title">
          Case Study
        </h3> */}
        <h2
          style={{
            textAlign: "center",
          }}
          className="title-lg projects-slider__container-heading"
        >
          Browse Our Recent Proudly <br /> Completed Projects
        </h2>

        <div className="project-slider__wrapper desctop">
          <Swiper slidesPerView={width > 770 ? 2 : 1} spaceBetween={30}>
            {cases?.results.map((case_study) => (
              <SwiperSlide>
                <CaseStudyItem case_study={case_study} key={case_study.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="project-slider__wrapper mobile">
          {cases?.results.slice(0, 3).map((case_study) => (
            <CaseStudyItem case_study={case_study} key={case_study.id} />
          ))}
          <Link
            style={{
              margin: "20px 0",
              display: "flex",
              justifyContent: "center",
            }}
            className="btn"
            to="/case-study"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySlider;
