import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import bg1 from "./bg1.mp4";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="auth">
      <div className="container-wkb">
        <main className="authform">
          <video className="video" autoPlay muted>
            <source src={bg1} type="video/mp4" />
          </video>
          <h1>Welcome</h1>
            <h2>Please Sign In</h2>
          <button onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp ? "Log In" : "Sign Up"}
          </button>
          {showSignUp ? (
            <SignUpForm setUser={setUser} />
          ) : (
            <LoginForm setUser={setUser} />
          )}
        </main>
      </div>
    </div>
  );
}
