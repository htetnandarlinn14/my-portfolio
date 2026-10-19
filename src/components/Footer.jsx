import React from "react";
import { ArrowUp, Code2 } from "lucide-react";
import { navLinks, profile, socialLinks } from "../data/portfolioData";

const year = new Date().getFullYear();

/**
 * Footer
 * Name, quick navigation links, GitHub link, back-to-top, and copyright.
 */
const Footer = () => {
  const github = socialLinks.find((link) => link.icon === "github");

  return (
    <footer className="border-t border-mint/10 bg-secondary-dark/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Identity */}
          <div>
            <p className="font-display text-lg font-bold text-off-white">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-muted-gray">{profile.title}</p>
          </div>

          {/* Quick links */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-gray transition-colors hover:text-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-dark"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* GitHub */}
          {github && (
            <div className="md:text-right">
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-gray transition-colors hover:text-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-dark"
              >
                <Code2 size={16} />
                GitHub Profile
              </a>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-mint/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-muted-gray sm:text-left">
            &copy; {year} {profile.name}. All rights reserved. Built with React,
            Vite, and Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-gray transition-colors hover:text-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-dark"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
