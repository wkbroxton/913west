import React, { useState } from "react";
import Step1 from './Step1';

export default function Step2({addType}) {
  const [step2, setStep2] = useState([]);

  function handleOnChange(evt) {
    setStep2({type: evt})
  }

  function handleOnClick(evt) {
    evt.preventDefault();
    addType(step2); 
    setStep2(null)
  }

  function formComplete(evt){
    evt.preventDefault();
    if(Step2 === !null){ 
    }
  }
    return (
      <>
        <h1>Category Tier</h1>
        <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
            <option value="Tier-1">Tier 1: Simple Standard Build | Small Reach/User Base || No ongoing maintenance</option>
            <option value="Tier-2">Tier 2: Existing Site Modernization || Midsize Reach/User Base || No ongoing maintenance</option>
            <option value="Tier-3">Tier 3: Modern MERN-STACK Build || Large Reach/User Base || No ongoing maintenance</option>
        </select>
      </>
    );
  }