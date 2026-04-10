import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">

      <div className="max-w-4xl mx-auto text-center glass-card relative overflow-visible">

        {/* Decorative Ruin Crystal at the top center */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[var(--color-brand-pink)] to-[#5a1c3b] rotate-45 border-4 border-[#1a1025] shadow-[0_0_15px_rgba(255,42,109,0.8)]"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[var(--color-brand-peach)] mb-10 drop-shadow-[3px_3px_0_#000] uppercase mt-4"
        >
          Contact Archive
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#e5e5e5] text-xl mb-12 leading-relaxed drop-shadow-[1px_1px_0_#000]"
        >
          If you would like to discuss a project, collaboration, or opportunity,
          feel free to reach out. I’m always interested in working on practical
          systems and meaningful software solutions.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          {/* Email Button */}
          <a
            href="mailto:siddharth.rnc@gmail.com"
            className="pixel-btn text-xl"
          >
            Email Me
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/SiddharthV277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-transparent border-2 border-[var(--color-brand-cyan)] text-[var(--color-brand-cyan)] uppercase text-xl font-bold shadow-[4px_4px_0_#000] hover:bg-[var(--color-brand-cyan)] hover:text-[#1a1025] transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_#000]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            View GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;