import React from "react";
import "../styles/CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">

      <div className="cta-container">

        <h2 className="cta-title">
          Ready to design your perfect space?
        </h2>

        <p className="cta-text">
          Join thousands of others creating beautiful rooms with RoomViz Pro.
          No credit card required to start.
        </p>

        <button className="cta-button">
          Get Started For Free
        </button>

      </div>

    </section>
  );
}

export default CTASection;