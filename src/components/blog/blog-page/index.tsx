import { CalendarIcon, CommentIcon, UserIcon } from "@/components/icons";
import { BlogInterface } from "@/interfaces/blog";
import { Link } from "react-router-dom";

type PropType = {
  blog: BlogInterface;
};

const BlogPage = ({ blog }: PropType) => {
  return (
    <div className="blog-page">
      <div className="blog-item">
        <div className="blog-item__wrapper">
          <img className="blog-item__img" src={blog.image} alt="Blog" />
        </div>
        <div className="blog-item__info">
          <div className="blog-item__info-details">
            <p className="blog-item__info-detail">
              <CalendarIcon />
              <span>{new Date(blog.created).toDateString()}</span>
            </p>
            <p className="blog-item__info-detail">
              <UserIcon />
              <span>{blog.author}</span>
            </p>
            <p className="blog-item__info-detail">
              <CommentIcon />
              <span>{blog.comments.length}</span>
            </p>
          </div>
          <div
            className="blog-item__info-content"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          ></div>
          <div className="blog-item__tags">
            <h3 className="blog-item__tags-title">Post Tags</h3>
            <ul className="blog-item__tags-list">
              {blog.tag.map((tag) => (
                <li className="blog-item__tags-item" key={tag.id}>
                  <Link
                    className="blog-item__tags-link"
                    to={`/blog?tag=${tag.name}`}
                  >
                    {tag.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
