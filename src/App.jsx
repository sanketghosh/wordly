import { useEffect, useState } from "react";
import { GameGrid, Header, KeyBoard } from "./components";

export default function App() {
  const [solution, setSolution] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/solutions");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      // function to get a random string from the array
      const randomSolution =
        jsonData[Math.floor(Math.random() * jsonData.length)];
      setSolution(randomSolution);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(solution);

  return (
    <main className="w-full flex items-center justify-center flex-col select-none">
      <Header />
      <GameGrid />
      <KeyBoard />
    </main>
  );
}
