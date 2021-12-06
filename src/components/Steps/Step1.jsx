import { useState } from 'react';
import { Link } from "react-router-dom";
import Step2 from './Step2';

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
      return console.log("Hello");
    }
  }

    return (
      <>
        <h1>Step 1: Type of Project </h1>
        <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
            <option value="Website/Frontend">Website/Frontend</option>
            <option value="Mobile">Mobile: (iOS/Android)</option>
            <option value="Database/Backend">Database/Backend</option>
            <option value="MERN-Stack">MERN-Stack</option>
            <option value="VR/Metaverse">VR/Metaverse</option>
        </select>
        <button onClick={(evt) => {handleOnClick(evt.target.value)}}>Next</button>
      </>
    );
  }