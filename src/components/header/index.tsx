import HeaderInfo from "./header-info";
import Navigation from "./navigation";
import "./header.scss";

const Header = () => {
  return (
    <header className="site-header">
      <HeaderInfo />
      <Navigation />
    </header>
  );
};

export default Header;
