import express from "express";
import cors from "cors";
import helmet from "helmet";
import quizRoute from "./modules/quiz/quiz.route";

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet()); // set and hide some headers for security purposes.Cross-Site Scripting (XSS) and click-jacking attacks

// routes
app.use("/api/quiz", quizRoute);

export default app;
