// The parent api slice

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL });

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:4000" });

// the quiz URL (the resource)
const QUIZ_URL = "/api/quiz/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Answers"],
  endpoints: (builder) => ({
    getQuizData: builder.query<any, void>({
      query: () => `${QUIZ_URL}`,
    }),
    getAllAnswers: builder.query<any, void>({
      query: () => `${QUIZ_URL}/answers`,
      providesTags: (result) => {
        console.log("Get all answers", result);
        return ["Answers"];
      },
    }),
    submitAnswers: builder.mutation({
      query: (answers) => ({
        url: `${QUIZ_URL}/answers`,
        method: "POST",
        body: answers,
      }),
      invalidatesTags: (result, error, arg) => {
        console.log("Submit answers", result, error, arg);

        return ["Answers"];
      },
    }),
    deleteAllAnswers: builder.mutation<any, void>({
      query: () => ({
        url: `${QUIZ_URL}/answers`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => {
        console.log("Delete answers", result, error, arg);

        return ["Answers"];
      },
      // invalidatesTags: ["Answers"],
    }),
  }),
});

export const {
  useSubmitAnswersMutation,
  useGetQuizDataQuery,
  useGetAllAnswersQuery,
  useDeleteAllAnswersMutation,
} = apiSlice;
