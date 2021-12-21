import React from "react";
import Form from "./Form";

function Table({ plates = [], money, onSubmitAdd }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">You have: $ {money} remaining!</h1>
      <div className="table">
        <Form onSubmitAdd={onSubmitAdd} />
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
