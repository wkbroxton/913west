import React, { useState } from "react";

export default function Step3({addType}) {
  const [step3, setStep3] = useState([]);

  function handleOnChange(evt) {
    setStep3({type: evt})
  }

  function handleOnClick(evt) {
    evt.preventDefault();
    addType(step3); 
    setStep3(null)
  }

  function formComplete(evt){
    evt.preventDefault();
    if(Step3 === !null){ 
    }
  }
    return (
      <form name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
        <h1>Context for the Content</h1>
        <div className="cat-divs">
          <label className="left">Project Name:</label><input className="right" type="text" name="name" />
          <label className="left">Description:</label><textarea className="right" maxLength="1000" name="description"></textarea>
          <label className="left">Website:</label><input className="right" type="text" name="link" />
        </div>
    </form>
    );
  }