import { ChevronRight, ChevronLeft } from "lucide-react";

type Props = {
  type: "next" | "prev";
  onClickHandler: () => void;
  isVisible: boolean;
};

const CarouselArrowButton = ({ type, onClickHandler, isVisible }: Props) => {
  return (
    <button
      onClick={onClickHandler}
      className={` flex justify-center items-center opacity-0 ${
        isVisible && "opacity-100 "
      } duration-300 transition-all ease-in-out absolute top-1/2 ${
        type === "prev" ? "left-4" : "right-4"
      } rounded-full bg-white p-2 shadow-md z-10 text-gray-400`}
    >
      {type === "prev" ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
};

export default CarouselArrowButton;
