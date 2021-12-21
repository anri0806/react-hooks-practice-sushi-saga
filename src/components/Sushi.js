import React from "react";

function Sushi({ sushi, onClickEaten }) {
  
  function handleClickEaten() {
    if(sushi.eaten === false) {
      onClickEaten(sushi)
    } else {
      alert("Nothing on the plate!")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClickEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {sushi.eaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - $ {sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;

//Remove on DOM
//onClick, create function to receive callback
// in App.js, create state to store eaten boolean
//create function to setEaten(true)
//pass this function to Sushi.js
