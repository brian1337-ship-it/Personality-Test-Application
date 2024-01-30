import React from "react";
import { End, Question, Start } from "../components";
import { useAppSelector } from "../customHooks/reduxHooks";

const Quiz = () => {
  const { step } = useAppSelector((state) => state.quiz);

  return (
    <section className=" flex justify-center items-center mt-3 md:mt-10 max-container ">
      {step === 1 && <Start />}
      {step === 2 && <Question />}
      {step === 3 && <End />}
      {/* <End /> */}
    </section>
  );
};

export default Quiz;
