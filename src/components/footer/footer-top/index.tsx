import { useMemo } from "react";
import { Link } from "react-router-dom";
import OpeningImg from "@/assets/images/opening-hours.png";
import FootprintsImg from "@/assets/images/pngwing.com.png";
import BlogImg from "@/assets/images/blog.jpg";
import { CalendarIcon } from "@/components/icons";

const FooterTop = () => {
  const services = useMemo(
    () => [
      {
        id: 1,
        name: "About",
      },
      {
        id: 2,
        name: "SERVICES",
      },
      {
        id: 3,
        name: "SERVICE STUDY",
      },
      {
        id: 4,
        name: "Blog",
      },
      // {
      //   id: 5,
      //   name: "Space Program XYZ",
      // },
      // {
      //   id: 6,
      //   name: "ReConstructions",
      // },
    ],
    []
  );
  const blog = useMemo(
    () => [
      {
        id: 1,
        image: BlogImg,
        title: "WHAT TO DO IF PEOPLE HATE",
        date: "AUGUST 26, 2020",
      },
      {
        id: 2,
        image: BlogImg,
        title: "HOW TO CREATE CUSTOMER-CENTRIC LANDING PAGES",
        date: "AUGUST 26, 2020",
      },
      {
        id: 3,
        image: BlogImg,
        title: "BRINGING A BETTER DESIGN PROCESS TO",
        date: "AUGUST 26, 2020",
      },
    ],
    []
  );
  return (
    <section className="footer-top">
      <div className="container footer-top__container">
        <div className="footer-top__container-child footer-top__info">
          <h2 className="footer-top__title footer-top__info-title">About Us</h2>
          <p className="footer-top__context footer-top__info-about">
            At Betascaffolding, we are London's top-rated scaffolders, dedicated
            to providing high-quality scaffolding and exceptional services. With
            a wealth of experience, our expert team delivers tailored, safe, and
            timely scaffolding solutions for your diverse projects. Choose
            Betascaffolding for excellence from start to finish. Your project
            deserves the best.
          </p>
          <div className="footer-top__opening">
            <img
              className="footer-top__opening-img"
              src={OpeningImg}
              alt="Opening Hours"
              width={50}
              height={50}
            />
            <div className="footer-top__opening-hours">
              <h3 className="footer-top__title footer-top__opening-title">
                Opening Hours
              </h3>
              <p className="footer-top__context footer-top__opening-time">
                Mon - Sat 8:00 - 17:30,
              </p>
              <p className="footer-top__context footer-top__opening-time">
                Sunday - CLOSED
              </p>
            </div>
          </div>
        </div>
        <div className="footer-top__container-child footer-top__services">
          <h2 className="footer-top__title footer-top__services-title">
            Our Menu
          </h2>
          <ul className="footer-top__services-list">
            {services.map((serv) => (
              <li className="footer-top__services-item" key={serv.id}>
                <Link
                  className="footer-top__context footer-top__services-link"
                  to="/services"
                >
                  {serv.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-top__container-child footer-top__blog">
          <h2 className="footer-top__title footer-top__blog-title">
            NEWS & UPDATES
          </h2>
          <ul className="footer-top__blog-list">
            {blog.map((b) => (
              <li className="footer-top__blog-item" key={b.id}>
                <Link className="footer-top__blog-link" to="/blog">
                  <img
                    className="footer-top__blog-img"
                    src={BlogImg}
                    alt="Blog"
                    width={60}
                    height={60}
                  />

                  <div className="footer-top__blog-detail">
                    <time className="footer-top__blog-time">
                      <CalendarIcon className="footer-top__blog-icon" />
                      {b.date}
                    </time>
                    <h3 className="footer-top__title footer-top__blog-detail-title">
                      {b.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-top__container-child footer-top__footprints">
          <h2 className="footer-top__title footer-top__footprints-title">
            Our Footprints
          </h2>
          <img
            className="footer-top__footprints-img"
            src={FootprintsImg}
            alt="Footprints"
            width={270}
            height={160}
          />
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
