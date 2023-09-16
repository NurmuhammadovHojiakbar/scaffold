import { useMemo } from "react";
import HeaderInfo from "./header-info";
import Navigation from "./navigation";
import "./header.scss";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons";

const Header = () => {
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
    <header className="site-header">
      <HeaderInfo socialList={socialList} />
      <Navigation socialList={socialList} />
    </header>
  );
};

export default Header;
