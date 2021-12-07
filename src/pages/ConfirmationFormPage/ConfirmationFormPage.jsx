import React, { useState } from "react";

export default function ConfirmIntakeForm( {addStep} ) {
  const [step1, setStep1] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [formData, setFormData] = useState({});

  function handleOnChange(evt) {
    const newFormData = {...formData, [evt.target]: evt.target};
    setFormData(newFormData)
    setStep1({type: evt})
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addStep(formData);
    setFormData()
    setStep1(null)
  }

  return (
    <form>
      <fieldset>
        <legend>Start Your Project</legend>
        <div class="form-group">
          <label for="exampleSelect1" class="form-label mt-4">Type of Project</label>
          <select class="form-select" id="exampleSelect1" name="type" onChange={(evt) => {handleOnChange(evt.target.value)}} required>
            <option defaultValue=""></option>
            <option value="Website/Frontend">Website/Frontend</option>
            <option value="Mobile">Mobile: (iOS/Android)</option>
            <option value="Database/Backend">Database/Backend</option>
            <option value="MERN-Stack">MERN-Stack</option>
            <option value="VR/Metaverse">VR/Metaverse</option>
        </select>
        </div>
        <div class="form-group">
          <label for="exampleSelect2" class="form-label mt-4">Category Tier</label>
          <select multiple="" class="form-select" id="exampleSelect2" name="type" onChange={(evt) => {handleOnChange(evt.target.value)}} required>
            <option defaultValue=""></option>
            <option value="Tier-1">Tier 1: Simple Standard Build | Small Reach/User Base || No ongoing maintenance</option>
            <option value="Tier-2">Tier 2: Existing Site Modernization || Midsize Reach/User Base || No ongoing maintenance</option>
            <option value="Tier-3">Tier 3: Modern MERN-STACK Build || Large Reach/User Base || Scheduled ongoing maintenance</option>
          </select>
        </div>
        <div class="form-group" name="type">
          <label for="exampleSelect2" class="form-label mt-4">Context for the Content</label>
            <label class="col-form-label mt-4" for="inputDefault"></label>
            <input type="text" class="form-control" placeholder="Project Name" id="inputDefault" onChange={(evt) => {handleOnChange(evt.target.value)}} required />
            <label class="col-form-label mt-4" for="inputDefault">Description</label>
            <textarea type="text" class="form-control" id="exampleTextarea" rows="3" placeholder="Description" id="inputDefault" onChange={(evt) => {handleOnChange(evt.target.value)}} required/>
        </div>
        <div class="form-group" name="type" onChange={(evt) => {handleOnChange(evt.target.value)}}>
          <label for="exampleSelect2" class="form-label mt-4">Project Reference Links</label>
            <label class="col-form-label mt-4" for="inputDefault"></label>
            <input type="text" class="form-control" placeholder="URL Reference" id="inputDefault" onChange={(evt) => {handleOnChange(evt.target.value)}} required/>
            <label class="col-form-label mt-4" for="inputDefault"></label>
            <input type="text" class="form-control" placeholder="URL Reference" id="inputDefault" onChange={(evt) => {handleOnChange(evt.target.value)}} required/>
            <label class="col-form-label mt-4" for="inputDefault"></label>
            <input type="text" class="form-control" placeholder="URL Reference" id="inputDefault" onChange={(evt) => {handleOnChange(evt.target.value)}} required/>
        </div>
        <div class="form-group">
          <label for="exampleTextarea" class="form-label mt-4">Example textarea</label>
          <textarea class="form-control" id="exampleTextarea" rows="3" onChange={(evt) => {handleOnChange(evt.target.value)}} required></textarea>
        </div>
        <div class="form-group">
          <label for="formFile" class="form-label mt-4">Default file input example</label>
          <input class="form-control" type="file" id="formFile" onChange={(evt) => {handleOnChange(evt.target.value)}} required/>
        </div>
        <button type="submit" class="btn btn-primary"type="submit" 
      onClick={handleSubmit}>Submit</button>
      </fieldset>
  </form> 
      );
    }