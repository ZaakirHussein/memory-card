import React, { useState } from "react";
import uuid from "react-uuid";

function Card({ playerName, playerImage, gameCallBackFunc }) {
  const [cardCounter, setCardCounter] = useState(0);
  const [id, setId] = useState(uuid());

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={playerImage} alt={playerName} />
      <h1 className="font-bold text-xl mb-2">{playerName}</h1>
    </div>
  );
}

export default Card;
