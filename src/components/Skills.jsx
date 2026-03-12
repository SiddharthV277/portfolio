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
    <section id="skills" className="py-32 px-6 text-white">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400 mb-16 text-center"
        >
          Skills & Technologies
        </motion.h2>


        {/* TECHNOLOGY ICON GRID */}

        <div className="mb-24">

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">

            <TechIcon icon={<SiC />} label="C" color="text-blue-400" />

            <TechIcon icon={<SiCplusplus />} label="C++" color="text-blue-500" />

            <TechIcon icon={<FaPhp />} label="PHP" color="text-indigo-400" />

            <TechIcon icon={<SiMysql />} label="MySQL" color="text-sky-400" />

            <TechIcon icon={<FaHtml5 />} label="HTML5" color="text-orange-500" />

            <TechIcon icon={<FaCss3Alt />} label="CSS3" color="text-blue-500" />

            <TechIcon icon={<SiJavascript />} label="JavaScript" color="text-yellow-400" />
            
            <TechIcon icon={<SiTypescript />} label="TypeScript" color="text-blue-500" />
            
            <TechIcon icon={<SiReact />} label="React" color="text-cyan-400" />

            <TechIcon icon={<SiTailwindcss />} label="Tailwind" color="text-cyan-400" />

            <TechIcon icon={<SiNodedotjs />} label="Node.js" color="text-green-500" />

            <TechIcon icon={<FaGit />} label="Git" color="text-red-500" />

          </div>

        </div>



        {/* WRITTEN SKILL CARDS */}

        <div className="grid md:grid-cols-3 gap-10">


          {/* Software Development */}

          <div className="glass-card p-8">

            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Software Development
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>System Design</li>
              <li>Management Systems</li>
              <li>Problem Solving</li>
              <li>Algorithmic Thinking</li>
            </ul>

          </div>


          {/* Tools & Environment */}

          <div className="glass-card p-8">

            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Tools & Environment
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>VS Code</li>
              <li>XAMPP</li>
              <li>Git & GitHub</li>
              <li>MySQL Workbench</li>
            </ul>

          </div>


          {/* Focus Areas */}

          <div className="glass-card p-8">

            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Focus Areas
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Management Systems</li>
              <li>Backend Logic Development</li>
              <li>Database Architecture</li>
              <li>Practical Software Solutions</li>
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
    <div className="glass-card flex flex-col items-center justify-center p-6">

      <div className={`text-4xl mb-3 skill-icon ${color} hover:drop-shadow-[0_0_12px_cyan]`}>
        {icon}
      </div>

      <p className="text-gray-300 text-sm">
        {label}
      </p>

    </div>
  );
}


export default Skills;