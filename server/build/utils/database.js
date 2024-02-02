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
exports.disconnectFromDatabase = exports.connectToDatabase = void 0;
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
// mongo server instance
let mongoServer;
// connect
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // start mongo server
            mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
            const mongoUri = mongoServer.getUri();
            // connect to db
            yield mongoose_1.default.connect(mongoUri, { dbName: "testingDb" });
            logger_1.default.info("Connected to database");
        }
        catch (e) {
            logger_1.default.error(e, "Failed to connect to database");
            process.exit(1);
        }
    });
}
exports.connectToDatabase = connectToDatabase;
//  disconnect
function disconnectFromDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        // close db connection
        // await mongoose.disconnect();
        // stop mongo server
        yield mongoServer.stop();
        logger_1.default.info("Disconnected from database");
        return;
    });
}
exports.disconnectFromDatabase = disconnectFromDatabase;
