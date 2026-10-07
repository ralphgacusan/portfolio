import useReveal from "../../hooks/useReveal";
import {
  experience,
  education,
  achievements,
  certifications,
} from "../../data/experience";
import "./Experience.css";

function Timeline({ items, tag }) {
  const ref = useReveal();
  return (
    <div className="timeline reveal" ref={ref}>
      {items.map((item, i) => (
        <div className="timeline__item" key={i}>
          <div className="timeline__meta">
            <span className="timeline__period">{item.period}</span>
            <span className="timeline__tag">{tag}</span>
          </div>
          <div className="timeline__content">
            <h3 className="timeline__role">{item.role}</h3>
            <p className="timeline__org">{item.org}</p>
            <p className="timeline__desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  const achievementsRef = useReveal();
  const certsRef = useReveal();

  return (
    <>
      {/* Experience: 100vh */}
      <section id="experience" className="section section--screen">
        <div className="container">
          <p className="section-label">~/experience</p>
          <h2 className="section-heading">Experience.</h2>
          <Timeline items={experience} tag="Work" />
        </div>
      </section>

      {/* Education: 100vh */}
      <section id="education" className="section section--screen">
        <div className="container">
          <p className="section-label">~/education</p>
          <h2 className="section-heading">Education.</h2>
          <Timeline items={education} tag="Education" />
        </div>
      </section>

      {/* Achievements: 100vh, image cards */}
      <section id="achievements" className="section section--screen">
        <div className="container">
          <p className="section-label">~/achievements</p>
          <h2 className="section-heading">Achievements.</h2>

          <div className="achievement-grid reveal" ref={achievementsRef}>
            {achievements.map((a, i) => (
              <article className="achievement-card" key={i}>
                <div className="achievement-card__thumb">
                  {a.image ? (
                    <img
                      src={a.image}
                      alt={a.imageAlt || `${a.title} proof`}
                      loading="lazy"
                    />
                  ) : (
                    <span aria-hidden="true">★</span>
                  )}
                </div>
                <div className="achievement-card__body">
                  <h3 className="achievement-card__title">{a.title}</h3>
                  <p className="achievement-card__period">{a.period}</p>
                  {a.description && (
                    <p className="achievement-card__desc">{a.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications: 100vh */}
      <section id="certifications" className="section section--screen">
        <div className="container">
          <p className="section-label">~/certifications</p>
          <h2 className="section-heading">Certifications.</h2>

          <div className="cert-grid reveal" ref={certsRef}>
            {certifications.map((c, i) => (
              <article className="cert-card" key={i}>
                <div className="cert-card__badge">
                  {c.badge ? (
                    <img src={c.badge} alt={`${c.name} badge`} loading="lazy" />
                  ) : (
                    <span aria-hidden="true">★</span>
                  )}
                </div>
                <div className="cert-card__body">
                  <h4 className="cert-card__name">{c.name}</h4>
                  <p className="cert-card__date">{c.date}</p>
                </div>
                {c.verifyUrl && (
                  <a
                    className="cert-card__verify"
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}