import React from "react";

const projects = [
  {
    title: "Sephora Clone",
    description: "A beauty e-commerce replica with product listings and cart UI.",
    tech: ["ReactJS", "HTML", "CSS"],
    live: "https://sephora-nine.vercel.app/",
    github: "https://github.com/Mrunal29av/Sephora.git"
  },
  {
    title: "Netflix Clone",
    description: "Streaming platform interface with movie categories and hover previews.",
    tech: ["ReactJS", "HTML", "CSS"],
    live: "https://mrunalav-netcloneflix.netlify.app",
    github: "https://github.com/Mrunal29av/Netflixclone.git"
  },
  {
    title: "Facebook Clone",
    description: "Social media UI with profile layout and feed styling.",
    tech: ["HTML", "CSS"],
    live: "https://facebookclone1-six.vercel.app/",
    github: "https://github.com/Mrunal29av/facebookclone1.git"
  },
  {
    title: "Weather Application",
    description: "Displays current weather using OpenWeather API.",
    tech: ["ReactJS", "HTML", "CSS"],
    live: "https://portfolio29mru.netlify.app/",
    github: "https://github.com/Mrunal29av/Weather_Application.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title"> My Projects</h2>
      <br></br>
      <div className="projects-grid">
        {projects.map(({ title, description, tech, live, github }) => (
          <div className="project-card" key={title}>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="tech-tags">
              {tech.map((item, index) => (
                <span key={index} className="tech-tag">{item}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={live} target="_blank" rel="noopener noreferrer" className="link-button">🔗 Live</a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="link-button">📁 GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 