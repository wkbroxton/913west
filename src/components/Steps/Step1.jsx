import React, { useState } from "react";

export default function Step1({ addType }) {
  const [step1, setStep1] = useState(null);

  function handleOnChange(evt) {
    setStep1({type: evt})
  }

  function handleOnClick(evt) {
    evt.preventDefault();
    addType(step1); 
    setStep1(null)
  }

  function formComplete(evt){
    evt.preventDefault();
    if(Step1 === !null){ 
    }
  }

    return (
      <>
        <h1>Type of Project </h1>
        <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
            <option value="Website/Frontend">Website/Frontend</option>
            <option value="Mobile">Mobile: (iOS/Android)</option>
            <option value="Database/Backend">Database/Backend</option>
            <option value="MERN-Stack">MERN-Stack</option>
            <option value="VR/Metaverse">VR/Metaverse</option>
        </select>
      </>
    );
  }