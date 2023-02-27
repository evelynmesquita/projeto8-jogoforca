export default function Letras(

    {
        word,
        setWord,
        setWordColor,
        wordGame,
        setWordGame,
        selectedLetters,
        setSelectedLetters,
        disable,
        setDisable,
        errorLetter,
        setErrorLetter
    }
) {
    const
        alfabeto = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ],
        updateWord = [],
        counter = errorLetter + 1,
        errorLimit = 6;


    function gameWin() {
        setWord("");
        setWordColor("greenWin");
        setDisable("disable");
        setWordGame(word);
    }

    function gameLose() {
        setWordColor("redLose");
        setErrorLetter(counter);
        setWord("");
        setDisable("disable");
        setWordGame(word);
    }

   

    return (
        <div className="letters">
            {alfabeto.map((letter) =>
                <button
                    data-test="letter"
                    key={letter}
                    className={selectedLetters.includes(letter) ? "disable" : disable}
                    disabled={selectedLetters.includes(letter) || word === ""}
                    onClick={(e) => selecionaBotao(letter)} >
                    {letter.toUpperCase()}
                </button>)}
        </div>
    );
}