import React, { useState, useEffect } from "react";
import playerObjs from "./playerObjs";
import DisplayCards from "./DisplayCards";

function Game() {
  const [playerCardStorage, setPlayerCardStorage] = useState(playerObjs);
  const [doneShuffling, setDoneShuffling] = useState(false);

  const [clickedCards, setClickedCards] = useState([]);

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

  const handleCardClick = (name) => {
    const foundCard = playerCardStorage.find(
      (matchingCard) => matchingCard.name === name
    );

    const wasCardClicked = clickedCards.some((card) => card.name === name);

    if (!wasCardClicked) {
      console.log(`adding ${foundCard.name} to clickedCards`);
      console.log(wasCardClicked);

      return setClickedCards([...clickedCards, foundCard]);
      // newRound/refresh
    }

    console.log(` ${foundCard.name} has already been clicked!`);
    console.log(wasCardClicked);

    // endGame()
  };

  useEffect(() => {
    shuffleCardStorage();
    setDoneShuffling(true);
    // add dependency that updates on clickedCards change
  }, []);

  if (!doneShuffling) {
    return <div>Loading</div>;
  }

  return (
    <div className="grid grid-cols-3">
      <DisplayCards arr={playerCardStorage} onClick={handleCardClick} />
    </div>
  );
}

export default Game;
