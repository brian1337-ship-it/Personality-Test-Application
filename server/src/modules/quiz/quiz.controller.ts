import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RequestQuizBody, RequestQuizParams } from "./quiz.schema";
import { saveAnswer, findAllAnswers, updateAnswer } from "./quiz.service";

// @desc    Find all quiz data
// @route   GET /api/quiz
// @access  Public
export async function findAllHandler(_: Request, res: Response) {
  return res.status(StatusCodes.OK).json([
    {
      question: "This morning, your agenda seems to be free. You:",
      choices: [
        {
          option:
            "A. Know that somebody will find a reason to come and bother you",
          personality: "introvert",
        },
        {
          option:
            "B. Heave a sigh of relief and look forward to a day without stress",
          personality: "introvert",
        },
        {
          option:
            "C. Question your colleagues about a project that’s been worrying you",
          personality: "extrovert",
        },
        {
          option:
            "D. Pick up the phone and start filling up your agenda with meetings",
          personality: "extrovert",
        },
      ],
    },
    {
      question:
        "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
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
      question: "You are taking part in a guided tour of a museum. You:",
      choices: [
        {
          option:
            "A. Are a bit too far towards the back so don’t really hear what the guide is saying",
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
          option:
            "D. Are right up the front, adding your own comments in a loud voice",
          personality: "extrovert",
        },
      ],
    },
  ]);
}

// @desc    Find all answers
// @route   POST /api/answers
// @access  Public
export async function findAllAnswersHandler(_: Request, res: Response) {
  const answers = await findAllAnswers();

  return res.status(StatusCodes.OK).send(answers);
}

// @desc    Save answer
// @route   POST /api/quiz
// @access  Public
export async function saveAnswerHandler(
  req: Request<{}, {}, RequestQuizBody>,
  res: Response
) {
  const { question, answer, personality } = req.body;

  try {
    // call the service
    const ans = await saveAnswer({ question, answer, personality });

    return res.status(StatusCodes.CREATED).send(ans);
  } catch (e: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

// @desc    Update quiz answer
// @route   PATCH /api/quiz/:answerId
// @access  Public
export async function updateAnswerHandler(
  req: Request<RequestQuizParams, {}, RequestQuizBody>,
  res: Response
) {
  const { answerId } = req.params;

  try {
    const ans = await updateAnswer(answerId, req.body);

    if (!ans) {
      return res.status(StatusCodes.NOT_FOUND).send("Answer not found");
    }

    return res.status(StatusCodes.OK).send(ans);
  } catch (e: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}
