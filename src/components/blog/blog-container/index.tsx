import BlogCategory from "../aside/categories";
import BlogRecent from "../aside/recent-blogs";
import BlogSearch from "../aside/search";
import BlogTags from "../aside/tags";
import AdImg from "@/assets/images/ad-banner.jpg";

type PropType = {
  children: React.ReactNode;
};

const BlogContainer = ({ children }: PropType) => {
  return (
    <div className="blog">
      <div className="container container-sm blog-container">
        <section className="blog-wrapper">{children}</section>
        <aside className="blog-aside">
          <BlogSearch />
          <BlogRecent />
          <BlogCategory />
          <BlogTags />
          <div className="ad-banner">
            <img className="ad-banner__img" src={AdImg} alt="Ad" />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogContainer;
