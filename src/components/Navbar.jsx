import React from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={darkMode ? "navbar dark" : "navbar"}>
      <div className="navbar-container">
        <div className="logo">
          <strong>Mrunal Avchare</strong>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleDarkMode}>
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
