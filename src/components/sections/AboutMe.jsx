import React from "react";
import { Calendar, Compass, GraduationCap, MapPin } from "lucide-react";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import { about, education, profile } from "../../data/portfolioData";

// Small factual highlights shown beside the paragraphs.
const highlights = [
  { icon: GraduationCap, label: "B.C.Sc. student" },
  { icon: MapPin, label: profile.location },
  { icon: Compass, label: "Focused on web development" },
  { icon: Calendar, label: education[0]?.period ?? "Currently studying" },
];

/**
 * AboutMe
 * A truthful, editable introduction based on her known background.
 */
const AboutMe = () => {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A little about me"
        lead="My background, what I'm interested in, and where I'm heading."
      />

      <div className="grid gap-10 lg:grid-cols-5 lg:items-start lg:gap-14">
        <div className="space-y-5 lg:col-span-3">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-pretty leading-relaxed text-muted-gray"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="panel p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-off-white">
              Quick facts
            </h3>
            <ul className="mt-5 space-y-4">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint/10 text-mint">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-off-white/90">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
