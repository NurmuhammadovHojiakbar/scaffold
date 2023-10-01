import { useGetBlogsQuery } from "@/store/api/blogs";
import { Link } from "react-router-dom";

const BlogRecent = () => {
  const { data: blogs } = useGetBlogsQuery({ page: 1 });

  return (
    <div className="blog-aside__wrapper blog-recent">
      <div className="blog-aside__wrapper-header">
        <h3 className="blog-aside__wrapper-title">Recent blogs</h3>
      </div>
      <div className="blog-recent__container">
        <ul className="blog-recent__list">
          {blogs?.results.slice(0, 3).map((blog) => (
            <li className="blog-recent__item" key={blog.id}>
              <div className="blog-recent__item-wrapper">
                <img
                  src={blog.image}
                  alt="Blog"
                  className="blog-recent__item-img"
                />
              </div>
              <div className="blog-recent__item-info">
                <Link
                  className="blog-recent__item-title"
                  to={`/blog/${blog.id}`}
                >
                  {blog.title}
                </Link>
                <time className="blog-recent__item-date">
                  {new Date(blog.created).toDateString()}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogRecent;
