import React from "react";
import { Code2, ExternalLink, Info } from "lucide-react";

/**
 * ProjectCard
 * Displays one project: image, title, description, technology badges,
 * and links. A link button is only rendered when a real URL exists, so
 * the site never shows a broken or invented link.
 */
const ProjectCard = ({
  index = 0,
  title,
  description,
  imageSrc,
  technologies = [],
  demoUrl,
  repoUrl,
  profileUrl,
}) => {
  const hasDemo = Boolean(demoUrl);
  const hasRepo = Boolean(repoUrl);
  const label = String(index + 1).padStart(2, "0");

  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      {/* Screenshot placeholder — swap the file to use a real screenshot. */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal">
        <img
          src={imageSrc}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent"
        />
        <span className="absolute left-4 top-4 rounded-full border border-mint/25 bg-charcoal/70 px-3 py-1 text-xs font-semibold tracking-wider text-mint backdrop-blur">
          {label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-off-white transition-colors group-hover:text-mint sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-gray">
          {description}
        </p>

        {/* Technology badges */}
        <ul className="mb-6 mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <li key={`${title}-${techIndex}`} className="badge">
              {tech}
            </li>
          ))}
        </ul>

        {/* Links + honest note, pinned to the bottom for even card heights. */}
        <div className="mt-auto border-t border-mint/10 pt-5">
          <div className="flex flex-wrap items-center gap-3">
            {hasDemo && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-sm"
              >
                View Project
                <ExternalLink size={14} />
              </a>
            )}
            {hasRepo && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-sm"
              >
                Source Code
                <Code2 size={14} />
              </a>
            )}
            {!hasDemo && !hasRepo && profileUrl && (
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-sm"
              >
                View GitHub Profile
                <Code2 size={14} />
              </a>
            )}
          </div>

          {!hasRepo && (
            <p className="mt-4 flex items-start gap-2 text-xs text-muted-gray/80">
              <Info size={14} className="mt-0.5 shrink-0" />
              A direct repository link will be added once the project is
              published on GitHub.
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
