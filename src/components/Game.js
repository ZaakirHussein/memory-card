import React, { useState, useEffect } from "react";
import Header from "./Header";
import playerObjs from "./playerObjs";
import DisplayCards from "./DisplayCards";

function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [playerCardStorage, setPlayerCardStorage] = useState(playerObjs);
  const [doneShuffling, setDoneShuffling] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);

  const handleToggle = () => {
    setDoneShuffling((prev) => ({ ...prev, doneShuffling: true }));
  };

  const shuffleCardStorage = () => {
    let currentIndex = playerCardStorage.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [playerCardStorage[currentIndex], playerCardStorage[randomIndex]] = [
        playerCardStorage[randomIndex],
        playerCardStorage[currentIndex],
      ];
    }

    return playerCardStorage;
  };

  const newRound = () => {
    setCurrentScore((currentScore) => currentScore + 1);
  };

  const endGame = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      setClickedCards([]);
    }
    setClickedCards([]);
    return setCurrentScore(0);
  };

  const handleCardClick = (name) => {
    const foundCard = playerCardStorage.find(
      (matchingCard) => matchingCard.name === name
    );

    const wasCardClicked = clickedCards.some((card) => card.name === name);

    if (!wasCardClicked) {
      setClickedCards([...clickedCards, foundCard]);
      return newRound();
    }
    alert("The game has ended, let's start a new round!");
    return endGame();
  };

  useEffect(() => {
    document.title = "Memory Card Game";
    shuffleCardStorage();
    handleToggle();
  }, [clickedCards, currentScore]);

  if (!doneShuffling) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex items-center flex-col bg-slate-100	">
      <Header currentScore={currentScore} highScore={highScore} />
      <div className="grid grid-cols-3 gap-2 place-items-center	w-1/2">
        <DisplayCards arr={playerCardStorage} onClick={handleCardClick} />
      </div>
    </div>
  );
}

export default Game;
