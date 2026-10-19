import React from "react";
import { ArrowUpRight, Code2, Mail, MapPin, Phone } from "lucide-react";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import { contact, profile, socialLinks } from "../../data/portfolioData";

// Maps an `icon` key from portfolioData.js to a lucide icon component.
const iconMap = { mail: Mail, phone: Phone, github: Code2 };

/**
 * Contact
 * Real, working contact methods: mailto link, tel link, and GitHub.
 * No fake form — nothing here pretends to send a message.
 */
const Contact = () => {
  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Soft mint glow behind the contact cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-mint/10 blur-[120px]"
      />

      <div className="relative">
        <SectionHeading
          eyebrow="Contact"
          title={contact.heading}
          lead={contact.subheading}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] ?? Mail;
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.id}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="card group flex items-center gap-4 p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint/10 text-mint transition-colors group-hover:bg-mint-gradient group-hover:text-charcoal">
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-gray">
                    {link.name}
                  </span>
                  <span className="block truncate text-sm font-medium text-off-white group-hover:text-mint">
                    {link.value}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-muted-gray transition-colors group-hover:text-mint"
                />
              </a>
            );
          })}
        </div>

        {/* Location is shown as plain text because it is not a link. */}
        <address className="mt-8 flex justify-center not-italic">
          <span className="panel inline-flex items-center gap-2 px-4 py-2.5 text-sm text-muted-gray">
            <MapPin size={16} className="text-deep-mint" />
            {profile.location}
          </span>
        </address>
      </div>
    </Section>
  );
};

export default Contact;
