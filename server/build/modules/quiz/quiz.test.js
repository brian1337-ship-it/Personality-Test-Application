"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const database_1 = require("../../utils/database");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, database_1.connectToDatabase)();
    }
    catch (error) { }
}));
describe("GET /api/quiz", () => {
    it("responds with an array of quiz questions", () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .get("/api/quiz")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
            expect(response.body).toHaveProperty("length");
            expect(response.body.length).toBe(3);
        });
    }));
});
describe("POST /api/quiz/answers", () => {
    it("responds with an error if the answer is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .post("/api/quiz/answers")
            .set("Accept", "application/json")
            .send({
            content: "",
        })
            .expect("Content-Type", /json/)
            .expect(400)
            .then((response) => {
            expect(response.body[0]).toHaveProperty("errors");
        });
    }));
    it("responds with an inserted array of objects", () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .post("/api/quiz/answers")
            .set("Accept", "application/json")
            .send([
            {
                question: "Test question 1",
                answer: "Test Answer 1",
                personality: "introvert",
                _id: 1,
            },
            {
                question: "Test question 2",
                answer: "Test Answer 2",
                personality: "extrovert",
                _id: 2,
            },
            {
                question: "Test question 3",
                answer: "Test Answer 3",
                personality: "introvert",
                _id: 3,
            },
        ])
            .expect("Content-Type", /json/)
            .expect(201)
            .then((response) => {
            expect(response.body[0]).toHaveProperty("_id");
            expect(response.body[0]).toHaveProperty("question");
            expect(response.body[0].question).toBe("Test question 1");
            expect(response.body[0]).toHaveProperty("answer");
        });
    }));
});
describe("GET /api/quiz/answers", () => {
    it("responds with an object containing answers and personality type", () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .get("/api/quiz/answers")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
            expect(response.body).toHaveProperty("answers");
            expect(response.body.answers).toHaveProperty("length");
            expect(response.body.answers.length).toBe(3);
            expect(response.body).toHaveProperty("personality");
            expect(response.body.personality).toBe("introvert");
        });
    }));
});
describe("DELETE /api/quiz/answers", () => {
    it("responds with a status 200", (done) => {
        (0, supertest_1.default)(app_1.default)
            .delete("/api/quiz/answers")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});
