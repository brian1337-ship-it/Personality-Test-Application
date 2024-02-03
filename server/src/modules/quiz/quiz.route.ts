import express from "express";
import { processRequestBody } from "zod-express-middleware";
import {
  findAllHandler,
  findAllAnswersHandler,
  saveAnswersHandler,
  deleteAnswersHandler,
} from "./quiz.controller";
import { saveAnswersSchema } from "./quiz.schema";

const router = express.Router();

// Fetch all quiz multiple-choice questions
router.get("/", findAllHandler);

// Fetch all answers
router.get("/answers", findAllAnswersHandler);

// Save Answers
router.post(
  "/answers",
  processRequestBody(saveAnswersSchema.body),
  saveAnswersHandler
);

// Update Answers
router.delete("/answers", deleteAnswersHandler);

export default router;
