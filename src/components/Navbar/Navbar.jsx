import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useActiveSection from "../../hooks/useActiveSection";
import { profile } from "../../data/portfolio";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Achievements", id: "achievements" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

// defined once, outside the component, so it's the same array every render
const NAV_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#" + id);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link
          to="/"
          className="navbar__logo"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {profile.name.split(" ")[0]}
          <span className="navbar__logo-dot">.</span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${isHome && active === link.id ? "is-active" : ""}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link to="/projects" className="btn btn-outline navbar__cta">
          View all work
        </Link>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
            {link.label}
          </a>
        ))}
        <Link to="/projects" onClick={() => setOpen(false)}>
          All projects
        </Link>
      </div>
    </header>
  );
}
