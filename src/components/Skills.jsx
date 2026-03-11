import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import { SiMysql, SiCplusplus, SiC } from "react-icons/si";

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

        {/* TECHNOLOGY ICONS */}

        <div className="mb-20 text-center">

          <h3 className="text-cyan-400 font-semibold mb-8 tracking-wider">
            TECHNOLOGIES
          </h3>

          <div className="flex flex-wrap justify-center gap-12 text-5xl">

            <SiC className="skill-icon text-blue-400 hover:drop-shadow-[0_0_10px_cyan]" />

<SiCplusplus className="skill-icon text-blue-500 hover:drop-shadow-[0_0_10px_cyan]" />

<FaPhp className="skill-icon text-indigo-400 hover:drop-shadow-[0_0_10px_cyan]" />

<FaHtml5 className="skill-icon text-orange-500 hover:drop-shadow-[0_0_10px_cyan]" />

<FaCss3Alt className="skill-icon text-blue-500 hover:drop-shadow-[0_0_10px_cyan]" />

<SiMysql className="skill-icon text-sky-400 hover:drop-shadow-[0_0_10px_cyan]" />

          </div>

        </div>


        {/* CAPABILITIES */}

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8">

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


          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8">

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


          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8">

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

export default Skills;