import React from "react";

function Scoreboard({ displayCurrentScore, displayHighScore }) {
  return (
    <div className="flex gap-2 flex-col text-blue-900 text-lg ">
      <p className="bg-slate-100 p-2 rounded font-bold">
        Current Score: {displayCurrentScore}
      </p>
      <p className="bg-slate-100 p-2 rounded italic	">
        High Score: {displayHighScore}
      </p>
    </div>
  );
}

export default Scoreboard;
