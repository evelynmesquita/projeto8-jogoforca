import React, { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

export default function App() {
  
  const
    [word, setWord] = useState(""),
    [wordColor, setWordColor] = useState(""),
    [wordGame, setWordGame] = useState(""),
    [selectedLetters, setSelectedLetters] = useState([]),
    [disable, setDisable] = useState("disable"),
    [errorLetter, setErrorLetter] = useState(0);

  return (
    <div className="backgroundJogo">
      <Jogo
        word={word}
        setWord={setWord}
        palavras={palavras}
        wordColor={wordColor}
        setWordColor={setWordColor}
        wordGame={wordGame}
        setWordGame={setWordGame}
        setDisable={setDisable}
        setSelectedLetters={setSelectedLetters}
        errorLetter={errorLetter}
        setErrorLetter={setErrorLetter}
      />
      <Letras
        word={word}
        setWord={setWord}
        setWordColor={setWordColor}
        wordGame={wordGame}
        setWordGame={setWordGame}
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
        disable={disable}
        setDisable={setDisable}
        errorLetter={errorLetter}
        setErrorLetter={setErrorLetter}
      />
    </div>
  );
}
