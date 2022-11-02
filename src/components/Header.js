import React from "react";
import Scoreboard from "./Scoreboard";
import logo from "../images/logo/MemoryCard-transparent.png";

function Header({ currentScore, highScore }) {
  return (
    <header className="flex px-24 justify-between	items-center w-screen bg-blue-900 text-white text-3xl shadow-lg mb-2	">
      <img src={logo} alt="logo" className="max-h-36 p-2"></img>
      <div className="flex flex-col text-center 	">
        <h1 className="font-bold ">
          Let's see how good your memory is, pick a card!
        </h1>
        <h4 className="text-lg italic pt-2 ">
          However, make you haven't clicked it before...
        </h4>
      </div>
      <Scoreboard
        displayCurrentScore={currentScore}
        displayHighScore={highScore}
      />
    </header>
  );
}

export default Header;
