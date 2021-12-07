import React, { useState } from "react";

export default function Step6(addType) {
  const [step6, setStep6] = useState(null);

  function handleOnChange(evt) {
    setStep6({type: evt})
  }

  function handleOnClick(evt) {
    evt.preventDefault();
    // addType(step1); 
    setStep6(null)
  }

  function formComplete(evt){
    evt.preventDefault();
    if(Step6 === !null){ 
    }
  }
    return (
      <>
        <h1>Files and Uploads</h1>
        <div class="form-group" name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
          <label for="formFile" class="form-label mt-4">Default file input example</label>
          <input class="form-control" type="file" id="formFile" />
        </div>
      </>
    );
  }
