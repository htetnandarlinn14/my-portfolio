import React from "react";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import { education } from "../../data/portfolioData";

/**
 * Education
 * University, degree, and expected graduation. Edit in portfolioData.js.
 */
const Education = () => {
  return (
    <Section id="education" background="panel">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        lead="Where I'm building my foundation in computer science."
      />

      <div className="mx-auto max-w-3xl space-y-6">
        {education.map((entry) => (
          <article key={entry.id} className="card p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint-gradient text-charcoal">
                <GraduationCap size={22} />
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-off-white">
                    {entry.degree}
                  </h3>
                  {entry.status && (
                    <span className="rounded-full border border-mint/30 bg-mint/10 px-3 py-0.5 text-xs font-medium text-mint">
                      {entry.status}
                    </span>
                  )}
                </div>

                <p className="mt-2 font-medium text-mint">
                  {entry.institution}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-gray">
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} className="text-deep-mint" />
                    {entry.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={14} className="text-deep-mint" />
                    {entry.period}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Education;
