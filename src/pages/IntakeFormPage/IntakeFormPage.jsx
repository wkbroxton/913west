import React, { useState } from "react";
import ConfirmIntakeForm from "../../components/ConfirmIntakeForm/ConfirmIntakeForm";
import Step from "../../components/Step/Step";
import Step1 from "../../components/Steps/Step1";
import Step2 from "../../components/Steps/Step2";
import Step3 from "../../components/Steps/Step3";
import Step4 from "../../components/Steps/Step4";
import Step5 from "../../components/Steps/Step5";
import Step6 from "../../components/Steps/Step6";
import Step7 from "../../components/Steps/Step7";
import Step8 from "../../components/Steps/Step8";
import "./IntakeFormPage.css";

const steps = [1, 2, 3, 4, 5, 6, 7, 8];
const titles = [
  ["Type of Project"],
  ["Category Level"],
  ["Context for the Content"],
  ["AAU Stories"],
  ["Project References"],
  ["Files & Uploads"],
  ["Time Table"],
  ["The Design in Mind"],
];

export default function IntakeFormPage() {
  const [formData, setFormData] = useState([]);
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState(titles[0]);
  
  function addType(type) {
    console.log(type);
    setFormData(...formData, type);
  }

  return (
    <>
      <h1 className="page-heading">Intake Form</h1>
      <form className="dDivs">
        <div className="qboxes">
        <h1>Type of Project</h1>
        </div>
        <div className="qboxes">
        <h1>Categories</h1>
        </div>
        <div className="qboxes">
         <h1>Context for the Content</h1>
        </div>

        <div className="qboxes">
          <h1>The Design in Mind</h1>
        </div>
        <div className="qboxes">
          {steps.map(function (s) {
            return (
              <div
                className="qboxes"
                style={step !== s ? { display: "none" } : {}}
              >
           <Step />
              </div>
            );
          })}
        </div>
        <div className="qboxes">
        <h1>AAU Stories</h1>
        </div>

        <div className="qboxes">
        <h1>Calendar</h1>
        </div>
        <div className="qboxes">
        <h1>Files and Uploads</h1>
        </div>
        <div className="qboxes">
        <h1>Project References</h1>
        </div>
      </form>
      <form className="form"></form>
    </>
  );
}
