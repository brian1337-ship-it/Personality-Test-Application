import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Types
import { IQuizData, IAnswers } from "../../../typings";

type quizState = {
  step: number;
  activeQuestion: number;
  answers: IAnswers[];
};

export const initialState: quizState = {
  step: 1,
  activeQuestion: 0,
  answers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = quizSlice.actions;

// export reducer
export default quizSlice.reducer;
