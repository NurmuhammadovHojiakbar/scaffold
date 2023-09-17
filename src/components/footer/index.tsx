import FooterCopyright from "./footer-copyright";
import FooterTop from "./footer-top";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <FooterTop />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
