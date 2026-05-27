import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPhp, FaHtml5, FaCss3Alt, FaGithub, FaPlay, FaNodeJs, FaReact, FaPython, FaNetworkWired } from "react-icons/fa";
import { SiMysql, SiSqlite, SiExpress, SiVite, SiCloudflare, SiGooglegemini } from "react-icons/si";
import recordAssistantVideo from "../assets/videos/record_assistant.mp4";

const ClaudeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
  </svg>
);

const cimsVideo = import.meta.env.BASE_URL + "videos/cims.mp4";

const projects = [
  {
    id: "cims",
    number: "01",
    title: "CIMS",
    subtitle: "Coaching Institute Management System",
    year: "2026",
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
  {
    id: "record-assistant",
    number: "02",
    title: "Record Assistant",
    subtitle: "Enterprise Task & Financial Management System",
    year: "2026",
    description:
      "Multi-branch organizational management system built on a local-first, globally accessible architecture. Features a chained settlement engine, real-time financial ledger, role-based access control, and zero-trust global deployment via Cloudflare Tunnels & PM2.",
    video: recordAssistantVideo,
    github: "https://github.com/SiddharthV277/RECORD-ASSISTANT",
    tags: ["Node.js", "Express", "SQLite", "Vite", "React", "Cloudflare"],
    icons: [
      { el: <FaNodeJs />, color: "#68A063", label: "Node.js" },
      { el: <SiExpress />, color: "#c9c4d4", label: "Express" },
      { el: <SiSqlite />, color: "#05d9e8", label: "SQLite" },
      { el: <FaReact />, color: "#61DAFB", label: "React" },
      { el: <SiVite />, color: "#a78bfa", label: "Vite" },
      { el: <SiCloudflare />, color: "#F38020", label: "Cloudflare" },
    ],
  },
  {
    id: "dancing-keys",
    number: "03",
    title: "Dancing Keys",
    subtitle: "Audio-reactive strobe controller",
    year: "2026",
    description:
      "The project almost died before it started because my mouse doesn't support custom RGB control. But I refused to stop. I literally fired up Wireshark and sniffed USB packets while toggling the vendor app to extract the hex codes controlling the lighting firmware (probably a bit overkill, but it worked!). Just when I thought it was smooth sailing, I hit a massive wall: the colors are physically tied to DPI profiles and can only cycle sequentially (Blue → Red → Purple → Pink). Trying to change colors would make my cursor speed jump violently! I was stuck, but after spending so much brainpower, I wasn't going to quit over a hardware limit. I went for a simpler workaround: using raw ON/OFF commands to create an intense strobe effect instead. Together with Antigravity/Claude, we hooked this strobe engine to system audio via WASAPI loopback and a Spectral Flux beat detection algorithm to make the mouse dance. (Built in collaboration with Antigravity/Claude)",
    github: "https://github.com/SiddharthV277/Dancing-Keys-EvoFox",
    tags: ["Python", "React", "WebSocket", "NumPy", "PyAudio", "USB HID", "Claude", "Antigravity"],
    icons: [
      { el: <FaPython />, color: "#3776AB", label: "Python" },
      { el: <FaReact />, color: "#61DAFB", label: "React" },
      { el: <FaNetworkWired />, color: "#ffffff", label: "WebSockets" },
      { el: <ClaudeIcon />, color: "#E69E81", label: "Claude" },
      { el: <SiGooglegemini />, color: "#8E75C8", label: "Antigravity" },
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

      {/* ── Video/Image Side ── */}
      <div
        className="relative shrink-0 overflow-hidden bg-[#0b0614]"
        style={{ width: "100%", maxWidth: 280, minHeight: 180 }}
      >
        {project.video ? (
          <>
            {/* Always in DOM — avoids timing bug with play() */}
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-contain"
              style={{ display: "block", minHeight: 180, aspectRatio: "16/9", backgroundColor: "#000" }}
            >
              <source src={project.video} type="video/mp4" />
            </video>

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
          </>
        ) : (
          <img
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='180'><rect width='100%' height='100%' fill='%23000000'/></svg>"
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ display: "block", minHeight: 180, aspectRatio: "16/9" }}
          />
        )}
        
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
            <span className="text-[10px] font-mono">04</span>
            <span className="text-sm uppercase tracking-widest">More coming soon</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Projects;