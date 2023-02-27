export default function Jogo(
    
    {
        errorLetter,
        word,
        setWord,
        palavras,
        setErrorLetter,
        wordColor,
        setWordColor,
        setDisable,
        setWordGame,
        wordGame,
        setSelectedLetters
    }
) {
    let randomWords = Math.floor(Math.random() * palavras.length);
    const sortWord = (palavras[randomWords].split(""));
    const renderWord = [];

    function startGame() {
        for (let g = 0; g < sortWord.length; g++) {
            renderWord.push("_ ");
        }

        setErrorLetter(0);
        setWordColor("");
        setWord(sortWord);
        setDisable("able");
        setWordGame(renderWord);
        setSelectedLetters([]);
    }

    return (
        <div className="game">
            <div className="images">
                <img data-test="game-image" 
                src={errorLetter ? `/assets/forca${errorLetter}.png` : ""}></img>
            </div>
            <button data-test="choose-word" onClick={startGame}>
                Escolher Palavra
            </button>
            <h1 data-test="word" 
                data-answer={word ? word.join("") : ""} 
                className={wordColor}>
                {wordGame}
            </h1>
        </div>
    );
}
