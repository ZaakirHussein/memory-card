import React from "react";
import Card from "./Card";

const DisplayCards = ({ arr }) => {
  console.log(arr);
  return (
    <>
      <div className="game-body">
        <h1>Display Cards Component</h1>
        {arr.map((player) => {
          <main className="grid justify-center items-center text-center grid-cols-3 gap-10">
            <div>Hello</div>
            <Card name={player.name} image={player.imageSrc} />
            <p>name:{player.name}</p>
            <p>img src:{player.imageSrc}</p>
          </main>;
        })}
      </div>
    </>
  );
};

export default DisplayCards;
