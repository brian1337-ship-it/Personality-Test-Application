// The parent api slice

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL });

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:4000" });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Answers"],
  endpoints: (builder) => ({}),
});
