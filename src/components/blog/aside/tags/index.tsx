import { useGetBlogTagsQuery } from "@/store/api/blogs";
import { Link } from "react-router-dom";

const BlogTags = () => {
  const { data: tags } = useGetBlogTagsQuery();
  return (
    <div className="blog-aside__wrapper blog-tags">
      <div className="blog-aside__wrapper-header">
        <h3 className="blog-aside__wrapper-title">Tags</h3>
      </div>
      <div className="blog-tags__container">
        <ul className="blog-tags__list">
          {tags?.map((tag) => (
            <li className="blog-tags__item" key={tag.id}>
              <Link className="blog-tags__link" to={`/blog?tag=${tag.name}`}>
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogTags;
