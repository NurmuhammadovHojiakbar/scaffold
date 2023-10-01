import { useGetBlogsQuery } from "@/store/api/blogs";
import { queryMaker } from "@/utils/query";
import { useLocation } from "react-router-dom";
import BlogItem from "../blog-item";

const BlogList = () => {
  const { search: query } = useLocation();
  const queryObj = queryMaker(query);
  const { page, search, tag, category } = queryObj;
  const { data: blogs } = useGetBlogsQuery({ page, search, tag, category });

  return (
    <div className="blog-list">
      <ul className="blog-list__list">
        {blogs?.results.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
