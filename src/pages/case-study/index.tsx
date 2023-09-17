import Container from "@/layout/container";

const CaseStudy = () => {
  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      title: "Case Study",
    },
  ];
  return (
    <Container title="Case Study" linksList={links} headerTitle="Case Study">
      Case Study page
    </Container>
  );
};

export default CaseStudy;
