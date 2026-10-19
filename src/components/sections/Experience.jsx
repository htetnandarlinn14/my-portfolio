import React from "react";
import { BookOpen, Calendar } from "lucide-react";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import { experience } from "../../data/portfolioData";

/**
 * Experience (optional)
 * This section intentionally renders nothing while the `experience`
 * list in portfolioData.js is empty, so no employment history or
 * achievements are ever invented. Add real entries to make it appear.
 */
const Experience = () => {
  if (!experience || experience.length === 0) return null;

  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Learning journey" />

      <div className="mx-auto max-w-3xl space-y-6">
        {experience.map((entry) => (
          <article key={entry.id} className="card p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint/10 text-mint">
              <BookOpen size={18} />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-off-white">{entry.role}</h3>
            <p className="text-mint">{entry.organization}</p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted-gray">
              <Calendar size={14} className="text-deep-mint" />
              {entry.period}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
