import { ServiceInterface } from "@/interfaces/services";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/blog/`,
  }),
  endpoints: (build) => ({
    getServices: build.query<ServiceInterface[], void>({
      query: () => `service/`,
    }),
  }),
});

export const { useGetServicesQuery } = servicesApi;
export default servicesApi;
