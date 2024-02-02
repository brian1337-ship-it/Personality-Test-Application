"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveAnswersSchema = void 0;
const zod_1 = require("zod");
exports.saveAnswersSchema = {
    body: (0, zod_1.array)((0, zod_1.object)({
        _id: (0, zod_1.number)(),
        question: (0, zod_1.string)({
            required_error: "Question is required",
        }),
        answer: (0, zod_1.string)({
            required_error: "Selected answer is required",
        }),
        personality: (0, zod_1.string)({
            required_error: "Personality description is required",
        }),
    })),
};
