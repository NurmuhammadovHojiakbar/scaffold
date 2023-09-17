import Container from "@/layout/container";

const Contact = () => {
  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      title: "Contact",
    },
  ];
  return (
    <Container title="Contact" linksList={links} headerTitle="Contact">
      Contact page
    </Container>
  );
};

export default Contact;
