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
    startQuiz: (state) => {
      state.step = 2;
    },
    nextQuestion: (state, action: PayloadAction<IAnswers[]>) => {
      state.answers = action.payload;

      state.activeQuestion = state.activeQuestion + 1;
    },
    previousQuestion: (state) => {
      state.activeQuestion = state.activeQuestion - 1;
    },
    submitQuiz: (state, action: PayloadAction<IAnswers[]>) => {
      state.answers = action.payload;
      state.step = 3;
    },
    retakeQuiz: (state) => {
      state.step = 1;
      state.activeQuestion = 0;
      state.answers = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  nextQuestion,
  previousQuestion,
  submitQuiz,
  startQuiz,
  retakeQuiz,
} = quizSlice.actions;

// export reducer
export default quizSlice.reducer;
