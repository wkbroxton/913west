import React, { useState } from "react";
import Step from "../../components/Step/Step";
import "./IntakeFormPage.css";

const steps = [1,2,3,4,5,6,7,8]

export default function IntakeFormPage() {
  const [formData, setFormData] = useState([]);
  const [step, setStep] = useState(1);
  console.log(formData)

  function addType(type){
    console.log(type);
    setFormData(...formData, type)
  }

  return (
    <>
      <h1>Intake Form</h1>
      <form className="dDivs">
        { steps.map(function(s){
          return(
          <div className="qboxes" style={step !== s ? {display: "none"} : {}}>
          <Step addType={addType} setStep={setStep} step={step} steps={ steps }/>
        </div>)
        }) }
      </form>
    </>
  );
}
