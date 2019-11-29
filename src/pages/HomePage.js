import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <section className="text-center">
        <h1>Engineeru</h1>
        <h2>
          Reverse Engineering Your Career Path
          <br />
          Hudson Valley, NY
        </h2>
      </section>

      <section className="homepage-nav">
        <Link to="skills" className="bg-blue-500 text-white py-2 px-4 rounded">
          Discover A Skill
        </Link>
        <Link
          to="mentorship"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Find A Mentor
        </Link>
        <Link to="jobs" className="bg-blue-500 text-white py-2 px-4 rounded">
          Find A Job
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
