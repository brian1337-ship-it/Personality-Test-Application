import { Quiz, QuizModel } from "./quiz.model";

// database calls

export async function findAllAnswers() {
  return QuizModel.find({});
}

export async function saveAnswer(answer: Quiz) {
  return QuizModel.create(answer);
}

export async function updateAnswer(_id: string, body: Quiz) {
  return QuizModel.findByIdAndUpdate(_id, body, { new: true });
}
