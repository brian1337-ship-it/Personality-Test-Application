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
  reducers: {
    nextQuestion: (state, action: PayloadAction<IAnswers[]>) => {
      state.answers = action.payload;

      state.activeQuestion = state.activeQuestion + 1;
    },
    previousQuestion: (state, action) => {
      state.activeQuestion = state.activeQuestion - 1;
    },
    submitQuiz: (state, action: PayloadAction<IAnswers[]>) => {
      state.answers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextQuestion, previousQuestion, submitQuiz } = quizSlice.actions;

// export reducer
export default quizSlice.reducer;
