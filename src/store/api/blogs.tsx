import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogListInterface } from "@/interfaces/blog";

type dataType = {
  page?: number;
  search?: string;
};

const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/blog/`,
  }),
  endpoints: (build) => ({
    getBlogs: build.query<BlogListInterface, dataType>({
      query: ({ page, search }) =>
        `post/?page=${page || 1}&search=${search || ""}`,
    }),
  }),
});

export const { useGetBlogsQuery } = blogApi;
export default blogApi;
