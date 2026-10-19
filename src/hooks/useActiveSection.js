import { useEffect, useState } from "react";

/**
 * useActiveSection
 * Watches the page scroll and returns the id of the section currently in
 * view, so the navbar can highlight the matching link.
 *
 * `ids` should be a stable array (defined outside a component) to avoid
 * re-running the effect on every render.
 */
const useActiveSection = (ids) => {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const updateActiveSection = () => {
      // A little below the navbar is treated as the "reading line".
      const readingLine = window.scrollY + 140;
      let current = ids[0];

      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= readingLine) {
          current = id;
        }
      }

      // When the page is scrolled to the very bottom, highlight the last link.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [ids]);

  return activeId;
};

export default useActiveSection;
