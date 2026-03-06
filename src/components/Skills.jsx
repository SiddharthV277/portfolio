import { motion } from "framer-motion";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Programming Languages */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Programming Languages
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>C</li>
              <li>C++</li>
              <li>PHP</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Web Development
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Layout Design</li>
            </ul>
          </div>

          {/* Backend & Database */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Backend & Database
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>PHP Backend Development</li>
              <li>MySQL Database Design</li>
              <li>CRUD Operations</li>
              <li>Database Integration</li>
            </ul>
          </div>

          {/* Software Development */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400 transition">
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

          {/* Tools */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400 transition">
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
          <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400 transition">
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