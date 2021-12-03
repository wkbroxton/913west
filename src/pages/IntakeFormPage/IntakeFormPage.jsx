import React from 'react';
import Step1 from '../../components/Step1/Step1';
import "./IntakeFormPage.css"

export default function IntakeFormPage() {
  return (
    <>
    <h1>Intake Form</h1>
    <form className="dDivs">
      <div className="qboxes" >
      <Step1 />
      </div>
      <div className="qboxes">
        Starting State
      </div>
      <div className="qboxes">
        3</div>

      <div className="qboxes">4</div>
      <div className="qboxes"></div>
      <div className="qboxes">5</div>
      
      <div className="qboxes">6</div>
      <div className="qboxes">7</div>
      <div className="qboxes">8</div>
    </form>
    </>
  );
}