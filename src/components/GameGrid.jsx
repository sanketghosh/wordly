import { tileNumberArray } from "../utils/tileNumberArray";

export default function GameGrid() {
  return (
    <div className="py-3">
      <div className="max-w-md mx-auto content-center grid-box gap-1.5">
        {tileNumberArray.map((item) => {
          return (
            <div
              key={item}
              className="text-xl md:text-2xl border-2 border-gray-800 flex items-center justify-center p-4 rounded-[5px] font-bold md:font-extrabold  uppercase"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
