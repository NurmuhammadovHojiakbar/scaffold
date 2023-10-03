import { useGetBlogsQuery } from "@/store/api/blogs";
import { queryMaker, queryStringify } from "@/utils/query";
import { useLocation, useNavigate } from "react-router-dom";
import BlogItem from "../blog-item";
import Pagination from "@/components/pagination";

const BlogList = () => {
  const { search: query } = useLocation();
  const navigate = useNavigate();
  const queryObj = queryMaker(query);
  const { page, search, tag, category } = queryObj;
  const { data: blogs } = useGetBlogsQuery({ page, search, tag, category });

  const pageChangeHandler = (page: number) => {
    navigate(`/blog?${queryStringify(queryObj, { page })}`);
  };

  return (
    <div className="blog-list">
      <ul className="blog-list__list">
        {blogs?.results.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </ul>
      {(blogs?.count || 0) > 10 && (
        <Pagination
          currentPage={Number(page) || 1}
          total={blogs?.count || 0}
          itemsPerPage={10}
          handler={pageChangeHandler}
        />
      )}
    </div>
  );
};

export default BlogList;
