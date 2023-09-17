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
      About page
    </Container>
  );
};

export default About;
