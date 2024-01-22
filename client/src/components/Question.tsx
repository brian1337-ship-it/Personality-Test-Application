import React, { useState, useRef, useEffect } from "react";
import quizData from "../data/quiz.json";
import { useAppDispatch, useAppSelector } from "../customHooks/reduxHooks";
import { IQuizData } from "../../typings";
import { Button } from ".";

const Question = () => {
  const radiosWrapper = useRef(null);
  const dispatch = useAppDispatch();

  const { activeQuestion, answers } = useAppSelector((state) => state?.quiz);
  // the current question
  const [data, setData] = useState<IQuizData>(quizData?.data[activeQuestion]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    // initialize data
    setData(quizData?.data[activeQuestion]);

    // to show selected answers when PREVIUOS is selected
    if (answers[activeQuestion] != undefined) {
      setSelected(answers[activeQuestion].a);
    }
  }, [data, activeQuestion]);

  const changeOptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  // Previous question
  const handlePrevious = () => {
    // setError("");
    // dispatch(prevQuiz());
  };

  // Next question
  const handleNext = () => {
    // if (selected === "") {
    //   return setError("Please select one option!");
    // }
    // let ans = [...answers];
    // ans[activeQuestion] = {
    //   q: data.question,
    //   a: selected,
    // };
    // console.log("RUn once", ans);
    // dispatch(
    //   nextQuiz({
    //     answers: ans,
    //   })
    // );
    // setSelected("");
    // const findCheckedInput =
    //   radiosWrapper.current.querySelector("input:checked");
    // if (findCheckedInput) {
    //   findCheckedInput.checked = false;
    // }
  };

  // submit test
  const handleSubmit = () => {
    // if (selected === "") {
    //   return setError("Please select one option!");
    // }
    // dispatch(
    //   submitQuiz({
    //     answers: [
    //       ...answers,
    //       (answers[activeQuestion] = {
    //         q: data.question,
    //         a: selected,
    //       }),
    //     ],
    //     time: time - timer,
    //   })
    // );
  };

  return (
    <div className="flex flex-col justify-start w-full max-sm:w-full rounded-md bg-[#f5f7f9] px-5 md:px-10 pt-10 pb-8 max-container">
      <h3 className="font-montserrat text-sm md:text-base">
        Question {activeQuestion + 1}/{quizData?.data.length}
      </h3>

      <h3 className="mt-2 font-palanquin text-lg md:text-3xl leading-normal font-bold mb-4 md:mb-5 ">
        {data?.question}
      </h3>

      <div
        className="mt-3 break-words font-montserrat text-base md:text-xl leading-normal text-slate-gray flex flex-col items-start justify-start "
        ref={radiosWrapper}
      >
        {data?.choices.map((choice, i) => (
          <label
            className={`${
              choice.option === selected
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
              onChange={changeOptionHandler}
              checked={choice.option === selected}
            />
            {choice.option}
          </label>
        ))}
      </div>

      <section
        className={`flex  items-center w-full bottom-0 ${
          activeQuestion <= 0 ? "justify-end" : "justify-between"
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
              : "bg-[#ccd6e0] text-black border-[#ccd6e0] cursor-not-allowed"
          }`}
            label="Submit"
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
