import Container from "@/layout/container";
import { BlogContainer } from "@/components/blog";

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
      <BlogContainer />
    </Container>
  );
};

export default Blog;
