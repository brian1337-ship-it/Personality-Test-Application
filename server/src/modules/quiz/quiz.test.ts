import request from "supertest";

import app from "../../app";
import { connectToDatabase } from "../../utils/database";

beforeAll(async () => {
  try {
    await connectToDatabase();
  } catch (error) {}
});

describe("GET /api/quiz", () => {
  it("responds with an array of quiz questions", async () =>
    request(app)
      .get("/api/quiz")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("length");
        expect(response.body.length).toBe(3);
      }));
});

describe("POST /api/quiz/answers", () => {
  it("responds with an error if the answer is invalid", async () =>
    request(app)
      .post("/api/quiz/answers")
      .set("Accept", "application/json")
      .send({
        content: "",
      })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body[0]).toHaveProperty("errors");
      }));
  it("responds with an inserted array of objects", async () =>
    request(app)
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
      }));
});

describe("GET /api/quiz/answers", () => {
  it("responds with an object containing answers and personality type", async () =>
    request(app)
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
      }));
});

describe("DELETE /api/quiz/answers", () => {
  it("responds with a status 200", (done) => {
    request(app)
      .delete("/api/quiz/answers")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
