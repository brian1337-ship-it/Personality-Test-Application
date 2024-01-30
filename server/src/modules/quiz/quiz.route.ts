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

// Find all quiz data
router.get("/", findAllHandler);

// Find all answers
router.get("/answers", findAllAnswersHandler);

// Save Answers
router.post(
  "/answers",
  processRequestBody(saveAnswersSchema.body),
  saveAnswersHandler
);

// Update Answer
router.delete("/answers", deleteAnswersHandler);

export default router;
