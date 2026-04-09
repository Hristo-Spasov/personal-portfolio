import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Web Developer",
    company: "New Technology Plovdiv",
    period: "March 2023 - Present",
    description:
      "Developing and maintaining high-volume web platform templates used across thousands of company websites. Focused on performance optimization and scalable front-end solutions in a fast-paced environment.",
    achievements: [
      "Optimized enterprise-level web templates for performance and user experience across thousands of sites",
      "Resolved complex front-end production issues, ensuring platform stability and reliability",
      "Collaborated on dynamic feature development using JavaScript, jQuery, and Smarty (PHP)",
      "Maintained design consistency and met strict deadlines across parallel high-priority tasks",
    ],
    technologies: ["JavaScript", "jQuery", "Smarty (PHP)", "CSS3", "Git"],
  },
  {
    id: 2,
    title: "Frontend / Full-Stack Developer",
    company: "Freelance & Individual Development",
    period: "2021 - Present",
    description:
      "Built and deployed end-to-end web applications and data processing systems. Focused on modernizing development workflows and integrating headless CMS solutions for better content management.",
    achievements: [
      "Developed full-stack architectures integrating Next.js with headless CMS and PostgreSQL",
      "Built automated data engineering pipelines for large-scale content generation using Python",
      "Implemented server-side optimization techniques including caching and state persistence",
      "Managed self-hosted VPS environments and deployment pipelines",
    ],
    technologies: ["Next.js", "TypeScript", "Python", "Node.js", "PostgreSQL", "Docker"],
  },
];

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const TimelineItem = ({ experience, index, isLast }) => {
  return (
    <motion.div
      variants={timelineItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 md:pl-0"
    >
      {!isLast && (
        <div className="absolute left-4 md:left-1/2 top-16 w-0.5 h-full bg-gradient-to-b from-accent to-transparent md:-ml-0.5" />
      )}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-2 rounded-full bg-accent glow-accent z-10" />
      <div className={`md:flex ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8`}>
        <div className="md:w-1/2 md:px-12" />
        <div className="md:w-1/2 mb-8">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card rounded-2xl p-6 relative group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/20 to-transparent rounded-tl-2xl" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
              <span>📅</span>
              {experience.period}
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {experience.title}
            </h3>
            <p className="text-accentLight font-medium mb-4">
              {experience.company}
            </p>
            <p className="text-textMuted mb-6 leading-relaxed">
              {experience.description}
            </p>
            {experience.achievements.length > 0 && (
              <ul className="space-y-2 mb-6">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-textMuted text-left">
                    <span className="text-teal mt-0.5">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-surfaceHover text-textMuted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-24 px-4 md:px-8">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-3">My Journey</p>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
