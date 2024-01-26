import express from "express";
import { processRequestBody } from "zod-express-middleware";
import {
  findAllHandler,
  findAllAnswersHandler,
  saveAnswerHandler,
  updateAnswerHandler,
} from "./quiz.controller";
import { quizSchema } from "./quiz.schema";

const router = express.Router();

// Find all quiz data
router.get("/", findAllHandler);

// Find all answers
router.get("/answers", findAllAnswersHandler);

// Save Answer
router.post("/", processRequestBody(quizSchema.body), saveAnswerHandler);

// Update Answer
router.patch(
  "/:answerId",
  processRequestBody(quizSchema.body),
  updateAnswerHandler
);

export default router;
