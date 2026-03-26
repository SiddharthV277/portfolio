import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-white">

      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-yellow-400 mb-12"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg mb-12 leading-relaxed"
        >
          If you would like to discuss a project, collaboration, or opportunity,
          feel free to reach out. I’m always interested in working on practical
          systems and meaningful software solutions.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          {/* Email Button */}

          <a
            href="mailto:siddharth.rnc@gmail.com"
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-xl font-semibold transition shadow-lg shadow-yellow-500/30"
          >
            Email Me
          </a>

          {/* GitHub Button */}

          <a
            href="https://github.com/SiddharthV277"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-yellow-500 hover:bg-yellow-500/10 rounded-xl font-semibold transition"
          >
            View GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;