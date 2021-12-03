import React, { useState } from 'react';
import "./AboutPage.css"

export default function AboutPage() {
  const [about, setAbout] = useState();
  return (
    <>
    <h1>About Us</h1>
    <main className="dDivs">
      <div className="qboxes"></div>
      <div className="qboxes"> </div>
      <div className="qboxes"></div>

      <div className="qboxes"></div>
      <div className="qboxes-mid"></div>
      <div className="qboxes"></div>
      
      <div className="qboxes"></div>
      <div className="qboxes"></div>
      <div className="qboxes"></div>
    </main>
    </>
  );
}