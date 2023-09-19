import Contract from "@/components/contracts";
import Features from "@/components/features";
import Container from "@/layout/container";

const Services = () => {
  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      title: "Services",
    },
  ];
  return (
    <Container title="Services" linksList={links} headerTitle="Services">
      <Features />
      <Contract />
    </Container>
  );
};

export default Services;
