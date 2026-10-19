import React from "react";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import { profile, projects } from "../../data/portfolioData";

/**
 * Projects
 * Two project cards. Cards link to the GitHub profile while no exact
 * repository URL is confirmed (nothing is invented).
 */
const Projects = () => {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Projects I've worked on"
        lead="Coursework and personal projects that explore web development and software design."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            technologies={project.technologies}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
            profileUrl={profile.github}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
