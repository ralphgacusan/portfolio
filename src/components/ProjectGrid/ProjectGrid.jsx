import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectGrid.css";

export default function ProjectGrid({ projects }) {
  if (!projects.length) {
    return <p className="project-grid__empty">No projects to show yet.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
