import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";
import Step6 from "../Steps/Step6";
import Step7 from "../Steps/Step7";
import Step8 from "../Steps/Step8";
import ConfirmIntakeForm from "../ConfirmIntakeForm/ConfirmIntakeForm"; 

export default function Step({ addType }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

//   function handleOnChange(evt) {
//     setStep1({type: evt})
//   }

  function handleOnClick(evt) {
    evt.preventDefault();
    if(step !== 8) {
      setStep(step +1);
    } else {
      return {ConfirmIntakeForm};
    }
  };

    return (
      <>
        {step === 1 &&
      < form>
        <h2>{ `Step ${step}` } </h2>
        <Step1 />
        <button onClick={(evt) => handleOnClick(evt)}>Next</button>
        </form>}                   
        {step === 2 &&
      < form>
        <h2>{ `Step ${step}` } </h2>
        <Step2 />
        <button onClick={(evt) => handleOnClick(evt)}>Next</button>
        </form>}
        {step === 3 &&
      < form>
        <h2>{ `Step ${step}` } </h2>
        <Step3 />
        <button onClick={(evt) => handleOnClick(evt)}>Next</button>
        </form>}
        {step === 4 &&
      < form>
        <h2>{ `Step ${step}` } </h2>
        <Step4 />
        <button onClick={(evt) => handleOnClick(evt)}>Next</button>
        </form>}
        {step === 5 &&
      < form>
        <h2>{ `Step ${step}` } </h2>
        <Step5 />
        <button onClick={(evt) => handleOnClick(evt)}>Next</button>
        </form>}
        {step === 6 &&
      < form>
        <h2>{ `Step ${step}` } </h2>
        <Step6 />
        <button onClick={(evt) => handleOnClick(evt)}>Next</button>
        </form>}
        {step === 7 &&
      < form>
        <h2>{ `Step ${step}` } </h2>
        <Step7 />
        <button onClick={(evt) => handleOnClick(evt)}>Next</button>
        </form>}
        {step === 8 &&
      < form>
        <h2>{ `Step ${step}` } </h2>
        <Step8 />
        <button onClick={(evt) => handleOnClick(evt)} >Next</button>
        </form>}
      </>
    );
  }