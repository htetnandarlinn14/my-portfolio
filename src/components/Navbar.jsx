import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData";
import MobileNav from "./MobileNav";
import useActiveSection from "../hooks/useActiveSection";

// Stable list of section ids so the hook effect does not re-run each render.
const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

/**
 * Navbar
 * Sticky, translucent top bar with the site name, section links,
 * and a visible "Contact Me" button. Collapses into MobileNav on small screens.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);

  // Add a subtle shadow once the page has scrolled away from the top.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-mint/15 bg-charcoal/90 shadow-card backdrop-blur-md"
          : "border-transparent bg-charcoal/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Name acts as the logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 rounded-md font-display text-base font-bold text-off-white transition-colors hover:text-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal sm:text-lg"
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-mint-gradient shadow-glow"
          />
          {profile.name}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                data-active={isActive}
                aria-current={isActive ? "true" : undefined}
              >
                {link.name}
              </a>
            );
          })}
          <a href="#contact" className="btn-primary btn-sm">
            Contact Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-off-white transition-colors hover:text-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <MobileNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={navLinks}
        activeId={activeId}
      />
    </header>
  );
};

export default Navbar;
