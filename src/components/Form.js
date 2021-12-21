import React, { useState } from "react";

function Form({ onSubmitAdd }) {
  const [cash, setCash] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmitAdd(cash)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={cash}
          onChange={(e) => setCash(e.target.value)}
          type="number"
          name="cash"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Form;

//START FROM HERE onSUBMIT
