import React from 'react';
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";
import "./AboutPage.css"

export default function AboutPage() {

  return (
    <>
    <h1 className="page-heading">About Us</h1>
    <XyzTransition appear duration="auto">
  <div class="page-wrap">
    <div class="page-hero" xyz="fade small stagger ease-out-back">
      <div class="hero-logo xyz-nested"></div>
      <p class="hero-text xyz-nested">
        Curabitur blandit tempus porttitor. Morbi leo risus.
      </p>
    </div>
    <div
      class="page-features"
      xyz="fade flip-down stagger duration-10 delay-2 ease-out-back"
    >
      <div class="feature-item xyz-nested">Do Something</div>
      <div class="feature-item xyz-nested">Anything</div>
      <div class="feature-item xyz-nested">Watch This</div>
    </div>
    <div
      class="page-section"
      xyz="fade small stagger delay-4 ease-in-out"
    >
      <div class="section-left" xyz="fade left stagger">
        <div class="section-item xyz-nested">We're Not Done</div>
        <div class="section-item xyz-nested">Do Something</div>
        <div class="section-item xyz-nested">Do Something</div>
      </div>
      <div
        class="section-right xyz-nested"
        xyz="fade big delay-10"
      >WAIT</div>
    </div>
    <div class="page-footer" xyz="fade bottom ease-in-out delay-10">
      <div
        class="footer-logo xyz-nested"
        xyz="fade left ease-in-out delay-10"
      >TEHNS NJIGS</div>
      <div
        class="footer-right"
        xyz="fade up stagger ease-in-out delay-10"
      >
        <div class="footer-item xyz-nested">KJVG KUG</div>
        <div class="footer-item xyz-nested">jyf jFY j</div>
        <div class="footer-item xyz-nested">j ukgugkug k</div>
      </div>
    </div>
  </div>
</XyzTransition>

    </>
  );
}