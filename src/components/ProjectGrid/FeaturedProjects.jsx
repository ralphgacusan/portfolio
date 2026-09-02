import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";
import { projects } from "../../data/projects";
import ProjectGrid from "./ProjectGrid";

export default function FeaturedProjects() {
  const revealRef = useReveal();
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="featured-projects__head">
          <div>
            <p className="section-label">~/projects</p>
            <h2 className="section-heading">Selected work.</h2>
          </div>
          <Link to="/projects" className="btn btn-outline featured-projects__all">
            View all projects
          </Link>
        </div>

        <div className="reveal" ref={revealRef}>
          <ProjectGrid projects={featured} />
        </div>
      </div>
    </section>
  );
}
