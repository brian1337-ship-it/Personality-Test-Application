import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../customHooks/reduxHooks";
import quizData from "../data/quiz.json";
import { retakeQuiz } from "../features/quiz/quizSlice";
import { Button } from ".";

type PersonalityPoints = {
  introvert: number;
  extrovert: number;
};
const End = () => {
  const dispatch = useAppDispatch();
  const { answers } = useAppSelector((state) => state.quiz);
  const [points, setPoints] = useState<PersonalityPoints>({
    introvert: 0,
    extrovert: 0,
  });

  useEffect(() => {
    let introvertPoints = 0;
    let extrovertPoints = 0;

    // check answers for personality type
    answers.forEach((result, index) => {
      if (result.personality === "introvert") {
        introvertPoints++;
      } else {
        extrovertPoints++;
      }
    });

    // save personality types to state
    setPoints({
      ...points,
      ["introvert"]: introvertPoints,
      ["extrovert"]: extrovertPoints,
    });
  }, []);

  // retake quiz
  const handleRetake = () => {
    dispatch(retakeQuiz());
  };

  const handleShowAns = () => {};
  return (
    <div className="flex flex-col justify-center items-center w-full max-sm:w-full rounded-md bg-[#f5f7f9] px-5 md:px-10 pt-10 pb-8 max-container">
      {JSON.stringify(points)}

      {points.introvert > points.extrovert ? (
        <section className="flex flex-col justify-center items-center w-full">
          <h3 className="font-montserrat text-base md:text-xl font-semibold italic ">
            Your Result
          </h3>
          <h3 className="mt-3 font-palanquin text-lg md:text-3xl leading-normal font-bold mb-3 md:mb-5 ">
            You're more of an introvert
          </h3>

          <p className="font-montserrat mb-3 break-words text-base md:text-xl leading-normal">
            You believe that living alone is the key to happiness, and you want
            to blend in with the crowd rather than stick out. You are constantly
            tormented by the thought of doing things incorrectly, not
            understanding, or not being alert or intelligent enough to do what
            people expect of you. You lack self-confidence and seem to believe
            that others are superior to you. In a conversation, for example, you
            are more inclined to agree with the other person's points of view
            since you do not completely respect your own beliefs. You volunteer
            for low-level tasks or services.When people want to get out of a
            task, they naturally come to you as they know that you never say
            ‘no’.
          </p>
          <p className="font-montserrat break-words text-base md:text-xl leading-normal">
            It's understandable that you sometimes feel used, but you don't know
            how to escape the cycle. On the few occasions when you've attempted
            to do so, your uncommon disobedience has sparked commotion, and
            you've had to back down. You are hesitant to interact with others
            because you believe they are continuously criticising you and will
            inevitably discover your flaws. So you attempt to be as honest and
            discreet as possible. How far will you go with this philosophy of
            self-denigration? Avoid projecting your negative self-image onto
            others.
          </p>

          <p className="font-montserrat break-words text-base md:text-xl leading-normal">
            Take a close look around you and you will notice that they, too,
            have flaws, limitations, and failings, so quit making excuses for
            everything. Perhaps you were raised in an environment of 'You'll
            never make the grade' as a child, which is a poison that you must
            gradually eliminate from your system. Learn to prioritise your own
            interests—everyone else does, so why not you? You, too, have
            desires, dreams, and opinions—express them. If you believe that
            saying no or thinking differently than others will cause you to lose
            love, this is just not true. Others will come to appreciate you
            because you respect yourself.
          </p>
        </section>
      ) : (
        <section className="flex flex-col justify-center items-center w-full">
          <h3 className="font-montserrat text-base md:text-xl font-semibold italic ">
            Your Result
          </h3>
          <h3 className="mt-2 font-palanquin text-lg md:text-3xl leading-normal font-bold mb-3 md:mb-4 ">
            You're more of an extrovert
          </h3>

          <p className="font-montserrat mb-3 md:mb-4 break-words text-base md:text-xl leading-normal">
            In public and at work, you are a ball of energy that is constantly
            moving. You take the initiative, motivate people, despise waiting,
            and are constantly anticipating what is going on around you. You
            enjoy managing everything, much like a conductor of an orchestra.
            You appreciate being seen by your coworkers, and your worry stems
            more from the prospect of leaving others uninterested.
          </p>
        </section>
      )}

      <section
        className="flex-col md:flex-row md:flex items-center w-full bottom-0 mt-3 
            justify-between space-y-4 md:space-y-0 md:space-x-5"
      >
        <Button
          style="bg-[#0c2b4f] hover:bg-[#4a5f78] text-white border-[#0c2b4f]"
          label="Retake test"
          handleButtonClick={() => handleRetake()}
        />

        <Button
          style="bg-white text-black border-black"
          label="Show my answers"
          handleButtonClick={() => handleShowAns()}
        />
      </section>
    </div>
  );
};

export default End;
