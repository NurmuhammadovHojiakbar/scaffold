import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  ArrowToBottomIcon,
} from "../../icons";

const HeaderInfo = () => {
  const socialList = useMemo(
    () => [
      {
        id: 1,
        path: "",
        icon: <TwitterIcon />,
      },
      {
        id: 2,
        path: "",
        icon: <LinkedinIcon />,
      },
      {
        id: 3,
        path: "",
        icon: <YoutubeIcon />,
      },
      {
        id: 4,
        path: "",
        icon: <FacebookIcon />,
      },
      {
        id: 5,
        path: "",
        icon: <InstagramIcon />,
      },
    ],
    []
  );
  return (
    <div className="site-header__info">
      <div className="container header-info">
        <div className="header-info__contact">
          <Link
            className="header-info__contact-link header-info__contact-email"
            to="mailto:info@webmail.com"
          >
            <MailIcon className="header-info__contact-icon" />
            <span>info@webmail.com</span>
          </Link>
          <Link
            className="header-info__contact-link header-info__contact-tel"
            to="tel:+876864764764"
          >
            <PhoneIcon className="header-info__contact-icon" />
            <span>+876 864 764 764</span>
          </Link>
        </div>
        <div className="header-info__right">
          <div className="header-info__socials">
            {socialList.map((el) => (
              <Link
                className="header-info__socials-link"
                to={el.path}
                target="_blank"
                key={el.id}
              >
                {el.icon}
              </Link>
            ))}
          </div>
          <div className="header-info__lang">
            <div className="header-info__lang-current">
              <span className="header-info__lang-text">En</span>
              <ArrowToBottomIcon className="header-info__lang-icon" />
            </div>
            <ul className="header-info__lang-list">
              <li className="header-info__lang-item">EN</li>
              <li className="header-info__lang-item">RU</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
