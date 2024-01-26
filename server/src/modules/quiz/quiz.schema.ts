import { object, string, TypeOf } from "zod";

export const quizSchema = {
  body: object({
    question: string({
      required_error: "Question is required",
    }),
    answer: string({
      required_error: "Selected answer is required",
    }),
    personality: string({
      required_error: "Personality description is required",
    }),
  }),
  params: object({
    answerId: string(),
  }),
};

export type RequestQuizBody = TypeOf<typeof quizSchema.body>;
export type RequestQuizParams = TypeOf<typeof quizSchema.params>;
