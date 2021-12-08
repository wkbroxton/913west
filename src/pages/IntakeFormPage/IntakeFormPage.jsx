import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntakeFormPage.css";

export default function IntakeFormPage({ handleAddProject, showForm, setShowForm, editProject }) {
  const [formData, setFormData] = useState(showForm ? showForm : {
    projectType: "",
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  function handleOnChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  function handleSubmit(evt) {
    console.log("Hitting")
    evt.preventDefault();
    console.log(formData);
    if(showForm){
      editProject(formData)
    } else {
      handleAddProject(formData);
    }
    setShowForm(null);
  }

  return (
    <div className="form-container-project">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Start Your Project</legend>
          <div class="form-group">
            <label for="exampleSelect1" class="form-label mt-4">
              Type of Project
            </label>
            <select
              class="form-select"
              id="exampleSelect1"
              name="projectType"
              onChange={handleOnChange}
              value={formData.projectType}
              required
            >
              <option defaultValue=""></option>
              <option value="Website/Frontend">Website/Frontend</option>
              <option value="Mobile">Mobile: (iOS/Android)</option>
              <option value="Database/Backend">Database/Backend</option>
              <option value="MERN-Stack">MERN-Stack</option>
              <option value="VR/Metaverse">VR/Metaverse</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleSelect2" class="form-label mt-4">
              Category Tier
            </label>
            <select
              multiple=""
              class="form-select"
              id="exampleSelect2"
              name="tier"
              onChange={handleOnChange}
              value={formData.tier}
              required
            >
              <option defaultValue=""></option>
              <option value="Tier-1">
                Tier 1: Simple Standard Build | Small Reach/User Base || No
                ongoing maintenance
              </option>
              <option value="Tier-2">
                Tier 2: Existing Site Modernization || Midsize Reach/User Base
                || No ongoing maintenance
              </option>
              <option value="Tier-3">
                Tier 3: Modern MERN-STACK Build || Large Reach/User Base ||
                Scheduled ongoing maintenance
              </option>
            </select>
          </div>
          <div class="form-group" name="type">
            <label for="exampleSelect2" class="form-label mt-4">
              Context for the Content
            </label>
            <label class="col-form-label mt-4" for="inputDefault"></label>
            <input
              type="text"
              class="form-control"
              placeholder="Project Name"
              id="inputDefault"
              name="name"
              onChange={handleOnChange}
              value={formData.name}
              required
            />
            <label class="col-form-label mt-4" for="inputDefault">
              Description
            </label>
            <textarea
              type="text"
              class="form-control"
              rows="3"
              placeholder="Description"
              id="inputDefault"
              name="description"
              onChange={handleOnChange}
              value={formData.description}
              required
            />
          </div>
          <div
            class="form-group"
            name="type"
          >
            <label for="exampleSelect2" class="form-label mt-4">
              Project Reference Links
            </label>
            <label class="col-form-label mt-4" for="inputDefault"></label>
            <input
              type="text"
              class="form-control"
              placeholder="URL Reference"
              id="inputDefault"
              name="link1"
              onChange={handleOnChange}
              value={formData.link1}
            />
            <label class="col-form-label mt-4" for="inputDefault"></label>
            <input
              type="text"
              class="form-control"
              placeholder="URL Reference"
              id="inputDefault"
              name="link2"
              onChange={handleOnChange}
              value={formData.link2}
            />
            <label class="col-form-label mt-4" for="inputDefault"></label>
            <input
              type="text"
              class="form-control"
              placeholder="URL Reference"
              id="inputDefault"
              name="link3"
              onChange={handleOnChange}
              value={formData.link3}
            />
          </div>
          <button
            type="submit"
            class="btn btn-dark"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

