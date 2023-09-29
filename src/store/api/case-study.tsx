import { CaseStudyListInterface } from "@/interfaces/case-study";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const caseStudyApi = createApi({
  reducerPath: "caseStudyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/case/`,
  }),
  endpoints: (build) => ({
    getCases: build.query<CaseStudyListInterface, number>({
      query: (page = 1) => `study/?page=${page}`,
    }),
  }),
});

export const { useGetCasesQuery } = caseStudyApi;
export default caseStudyApi;
