import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import TechnologyBadge from "../../components/TechnologyBadge/TechnologyBadge";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <ProjectNotFound projectId={projectId} />;
  }

  return (
    <article className="project-details">
      <div className="container">
        <Link to="/projects" className="project-details__back">
          ← All projects
        </Link>

        <header className="project-details__header">
          <p className="section-label">{project.year}</p>
          <h1>{project.title}</h1>
          <p className="project-details__overview">{project.longDescription}</p>

          <div className="project-details__stack">
            {project.technologies.map((tech) => (
              <TechnologyBadge key={tech} name={tech} icon={tech.toLowerCase().replace(/[.\s]/g, "")} />
            ))}
          </div>

          <div className="project-details__links">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">
                Live demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View code
              </a>
            )}
          </div>
        </header>

        {project.images?.length > 0 && (
          <div className="project-details__gallery">
            {project.images.map((src, i) => (
              <div className="project-details__gallery-item" key={i}>
                <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        )}

        <div className="project-details__grid">
          <section>
            <h2>Role</h2>
            <p>{project.role}</p>
          </section>

          <section>
            <h2>Technical implementation</h2>
            <p>{project.implementation}</p>
          </section>

          <section>
            <h2>Features</h2>
            <ul>
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Challenges &amp; solutions</h2>
            <ul className="project-details__pairs">
              {project.challenges.map((c, i) => (
                <li key={i}>
                  <p className="project-details__challenge">{c}</p>
                  {project.solutions[i] && <p className="project-details__solution">{project.solutions[i]}</p>}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}

function ProjectNotFound({ projectId }) {
  return (
    <div className="project-not-found">
      <div className="container">
        <p className="section-label">404</p>
        <h1>Project not found</h1>
        <p>
          There's no project matching "{projectId}". It may have been renamed or removed.
        </p>
        <Link to="/projects" className="btn">
          Back to all projects
        </Link>
      </div>
    </div>
  );
}
