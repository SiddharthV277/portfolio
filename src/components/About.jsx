import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-32 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-cyan-400"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto space-y-6"
        >
          <p>
            I am Siddharth Verma, a BCA student at IGNOU with a strong interest
            in building practical software systems. I enjoy developing solutions
            that solve real-world problems and improve management workflows.
          </p>

          <p>
            Recently, I developed a complete Coaching Institute Management
            System (CIMS) using PHP and MySQL. The system manages student
            admissions, fee installments, batch organization, and staff
            management through a structured admin dashboard.
          </p>

          <p>
            My focus is on creating efficient backend systems and management
            software that simplify complex operations.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;