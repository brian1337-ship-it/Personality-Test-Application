import { object, string, TypeOf, array, number } from "zod";

export const saveAnswersSchema = {
  body: array(
    object({
      _id: number(),
      question: string({
        required_error: "Question is required",
      }),
      answer: string({
        required_error: "Selected answer is required",
      }),
      personality: string({
        required_error: "Personality description is required",
      }),
    })
  ),
};

export type SaveAnswersBody = TypeOf<typeof saveAnswersSchema.body>;
