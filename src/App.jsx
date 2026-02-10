import React from 'react';
import './App.css';

const App = () => {
  const mainProjects = [
    {
      title: "Real-time Messaging App",
      desc: "Developing a high-concurrency messaging app  You can communicate with your friends",
      tech: "JAVA / WEBSOCKETS / REACT",
      link: "https://github.com/Ashika-0105/myprojects"
    },
    {
      title: "DSA LinkedHashSet Engine",
      desc: "Built a custom LinkedHashSet from the scratch to master memory management, hashing algorithms, and data structure complexities.",
      tech: "JAVA CORE / ALGORITHMS",
      link: "https://github.com/Ashika-0105/myprojects"
    },
    {
      title: "Site24x7 Migration Framework",
      desc: "Architected an automated bridge to migrate complex monitor configurations. Optimized data mapping logic for 100% accuracy in target environments.",
      tech: "JAVA / XML / REST API",
      link: "https://github.com/Ashika-0105/myprojects"
    },
    {
      title: "Workdrive Automation App",
      desc: "An enterprise-focused application designed for streamlined file management and automated organizational workflows.",
      tech: "JAVA / API INTEGRATION / UI",
      link: "https://github.com/Ashika-0105/myprojects"
    },
    {
      title: "Markdown Documentation Editor",
      desc: "A secure technical editor featuring real-time preview and persistent MySQL storage for technical documentation.",
      tech: "REACT / NODE.JS / MYSQL",
      link: "https://github.com/Ashika-0105/myprojects"
    }
  ];

  const skillGroups = [
    { name: "HTML", level: "90%" },
     { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "90%" },
    { name: "Java", level: "80%" },
    { name: "MySQL", level: "80%" },
    { name: "Node.js", level: "70%" },
    { name: "React", level: "45%" },
  ];

  return (
    <div className="portfolio-container">
      <div className="glass-blob"></div>

      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="name-title">Ashika.</h1>
            <p className="hero-bio">
              Building scalable backends and real-time interactive systems. 
              <span className="highlight"> Focused on problem solving.</span>
            </p>
            <div className="social-links">
              <a href="https://github.com/Ashika-0105" target="_blank" rel="noreferrer" className="btn-primary">GitHub</a>
            </div>
          </div>
          <div className="hero-image-area">
            <div className="image-glow-ring">
              <img src="/ashika.jpg" alt="Ashika" className="profile-pic" />
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <h2 className="section-label">Featured Projects</h2>
        <div className="project-grid">
          {mainProjects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-card">
                <span className="project-tech">{project.tech}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-label">Technical Mastery</h2>
        <div className="skills-bento-grid">
          {skillGroups.map((skill, i) => (
            <div key={i} className="skill-bento-card">
              <div className="skill-card-top">
                <span className="skill-name-label">{skill.name}</span>
                <span className="skill-percent-label">{skill.level}</span>
              </div>
              <div className="skill-progress-track">
                <div className="skill-progress-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-label">Competitive Programming</h2>
        <div className="codewars-pro-container">
          <div className="cw-rank-display">
            <div className="cw-main-stat">
              <span className="cw-rank-number">4</span>
              <span className="cw-rank-unit">kyu</span>
            </div>
            <div className="cw-sub-stat">
              <span className="cw-points-value">533</span>
              <span className="cw-points-label">Total Points</span>
            </div>
          </div>
          <div className="cw-narrative">
            <p>Currently mastering <span className="highlight-green">4 Kyu Katas</span> on Codewars. Focusing on optimizing time complexity (Big O) and implementing advanced design patterns in Java and JavaScript.</p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-card">
          <h2 className="contact-title">Ready to build something great?</h2>
          <p className="contact-subtitle">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!</p>
          <div className="contact-actions">
            <a href="mailto:ashika@example.com" className="glow-button">
              Say Hello
            </a>
            <div className="other-links">
              <a href="#" className="contact-link">LinkedIn</a>
              <a href="www.linkedin.com/in/ashika-m-0535a5373" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 • Prepared for Zoho School Manager Review
      </footer>
    </div>
  );
};

export default App;