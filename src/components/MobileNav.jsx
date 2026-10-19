import React from "react";
import { Code2 } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData";

/**
 * MobileNav
 * Slide-down panel shown under the navbar on small screens, with a dimmed
 * backdrop that closes the menu when tapped. Renders nothing when closed so
 * no stray links appear in the DOM.
 */
const MobileNav = ({ isOpen, onClose, links = navLinks, activeId }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop: sits below the panel and above the page content. */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={-1}
        onClick={onClose}
        className="fixed inset-x-0 bottom-0 top-16 z-40 cursor-default bg-charcoal/70 backdrop-blur-sm md:hidden"
      />

      <div
        id="mobile-nav"
        className="animate-fade-up relative z-50 border-b border-mint/10 bg-charcoal/95 backdrop-blur-md md:hidden"
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6"
        >
          {links.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-lg px-3 py-3 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint ${
                  isActive
                    ? "bg-mint/10 text-mint"
                    : "text-muted-gray hover:bg-mint/10 hover:text-mint"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="my-3 h-px bg-mint/10" aria-hidden="true" />

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-muted-gray transition-colors hover:bg-mint/10 hover:text-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
          >
            <Code2 size={16} />
            GitHub Profile
          </a>

          <a href="#contact" onClick={onClose} className="btn-primary mt-3">
            Contact Me
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
