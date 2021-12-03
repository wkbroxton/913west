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

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div style={{ backgroundImage: `url(${bg1})` }}>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* client-side route that renders the component instance if the path matches the url in the address bar */}
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/intake" element={<IntakeFormPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </div>
  );
}
