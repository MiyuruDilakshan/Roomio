import React from "react";
import "../styles/MeetLeadership.css";

import avatar7 from "../assets/avatar7.jpg";
import avatar8 from "../assets/avatar8.jpg";
import avatar9 from "../assets/avatar9.jpg";
import avatar10 from "../assets/avatar10.jpg";

function MeetLeadership() {

  const leaders = [
    {
      name: "Alex Rivers",
      role: "CEO & Co-Founder",
      image: avatar7
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: avatar8
    },
    {
      name: "Marcus Thorne",
      role: "Head of Design",
      image: avatar9
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Product",
      image: avatar10
    }
  ];

  return (
    <section className="leadership-section">

      <div className="leadership-container">

        <h2 className="leadership-title">
          Meet the Leadership
        </h2>

        <p className="leadership-subtitle">
          The visionary team leading the future of interior visualization.
        </p>

        <div className="leaders-grid">

          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>

              <div className="avatar">
                <img src={leader.image} alt={leader.name} />
              </div>

              <h4>{leader.name}</h4>

              <p className="leader-role">
                {leader.role}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default MeetLeadership;