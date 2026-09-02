import useReveal from "../../hooks/useReveal";
import { experience, achievements, certifications } from "../../data/experience";
import "./Experience.css";

export default function Experience() {
  const timelineRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">~/experience</p>
        <h2 className="section-heading">Education &amp; recognition.</h2>

        <div className="timeline reveal" ref={timelineRef}>
          {experience.map((item, i) => (
            <div className="timeline__item" key={i}>
              <div className="timeline__meta">
                <span className="timeline__period">{item.period}</span>
                <span className={`timeline__tag timeline__tag--${item.type}`}>
                  {item.type === "work" ? "Work" : "Education"}
                </span>
              </div>
              <div className="timeline__content">
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="experience__grid reveal" ref={gridRef}>
          <div className="experience__block">
            <h3 className="experience__block-title">Achievements</h3>
            <ul className="experience__list">
              {achievements.map((a, i) => (
                <li key={i}>
                  <span className="experience__list-title">{a.title}</span>
                  <span className="experience__list-meta">{a.period}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="experience__block">
            <h3 className="experience__block-title">Certifications</h3>
            <ul className="experience__list">
              {certifications.map((c, i) => (
                <li key={i}>
                  <span className="experience__list-title">{c.name}</span>
                  <span className="experience__list-meta">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
