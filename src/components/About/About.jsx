import useReveal from "../../hooks/useReveal";
import { profile } from "../../data/portfolio";
import "./About.css";

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__label-col">
          <p className="section-label">~/about</p>
          <h2 className="section-heading">Grounded in the fundamentals.</h2>
        </div>

        <div className="about__text-col reveal" ref={revealRef}>
          {profile.about.map((paragraph, i) => (
            <p key={i} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
