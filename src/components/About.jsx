import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a passionate <strong>Frontend Developer</strong> who loves building 
            clean, responsive, and user-friendly web applications. I specialize in 
            <span> React</span>, <span>JavaScript</span>, <span>HTML</span>, and <span>CSS</span>. 
            My goal is to create digital experiences that are not only functional 
            but also delightful to use.
          </p>

          <div className="highlights">
            <div className="highlight-card">⚡ Responsive Design</div>
            <div className="highlight-card">⚡ Modern UI/UX</div>
            <div className="highlight-card">⚡ Fast Performance</div>
          </div>
        </div>

        {/* Right Image / GIF */}
        <div className="about-image">
          <img 
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
            alt="Coding animation" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
