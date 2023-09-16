import { Link } from "react-router-dom";
import { HumCloseIcon, MailIcon, MapIcon, PhoneIcon } from "@/components/icons";
import LogoImg from "@/assets/images/logo.png";

type PropType = {
  navList: {
    id: number;
    path: string;
    name: string;
  }[];
  open: boolean;
  setOpen: (el: boolean) => void;
};

const MobileNavigation = ({ navList, setOpen, open }: PropType) => {
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
            <span>12/A, Mirnada City Tower, NYC</span>
          </p>
          <Link
            className="mobile-nav__info-link mobile-nav__info-email"
            to="mailto:info@webmail.com"
          >
            <MailIcon className="mobile-nav__info-icon" />
            <span>info@webmail.com</span>
          </Link>
          <Link
            className="mobile-nav__info-link mobile-nav__info-tel"
            to="tel:+876864764764"
          >
            <PhoneIcon className="mobile-nav__info-icon" />
            <span>+876 864 764 764</span>
          </Link>
        </div>

        <Link className="mobile-nav__contact-link" to="/contact">
          Get A Quote
        </Link>
      </nav>
    </div>
  );
};

export default MobileNavigation;
