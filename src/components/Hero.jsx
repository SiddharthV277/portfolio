import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white px-6 pt-28"
    >
      <div className="text-center max-w-2xl mx-auto">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group">
            
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl group-hover:bg-yellow-400/30 transition duration-500"></div>

            {/* Image */}
            <img
              src={profile}
              alt="Siddharth Verma"
              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-yellow-400 shadow-lg shadow-yellow-500/40 transition duration-300 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glow-text text-5xl md:text-6xl font-bold mb-6"
        >
          Siddharth Verma
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl mb-8"
        >
          BCA Student • Developer • System Builder
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-400 rounded-xl font-semibold transition shadow-lg shadow-yellow-500/30 text-gray-900"
        >
          View Projects
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;  