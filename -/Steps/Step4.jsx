// import React, { useState } from "react";

// export default function Step4({ addType }) {
//   const [step4, setStep4] = useState([]);

//   function handleOnChange(evt) {
//     setStep4({type: evt})
//   }

//   function handleOnClick(evt) {
//     evt.preventDefault();
//     addType(step4); 
//     setStep4(null)
//   }

//   return (
//     <>
//       <h2>AAU Stories</h2>
//       <form onChange={(evt) => {handleOnChange(evt.target.value)}}>
//         <input maxLength="150" name="description" placeholder="Your User Story Here"></input>
//         <input maxLength="150" name="description" placeholder="Your User Story Here"></input>
//         <input maxLength="150" name="description" placeholder="Your User Story Here"></input>
//         <input maxLength="150" name="description" placeholder="Your User Story Here"></input>
//         <input maxLength="150" name="description" placeholder="Your User Story Here"></input>
//         <input maxLength="150" name="description" placeholder="Your User Story Here"></input>
//         <input maxLength="150" name="description" placeholder="Your User Story Here"></input>
//         <input maxLength="150" name="description" placeholder="Your User Story Here"></input>
//         {/* <hr />
//         <input
//           value={newAAU}
//           onChange={(evt) => setNewAAU(evt.target.value)}
//           placeholder="New AAU Story"
//           required
//           pattern=".{4,}"
//         />
//         <button type="submit" onSubmit={handleAddAAU}>ADD AAU</button> */}
//       </form>
//     </>
//   );
// }