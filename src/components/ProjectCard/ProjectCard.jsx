import { Link } from "react-router-dom";
import TechnologyBadge from "../TechnologyBadge/TechnologyBadge";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-card__media">
        <img src={project.thumbnail} alt={`${project.title} preview`} loading="lazy" />
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <h3>{project.title}</h3>
          <span className="project-card__year">{project.year}</span>
        </div>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__stack">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechnologyBadge key={tech} name={tech} icon={tech.toLowerCase().replace(/[.\s]/g, "")} size="sm" />
          ))}
        </div>

        <span className="project-card__link">
          View project <span className="project-card__arrow">→</span>
        </span>
      </div>
    </Link>
  );
}
