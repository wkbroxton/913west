// import { useState } from 'react';

// export default function Step({ addType, step, setStep }) {
//   const [step1, setStep1] = useState(null);

//   function handleOnChange(evt) {
//     setStep1({type: evt})
//   }

//   function handleOnClick(evt) {
//     evt.preventDefault();
//     // addType(step1); 
//     setStep1(null)
//     if(step !== 8) setStep(step +1)
//   };

//     return (
//       <>
//         {step === 1 &&
//       < form>
//         <h1>{ `Step ${step}: ` } </h1>
//         <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
//             <option>Choose Your Project Type</option>
//             <option value="Website/Frontend">Website/Frontend</option>
//             <option value="Mobile">Mobile: (iOS/Android)</option>
//             <option value="Database/Backend">Database/Backend</option>
//             <option value="MERN-Stack">MERN-Stack</option>
//             <option value="VR/Metaverse">VR/Metaverse</option>
//         </select>
//         <button onClick={(evt) => handleOnClick(evt)}>Next</button>
//         </form>}
//         {step === 2 &&
//       < form>
//         <h1>{ `Step ${step}: ` } </h1>
//         <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
//             <option>Choose Your Project Type</option>
//             <option value="Website/Frontend">Website/Frontend</option>
//             <option value="Mobile">Mobile: (iOS/Android)</option>
//             <option value="Database/Backend">Database/Backend</option>
//             <option value="MERN-Stack">MERN-Stack</option>
//             <option value="VR/Metaverse">VR/Metaverse</option>
//         </select>
//         <button onClick={(evt) => handleOnClick(evt)}>Next</button>
//         </form>}
//         {step === 3 &&
//       < form>
//         <h1>{ `Step ${step}: ` } </h1>
//         <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
//             <option>Choose Your Project Type</option>
//             <option value="Website/Frontend">Website/Frontend</option>
//             <option value="Mobile">Mobile: (iOS/Android)</option>
//             <option value="Database/Backend">Database/Backend</option>
//             <option value="MERN-Stack">MERN-Stack</option>
//             <option value="VR/Metaverse">VR/Metaverse</option>
//         </select>
//         <button onClick={(evt) => handleOnClick(evt)}>Next</button>
//         </form>}
//         {step === 4 &&
//       < form>
//         <h1>{ `Step ${step}: ` } </h1>
//         <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
//             <option>Choose Your Project Type</option>
//             <option value="Website/Frontend">Website/Frontend</option>
//             <option value="Mobile">Mobile: (iOS/Android)</option>
//             <option value="Database/Backend">Database/Backend</option>
//             <option value="MERN-Stack">MERN-Stack</option>
//             <option value="VR/Metaverse">VR/Metaverse</option>
//         </select>
//         <button onClick={(evt) => handleOnClick(evt)}>Next</button>
//         </form>}
//         {step === 5 &&
//       < form>
//         <h1>{ `Step ${step}: ` } </h1>
//         <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
//             <option>Choose Your Project Type</option>
//             <option value="Website/Frontend">Website/Frontend</option>
//             <option value="Mobile">Mobile: (iOS/Android)</option>
//             <option value="Database/Backend">Database/Backend</option>
//             <option value="MERN-Stack">MERN-Stack</option>
//             <option value="VR/Metaverse">VR/Metaverse</option>
//         </select>
//         <button onClick={(evt) => handleOnClick(evt)}>Next</button>
//         </form>}
//         {step === 6 &&
//       < form>
//         <h1>{ `Step ${step}: ` } </h1>
//         <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
//             <option>Choose Your Project Type</option>
//             <option value="Website/Frontend">Website/Frontend</option>
//             <option value="Mobile">Mobile: (iOS/Android)</option>
//             <option value="Database/Backend">Database/Backend</option>
//             <option value="MERN-Stack">MERN-Stack</option>
//             <option value="VR/Metaverse">VR/Metaverse</option>
//         </select>
//         <button onClick={(evt) => handleOnClick(evt)}>Next</button>
//         </form>}
//         {step === 7 &&
//       < form>
//         <h1>{ `Step ${step}: ` } </h1>
//         <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
//             <option>Choose Your Project Type</option>
//             <option value="Website/Frontend">Website/Frontend</option>
//             <option value="Mobile">Mobile: (iOS/Android)</option>
//             <option value="Database/Backend">Database/Backend</option>
//             <option value="MERN-Stack">MERN-Stack</option>
//             <option value="VR/Metaverse">VR/Metaverse</option>
//         </select>
//         <button onClick={(evt) => handleOnClick(evt)}>Next</button>
//         </form>}
//         {step === 8 &&
//       < form>
//         <h1>{ `Step ${step}: ` } </h1>
//         <select name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
//             <option>Choose Your Project Type</option>
//             <option value="Website/Frontend">Website/Frontend</option>
//             <option value="Mobile">Mobile: (iOS/Android)</option>
//             <option value="Database/Backend">Database/Backend</option>
//             <option value="MERN-Stack">MERN-Stack</option>
//             <option value="VR/Metaverse">VR/Metaverse</option>
//         </select>
//         <button onClick={(evt) => handleOnClick(evt)}>Next</button>
//         </form>}
//       </>
//     );
//   }