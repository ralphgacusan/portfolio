import { profile } from "../../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{profile.role} · {profile.location}</p>
          <h1 className="hero__headline">{profile.headline}</h1>
          <p className="hero__subhead">{profile.subhead}</p>

          <div className="hero__terminal" aria-hidden="true">
            <div className="hero__terminal-bar">
              <span /> <span /> <span />
            </div>
            <div className="hero__terminal-body">
              <p><span className="hero__prompt">$</span> {profile.terminalLine}</p>
              <p className="hero__terminal-output">{profile.terminalOutput}</p>
            </div>
          </div>

          <div className="hero__actions">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn">
              View resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <span className="hero__scroll-line" />
        Scroll
      </a>
    </section>
  );
}
