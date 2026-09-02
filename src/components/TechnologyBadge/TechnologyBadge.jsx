import { iconMap } from "./icons";
import "./TechnologyBadge.css";

// Renders a technology name as a plain text pill if no matching icon exists,
// so new technologies never break the layout.
export default function TechnologyBadge({ name, icon, size = "md" }) {
  const Icon = iconMap[icon];

  return (
    <span className={`tech-badge tech-badge--${size}`}>
      {Icon ? <Icon className="tech-badge__icon" aria-hidden="true" /> : null}
      <span>{name}</span>
    </span>
  );
}
