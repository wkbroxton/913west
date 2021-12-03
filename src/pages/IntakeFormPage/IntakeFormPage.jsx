import React from "react";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import Step4 from "../../components/Step4/Step4";
import Step5 from "../../components/Step5/Step5";
import Step6 from "../../components/Step6/Step6";
import Step7 from "../../components/Step7/Step7";
import Step8 from "../../components/Step8/Step8";
import "./IntakeFormPage.css";

export default function IntakeFormPage() {
  return (
    <>
      <h1>Intake Form</h1>
      <form className="dDivs">
        <div className="qboxes">
          <Step1 />
        </div>
        <div className="qboxes">
          <Step2 />
        </div>
        <div className="qboxes">
          <Step3 />
        </div>

        <div className="qboxes">
          <Step4 />
        </div>
        <div className="qboxes"></div>
        <div className="qboxes">
          <Step5 />
        </div>

        <div className="qboxes">
          <Step6 />
        </div>
        <div className="qboxes">
          <Step7 />
        </div>
        <div className="qboxes">
          <Step8 />
        </div>
      </form>
    </>
  );
}
