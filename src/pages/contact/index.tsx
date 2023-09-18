import { ContactInfo, ContactTouch } from "@/components/contact";
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
      <ContactInfo />
      <ContactTouch />
    </Container>
  );
};

export default Contact;
