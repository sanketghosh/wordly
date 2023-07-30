import { useState } from "react";

/* taking the solution as input */
const useWordle = (solution) => {
  /* states */
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); //  each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  /* FUNCTION1: format a guess into an array of letter objects. e.g: [{key:'a', color: "yellow"}] */
  const formatGuess = () => {};

  /* FUNCTION2: add a new guess to the guesses state, update the isCorrect state if the guess is correct, add one to the turn state */
  const addNewGuess = () => {};

  /* FUNCTION3: handle keyup event and track current guess, if user presses enter, add the new guess */
  const handleKeyup = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
