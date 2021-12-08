import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ProjectAPI from "../../utilities/projects-api";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";

export default function ProjectDetailPage() {
  const [projects, setProjects] = useState([]);

  // useEffect(function () {
  //   (async () => setProjects(await getAll(projects)))();
  // }, []);
  useEffect(function(){
    async function getAllProjects(){
    const project = await ProjectAPI.getAll();
    console.log("What's in Here", project);
    setProjects(project);
    }
    getAllProjects();
  },[]);

  async function deleteProject(id){
      const newProjects = await ProjectAPI.findOneAndDelete(id);
      console.log("Say Nite-Nite");
      setProjects(newProjects);
    } 

  return (
    <>
    <br />
      <h1>DashboardPage</h1>
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((p) => (
          // <Link to={`/projects/${p._id}`}>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{p.name}</h5>
                  <p class="card-text">{p.description}</p>
                  <p class="card-text">{p.projectType}</p>
                  <p class="card-text">{p.tier}</p>
                  <p class="card-text">{p.link1}</p>
                  <p class="card-text">{p.link2}</p>
                  <p class="card-text">{p.link3}</p>
                </div>
                <button onClick={()=> deleteProject(p._id)} type="submit">DELETE</button>
              </div>
            </div>
          // </Link>
        ))}
      </div>

      {/* <p>Start your first Project</p> */}
    </>
  );
}
