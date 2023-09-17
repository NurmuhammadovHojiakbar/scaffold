import Container from "@/layout/container";

const Blog = () => {
  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      title: "Blog",
    },
  ];
  return (
    <Container title="Blog" linksList={links} headerTitle="Blog">
      Blog page
    </Container>
  );
};

export default Blog;
