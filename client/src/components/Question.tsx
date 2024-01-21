import React from "react";

const Question = () => {
  return (
    <div className="flex flex-col justify-start w-full max-sm:w-full rounded-[20px] shadow-3xl px-5 md:px-10 pt-10 pb-8 max-container">
      <h3>Question</h3>

      <h3 className="mt-2 font-palanquin text-3xl leading-normal font-bold">
        Question
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        Answer
      </p>
    </div>
  );
};

export default Question;
