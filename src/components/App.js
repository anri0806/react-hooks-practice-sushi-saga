import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

//const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((res) => res.json())
      .then((data) => {
        const updatedSushi = data.map((d) => {
          return { ...d, eaten: false };
        });

        setSushis(updatedSushi);
      });
  }, []);

  function handleEaten(item) {
    if (money >= item.price) {
      const updatedSushi = sushis.map((sushi) =>
        sushi.id === item.id ? { ...sushi, eaten: true } : sushi
      );

      setSushis(updatedSushi);
      setMoney(money - item.price);
    } else {
      alert("You don't have enough money!");
    }
  }

  function handleAddMoney(additionalMoney) {
    setMoney(money + parseInt(additionalMoney));
  }

  const eatenSushi = sushis.filter((sushi) => sushi.eaten === true);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onClickEaten={handleEaten} />
      <Table money={money} plates={eatenSushi} onSubmitAdd={handleAddMoney} />
    </div>
  );
}

export default App;
