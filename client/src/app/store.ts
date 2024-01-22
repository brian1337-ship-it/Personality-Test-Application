import { configureStore } from "@reduxjs/toolkit";
// Slice reducers
import quizReducer from "../features/quiz/quizSlice";
// import { apiSlice } from "../features/quiz/apiSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
