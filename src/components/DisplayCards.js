import React from "react";
import Card from "./Card";
import images from "./utilities";

const DisplayCards = ({ arr, onClick }) => {
  return (
    <>
      {arr.slice(0, 9).map(({ name, imageSrc, id, clickCounter }) => (
        <Card
          playerName={name}
          playerImage={images[imageSrc]}
          onClick={onClick}
          key={id}
        />
      ))}
    </>
  );
};

export default DisplayCards;
