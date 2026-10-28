import { useState } from "react";
// css module, so these class names only apply to this component
import styles from "./Game.module.css";

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

// object variable styles, reused on both choice rows
const choiceStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: 40,
};

const emojiStyles = {
  fontSize: 64,
  marginRight: 20,
};

const nameStyles = {
  margin: 0,
  fontSize: 24,
  color: "#ffff",
};

const resultStyle = {
  marginTop: 40,
  fontSize: 48,
  color: "#ffff",
};

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  // computer picks at random, then we check who won
  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  // back to null so the results section hides again
  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      {/* inline style, only used on the title */}
      <h1 style={{ fontSize: 48, marginTop: 0 }}>Rock Paper Scissors</h1>
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            className={styles.button}
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {/* results only show once both picks exist */}
      {playerChoice && codeyChoice && (
        <div className={styles.results}>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{codeyChoice.emoji}</span>
            <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyle}>{result}</h2>
          <button className={styles.button} onClick={resetGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
