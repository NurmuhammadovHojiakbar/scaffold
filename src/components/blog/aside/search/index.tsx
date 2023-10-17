import { useState } from "react";
import { SearchIcon } from "@/components/icons";
import { useNavigate } from "react-router-dom";

const BlogSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="blog-aside__wrapper blog-search">
      <div className="blog-aside__wrapper-header">
        {/* <h3 className="blog-aside__wrapper-title">Search</h3> */}
      </div>
      <div className="blog-search__container">
        <div className="blog-search__wrapper">
          <input
            className="blog-search__wrapper-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="blog-search__wrapper-btn"
            onClick={() => navigate(`/blog?search=${search}`)}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
