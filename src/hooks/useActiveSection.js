import { useEffect, useState } from "react";

// Tracks which section id is currently in the middle of the viewport,
// so the navbar can show a subtle active-state indicator.
export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);
  const key = sectionIds.join("|"); // stable even if a new array is passed

  useEffect(() => {
    const ids = key.split("|");
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    // remember which sections currently touch the detection line
    const intersecting = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) intersecting.add(e.target.id);
          else intersecting.delete(e.target.id);
        });

        // pick the first one in page order that is on the line
        const current = ids.find((id) => intersecting.has(id));
        if (current) setActive(current);
      },
      // 1px-tall detection line at 40% from the top of the viewport
      { rootMargin: "-40% 0px -59.9% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}