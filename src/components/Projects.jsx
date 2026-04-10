import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPhp, FaHtml5, FaCss3Alt, FaGithub, FaPlay } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const cimsVideo = "/portfolio/videos/cims.mp4";

const projects = [
  {
    id: "cims",
    number: "01",
    title: "CIMS",
    subtitle: "Coaching Institute Management System",
    year: "2024",
    description:
      "Full-stack admin dashboard for coaching institutes — student admissions, fee installments, batch & staff management.",
    video: cimsVideo,
    github: "https://github.com/SiddharthV277/CIMS-coaching-institute-management-system",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    icons: [
      { el: <FaPhp />, color: "#ffb07c", label: "PHP" },
      { el: <SiMysql />, color: "#05d9e8", label: "MySQL" },
      { el: <FaHtml5 />, color: "#fb923c", label: "HTML5" },
      { el: <FaCss3Alt />, color: "#60a5fa", label: "CSS3" },
    ],
  },
];

function ProjectCard({ project, index }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play().catch(() => {});
    setPlaying(true);
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onMouseEnter={play}
      onMouseLeave={pause}
      className="group relative flex flex-col sm:flex-row gap-0 rounded-lg overflow-hidden"
      style={{
        background: "rgba(18, 10, 28, 0.9)",
        border: "2px solid #2a1d3d",
        boxShadow: "5px 5px 0 #000",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
      }}
      whileHover={{
        borderColor: "var(--color-brand-pink)",
        boxShadow: "5px 5px 0 #000, 0 0 18px rgba(255,42,109,0.25)",
        y: -3,
      }}
    >
      {/* ── Info Side ── */}
      <div className="flex flex-col justify-between p-6 sm:p-7 flex-1 min-w-0">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-[10px] font-mono text-[#3d2d55] select-none">
              {project.number}
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--color-brand-cyan)] opacity-70">
              {project.year}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-brand-peach)] drop-shadow-[2px_2px_0_#000] mb-0.5">
            {project.title}
          </h3>
          <p className="text-[11px] text-[#5a4a72] uppercase tracking-widest mb-4">
            {project.subtitle}
          </p>
          <p className="text-sm text-[#c9c4d4] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Footer: icons + github */}
        <div className="flex items-center justify-between mt-6 gap-4 flex-wrap">
          <div className="flex items-center gap-3 text-xl">
            {project.icons.map(({ el, color, label }) => (
              <span
                key={label}
                title={label}
                style={{
                  color,
                  filter: "drop-shadow(2px 2px 0 #000)",
                  display: "flex",
                }}
              >
                {el}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-xs text-[#6b5a80] hover:text-[var(--color-brand-pink)] transition-colors duration-200 uppercase tracking-widest"
          >
            <FaGithub size={14} />
            GitHub
          </a>
        </div>
      </div>

      {/* ── Video Side ── */}
      <div
        className="relative shrink-0 overflow-hidden bg-[#0b0614]"
        style={{ width: "100%", maxWidth: 280, minHeight: 180 }}
      >
        {/* Always in DOM — avoids timing bug with play() */}
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ display: "block", minHeight: 180, aspectRatio: "16/9" }}
        />

        {/* Hover-off overlay (play indicator) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 gap-2"
          style={{
            background: playing ? "rgba(11,6,20,0)" : "rgba(11,6,20,0.75)",
            backdropFilter: playing ? "none" : "blur(2px)",
          }}
        >
          {!playing && (
            <>
              <div
                className="w-12 h-12 rounded-full border border-[var(--color-brand-cyan)] flex items-center justify-center"
                style={{ boxShadow: "0 0 14px rgba(5,217,232,0.35)" }}
              >
                <FaPlay size={14} className="text-[var(--color-brand-cyan)] ml-0.5" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-[#4a6a80]">
                Hover to play
              </span>
            </>
          )}
        </div>

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)",
          }}
        />

        {/* Left edge gradient so it blends with info panel */}
        <div
          className="absolute inset-y-0 left-0 w-6 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(18,10,28,0.9), transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[var(--color-brand-peach)] drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] mb-16 text-center uppercase"
        >
          Projects
        </motion.h2>

        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}

          {/* Placeholder for upcoming projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 py-5 px-7 rounded-lg"
            style={{
              border: "2px dashed #2a1d3d",
              color: "#2a1d3d",
            }}
          >
            <span className="text-[10px] font-mono">02</span>
            <span className="text-sm uppercase tracking-widest">More coming soon</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Projects;