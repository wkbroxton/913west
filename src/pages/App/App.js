import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import IntakeFormPage from "../IntakeFormPage/IntakeFormPage";
import ConfirmationFormPage from "../ConfirmationFormPage/ConfirmationFormPage";
import NavBar from "../../components/NavBar/NavBar";
import bg1 from "./bg1.mp4";
import AboutPage from "../AboutPage/AboutPage";
import FoundersPage from "../FoundersPage/FoundersPage";
import * as projectsAPI from '../../utilities/projects-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [addProjects, setAddProjects] = useState([]);

  async function addProject(post) {
    const newProject = await projectsAPI.create(post);
    setAddProjects(newProject);
    console.log("Please Be a Project", newProject);
  } 

  return (
    <div style={{ backgroundImage: `url(${bg1})` }}>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* client-side route that renders the component instance if the path matches the url in the address bar */}
              <Route path="/" element={<DashboardPage />} />
              <Route path="/project" element={<IntakeFormPage addProject={addProject}/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/founders" element={<FoundersPage />} />
              <Route path="/confirmation" element={<ConfirmationFormPage addProject={addProject}/>} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </div>
  );
}
