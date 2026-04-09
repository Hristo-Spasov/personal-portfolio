import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiNodedotjs } from "react-icons/si";

const TechBadge = ({ icon: Icon, label, color, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    animate={{ 
      y: [0, y, 0],
      x: [0, x, 0]
    }}
    hover={{ scale: 1.1 }}
    className={`absolute glass p-3 rounded-2xl flex flex-col items-center gap-1 shadow-glow-${color} group cursor-default`}
    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginTop: y, marginLeft: x }}
  >
    <Icon className={`text-2xl text-${color}`} />
    <span className="text-[10px] font-bold text-white/70 uppercase tracking-tighter group-hover:text-white transition-colors">{label}</span>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 px-4 md:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-3">About Me</p>
          <h2 className="section-title">Full-Stack Developer</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Bridging <span className="text-gradient">User Experience</span> with <span className="text-gradient-teal">Modern Web Tech</span>.
            </h3>
            <p className="text-textMuted text-lg leading-relaxed">
              I am a Frontend / Full-Stack developer with experience building and deploying real-world applications using 
              <span className="text-accent font-semibold ml-1">Next.js</span>, 
              <span className="text-accent font-semibold ml-1">TypeScript</span>, and 
              <span className="text-accent font-semibold ml-1">headless CMS</span>.
            </p>
            <p className="text-textMuted text-lg leading-relaxed">
              My work spans both UI and backend-related tasks, including API integration, server-side state management, and building automated processing scripts with 
              <span className="text-teal font-semibold ml-1">Python</span>. I thrive on building scalable applications and continuously expanding my 
              <span className="text-teal font-semibold ml-1">backend</span> and <span className="text-white font-semibold ml-1">full-stack expertise</span>.
            </p>
            <p className="text-textMuted text-lg leading-relaxed italic">
              Outside of coding, I enjoy reading, experimenting in the kitchen, and playing video games.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6 text-center">
              <div className="glass-card p-4 rounded-xl border-l-4 border-accent">
                <p className="text-2xl font-black text-white">Scale</p>
                <p className="text-textMuted text-xs">High-Volume Optimization</p>
              </div>
              <div className="glass-card p-4 rounded-xl border-l-4 border-teal">
                <p className="text-2xl font-black text-white">Product</p>
                <p className="text-textMuted text-xs">End-to-End Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* New Interactive Visual section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] flex items-center justify-center"
          >
            {/* Center Core */}
            <div className="relative w-40 h-40 glass-card rounded-full flex items-center justify-center z-10 shadow-glow animate-pulse-slow">
              <div className="flex flex-col items-center">
                <span className="text-4xl">💻</span>
                <span className="text-[10px] font-black text-accent tracking-[0.2em] uppercase mt-2">Developer</span>
              </div>
              
              {/* Outer rotating ring */}
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-accent/20 animate-spin-slow" />
              <div className="absolute inset-[-50px] rounded-full border border-dashed border-teal/10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>

            {/* Orbiting Tech Badges */}
            <TechBadge icon={SiReact} label="React" color="accent" x={-120} y={-100} delay={0.4} />
            <TechBadge icon={SiNextdotjs} label="Next.js" color="white" x={130} y={-80} delay={0.6} />
            <TechBadge icon={SiTypescript} label="TS" color="accent" x={140} y={90} delay={0.8} />
            <TechBadge icon={SiTailwindcss} label="Tailwind" color="teal" x={-140} y={60} delay={1.0} />
            <TechBadge icon={SiPostgresql} label="SQL" color="teal" x={0} y={150} delay={1.2} />
            <TechBadge icon={SiNodedotjs} label="Node" color="accent" x={0} y={-160} delay={1.4} />

            {/* Floating Soft Skills */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 glass px-4 py-2 rounded-xl text-accent text-xs font-black shadow-glow"
            >
              PROLEM SOLVER
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 left-4 glass px-4 py-2 rounded-xl text-teal text-xs font-black shadow-glow-teal"
            >
              FAST LEARNER
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
