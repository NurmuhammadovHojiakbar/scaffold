import { Link } from "react-router-dom";
import { ArrowToBottomIcon, MailIcon, PhoneIcon } from "../../icons";

type PropType = {
  socialList: {
    id: number;
    path: string;
    icon: JSX.Element;
  }[];
};

const HeaderInfo = ({ socialList }: PropType) => {
  return (
    <div className="site-header__info">
      <div className="container header-info">
        <div className="header-info__contact">
          <Link
            className="header-info__contact-link header-info__contact-email"
            to="mailto:betascaffolding@outlook.com"
          >
            <MailIcon className="header-info__contact-icon" />
            <span>betascaffolding@outlook.com</span>
          </Link>
          <Link
            className="header-info__contact-link header-info__contact-tel"
            to="tel:+44 7436 659526"
          >
            <PhoneIcon className="header-info__contact-icon" />
            <span>+44 7436 659526</span>
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
