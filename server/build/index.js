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
const app_1 = __importDefault(require("./app"));
const database_1 = require("./utils/database");
const logger_1 = __importDefault(require("./utils/logger"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
// the server instance
let server;
// connect to the database
(0, database_1.connectToDatabase)().then(() => {
    // run the server
    server = app_1.default.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        logger_1.default.info(`Server listening on port ${PORT}`);
    }));
});
// signals to listen to for termination
const signals = ["SIGTERM", "SIGINT"];
const gracefulShutdown = (signal) => {
    process.on(signal, () => __awaiter(void 0, void 0, void 0, function* () {
        logger_1.default.info("Got signal", signal);
        // disconnect from the db
        (0, database_1.disconnectFromDatabase)().then(() => {
            server.close();
            logger_1.default.info("Shutting down...");
            process.exit(0);
        });
    }));
};
// if signal detected execute graceful shutdown
for (let i = 0; i < signals.length; i++) {
    gracefulShutdown(signals[i]);
}
