import React from "react";
import { Question, Start } from "../components";

const Quiz = () => {
  return (
    <section className=" flex justify-center items-center mt-3 md:mt-10 max-container ">
      {/* <Start /> */}
      <Question />
    </section>
  );
};

export default Quiz;
