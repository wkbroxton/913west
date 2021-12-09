import React, { useEffect, useState } from "react";
import * as ProjectAPI from "../../utilities/projects-api";
import IntakeFormPage from "../IntakeFormPage/IntakeFormPage";

export default function DashboardPage({user, showForm, setShowForm, editProject}) {
  const [projects, setProjects] = useState([]);

  useEffect(function () {
    async function getAllProjects() {
      const project = await ProjectAPI.getAll();
      setProjects(project);
    }
    getAllProjects();
  }, []);

  async function deleteProject(id) {
    const newProject = await ProjectAPI.findOneAndDelete(id);
    setProjects(newProject);
  }

  function handleUpdate(project) {
    setShowForm(project);
  }

  return (
    <>
      {showForm ? <IntakeFormPage showForm={showForm} editProject={editProject} setShowForm={setShowForm}/> :
      <div style={{display: "flex", flexDirection: "column", alignContent: "center", width: "100%", justifyContent: "center"}}>
        <br />
        <h1>{user.name}'s</h1>
        <h3 className="dash-h3">Submitted Projects</h3>
        <br />
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{display: "flex",  alignSelf: "center", alignContent: "center", width: "100%", justifyContent: "center"}}>
          {projects.map((p) => (
            <div className="col" style={{display: "flex", width: "450px", flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
              <div
                className="card text-white bg-dark mb-3"
                style={{display: "flex", flexDirection: "column", alignContent: "center", height: "100%", width: "100%", justifyContent: "center"}}
              >
                <div className="card-header"></div>
                <div className="card-body">
                  <h4 className="card-title">{p.name}</h4>
                  <p className="card-text">{p.description}</p>
                  <p className="card-text">{p.projectType}</p>
                  <p className="card-text">{p.tier}</p>
                  <p className="card-text">{p.link1}</p>
                  <p className="card-text">{p.link2}</p>
                  <p className="card-text">{p.link3}</p>
                </div>
                <button className="btn btn-outline-light" onClick={()=> handleUpdate(p)} type="button">
                  EDIT
                </button>
                <button
                  className="btn btn-outline-light"
                  onClick={() => deleteProject(p._id)}
                  type="button"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>}
    </>
  );
}
