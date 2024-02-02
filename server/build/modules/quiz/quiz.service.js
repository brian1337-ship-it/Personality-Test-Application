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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnswers = exports.saveAnswers = exports.findAllAnswers = void 0;
const quiz_model_1 = require("./quiz.model");
// database calls
function findAllAnswers() {
    return __awaiter(this, void 0, void 0, function* () {
        return quiz_model_1.QuizModel.find({});
    });
}
exports.findAllAnswers = findAllAnswers;
function saveAnswers(answer) {
    return __awaiter(this, void 0, void 0, function* () {
        return quiz_model_1.QuizModel.create(answer);
    });
}
exports.saveAnswers = saveAnswers;
function deleteAnswers() {
    return __awaiter(this, void 0, void 0, function* () {
        return quiz_model_1.QuizModel.deleteMany({});
    });
}
exports.deleteAnswers = deleteAnswers;
