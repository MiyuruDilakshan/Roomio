import React from "react";
import "../styles/CallToAction.css";

function CallToAction() {
  return (
    <section className="cta-section">

      <div className="cta-container">

        <h2 className="cta-title">
          Ready to design your dream space?
        </h2>

        <p className="cta-desc">
          Join thousands of users who have transformed their homes using
          Roomio. Start your first design today for free.
        </p>

        <button className="cta-button">
          Get Started for Free
        </button>

      </div>

    </section>
  );
}

export default CallToAction;