import React from "react";
// Update these imports if your assets live in a different path
// and ensure the actual files exist on disk.
// import heroVideo from "../assets/hero.mp4";

function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <button className="btn" type="button">
          <span>Plan Your Visit</span>
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </section>
  );
}

export default Hero;

