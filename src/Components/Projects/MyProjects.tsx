// import { useEffect, useState } from "react";
import "../../index.css";
import "./my-projects.css";
import projectsList from "./ProjectsList";
import phimage from "../../assets/Portrait/hero-ph.jpeg";

const Projects: React.FC = () => {
  // const [repos, setRepos] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Makispear/repos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRepos(data);
  //     });
  // }, []);

  return (
    <section className="projects-section">
      <div className="my-projects-div">
        <h1>My Projects</h1>
        <p>
          A collection of projects that showcase my skills and problem-solving
          abilities throughout the years
        </p>
      </div>
      <div className="toggles-div">
        <button>All</button>
        <button>Full Stack</button>
        <button>Backend</button>
        <button>Cloud</button>
        <button>Infrastructure</button>
      </div>

      <div className="all-projects-div">
        {projectsList.map((project, index) => (
          <div className="project-grid" key={index}>
            <div className="project-card">
              <div className="project-header-div">
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-h3-div">
                <h3>Problems</h3>
                <p className="project-problem">{project.problem}</p>
              </div>
              <div className="project-h3-div">
                <h3>Solutions</h3>
                <p className="project-solution">{project.solution}</p>
              </div>
              <div className="project-h3-div">
                <h3>Tech Stack</h3>
                <p className="project-tech-stack">
                  {project.techStack.join(", ")}
                </p>
              </div>
              <div className="project-h3-div">
                <h3>Key Features</h3>
                <ul className="project-key-features">
                  {project.keyfeatures.map((feature: string, i: number) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <img src={phimage} alt="sdf" />
          </div>
        ))}
      </div>

      {/* {repos.map((repo: any) => (
          <div key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
          </div>
        ))} */}
    </section>
  );
};

export default Projects;
