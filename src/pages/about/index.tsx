import Info from "@/components/info";
import Container from "@/layout/container";

const About = () => {
  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
  ];
  return (
    <Container title="About" linksList={links} headerTitle="About">
      <Info itemClass="white" wrapperClass="reverse" />
    </Container>
  );
};

export default About;
