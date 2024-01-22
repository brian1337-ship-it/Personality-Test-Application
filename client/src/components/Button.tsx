type Props = {
  label: string;
  style?: string;
  handleButtonClick: () => void;
};

const Button = ({ label, style, handleButtonClick }: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 md:py-6 border font-montserrat text-lg md:text-xl leading-none
      ${
        style
          ? `${style}`
          : "bg-[#0c2b4f] hover:bg-[#4a5f78] text-white border-[#0c2b4f]"
      } rounded-md w-full`}
      onClick={() => handleButtonClick()}
    >
      {label}
    </button>
  );
};

export default Button;
