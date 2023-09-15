import { Link } from "react-router-dom";

const HeaderInfo = () => {
  return (
    <div className="site-header__info">
      <div className="container header-info">
        <div className="header-info__contact">
          <Link
            className="header-info__contact-link"
            to="mailto:info@webmail.com"
          >
            <span>info@webmail.com</span>
          </Link>
          <Link className="header-info__contact-link" to="tel:+876864764764">
            <span>+876 864 764 764</span>
          </Link>
        </div>
        <div className="header-info__right">
          <div className="header-info__socials">@</div>
          <div className="header-info__lang">
            <span>En</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
