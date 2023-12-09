// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const AppApi = createApi({
  reducerPath: "App",
  baseQuery: fetchBaseQuery({ baseUrl: "../../api/" }),
  tagTypes: ["portfolio", "company", "testimonial"],
  endpoints: (builder) => ({
    getAllPortfolio: builder.query({
      query: (category) => {
        return {
          url: `portfolio?category=${category}`,
          method: "GET",
          headers: {
            authorization: "Bearer 78df8g67df8df6f9df8d78f78",
          },
        };
      },
      providesTags: ["portfolio"],
    }),
    getOnePortfolio: builder.query({
      query: (name) => {
        return {
          url: `portfolio/${name}`,
          method: "GET",
          headers: {
            authorization: "Bearer 78df8g67df8df6f9df8d78f78",
          },
        };
      },
      providesTags: ["portfolio"],
    }),
    getAllCompany: builder.query({
      query: () => {
        return {
          url: `company`,
          method: "GET",
          headers: {
            authorization: "Bearer 78df8g67df8df6f9df8d78f78",
          },
        };
      },
      providesTags: "company",
    }),
    getAllTestimonails: builder.query({
      query: () => {
        return {
          url: "testimonial",
          method: "GET",
          headers: {
            authorization: "Bearer 78df8g67df8df6f9df8d78f78",
          },
        };
      },

      providesTags: "testimonial",
    }),
  }),
});

export const {
  useGetAllPortfolioQuery,
  useGetAllCompanyQuery,
  useGetAllTestimonailsQuery,
  useGetOnePortfolioQuery,
} = AppApi;
