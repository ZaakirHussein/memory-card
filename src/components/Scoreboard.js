import React from "react";

function Scoreboard({ displayCurrentScore, displayHighScore }) {
  return (
    <div className="flex gap-2">
      <p>Current Score: {displayCurrentScore}</p>
      <p>High Score: {displayHighScore}</p>
    </div>
  );
}

export default Scoreboard;
