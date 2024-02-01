import { disconnectFromDatabase } from "./database";

global.afterAll(async () => {
  await disconnectFromDatabase();
});
