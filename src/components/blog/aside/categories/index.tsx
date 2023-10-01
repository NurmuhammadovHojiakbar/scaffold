import { useGetBlogCategoriesQuery } from "@/store/api/blogs";
import { Link } from "react-router-dom";

const BlogCategory = () => {
  const { data: categories } = useGetBlogCategoriesQuery();
  console.log(categories);
  return (
    <div className="blog-aside__wrapper blog-category">
      <div className="blog-aside__wrapper-header">
        <h3 className="blog-aside__wrapper-title">Categories</h3>
      </div>

      <div className="blog-category__container">
        <ul className="blog-category__list">
          {categories?.map((el) => (
            <li className="blog-category__item" key={el.id}>
              <Link
                className="blog-category__link"
                to={`/blog?category=${el.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogCategory;
