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
exports.deleteAnswersHandler = exports.saveAnswersHandler = exports.findAllAnswersHandler = exports.findAllHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const quiz_service_1 = require("./quiz.service");
// @desc    Find all quiz data
// @route   GET /api/quiz
// @access  Public
function findAllHandler(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.status(http_status_codes_1.StatusCodes.OK).json([
            {
                _id: 1,
                question: "This morning, your agenda seems to be free. You:",
                choices: [
                    {
                        option: "A. Know that somebody will find a reason to come and bother you",
                        personality: "introvert",
                    },
                    {
                        option: "B. Heave a sigh of relief and look forward to a day without stress",
                        personality: "introvert",
                    },
                    {
                        option: "C. Question your colleagues about a project that’s been worrying you",
                        personality: "extrovert",
                    },
                    {
                        option: "D. Pick up the phone and start filling up your agenda with meetings",
                        personality: "extrovert",
                    },
                ],
            },
            {
                _id: 2,
                question: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
                choices: [
                    {
                        option: "A. Don’t dare contradict them",
                        personality: "introvert",
                    },
                    {
                        option: "B. Think that they are obviously right",
                        personality: "introvert",
                    },
                    {
                        option: "C. Defend your own point of view, tooth and nail",
                        personality: "extrovert",
                    },
                    {
                        option: "D. Continuously interrupt your colleague",
                        personality: "extrovert",
                    },
                ],
            },
            {
                _id: 3,
                question: "You are taking part in a guided tour of a museum. You:",
                choices: [
                    {
                        option: "A. Are a bit too far towards the back so don’t really hear what the guide is saying",
                        personality: "introvert",
                    },
                    {
                        option: "B. Follow the group without question",
                        personality: "introvert",
                    },
                    {
                        option: "C. Make sure that everyone is able to hear properly",
                        personality: "extrovert",
                    },
                    {
                        option: "D. Are right up the front, adding your own comments in a loud voice",
                        personality: "extrovert",
                    },
                ],
            },
        ]);
    });
}
exports.findAllHandler = findAllHandler;
// @desc    Find all answers
// @route   GET /api/quiz/answers
// @access  Public
function findAllAnswersHandler(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const ans = yield (0, quiz_service_1.findAllAnswers)();
        let introvertPoints = 0;
        let extrovertPoints = 0;
        let personalityType = null;
        // Determine personality type
        const calcPersonality = () => __awaiter(this, void 0, void 0, function* () {
            if (ans != null && ans.length > 0) {
                // check answers for personality type
                ans.forEach((result, index) => {
                    if (result.personality === "introvert") {
                        introvertPoints++;
                    }
                    else {
                        extrovertPoints++;
                    }
                });
            }
        });
        const definePersonality = () => __awaiter(this, void 0, void 0, function* () {
            if (introvertPoints > extrovertPoints) {
                personalityType = "introvert";
            }
            else {
                personalityType = "extrovert";
            }
        });
        yield calcPersonality();
        yield definePersonality();
        return res
            .status(http_status_codes_1.StatusCodes.OK)
            .send({ answers: ans, personality: personalityType });
    });
}
exports.findAllAnswersHandler = findAllAnswersHandler;
// @desc    Save answers
// @route   POST /api/quiz/answers
// @access  Public
function saveAnswersHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // call the service
            const ans = yield (0, quiz_service_1.saveAnswers)(req.body);
            return res.status(http_status_codes_1.StatusCodes.CREATED).send(ans);
        }
        catch (e) {
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
        }
    });
}
exports.saveAnswersHandler = saveAnswersHandler;
// @desc    Delete quiz answers
// @route   DELETE /api/quiz/answers
// @access  Public
function deleteAnswersHandler(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ans = yield (0, quiz_service_1.deleteAnswers)();
            // return res.status(StatusCodes.NO_CONTENT);
            return res.status(http_status_codes_1.StatusCodes.OK).send(ans);
        }
        catch (e) {
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
        }
    });
}
exports.deleteAnswersHandler = deleteAnswersHandler;
