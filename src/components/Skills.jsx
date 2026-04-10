import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGit
} from "react-icons/fa";

import {
  SiMysql,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiReact
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[var(--color-brand-peach)] drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] mb-16 text-center uppercase"
        >
          Skills & Technologies
        </motion.h2>

        {/* TECHNOLOGY ICON GRID */}
        <div className="mb-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

            <TechIcon icon={<SiC />} label="C" color="text-[#05d9e8]" />
            <TechIcon icon={<SiCplusplus />} label="C++" color="text-[#05d9e8]" />
            <TechIcon icon={<FaPhp />} label="PHP" color="text-[#ffb07c]" />
            <TechIcon icon={<SiMysql />} label="MySQL" color="text-[#ffb07c]" />
            <TechIcon icon={<FaHtml5 />} label="HTML5" color="text-[#ffb07c]" />
            <TechIcon icon={<FaCss3Alt />} label="CSS3" color="text-[#05d9e8]" />
            <TechIcon icon={<SiJavascript />} label="JavaScript" color="text-[#ffb07c]" />
            <TechIcon icon={<SiTypescript />} label="TypeScript" color="text-[#05d9e8]" />
            <TechIcon icon={<SiReact />} label="React" color="text-[#05d9e8]" />
            <TechIcon icon={<SiTailwindcss />} label="Tailwind" color="text-[#05d9e8]" />
            <TechIcon icon={<SiNodedotjs />} label="Node.js" color="text-[#ff2a6d]" />
            <TechIcon icon={<FaGit />} label="Git" color="text-[#ff2a6d]" />

          </div>
        </div>

        {/* WRITTEN SKILL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Software Development */}
          <div className="glass-card">
            <h3 className="text-xl font-semibold text-[var(--color-brand-pink)] mb-4 drop-shadow-[1px_1px_0_#000] uppercase tracking-wider">
              Software Development
            </h3>
            <ul className="space-y-3 text-[#e5e5e5] drop-shadow-[1px_1px_0_#000]">
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> System Design</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> Management Systems</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> Problem Solving</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> Algorithmic Thinking</li>
            </ul>
          </div>

          {/* Tools & Environment */}
          <div className="glass-card">
            <h3 className="text-xl font-semibold text-[var(--color-brand-pink)] mb-4 drop-shadow-[1px_1px_0_#000] uppercase tracking-wider">
              Tools & Environment
            </h3>
            <ul className="space-y-3 text-[#e5e5e5] drop-shadow-[1px_1px_0_#000]">
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> VS Code</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> XAMPP</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> Git & GitHub</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> MySQL Workbench</li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="glass-card">
            <h3 className="text-xl font-semibold text-[var(--color-brand-pink)] mb-4 drop-shadow-[1px_1px_0_#000] uppercase tracking-wider">
              Focus Areas
            </h3>
            <ul className="space-y-3 text-[#e5e5e5] drop-shadow-[1px_1px_0_#000]">
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> Management Systems</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> Backend Logic Development</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> Database Architecture</li>
              <li className="flex items-center gap-2"><span className="text-[var(--color-brand-cyan)] text-sm">▶</span> Practical Solutions</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}

/* REUSABLE TECH ICON CARD */
function TechIcon({ icon, label, color }) {
  return (
    <div className="glass-card flex flex-col items-center justify-center p-6 text-center shadow-[4px_4px_0_#000]">
      <div 
        className={`text-4xl mb-3 skill-icon ${color}`}
        style={{ filter: "drop-shadow(3px 3px 0 rgba(0,0,0,1))" }}
      >
        {icon}
      </div>
      <p className="text-[#e5e5e5] text-sm font-semibold tracking-wider drop-shadow-[1px_1px_0_#000]">
        {label}
      </p>
    </div>
  );
}

export default Skills;