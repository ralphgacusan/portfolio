import { projects } from "../../data/projects";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="container">
        <p className="section-label">~/projects</p>
        <h1 className="projects-page__heading">All projects.</h1>
        <p className="projects-page__sub">
          Everything I've built and shipped, from client work to personal tools.
        </p>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
