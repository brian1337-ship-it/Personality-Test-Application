import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import logger from "./logger";

// mongo server instance
let mongoServer: any;

// connect
export async function connectToDatabase() {
  try {
    // start mongo server
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    // connect to db
    await mongoose.connect(mongoUri, { dbName: "testingDb" });
    logger.info("Connected to database");
  } catch (e) {
    logger.error(e, "Failed to connect to database");
    process.exit(1);
  }
}

//  disconnect
export async function disconnectFromDatabase() {
  // close db connection
  // await mongoose.disconnect();

  // stop mongo server
  await mongoServer.stop();

  logger.info("Disconnected from database");

  return;
}
