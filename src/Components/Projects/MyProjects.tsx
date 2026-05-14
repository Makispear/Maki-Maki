import "../../index.css"
import "./my-projects.css";

const Projects: React.FC = () => {
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
    </section>
  );
};

export default Projects;
