import { AiOutlineEnter } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  [
    <AiOutlineEnter className="text-xl md:text-2xl" />,
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    <FiDelete className="text-xl md:text-2xl" />,
  ],
];

export default function KeyBoard() {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      {keyboard.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex mb-2 items-center gap-1 md:gap-2 justify-center"
        >
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className="h-8 w-8 md:h-12 md:w-12 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-950 transition-all text-[13px] md:text-[15px] uppercase font-bold flex items-center justify-center"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
