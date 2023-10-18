import { Link } from "react-router-dom";
import { HumCloseIcon, MailIcon, MapIcon, PhoneIcon } from "@/components/icons";
import LogoImg from "@/assets/images/001.png";

type PropType = {
  navList: {
    id: number;
    path: string;
    name: string;
  }[];
  open: boolean;
  setOpen: (el: boolean) => void;
  socialList: {
    id: number;
    path: string;
    icon: JSX.Element;
  }[];
};

const MobileNavigation = ({ socialList, navList, setOpen, open }: PropType) => {
  return (
    <div className={`mobile-wrapper ${open ? "active" : ""}`}>
      <nav className={`mobile-nav ${open ? "active" : ""}`}>
        <button className="mobile-nav__hum" onClick={() => setOpen(false)}>
          <HumCloseIcon className="mobile-nav__hum-icon" />
        </button>
        <Link className="mobile-nav__logo" to="/">
          <img
            src={LogoImg}
            alt="Logo"
            className="mobile-nav__logo-img"
            width={190}
            height={45}
          />
        </Link>
        <ul className="mobile-nav__list">
          {navList.map((nav) => (
            <li className="mobile-nav__item" key={nav.id}>
              <Link className="mobile-nav__link" to={nav.path}>
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__info">
          <h2 className="mobile-nav__info-title">Contact Info</h2>
          <p className="mobile-nav__info-link mobile-nav__info-location">
            <MapIcon className="mobile-nav__info-icon" />
            <span>86-90 Paul Street, London, United Kingdom, EC2A 4NE</span>
          </p>
          <Link
            className="mobile-nav__info-link mobile-nav__info-email"
            to="mailto:betascaffolding@outlook.com"
          >
            <MailIcon className="mobile-nav__info-icon" />
            <span>betascaffolding@outlook.com</span>
          </Link>
          <Link
            className="mobile-nav__info-link mobile-nav__info-tel"
            to="tel:+876864764764"
          >
            <PhoneIcon className="mobile-nav__info-icon" />
            <span>+44 7436 659526</span>
          </Link>
        </div>
        <Link className="mobile-nav__contact-link" to="/contact">
          Get A Quote
        </Link>

        <ul className="mobile-nav__socials-list">
          {socialList.map((social) => (
            <li className="mobile-nav__socials-item" key={social.id}>
              <Link className="mobile-nav__socials-link" to={social.path}>
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
