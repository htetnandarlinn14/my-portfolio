import React from "react";

/**
 * SectionHeading
 * Consistent eyebrow + title + lead text used at the top of each section.
 */
const SectionHeading = ({ eyebrow, title, lead }) => (
  <div className="mb-14 text-center">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className="section-title">{title}</h2>
    {lead && <p className="section-lead mt-4">{lead}</p>}
  </div>
);

export default SectionHeading;
