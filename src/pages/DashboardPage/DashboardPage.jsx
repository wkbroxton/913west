import React, { useEffect, useState } from "react";
import * as ProjectAPI from "../../utilities/projects-api";
import IntakeFormPage from "../IntakeFormPage/IntakeFormPage";

export default function DashboardPage({showForm, setShowForm, editProject}) {
  const [projects, setProjects] = useState([]);

  useEffect(function () {
    async function getAllProjects() {
      const project = await ProjectAPI.getAll();
      console.log("What's in Here", project);
      setProjects(project);
    }
    getAllProjects();
  }, []);

  async function deleteProject(id) {
    const newProject = await ProjectAPI.findOneAndDelete(id);
    console.log("Say Nite-Nite");
    setProjects(newProject);
  }

  function handleUpdate(project) {
    setShowForm(project);
  }

  return (
    <>
      {showForm ? <IntakeFormPage showForm={showForm} editProject={editProject} setShowForm={setShowForm}/> :
      <div>
        <br />
        <h1>DashboardPage</h1>
        <br />
        <br />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((p) => (
            <div class="col">
              <div
                class="card text-white bg-dark mb-3"
                style={{ maxWidth: "30rem", maxHeight: "100vh" }}
              >
                <div class="card-header"></div>
                <div class="card-body">
                  <h4 class="card-title">{p.name}</h4>
                  <p class="card-text">{p.description}</p>
                  <p class="card-text">{p.projectType}</p>
                  <p class="card-text">{p.tier}</p>
                  <p class="card-text">{p.link1}</p>
                  <p class="card-text">{p.link2}</p>
                  <p class="card-text">{p.link3}</p>
                </div>
                <button class="btn btn-outline-light" onClick={()=> handleUpdate(p)} type="button">
                  EDIT
                </button>
                <button
                  class="btn btn-outline-light"
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
