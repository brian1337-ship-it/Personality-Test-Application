import { Quiz, QuizModel } from "./quiz.model";

// database calls

export async function findAllAnswers() {
  return QuizModel.find({});
}

export async function saveAnswers(answer: Quiz[]) {
  return QuizModel.create(answer);
}

export async function deleteAnswers() {
  return QuizModel.deleteMany({});
}
