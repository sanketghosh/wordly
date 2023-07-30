import { tileNumberArray } from "../utils/tileNumberArray";

export default function GameGrid() {
  return (
    <div className="py-5">
      <div className="max-w-md mx-auto content-center grid-box gap-1.5">
        {tileNumberArray.map((item) => {
          return (
            <div
              key={item}
              className="text-2xl border-2 border-gray-700 flex items-center justify-center p-4 rounded-[5px] text-gray-200 font-extrabold select-none uppercase"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
