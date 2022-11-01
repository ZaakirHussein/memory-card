import React, { useState } from "react";

function Card({ playerName, playerImage, onClick, gameCallBackFunc }) {
  const [cardName, setCardName] = useState(playerName);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      onClick={() => {
        onClick(cardName);
      }}
    >
      <img className="w-full" src={playerImage} alt={playerName} />
      <h1 className="font-bold text-xl mb-2">{playerName}</h1>
    </div>
  );
}

export default Card;
