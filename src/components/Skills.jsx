import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const skills = [
  { name: "ReactJS", icon: <FaReact color="#61dafb" size={40}/> },
  { name: "HTML5", icon: <FaHtml5 color="#f16529" size={40}/> },
  { name: "CSS3", icon: <FaCss3Alt color="#2965f1" size={40}/> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" size={40}/> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">
    Skills <span>& Abilities</span>
      </h2>
      <br></br>
      <br></br>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
