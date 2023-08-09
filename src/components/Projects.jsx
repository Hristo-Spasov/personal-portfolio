import React from "react";
import { projects } from "../constants";
import { ImGithub } from "react-icons/im";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      {/* header */}
      <motion.div
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0, threshold: 0.1 },
          hidden: { opacity: 0, x: -100 },
        }}
        id="projects"
        className="flex flex-col justify-center items-center mt-[100px] sm:mt-0 "
      >
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] px-20 py-6 mt-10">
          My recent work.
        </p>
        <h2 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 px-20">
          Projects.
        </h2>
      </motion.div>
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 lg:gap-14 lg:grid-cols-2 m-10 ">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            transition={{
              type: "spring",
              duration: 3,
              delay: index * 0.5,
              ease: "easeOut",
            }}
            variants={{
              visible: { opacity: 1, y: 0, threshold: 0.1 },
              hidden: { opacity: 0, y: -100 },
            }}
          >
            <motion.div
              className="flex flex-col rounded-lg bg-primery shadow-lg shadow-action md:max-w-xl md:flex-row min-h-[338px]"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                ease: "easeOut",
              }}
            >
              <img
                className="h-96 w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg cursor-pointer  "
                src={project.project_image}
                alt="project_image"
                onClick={() => window.open(project.live, "_blank")}
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium text-white">
                  {project.name}
                </h5>
                <p className="mb-4 text-base text-slate-300 ">
                  {project.description}
                </p>
                {/* buttons */}
                <div className="w-full flex justify-evenly items-center p-1">
                  <a
                    href={project.source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" cursor-pointer text-accent hover:text-action hover:scale-110 duration-150"
                  >
                    <ImGithub size={25} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-accent hover:text-action hover:scale-110 duration-150"
                  >
                    <BsLink45Deg size={25} />
                  </a>
                </div>
                {/* Project technologies */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center items-center">
                  {project.tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
