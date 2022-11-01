import React from "react";
import Scoreboard from "./Scoreboard";

function Header({ currentScore, highScore }) {
  return (
    <header className="flex flex-col items-center	  w-screen p-8 bg-blue-900 text-white text-3xl shadow-lg">
      <div>Memory Card Game</div>
      <Scoreboard
        displayCurrentScore={currentScore}
        displayHighScore={highScore}
      />
    </header>
  );
}

export default Header;
