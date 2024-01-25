import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RequestTaskBody, RequestTaskParams } from "./quiz.schema";

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