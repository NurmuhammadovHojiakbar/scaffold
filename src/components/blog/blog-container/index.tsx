import BlogCategory from "../aside/categories";
import BlogRecent from "../aside/recent-blogs";
import BlogSearch from "../aside/search";
import BlogTags from "../aside/tags";

const BlogContainer = () => {
  return (
    <div className="blog">
      <div className="container blog-container">
        <section className="blog-wrapper">wrapper</section>
        <aside className="blog-aside">
          <BlogSearch />
          <BlogRecent />
          <BlogCategory />
          <BlogTags />
        </aside>
      </div>
    </div>
  );
};

export default BlogContainer;
