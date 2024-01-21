type Props = {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  handleButtonClick: () => void;
};

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  handleButtonClick,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-[#0c2b4f] hover:bg-[#4a5f78] text-white border-[#0c2b4f]"
      } rounded-full ${fullWidth && "w-full"}`}
      onClick={() => handleButtonClick()}
    >
      {label}
    </button>
  );
};

export default Button;
