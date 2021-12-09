import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import IntakeFormPage from "../IntakeFormPage/IntakeFormPage";
import NavBar from "../../components/NavBar/NavBar";
import bg1 from "./bg1.mp4";
import FoundersPage from "../FoundersPage/FoundersPage";
import * as projectsAPI from '../../utilities/projects-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(null);

  
  async function handleAddProject(projectData) {
    const newProject = await projectsAPI.create(projectData);
    console.log("Please Be a Project", newProject);
  }

  async function editProject(project) {
    const newProject = await projectsAPI.updateProject(project);
    const updatedProjects = projects.map(p => p._id === newProject._id ? newProject : p);
    setProjects(updatedProjects);
  }

  return (
    <div style={{ backgroundImage: `url(${bg1})` }}>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/dashboard" element={<DashboardPage user={user} showForm={showForm} setShowForm={setShowForm} editProject={editProject}/>} />
              <Route path="/" element={<IntakeFormPage user={user} handleAddProject={handleAddProject} showForm={showForm} setShowForm={setShowForm} editProject={editProject}/>} />
              <Route path="/founders" element={<FoundersPage user={user} />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </div>
  );
}
