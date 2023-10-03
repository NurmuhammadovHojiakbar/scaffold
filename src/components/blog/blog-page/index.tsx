import { CalendarIcon, CommentIcon, UserIcon } from "@/components/icons";
import { BlogInterface } from "@/interfaces/blog";

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
              __html: `${blog.content.slice(0, 300)}...`,
            }}
          ></div>
          <div className="blog-item__tags"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
