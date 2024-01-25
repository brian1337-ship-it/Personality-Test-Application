import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { findAllHandler } from "./quiz.controller";
import { quizSchema } from "./quiz.schema";

const router = express.Router();

// Find all
router.get("/", findAllHandler);

export default router;
