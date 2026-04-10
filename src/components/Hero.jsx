import { motion } from "framer-motion";
import profile1 from "../assets/pixel_profile.png";
import profile2 from "../assets/pixel_profile2.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28"
    >
      <div className="text-center max-w-2xl mx-auto glass-card border-[var(--color-brand-purple)] bg-[var(--color-brand-dark)]/90 backdrop-blur-sm">

        {/* Profile Image with 3D Flip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group w-36 h-36 md:w-40 md:h-40" style={{ perspective: "1000px" }}>
            
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-md bg-[var(--color-brand-pink)]/40 blur-xl group-hover:bg-[var(--color-brand-peach)]/50 transition duration-500"></div>

            {/* Flipping Container */}
            <div
              className="relative w-full h-full transition-transform duration-700 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Wrapping the inner container for hover to apply the rotation safely */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:[transform:scale(1.05)_rotateY(180deg)]" style={{ transformStyle: "preserve-3d" }}>
                
                {/* Front Image */}
                <img
                  src={profile1}
                  alt="Siddharth Verma"
                  style={{ imageRendering: 'pixelated', backfaceVisibility: 'hidden' }}
                  className="absolute inset-0 w-full h-full object-cover border-4 border-[#ff2a6d] shadow-[4px_4px_0_#1a1025]"
                />

                {/* Back Image (Flipped) */}
                <img
                  src={profile2}
                  alt="Siddharth Verma"
                  style={{ imageRendering: 'pixelated', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  className="absolute inset-0 w-full h-full object-cover border-4 border-[#ffb07c] shadow-[4px_4px_0_#1a1025,0_0_15px_rgba(255,176,124,0.5)]"
                />

              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glow-text text-5xl md:text-6xl font-bold mb-4 drop-shadow-[3px_3px_0_#000]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Siddharth Verma
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#e5e5e5] text-lg md:text-xl mb-8 uppercase tracking-widest drop-shadow-[2px_2px_0_#000]"
        >
          BCA Student • Developer • System Builder
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block pixel-btn text-xl"
        >
          View Projects
        </motion.a>

      </div>
    </section>
  );
}

export default Hero;