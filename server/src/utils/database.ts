import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import logger from "./logger";

// connect to Mongo
export async function connectToDatabase() {
  try {
    // start mongo server
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    // connect
    await mongoose.connect(mongoUri, { dbName: "testingDb" });
    logger.info("Connected to database");
  } catch (e) {
    logger.error(e, "Failed to connect to database");
    process.exit(1);
  }
}

//  disconnect from Mongo
export async function disconnectFromDatabase() {
  await mongoose.connection.close();

  logger.info("Disconnected from database");

  return;
}
