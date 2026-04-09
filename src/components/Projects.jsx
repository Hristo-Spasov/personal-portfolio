import React from "react";
import { projects } from "../constants";
import { ImGithub } from "react-icons/im";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="glass-card flex flex-col rounded-2xl overflow-hidden group h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.project_image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
          <a
            href={project.source_code}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accentLight transition-colors duration-300"
            aria-label="GitHub"
          >
            <ImGithub size={24} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-teal flex items-center justify-center text-white hover:bg-tealLight transition-colors duration-300"
            aria-label="Live Demo"
          >
            <BsLink45Deg size={24} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-textMuted text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[12px] font-medium px-3 py-1 rounded-full glass border border-white/5 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle mb-3">Portfolio</p>
          <h2 className="section-title">My Projects</h2>
          <p className="mt-4 text-textMuted max-w-2xl mx-auto">
            A selection of my recent work, showcasing frontend expertise and full-stack capabilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
