import Container from "@/layout/container";
import { BlogContainer, BlogPage } from "@/components/blog";
import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "@/store/api/blogs";

const BlogContent = () => {
  const { id } = useParams();
  const { data: blog, isError } = useGetBlogByIdQuery(Number(id));
  const links = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      path: "/blog",
      title: "Blog",
    },
    {
      id: 2,
      title: "Blog",
    },
  ];
  console.log(isError);
  return (
    <Container title="Blog" linksList={links} headerTitle="Blog">
      <BlogContainer>{blog && <BlogPage blog={blog} />}</BlogContainer>
    </Container>
  );
};

export default BlogContent;
