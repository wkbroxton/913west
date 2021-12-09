import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-date-picker';
import "./IntakeFormPage.css";

export default function IntakeFormPage({ handleAddProject, showForm, setShowForm, editProject }) {
  const [value, onChange] = useState(new Date());
  const [formData, setFormData] = useState(showForm ? showForm : {
    user: "",
    projectType: "",
    name: "",
    description: "",
    link1: "",
    link2: "",
    link3: "",
    dueDate: "",
  });

  const navigate = useNavigate();

  function handleOnChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  function handleSubmit(evt) {
    console.log("Hitting")
    evt.preventDefault();
    if(showForm){
      editProject(formData);
      setShowForm(null);
    } else {
      handleAddProject(formData);
      navigate("/Dashboard")
    }
  }

  return (
    <div className="form-container-project">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="intake-legend">{showForm ? "Edit" : "Start"} Your Project</legend>
          <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">
              Type of Project
            </label>
            <select
              className="form-select"
              id="inputDefault"
              name="projectType"
              onChange={handleOnChange}
              value={formData.projectType}
              required
            >
              <option defaultValue=""></option>
              <option value="Website/Frontend">Website/Frontend</option>
              <option value="Mobile">Mobile App: (iOS/Android)</option>
              <option value="Database/Backend">Database/Backend</option>
              <option value="Full-stack">Full-Stack/Frontend and Backend</option>
              <option value="MERN-Stack">MERN-Stack</option>
              <option value="VR/Metaverse">VR/Metaverse</option>
            </select>
          </div>
          <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">
              Category Tier
            </label>
            <select
              multiple=""
              className="form-select"
              id="inputDefault"
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
          <br />
          <div className="form-group" name="type">
          <h6 className="col-form-label mt-4" for="inputDefault">
              Context for the Content
            </h6>
            <br />
            <h6>Project Name</h6>
            <label className="col-form-label mt-4" for="inputDefault"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Project Name"
              id="inputDefault"
              name="name"
              onChange={handleOnChange}
              value={formData.name}
              required
            />
            <label className="col-form-label mt-4" for="inputDefault">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
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
            className="form-group"
            name="type"
          >
            <label className="col-form-label mt-4" for="inputDefault"> Project Reference Links</label>
            <input
              type="text"
              className="form-control"
              placeholder="URL Reference"
              id="inputDefault"
              name="link1"
              onChange={handleOnChange}
              value={formData.link1}
            />
            <label className="col-form-label mt-4" for="inputDefault">Second Reference (Optional)</label>
            <input
              type="text"
              className="form-control"
              placeholder="URL Reference"
              id="inputDefault"
              name="link2"
              onChange={handleOnChange}
              value={formData.link2}
            />
            <label className="col-form-label mt-4" for="inputDefault">Third Reference (Optional)</label>
            <input
              type="text"
              className="form-control"
              placeholder="URL Reference"
              id="inputDefault"
              name="link3"
              onChange={handleOnChange}
              value={formData.link3}
            />
          </div>
          <label for="exampleSelect2" className="form-label mt-4">
              Due Date
            </label>
            <div>
              <DatePicker
                onChange={onChange}
                value={value}
                name="dueDate"
              />
            </div>
          <button
            type="submit"
            className="btn btn-dark"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

