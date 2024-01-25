import express from "express";
import cors from "cors";
import helmet from "helmet";
import { CORS_ORIGIN } from "./constants";
import quizRoute from "./modules/quiz/quiz.route";

const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
app.use(helmet()); // set and hide some headers for security purposes.Cross-Site Scripting (XSS) and click-jacking attacks

// routes
app.use("/api/quiz", quizRoute);

export default app;
