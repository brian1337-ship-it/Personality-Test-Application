import app from "./app";
import { connectToDatabase, disconnectFromDatabase } from "./utils/database";
import logger from "./utils/logger";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

// the server instance
const server = app.listen(PORT, async () => {
  await connectToDatabase();
  logger.info(`Server listening  on port ${PORT}`);
});

// signals to listen to for termination
const signals = ["SIGTERM", "SIGINT"];

const gracefulShutdown = (signal: string) => {
  process.on(signal, async () => {
    logger.info("Got signal", signal);
    server.close();

    // disconnect from the db
    await disconnectFromDatabase();

    logger.info("Shutting down...");

    process.exit(0);
  });
};

// if signal detected execute graceful shutdown
for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
