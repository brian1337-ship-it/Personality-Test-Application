import React from "react";
import landingPageImg from "/landingpage.jpg";
import { Button } from ".";

const Start = () => {
  const handleStartTest = () => {};
  return (
    <section className="flex flex-col items-center justify-center w-full max-sm:w-full rounded-[20px] shadow-3xl px-5 md:px-10 pt-0 pb-8 max-container ">
      <img
        src={landingPageImg}
        className=" h-auto w-[35em] "
        alt="landing page image"
      />

      <p className=" text-center break-words font-montserrat text-sm md:text-lg leading-normal text-slate-gray max-w-[35em]">
        Get a “freakishly accurate” description of who you are and why you do
        things the way you do.
      </p>

      <div className=" mt-6 md:mt-8">
        <Button
          label="Take the Test"
          handleButtonClick={() => handleStartTest()}
        />
      </div>
    </section>
  );
};

export default Start;
