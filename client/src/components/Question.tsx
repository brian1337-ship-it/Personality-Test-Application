import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import quizData from "../data/quiz.json";
import { useAppDispatch, useAppSelector } from "../customHooks/reduxHooks";
import { IAnswers, IQuizData } from "../../typings";
import { toast } from "react-toastify";
import { Button } from ".";
import {
  nextQuestion,
  previousQuestion,
  submitQuiz,
} from "../features/quiz/quizSlice";

const Question = () => {
  const radiosWrapper = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const { activeQuestion, answers } = useAppSelector((state) => state?.quiz);
  // the current question
  const [data, setData] = useState<IQuizData>(quizData?.data[activeQuestion]);
  const [selected, setSelected] = useState<IAnswers | null>(null);

  useEffect(() => {
    // initialize data
    setData(quizData?.data[activeQuestion]);

    // to show selected answers when PREVIUOS is selected
    if (answers[activeQuestion] != undefined) {
      setSelected({
        ...selected,
        ["answer"]: answers[activeQuestion].answer,
        ["personality"]: answers[activeQuestion].personality,
      });
    }
  }, [data, activeQuestion]);

  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  // select answer
  const changeOptionHandler = (
    e: ChangeEvent<HTMLInputElement>,
    personality: string
  ) => {
    setSelected({
      ...selected,
      ["answer"]: e.target.value,
      ["personality"]: personality,
    });
  };

  // Previous question
  const handlePrevious = () => {
    // setError("");
    dispatch(previousQuestion());
  };

  // Next question
  const handleNext = () => {
    // validation
    if (selected === null) {
      return toast.error("Please select one option!");
    }
    let ans = [...answers];
    ans[activeQuestion] = {
      question: data.question,
      answer: selected.answer,
      personality: selected.personality,
    };
    // console.log("RUn once", ans);
    dispatch(nextQuestion(ans));
    setSelected(null);

    // unselect option
    const findCheckedInput =
      radiosWrapper.current?.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  };

  // submit test
  const handleSubmit = () => {
    // validation
    if (selected === null) {
      return toast.error("Please select one option!");
    }

    let ans = [...answers];
    ans[activeQuestion] = {
      question: data.question,
      answer: selected.answer,
      personality: selected.personality,
    };
    dispatch(submitQuiz(ans));
  };

  return (
    <div className="flex flex-col justify-start w-full max-sm:w-full rounded-md bg-[#f5f7f9] px-5 md:px-10 pt-10 pb-8 max-container">
      <h3 className="font-montserrat text-sm md:text-base">
        Question {activeQuestion + 1}/{quizData?.data.length}
      </h3>

      <h3 className="mt-2 font-palanquin text-lg md:text-2xl leading-normal font-bold mb-3 md:mb-4 ">
        {data?.question}
      </h3>

      <p className="font-montserrat text-sm md:text-base italic mb-3 md:mb-4">
        All questions are required
      </p>

      <div
        className="mt-3 break-words font-montserrat text-base md:text-xl leading-normal text-slate-gray flex flex-col items-start justify-start "
        ref={radiosWrapper}
      >
        {data?.choices.map((choice, i) => (
          <label
            className={`${
              choice.option === selected?.answer
                ? " border-black font-bold "
                : " border-slate-400 font-normal "
            } rounded-md bg-white cursor-pointer mb-4 md:mb-8 p-3 md:p-5 border`}
            key={i}
          >
            <input
              type="radio"
              name="answer"
              className=" fixed opacity-0 pointer-events-none "
              value={choice.option}
              onChange={(e) => changeOptionHandler(e, choice.personality)}
              checked={choice.option === selected}
            />
            {choice.option}
          </label>
        ))}
      </div>

      <section
        className={`flex-col md:flex-row md:flex items-center w-full bottom-0 mt-3 ${
          activeQuestion <= 0
            ? "justify-end"
            : "justify-between space-y-4 md:space-y-0 md:space-x-5"
        } `}
      >
        {activeQuestion <= 0 ? null : (
          <Button
            style="bg-white text-black border-black"
            label="< Previous"
            handleButtonClick={() => handlePrevious()}
          />
        )}

        {activeQuestion + 1 >= quizData?.data.length ? (
          <Button
            style={`
          ${
            selected
              ? "bg-[#0c2b4f] hover:bg-[#4a5f78] text-white border-[#0c2b4f]"
              : "bg-[#ccd6e0] text-white border-[#ccd6e0] cursor-not-allowed"
          }`}
            label="Finish test"
            handleButtonClick={() => handleSubmit()}
          />
        ) : (
          <Button
            style={`
          ${
            selected
              ? "bg-[#0c2b4f] hover:bg-[#4a5f78] text-white border-[#0c2b4f]"
              : "bg-[#ccd6e0] text-white border-[#ccd6e0] cursor-not-allowed"
          }`}
            label="Next question >"
            handleButtonClick={() => handleNext()}
          />
        )}
      </section>
    </div>
  );
};

export default Question;
