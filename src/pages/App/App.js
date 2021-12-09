import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import IntakeFormPage from "../IntakeFormPage/IntakeFormPage";
import NavBar from "../../components/NavBar/NavBar";
import bg1 from "./bg1.mp4";
import AboutPage from "../AboutPage/AboutPage";
import FoundersPage from "../FoundersPage/FoundersPage";
import * as projectsAPI from '../../utilities/projects-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);

  
  async function handleAddProject(projectData) {
    const newProject = await projectsAPI.create(projectData);
    setProjects([newProject, ...projects]);
    console.log("Please Be a Project", newProject);
  }

  async function editProject(project) {
    const newProject = await projectsAPI.updateProject(project);
    console.log("You'll never change");
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
              {/* client-side route that renders the component instance if the path matches the url in the address bar */}
              <Route path="/dashboard" element={<DashboardPage user={user} showForm={showForm} setShowForm={setShowForm} editProject={editProject}/>} />
              <Route path="/" element={<IntakeFormPage user={user} handleAddProject={handleAddProject} showForm={showForm} setShowForm={setShowForm} editProject={editProject}/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/founders" element={<FoundersPage user={user}/>} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </div>
  );
}
