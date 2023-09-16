import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "@/assets/images/logo.png";
import { HumOpenIcon } from "@/components/icons";
import MobileNavigation from "../mobile-navigation";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navList = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/services",
      name: "Services",
    },
    {
      id: 4,
      path: "/case-study",
      name: "Case Study",
    },
    {
      id: 5,
      path: "/blog",
      name: "Blog",
    },
  ];

  return (
    <nav className="site-header__nav">
      <div className="container site-nav">
        <Link className="site-nav__logo" to="/">
          <img
            className="site-nav__logo-img"
            src={LogoImg}
            alt="Logo"
            width={252}
            height={60}
          />
        </Link>

        <ul className="site-nav__list">
          {navList.map((nav) => (
            <li className="site-nav__item" key={nav.id}>
              <Link
                className={`site-nav__link ${
                  pathname === nav.path ? "active" : ""
                }`}
                to={nav.path}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="site-nav__contact-link" to="/contact">
          Get A Quote
        </Link>
        <button className="site-nav__hum" onClick={() => setOpen(true)}>
          <HumOpenIcon className="site-nav__hum-icon" />
        </button>
      </div>
      {open && (
        <MobileNavigation navList={navList} open={open} setOpen={setOpen} />
      )}
    </nav>
  );
};

export default Navigation;
