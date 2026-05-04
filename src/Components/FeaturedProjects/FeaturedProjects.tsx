import "../../index.css";
import "./featured-project.css";

const FeaturedProjects: React.FC = () => {
  return (
    <section className="featured-projects-section">
      <h2>Featured Projects</h2>
      <div>
        <div className="single-project-div">
          <h3>Kindly</h3>
          <p>
            Addressed the lack of structure and accountability in local
            volunteering by building a social platform that enables event
            lifecycle management, participation verification, and reputation
            tracking through a points-based system.
          </p>
          <div className="tech-chip">
            <span>React</span>
            <span>MongoDB</span>
            <span>ExpressJS</span>
            <span>GraphQL</span>
            <span>NodeJS</span>
            <span>TailwindCSS</span>
            <span>NodeJS</span>
          </div>
          <a href="https://github.com/brentocracy/kindly">View Project &gt;</a>
        </div>
        <div className="single-project-div">
          <h3>Coderz United</h3>
          <p>
            Built a full-stack MERNG educational platform to address the
            fragmentation of coding learning resources by providing structured,
            project-based tutorials with persistent progress tracking and
            modular lesson architecture.
          </p>
          <div className="tech-chip">
            <span>React</span>
            <span>MongoDB</span>
            <span>ExpressJS</span>
            <span>GraphQL</span>
            <span>NodeJS</span>
            <span>TailwindCSS</span>
            <span>NodeJS</span>
          </div>
          <a href="https://github.com/Makispear/CODERZ-UNITED">
            View Project &gt;
          </a>
        </div>
        <div className="single-project-div">
          <h3>HomeRoom</h3>
          <p>
            Eliminated the lack of effective class management and parent–teacher
            communication by building a centralized portal for organizing
            rosters, lesson plans, and grade records within a structured data
            architecture.
          </p>
          <div className="tech-chip">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>ExpressJS</span>
            <span>MySQL</span>
          </div>
          <a href="https://github.com/michellewehr/homeroom">
            View Project &gt;
          </a>
        </div>
        <div className="single-project-div">
          <h3>Anytime Books</h3>
          <p>
            a solution to book lovers' continuous search for the next read. Our
            site recommends best sellers based on the reader's genre of choice
            and allows the reader to save any book of interest, in the list, for
            easy future access.
          </p>
          <div className="tech-chip">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bulma CSS Framework</span>
            <span>JavaScript</span>
            <span>Server-side APIs</span>
          </div>
          <a href="https://github.com/Makispear/Anytime-Books">
            View Project &gt;
          </a>
        </div>

        <a
          className="single-project-div view-all"
          href="https://github.com/Makispear?tab=repositories"
        >
          <p>View All &gt;</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
