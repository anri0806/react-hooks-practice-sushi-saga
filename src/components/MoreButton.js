import React from "react";

function MoreButton({ onClickMore }) {
  return <button onClick={onClickMore}>More sushi!</button>;
}

export default MoreButton;

//onClick, create function to receive callback
//in SushiContainer.js, create function to set state + 4
