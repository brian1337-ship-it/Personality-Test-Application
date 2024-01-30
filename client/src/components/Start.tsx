import { useDeleteAllAnswersMutation } from "../features/api/apiSlice";
import landingPageImg from "/landingpage.jpg";
import { Button } from ".";
import { useAppDispatch } from "../customHooks/reduxHooks";
import { startQuiz } from "../features/quiz/quizSlice";
import { toast } from "react-toastify";

const Start = () => {
  const dispatch = useAppDispatch();

  const [deleteAllAnswers] = useDeleteAllAnswersMutation();

  const handleStartTest = () => {
    deleteAllAnswers()
      .unwrap()
      .then(() => dispatch(startQuiz()))
      .catch((error) => toast.error(error));
  };

  return (
    <section className="flex flex-col items-center justify-center w-full max-sm:w-full px-5 md:px-10 pt-0 pb-8 max-container">
      <img
        src={landingPageImg}
        className="h-auto w-[35em]"
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
