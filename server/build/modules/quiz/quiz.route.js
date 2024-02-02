"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_express_middleware_1 = require("zod-express-middleware");
const quiz_controller_1 = require("./quiz.controller");
const quiz_schema_1 = require("./quiz.schema");
const router = express_1.default.Router();
// Find all quiz data
router.get("/", quiz_controller_1.findAllHandler);
// Find all answers
router.get("/answers", quiz_controller_1.findAllAnswersHandler);
// Save Answers
router.post("/answers", (0, zod_express_middleware_1.processRequestBody)(quiz_schema_1.saveAnswersSchema.body), quiz_controller_1.saveAnswersHandler);
// Update Answer
router.delete("/answers", quiz_controller_1.deleteAnswersHandler);
exports.default = router;
