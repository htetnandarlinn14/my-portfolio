import React from "react";
import { ArrowRight, Code2, MapPin, Sparkles } from "lucide-react";
import Button from "../Button";
import { profile } from "../../data/portfolioData";

/**
 * Hero
 * First screen: name, title, short introduction, action buttons,
 * GitHub link, and the profile image placeholder in a framed portrait.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:px-8 lg:pb-28"
    >
      {/* Static mint glows (purely visual, hidden from screen readers). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-mint/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-deep-mint/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Text column */}
        <div className="animate-fade-up lg:col-span-7">
          <p className="eyebrow">{profile.title}</p>

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-off-white sm:text-5xl lg:text-6xl">
            Htet Nandar{" "}
            <span className="bg-mint-gradient bg-clip-text text-transparent">
              Linn
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-gray sm:text-lg">
            {profile.intro}
          </p>

          {/* Availability pill */}
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/5 px-4 py-1.5 text-xs font-medium text-mint">
            <Sparkles size={14} className="shrink-0" />
            {profile.availability}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects" className="group">
              View My Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
            >
              <Code2 size={16} />
              GitHub
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-gray">
            <MapPin size={16} className="text-deep-mint" />
            {profile.location}
          </p>
        </div>

        {/* Portrait column */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[22rem]">
            {/* Soft glow behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2.5rem] bg-mint-gradient opacity-[0.18] blur-2xl"
            />
            {/* Offset outline adds depth without extra clutter */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] border border-mint/25 sm:block"
            />

            <div className="relative rounded-[2rem] border border-mint/15 bg-secondary-dark/60 p-3 shadow-glow-lg backdrop-blur">
              <img
                src={profile.imageSrc}
                alt={profile.imageAlt}
                width="640"
                height="640"
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
