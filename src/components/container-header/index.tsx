import { Link } from "react-router-dom";
import "./container.scss";

type PropType = {
  title: string;
  links: {
    id: number;
    path?: string;
    title: string;
  }[];
};

const ContainerHeader = ({ title, links }: PropType) => {
  return (
    <header className="container-header">
      <div className="container container-header__container">
        <h2 className="container-header__title">{title}</h2>
        <div className="container-header__links">
          <ul className="container-header__list">
            {links.map((link) => (
              <li className="container-header__item">
                {link.path ? (
                  <Link className="container-header__link" to={link.path}>
                    {link.title}
                  </Link>
                ) : (
                  <span className="container-header__text">{link.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default ContainerHeader;
