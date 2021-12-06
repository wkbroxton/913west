import React, { useState } from "react";
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
      <h1>Intake Form</h1>
      <form className="dDivs">
        <div className="qboxes">
          <Step1 
          addType={addType} 
          step={step}
          setStep={setStep}
          title={title} 
          setTitle={setTitle}
          Step={Step}
          Step1={Step1}
          Step2={Step2}
          Step3={Step3}
          Step4={Step4}
          Step5={Step5}
          Step6={Step6}
          Step7={Step7}
          Step8={Step8}
            />
        </div>
        <div className="qboxes">
          {/* <Step2 /> */}
        </div>
        <div className="qboxes">
          {/* <Step3 /> */}
        </div>

        <div className="qboxes">
          <Step8 />
        </div>
        <div className="qboxes">
          {/* {steps.map(function (s) {
            return (
              <div
                className="qboxes"
                style={step !== s ? { display: "none" } : {}}
              >
                <Step
                  addType={addType}
                  setStep={setStep}
                  // setTitle={setTitle}
                  step={step}
                  steps={steps}
                  // title={title}
                  // titles={titles}
                />
                <Steps 
                  Step1={Step1}
                  Step2={Step2}
                  Step3={Step3}
                  Step4={Step4}
                  Step5={Step5}
                  Step6={Step6}
                  Step7={Step7}
                  Step8={Step8}
                  setStep={setStep}
                />
              </div>
            );
          })} */}
        </div>
        <div className="qboxes">
          {/* <Step4 /> */}
        </div>

        <div className="qboxes">
          {/* <Step7 /> */}
        </div>
        <div className="qboxes">
          {/* <Step6 /> */}
        </div>
        <div className="qboxes">
          {/* <Step5 /> */}
        </div>
      </form>
      <form className="form"></form>
    </>
  );
}
