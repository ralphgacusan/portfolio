import useReveal from "../../hooks/useReveal";
import { profile, socialLinks } from "../../data/portfolio";
import ContactForm from "./ContactForm";
import "./Contact.css";

export default function Contact() {
  const revealRef = useReveal();

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="section-label">~/contact</p>
          <h2 className="section-heading">Let's work together.</h2>
          <p className="contact__copy">
            {profile.availability}. The fastest way to reach me is the form, or directly at {profile.email} /
            {profile.phone ? (
              <>
                <br />
                {profile.phone}
              </>
            ) : ""}
          </p>
          <ul className="contact__social">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" ref={revealRef}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
