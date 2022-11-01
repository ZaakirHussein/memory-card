import React, { useState } from "react";

function Card({ playerName, playerImage, onClick }) {
  const [cardName, setCardName] = useState(playerName);

  return (
    <div
      className="flex justify-center flex-col rounded-lg shadow-lg bg-white max-w-sm cursor-pointer"
      onClick={() => {
        onClick(cardName);
      }}
    >
      <img
        className="object-contain h-48 w-full"
        src={playerImage}
        alt={playerName}
      />
      <div className="p-2">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{playerName}</h5>
      </div>
    </div>
  );
}

export default Card;
