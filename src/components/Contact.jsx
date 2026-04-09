import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiUser, HiChatAlt2, HiArrowRight } from "react-icons/hi";
import { SiGithub, SiTwitter } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_geuiz36", "template_n65r8lp", form.current,"RfUT5KaBjJiJ-rbVO")
      .then(
        (result) => {
          setLoading(false);
          form.current.reset();
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          console.log(error);
          setLoading(false);
        },
      );
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-subtitle mb-3">Get in touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="mt-4 text-textMuted max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-4xl font-black text-white mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h3>
            <p className="text-textMuted text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent text-2xl group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <HiMail />
                </div>
                <div>
                  <p className="text-textMuted text-sm uppercase tracking-widest font-bold">
                    Email
                  </p>
                  <p className="text-white font-bold">hr.spasov32@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-teal text-2xl group-hover:scale-110 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                  <HiChatAlt2 />
                </div>
                <div>
                  <p className="text-textMuted text-sm uppercase tracking-widest font-bold">
                    Socials
                  </p>
                  <div className="flex gap-4 mt-1">
                    <a
                      href="https://github.com/Hristo-Spasov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent transition-colors text-2xl"
                    >
                      <SiGithub />
                    </a>
                    <a
                      href="https://linkedin.com/hristo-spasov-fnd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent transition-colors text-2xl"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl relative">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6 text-left"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-textMuted uppercase tracking-widest ml-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted" />
                    <input
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-surface border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-textMuted uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted" />
                    <input
                      type="email"
                      name="from_email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-surface border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-textMuted uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="What's on your mind?"
                    required
                    className="w-full bg-surface border border-white/5 rounded-xl py-4 px-4 text-white outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Alert */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-surface/90 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-8 z-10"
                  >
                    <div className="w-20 h-20 bg-teal/20 text-teal rounded-full flex items-center justify-center text-4xl mb-6 shadow-glow-teal">
                      ✓
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-textMuted">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-accent font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
