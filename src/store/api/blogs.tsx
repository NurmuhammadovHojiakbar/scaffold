import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BlogCategoryInterface,
  BlogInterface,
  BlogListInterface,
  BlogTagInterface,
} from "@/interfaces/blog";

type dataType = {
  page?: number;
  search?: string;
  tag?: string;
  category?: string;
};

const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/blog/`,
  }),
  endpoints: (build) => ({
    getBlogs: build.query<BlogListInterface, dataType>({
      query: ({ page, search, category, tag }) =>
        `post/?category__title=${category || ""}&tag__name=${tag || ""}&page=${
          page || 1
        }&search=${search || ""}`,
    }),
    getBlogById: build.query<BlogInterface, number>({
      query: (id) => `post/${id}`,
    }),
    getBlogCategories: build.query<BlogCategoryInterface[], void>({
      query: () => "post-category",
    }),
    getBlogTags: build.query<BlogTagInterface[], void>({
      query: () => "tag",
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogCategoriesQuery,
  useGetBlogTagsQuery,
  useGetBlogByIdQuery,
} = blogApi;
export default blogApi;
