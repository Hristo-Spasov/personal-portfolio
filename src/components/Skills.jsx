import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiJavascript, 
  SiDocker, SiGit, SiPostgresql, SiVite, 
  SiExpress, SiStrapi, SiRedis, SiPython, SiLinux, SiNodedotjs,
  SiJquery, SiPhp, SiCloudflare
} from "react-icons/si";

const frontendStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-accent" },
  { name: "TypeScript", icon: SiTypescript, color: "text-accentLight" },
  { name: "JavaScript", icon: SiJavascript, color: "text-gold" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal" },
];

const fullStackTools = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-accent" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Strapi CMS", icon: SiStrapi, color: "text-purple-500" },
];

const ecosystem = [
  { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
  { name: "Smarty", icon: SiPhp, color: "text-purple-400" },
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Linux", icon: SiLinux, color: "text-white" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const SkillIcon = ({ skill, small = false }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.1, zIndex: 50 }}
    className={`glass flex items-center justify-center rounded-xl p-3 md:p-4 group relative transition-all duration-300 border border-white/5 hover:border-accent/40 hover:bg-accent/5`}
  >
    <skill.icon className={`${small ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'} ${skill.color} transition-transform`} />
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold text-accent uppercase tracking-widest transition-all whitespace-nowrap pointer-events-none drop-shadow-glow">
      {skill.name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-24 px-4 md:px-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-accent/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle mb-3">Skills & Experience</p>
          <h2 className="section-title">My Technical Universe</h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          
          {/* Main Focus: Frontend Expertise */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 lg:col-span-8 glass-card p-8 rounded-3xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl select-none">UI</div>
             <h3 className="text-2xl font-bold text-white mb-2">Frontend Development</h3>
             <p className="text-textMuted text-sm mb-8 max-w-md">Building fast, responsive, and modern user interfaces is my primary focus.</p>
             
             <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
             >
               {frontendStack.map((skill) => (
                 <SkillIcon key={skill.name} skill={skill} />
               ))}
             </motion.div>
          </motion.div>

          {/* Secondary focus: Full Stack */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 lg:col-span-4 glass-card p-8 rounded-3xl border-l-4 border-teal"
          >
             <h3 className="text-2xl font-bold text-white mb-2 text-gradient-teal inline-block">Full-Stack Capability</h3>
             <p className="text-textMuted text-sm mb-8">Comfortable working across the stack to deliver complete web solutions.</p>
             
             <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3"
             >
               {fullStackTools.map((skill) => (
                 <SkillIcon key={skill.name} skill={skill} small />
               ))}
             </motion.div>
          </motion.div>

          {/* Ecosystem & Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 glass-card p-8 rounded-3xl relative overflow-hidden"
          >
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
               <div className="md:w-1/3">
                 <h3 className="text-xl font-bold text-white mb-2">Deployment & Workflow</h3>
                 <p className="text-textMuted text-sm">A diverse set of tools and environments that support my development lifecycle and production deployments.</p>
               </div>
               
               <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4 md:w-2/3 justify-start md:justify-end"
               >
                 {ecosystem.map((skill) => (
                   <SkillIcon key={skill.name} skill={skill} small />
                 ))}
               </motion.div>
             </div>
          </motion.div>

        </div>

        {/* Soft Skills Bottom Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-textMuted italic text-sm tracking-wide"
        >
          Combining technical skills with a <span className="text-accent font-bold">problem-solving</span> mindset and <span className="text-teal font-bold">collaborative</span> attitude.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
