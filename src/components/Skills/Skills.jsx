import useReveal from "../../hooks/useReveal";
import TechnologyBadge from "../TechnologyBadge/TechnologyBadge";
import { skillGroups } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  const revealRef = useReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-label">~/skills</p>
        <h2 className="section-heading">Tools I reach for.</h2>

        <div className="skills__groups reveal" ref={revealRef}>
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills__badges">
                {group.items.map((item) => (
                  <TechnologyBadge key={item.name} name={item.name} icon={item.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
