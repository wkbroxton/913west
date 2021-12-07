import React, { useState } from "react";

export default function Step5(addType) {
  const [step5, setStep5] = useState([]);

  function handleOnChange(evt) {
    setStep5({type: evt})
  }

  function handleOnClick(evt) {
    evt.preventDefault();
    addType(step5); 
    setStep5(null)
  }

  return (
    <>
      <h2>Project References</h2>
      <form onChange={(evt) => {handleOnChange(evt.target.value)}}>
        <label>What Do you like about this Reference?</label>
        <input maxLength="150" name="description" placeholder="URL Link"></input>
        <label>What Do you like about this Reference?</label>
        <input maxLength="150" name="description" placeholder="URL Link"></input>
        <label>What Do you like about this Reference?</label>
        <input maxLength="150" name="description" placeholder="URL Link"></input>
        <label>What Do you like about this Reference?</label>
        <input maxLength="150" name="description" placeholder="URL Link"></input>
      </form>
    </>
  );
}