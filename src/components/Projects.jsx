import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[var(--color-brand-peach)] drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] mb-12 uppercase"
        >
          Projects
        </motion.h2>

        {/* Redirect Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-xl overflow-hidden"
          style={{
            background: "rgba(18, 10, 28, 0.95)",
            border: "2px solid #36294a",
          }}
        >
          {/* Decorative top accent bar */}
          <div
            className="h-1 w-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-brand-pink), var(--color-brand-cyan), var(--color-brand-peach))",
            }}
          />

          <div className="px-8 py-14 sm:px-12 sm:py-16">
            {/* Terminal-style header */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#ff2a6d]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffb07c]"></span>
              <span className="w-3 h-3 rounded-full bg-[#05d9e8]"></span>
              <span className="ml-2 text-xs font-mono text-[#a895be] uppercase tracking-wider">
                projects_redirect
              </span>
            </div>

            {/* Message */}
            <p className="text-lg sm:text-xl text-[#c9c4d4] leading-relaxed mb-3">
              My projects have moved to their new home.
            </p>
            <p className="text-sm sm:text-base text-[#a895be] leading-relaxed mb-10">
              Visit{" "}
              <span className="text-[var(--color-brand-cyan)] font-semibold">
                siddharthv.in
              </span>{" "}
              for the complete collection of projects, case studies, and live
              demos.
            </p>

            {/* CTA Button */}
            <a
              href="https://siddharthv.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-lg text-sm font-mono uppercase tracking-widest transition-all duration-300 shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-pink), #a855f7)",
                color: "#fff",
                border: "2px solid var(--color-brand-pink)",
              }}
            >
              <span>Visit siddharthv.in</span>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;