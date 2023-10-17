import { CalendarIcon, UserIcon } from "@/components/icons";
import { useGetBlogsQuery } from "@/store/api/blogs";
import { Link } from "react-router-dom";

const News = () => {
  const { data: blogs } = useGetBlogsQuery({ page: 1 });

  return (
    <section className="news">
      <h2 className="news-title">News</h2>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="container container-sm news-container"
      >
        <h3 className="title-sm news-container__title">News & Feeds</h3>
        <h2 className="title-lg news-container__heading">News & Every Feeds</h2>

        <ul className="news-list">
          {blogs?.results.slice(0, 3).map((blog) => (
            <li className="news-item" key={blog.id}>
              <div className="news-item__wrapper">
                <Link
                  className="news-item__category"
                  to={`/blog?category=${blog.category.title.toLowerCase()}`}
                >
                  {blog.category.title}
                </Link>
                <img src={blog.image} alt="blog" className="news-item__img" />
              </div>
              <div className="news-item__info">
                <h3 className="news-item__title">
                  <Link className="news-item__link" to={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>
                <div
                  className="news-item__content"
                  dangerouslySetInnerHTML={{
                    __html: `${blog.content.slice(0, 150)}...`,
                  }}
                ></div>
                <div className="news-item__details">
                  <p className="news-item__detail">
                    <UserIcon />
                    <span>{blog.author}</span>
                  </p>
                  <p className="news-item__detail">
                    <CalendarIcon />
                    <span>{new Date(blog.created).toDateString()}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
