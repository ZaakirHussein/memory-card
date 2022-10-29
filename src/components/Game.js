import React, { useState, useEffect } from "react";
import playerObjs from "./playerObjs";
import DisplayCards from "./DisplayCards";

function Game() {
  const [playerObjStorage, setPlayerObjStorage] = useState();

  const randomNoRepeats = async () => {
    let ninePlayerObjs = [];
    for (let i = 0; i < 9; i++) {
      let index = Math.floor(Math.random() * playerObjs.length);
      let randomPlayerObj = playerObjs[index];
      if (!ninePlayerObjs.includes(randomPlayerObj)) {
        ninePlayerObjs.push(randomPlayerObj);
      }
    }
    return setPlayerObjStorage(ninePlayerObjs);
  };

  useEffect(() => {
    randomNoRepeats();
  }, []);

  if (!playerObjStorage) {
    return (
      <p>
        ninePlayerObjs is still an empty arr and which means no data being
        passed to DisplayCards
      </p>
    );
  }

  return <DisplayCards arr={playerObjStorage} />;
}

export default Game;
