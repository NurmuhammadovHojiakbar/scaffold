import { HumCloseIcon } from "@/components/icons";
import { Link } from "react-router-dom";
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
      </nav>
    </div>
  );
};

export default MobileNavigation;
