import { CalendarIcon, CommentIcon, UserIcon } from "@/components/icons";
import { BlogInterface } from "@/interfaces/blog";
import { Link } from "react-router-dom";

type PropType = {
  blog: BlogInterface;
};

const BlogItem = ({ blog }: PropType) => {
  return (
    <li className="blog-item">
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
        <h2 className="blog-item__info-title">
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h2>
        <div
          className="blog-item__info-content"
          dangerouslySetInnerHTML={{
            __html: `${blog.content.slice(0, 300)}...`,
          }}
        ></div>
        <Link className="blog-item__info-link" to={`/blogs/${blog.id}`}>
          Read More
        </Link>
      </div>
    </li>
  );
};

export default BlogItem;
