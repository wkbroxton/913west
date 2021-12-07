import React, { useState } from "react";

export default function Step1({ addStep }) {
  const [step1, setStep1] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [formData, setFormData] = useState({});

  function handleOnChange(evt) {
    const newFormData = {...formData, [evt.target.name]: evt.target.value};
    setFormData(newFormData)
    setStep1({type: evt})
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addStep(formData);
    setFormData()
    setStep1(null)
  }

  function formComplete(evt){
    evt.preventDefault();
    if(Step1 === !null){ 
    }
  }

    return (
      <>
        <h3>Type of Project </h3>
        <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}} required>
            <option default value=""></option>
            <option value="Website/Frontend">Website/Frontend</option>
            <option value="Mobile">Mobile: (iOS/Android)</option>
            <option value="Database/Backend">Database/Backend</option>
            <option value="MERN-Stack">MERN-Stack</option>
            <option value="VR/Metaverse">VR/Metaverse</option>
        </select>
      </>
    );
  }