import React from "react";
import { useState } from "react/cjs/react.development";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, eaten, onClickEaten }) {
  const [index, setIndex] = useState(0);


  function handleMoreSushi() {
    setIndex(index + 4);

    if(index === 100) {
      setIndex(0)
    }
  }

  const sushiList = sushis
    .slice(index, index + 4)
    .map((sushi) => (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        eaten={eaten}
        onClickEaten={onClickEaten}
      />
    ));

  return (
    <div className="belt">
      {sushiList}
      <MoreButton onClickMore={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
