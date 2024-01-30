import { apiSlice } from "./apiSlice";

// the quiz URL (the resource)
const QUIZ_URL = "/api/quiz/";

// export const quizApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getQuizData: builder.query<any, void>({
//       query: () => `${QUIZ_URL}`,
//     }),
//     getAllAnswers: builder.query<any, void>({
//       query: () => `${QUIZ_URL}/answers`,
//       providesTags: ["Answers"],
//     }),
//     submitAnswers: builder.mutation({
//       query: (answers) => ({
//         url: `${QUIZ_URL}/answers`,
//         method: "POST",
//         body: answers,
//       }),
//       invalidatesTags: ["Answers"],
//     }),
//     deleteAllAnswers: builder.mutation<any, void>({
//       query: () => ({
//         url: `${QUIZ_URL}/answers`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Answers"],
//     }),
//   }),
// });

// export const {
//   useSubmitAnswersMutation,
//   useGetQuizDataQuery,
//   useGetAllAnswersQuery,
//   useDeleteAllAnswersMutation,
// } = quizApiSlice;
