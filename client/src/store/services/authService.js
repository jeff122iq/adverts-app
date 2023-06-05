import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_PATH }),
  endpoints: (builder) => ({
    signIn: builder.query({
      query: (name) => `/user/sign-in`,
    }),
  }),
});
