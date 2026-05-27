import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto glass-card">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10 text-[var(--color-brand-peach)] drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] text-center uppercase"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#e5e5e5] text-xl leading-relaxed max-w-3xl mx-auto space-y-6 drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]"
        >
          <p>
            I am Siddharth Verma, a BCA student at IGNOU with a strong interest
            in building practical software systems. I enjoy developing solutions
            that solve real-world problems and improve management workflows.
          </p>

          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--color-brand-pink)] to-transparent my-4 opacity-50"></div>

          <p>
            Recently, I developed <strong>Dancing Keys</strong>, an audio-reactive RGB strobe effect controller for my EvoFox Phantom Gaming Mouse. Except for the fact that it doesn't actually control standard RGB, as my mouse lacks custom lighting APIs. You can <a href="#projects" className="text-[var(--color-brand-pink)] hover:underline font-semibold">know more about how I bypassed this limitation here</a>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;