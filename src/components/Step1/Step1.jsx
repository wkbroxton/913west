import { useState } from 'react';

export default function Step1({ addType }) {
  const [step1, setStep1] = useState(null);

  function handleOnChange(evt) {
    setStep1({type: evt})
  }

  function handleOnClick(evt) {
    evt.preventDefault();
    console.log("Hitting");
    addType(step1); 
    setStep1(null)
  }

    return (
      <>
        <h1>Step 1: Type of Project</h1>
        <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
            <option>Choose Your Project Type</option>
            <option value="Website/Frontend">Website/Frontend</option>
            <option value="Mobile">Mobile: (iOS/Android)</option>
            <option value="Database/Backend">Database/Backend</option>
            <option value="MERN-Stack">MERN-Stack</option>
            <option value="VR/Metaverse">VR/Metaverse</option>
        </select>
        <button onClick={(evt) => handleOnClick(evt)}>Next</button>
      </>
    );
  }