import React from "react";
import ThemeToggle from './ThemeToggle';

function Home() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 text-center m-5">
            <h3 className="mb-3">Hi there,</h3>
            <h2 className="scale-in">
              I'm Noora <span className="purple-text">Beegam</span>
            </h2>
            <h3 className="mt-3 mb-3">I am a MERN Stack Developer</h3>
            <p style={{ textAlign: "justify" }}>
              As a highly skilled MERN Stack Developer, I possess a
              comprehensive understanding of a diverse set of programming
              utilities and languages. My expertise extends to both backend and
              frontend development, encompassing a deep knowledge of the
              requisite technical requirements for each aspect.
            </p>
            <div className="button mt-5">
            <a href="https://github.com/Noora2809">  <button className="btn btn-outline-primary me-4">
                View Works
              </button></a>
              <a href="https://www.linkedin.com/in/noora-beegam-859b23246/">
                <button className="btn btn-outline-primary">Hire Me</button>
              </a>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;


