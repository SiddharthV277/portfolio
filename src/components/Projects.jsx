import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaPython,
  FaNetworkWired,
  FaTimes,
  FaExternalLinkAlt,
  FaBookOpen,
  FaImages,
  FaAndroid,
} from "react-icons/fa";
import {
  SiMysql,
  SiSqlite,
  SiExpress,
  SiVite,
  SiCloudflare,
  SiGooglegemini,
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiWordpress,
  SiDocker,
  SiTypescript,
} from "react-icons/si";
import buddyPunchingImg from "../assets/images/buddypunching.png";
import recordAssistant1 from "../assets/images/record_assistant_1.png";
import recordAssistant2 from "../assets/images/record_assistant_2.png";
import recordAssistant3 from "../assets/images/record_assistant_3.png";
import rsonline1 from "../assets/images/rsonline_1.png";
import jhn1 from "../assets/images/jhn_1.png";
import jhn2 from "../assets/images/jhn_2.png";
import jhn3 from "../assets/images/jhn_3.png";
const ClaudeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
  </svg>
);

const projects = [
  {
    id: "cims",
    number: "01",
    title: "CIMS",
    subtitle: "Coaching Institute Management System",
    year: "2026",
    summary:
      "Full-stack admin dashboard for coaching institutes featuring student admissions, automated fee installments, batch scheduling, and comprehensive staff management.",
    story:
      "CIMS was developed to streamline administrative workflows for educational institutes. It manages the entire lifecycle of student records, automated installment-based fee tracking, batch scheduling, and teacher assignments within a secure PHP & MySQL environment.",
    image: null,
    images: [],
    github: "https://github.com/SiddharthV277/CIMS-coaching-institute-management-system",
    tags: ["PHP", "MySQL", "HTML5", "CSS3"],
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
    subtitle: "Enterprise Task & Financial Engine",
    year: "2026",
    summary:
      "Multi-branch organizational system with a local-first, globally accessible architecture. Features a chained settlement engine, real-time ledger, RBAC, and zero-trust deployment via Cloudflare.",
    story:
      "Built for complex multi-branch organizational oversight, Record Assistant utilizes a chained settlement engine to ensure financial audit integrity. It offers offline resilience with local-first data stores, role-based access control, and secure internet access without port forwarding via Cloudflare Tunnels & PM2.",
    image: recordAssistant1,
    images: [recordAssistant1, recordAssistant2, recordAssistant3],
    github: "https://github.com/SiddharthV277/RECORD-ASSISTANT",
    tags: ["Node.js", "Express", "SQLite", "React", "Cloudflare"],
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
    subtitle: "Audio-Reactive Strobe Controller",
    year: "2026",
    summary:
      "Firmware lighting controller for EvoFox gaming mice. Reverse-engineered USB packets via Wireshark and built a WASAPI audio-reactive strobe engine with Spectral Flux beat detection.",
    story:
      "The project almost died before it started because my mouse doesn't support custom RGB control. But I refused to stop. I literally fired up Wireshark and sniffed USB packets while toggling the vendor app to extract the hex codes controlling the lighting firmware (probably a bit overkill, but it worked!). Just when I thought it was smooth sailing, I hit a massive wall: the colors are physically tied to DPI profiles and can only cycle sequentially (Blue → Red → Purple → Pink). Trying to change colors would make my cursor speed jump violently! I was stuck, but after spending so much brainpower, I wasn't going to quit over a hardware limit. I went for a simpler workaround: using raw ON/OFF commands to create an intense strobe effect instead. Together with Antigravity/Claude, we hooked this strobe engine to system audio via WASAPI loopback and a Spectral Flux beat detection algorithm to make the mouse dance.",
    image: null,
    images: [],
    github: "https://github.com/SiddharthV277/Dancing-Keys-EvoFox",
    tags: ["Python", "React", "WebSocket", "NumPy", "PyAudio", "USB HID"],
    icons: [
      { el: <FaPython />, color: "#3776AB", label: "Python" },
      { el: <FaReact />, color: "#61DAFB", label: "React" },
      { el: <FaNetworkWired />, color: "#ffffff", label: "WebSockets" },
      { el: <ClaudeIcon />, color: "#E69E81", label: "Claude" },
      { el: <SiGooglegemini />, color: "#8E75C8", label: "Antigravity" },
    ],
  },
  {
    id: "rs-online",
    number: "04",
    title: "RS.ONLINE",
    subtitle: "Enterprise Multi-Tenant Hub & Gateway",
    year: "2026",
    summary:
      "Central gateway for four federated platforms (RS Task, Visitor Tracker, CSC Verification, MPL Records). Built without frameworks using Vanilla ES6+ and HTML5 Canvas 2D to keep it fast on slow connections.",
    story:
      "We had four separate web platforms — RS Task for internal ops, Visitor Tracker for analytics, CSC for certificate verification, and MPL for land records — all living on different subdomains with no shared entry point. People kept calling the office to verify student certificates because they couldn't find the right portal. So I built a single gateway at rsonline.online to route everything. I skipped React/Next.js entirely because most users here are on slow mobile connections and a heavy JS bundle would hurt load times. The whole thing runs on Vanilla ES6+ and HTML5 Canvas 2D. The tricky part was the CSC certificate lookup: when users searched for a certificate, the redirect opened in a new tab — but browsers were blocking it as a popup because the window.open() call happened after an async fetch. Together with Antigravity/Claude, we fixed it by pre-warming DNS connections and triggering the redirect synchronously inside the user gesture.",
    image: rsonline1,
    images: [rsonline1],
    github: "https://github.com/SiddharthV277/RSONLINE",
    live: "https://rsonline.online",
    tags: ["Node.js", "Express", "JavaScript", "HTML5 Canvas", "Cloudflare"],
    icons: [
      { el: <FaNodeJs />, color: "#68A063", label: "Node.js" },
      { el: <SiExpress />, color: "#c9c4d4", label: "Express" },
      { el: <SiJavascript />, color: "#F7DF1E", label: "JavaScript" },
      { el: <FaHtml5 />, color: "#fb923c", label: "HTML5 Canvas" },
      { el: <SiCloudflare />, color: "#F38020", label: "Cloudflare" },
    ],
  },
  {
    id: "buddy-punching",
    number: "05",
    title: "Buddy Punching",
    subtitle: "Anti-Fraud Fused Presence & Attendance Engine",
    year: "2026",
    summary:
      "Mobile attendance system that fuses OS geofencing with Wi-Fi router BSSID verification and hardware device binding to stop GPS spoofing and buddy-punching.",
    story:
      "Every attendance app I tested could be beaten in under two minutes — employees were either handing their phones to coworkers to clock in for them, or just installing a fake GPS app from the Play Store. But you can't fix this by polling GPS harder, because Android flags aggressive background location apps as stalkerware and kills the battery. So instead of trusting GPS alone, I layered OS native geofencing with Wi-Fi router BSSID checks — the app verifies that you're actually connected to the office's physical router hardware (MAC address), which you can't spoof from home. Then a new problem showed up: employees would clock in and forget to clock out, leaving 72-hour orphan sessions that broke payroll math. And some tried logging in from a coworker's phone. Together with Antigravity/Claude, we added hardware device fingerprint binding so each account is locked to one physical phone, and wrote a PostgreSQL cron job that auto-settles any open session at midnight. The admin side is a Vite + React dashboard with a live Mappls radar map for configuring office geofences and monitoring check-ins.",
    image: buddyPunchingImg,
    images: [buddyPunchingImg],
    github: "https://github.com/SiddharthV277/Buddy-Punching",
    tags: ["React Native", "Expo", "Node.js", "PostgreSQL", "Express", "TailwindCSS"],
    icons: [
      { el: <FaReact />, color: "#61DAFB", label: "React Native" },
      { el: <FaAndroid />, color: "#3DDC84", label: "Android" },
      { el: <FaNodeJs />, color: "#68A063", label: "Node.js" },
      { el: <SiExpress />, color: "#c9c4d4", label: "Express" },
      { el: <SiPostgresql />, color: "#336791", label: "PostgreSQL" },
      { el: <SiTailwindcss />, color: "#06B6D4", label: "TailwindCSS" },
    ],
  },
  {
    id: "jharkhand-newsline",
    number: "06",
    title: "Jharkhand NewsLine",
    subtitle: "Headless News Platform & Cloud Infrastructure",
    year: "2026",
    summary:
      "Decoupled headless news platform running Next.js 16 over a headless WordPress CMS, with MySQL, PostgreSQL, and Cloudflare Tunnel — all containerized in Docker with zero inbound ports.",
    story:
      "This started because a local news operation needed a proper digital presence but had no budget for managed hosting or cloud providers. So I built the entire stack on a single machine — Next.js 16 frontend pulling articles from a headless WordPress backend, MySQL for editorial content, PostgreSQL for subscribers and engagement tracking, all wired together inside a Docker bridge network. The hard constraint was security: no ports could be open on the host router. I solved that with Cloudflare Tunnel running as a container — it opens outbound QUIC connections to Cloudflare's edge, so the server's IP is never exposed and there's nothing to port-scan. The frontend has two reading modes: a high-contrast monochrome editorial layout for desktop and a vertical swipe news reel for mobile. Content goes through ISR so pages are statically generated but stay fresh. I wrote custom WordPress MU-plugins for headless enforcement, multilingual support (Hindi/English), and direct SQL joins that bypass standard WP overhead to keep API responses under 20ms. Deployments are a single command — docker build + compose up — and take about 5 seconds with layer caching. A PowerShell script backs up both databases and all media to a secondary drive every night at 3 AM, with 14-day retention.",
    image: jhn1,
    images: [jhn1, jhn2, jhn3],
    github: "https://github.com/SiddharthV277/JharkhandNewsline",
    live: "https://jharkhandnewsline.com",
    tags: ["Next.js", "TypeScript", "WordPress", "Docker", "PostgreSQL", "Cloudflare"],
    icons: [
      { el: <SiNextdotjs />, color: "#ffffff", label: "Next.js" },
      { el: <SiTypescript />, color: "#3178C6", label: "TypeScript" },
      { el: <SiWordpress />, color: "#21759B", label: "WordPress" },
      { el: <SiDocker />, color: "#2496ED", label: "Docker" },
      { el: <SiPostgresql />, color: "#336791", label: "PostgreSQL" },
      { el: <SiCloudflare />, color: "#F38020", label: "Cloudflare" },
    ],
  },
];

function ProjectCard({ project, index, onOpenStory }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Maximum 3 images, strictly center oriented with no text
  const displayImages = (
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : []
  ).slice(0, 3);

  const hasSecondPage = displayImages.length > 0;

  const handleCardClick = (e) => {
    // If there is no 2nd page, it will not flip
    if (!hasSecondPage) return;

    // If the click is inside a link or button, don't toggle the card flip
    if (e.target.closest("a") || e.target.closest("button")) {
      return;
    }
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`relative w-full select-none ${hasSecondPage ? "cursor-pointer" : "cursor-default"}`}
      style={{ height: "540px" }}
      onClick={handleCardClick}
    >
      {/* ── CARD B: Drop-Shadow Gallery Card (Hidden as solid drop shadow initially, comes forward when clicked) ── */}
      <motion.div
        animate={{
          x: isFlipped ? 0 : 8,
          y: isFlipped ? 0 : 8,
          zIndex: isFlipped ? 20 : 0,
          scale: isFlipped ? 1 : 0.99,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute inset-0 rounded-xl overflow-hidden flex flex-col justify-center items-center"
        style={{
          height: "100%",
          width: "100%",
          background: isFlipped ? "rgba(18, 10, 28, 0.98)" : "#000000",
          border: isFlipped ? "2px solid var(--color-brand-pink)" : "2px solid #000000",
          boxShadow: isFlipped
            ? "8px 8px 0 #000, 0 0 24px rgba(255,42,109,0.35)"
            : "none",
          transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
          pointerEvents: isFlipped ? "auto" : "none",
        }}
        title={isFlipped ? "Click anywhere to return to details" : ""}
      >
        {/* Gallery View: STRICTLY NO TEXT, Center Oriented, Max 3 Images - Hidden until flipped */}
        <div
          className={`w-full h-full flex flex-col items-center justify-center p-5 sm:p-6 overflow-hidden transition-opacity duration-300 ${
            isFlipped ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {displayImages.length > 0 ? (
            <div className="w-full flex flex-col items-center justify-center gap-3">
              {displayImages.map((imgSrc, imgIdx) => (
                <div
                  key={imgIdx}
                  className="w-full max-w-[310px] rounded-lg overflow-hidden border border-[#36294a] shadow-[3px_3px_0_#000] bg-[#0b0614] relative group/img"
                  style={{
                    maxHeight:
                      displayImages.length === 1
                        ? "360px"
                        : displayImages.length === 2
                        ? "185px"
                        : "125px",
                  }}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    style={{
                      maxHeight:
                        displayImages.length === 1
                          ? "360px"
                          : displayImages.length === 2
                          ? "185px"
                          : "125px",
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Centered placeholder frame when no gallery images exist yet */
            <div className="w-full max-w-[280px] aspect-video rounded-lg border-2 border-dashed border-[#36294a] bg-[#120a1c] flex items-center justify-center shadow-[3px_3px_0_#000]">
              <div className="w-14 h-14 rounded-lg border border-[#36294a] bg-[#1a1025] flex items-center justify-center text-3xl text-[#6b5a80]">
                {project.icons && project.icons[0] ? project.icons[0].el : <span>🖼️</span>}
              </div>
            </div>
          )}

          {/* Bottom center page number indicator - non-performing text */}
          <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 text-xs font-mono text-[#7a6890] select-none tracking-widest uppercase pointer-events-none">
            {displayImages.length > 0 ? "2/2" : "1/1"}
          </div>
        </div>
      </motion.div>

      {/* ── CARD A: Front Details Card (Drops back to solid drop shadow when flipped) ── */}
      <motion.div
        animate={{
          x: isFlipped ? 8 : 0,
          y: isFlipped ? 8 : 0,
          zIndex: isFlipped ? 0 : 10,
          scale: isFlipped ? 0.99 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute inset-0 rounded-xl overflow-hidden flex flex-col justify-between"
        style={{
          height: "100%",
          width: "100%",
          background: isFlipped ? "#000000" : "rgba(18, 10, 28, 0.95)",
          border: isFlipped ? "2px solid #000000" : "2px solid #36294a",
          boxShadow: isFlipped ? "none" : "none",
          transition: "background 0.25s ease, border-color 0.25s ease",
          pointerEvents: isFlipped ? "none" : "auto",
        }}
        whileHover={!isFlipped ? { borderColor: "var(--color-brand-pink)" } : {}}
      >
        <div
          className={`flex flex-col h-full justify-between transition-opacity duration-300 ${
            isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
        {/* Top Preview Image Wrapper with Thin Margin */}
        <div className="p-2.5 pb-0 shrink-0">
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0b0614] border border-[#2a1d3d] rounded-lg">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1b102e] via-[#120a1c] to-[#0b0614] relative">
                <div className="w-14 h-14 rounded-lg border border-[#36294a] bg-[#1a1025] flex items-center justify-center mb-2 shadow-[3px_3px_0_#000] text-3xl group-hover:border-[var(--color-brand-pink)] group-hover:text-[var(--color-brand-pink)] transition-all duration-300">
                  {project.icons && project.icons[0] ? project.icons[0].el : <span>📁</span>}
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#a895be] group-hover:text-[var(--color-brand-peach)] transition-colors">
                  {project.title}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--color-brand-cyan)] font-mono mt-1 opacity-80 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] animate-pulse"></span>
                  Preview Pending
                </span>
              </div>
            )}

            {/* Badges: Project Number, Live indicator & Year */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
              <div className="px-2 py-0.5 rounded bg-[#0b0614]/85 backdrop-blur-md border border-[#36294a] text-xs font-mono text-[var(--color-brand-cyan)] shadow-[2px_2px_0_#000]">
                {project.number}
              </div>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-2 py-0.5 rounded bg-[#05d9e8]/15 hover:bg-[#05d9e8]/30 backdrop-blur-md border border-[var(--color-brand-cyan)] text-[10px] font-mono text-[var(--color-brand-cyan)] shadow-[2px_2px_0_#000] flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Visit Live Site: rsonline.online"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] animate-pulse"></span>
                  <span>LIVE</span>
                </a>
              )}
            </div>

            <div className="absolute top-2.5 right-2.5 flex items-center gap-2">
              {/* Interactive Flip Hint Pill - only shown when 2nd page exists */}
              {hasSecondPage && (
                <div
                  className="px-2 py-0.5 rounded bg-[#0b0614]/85 backdrop-blur-md border border-[#36294a] hover:border-[var(--color-brand-pink)] text-[10px] font-mono text-[var(--color-brand-peach)] shadow-[2px_2px_0_#000] flex items-center gap-1 transition-colors"
                  title="Click card to reveal gallery"
                >
                  <FaImages size={11} className="text-[var(--color-brand-pink)]" />
                  <span>GALLERY</span>
                </div>
              )}
              <div className="px-2 py-0.5 rounded bg-[#0b0614]/85 backdrop-blur-md border border-[#36294a] text-xs font-mono text-[#ffb07c] shadow-[2px_2px_0_#000]">
                {project.year}
              </div>
            </div>

            {/* Bottom subtle shadow transition to card body */}
            <div className="absolute inset-x-0 bottom-0 h-6 pointer-events-none bg-gradient-to-t from-[rgba(18,10,28,0.95)] to-transparent" />
          </div>
        </div>

        {/* Card Content Body */}
        <div className="flex flex-col flex-1 p-6 justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-brand-peach)] drop-shadow-[2px_2px_0_#000] mb-1 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-[#a895be] uppercase tracking-wider font-semibold mb-3">
              {project.subtitle}
            </p>

            <p className="text-sm text-[#c9c4d4] leading-relaxed line-clamp-3 mb-3">
              {project.summary}
            </p>
          </div>

          {/* Read Story / Case Study Button */}
          <div className="mb-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenStory(project);
              }}
              className="inline-flex items-center gap-2 text-xs text-[var(--color-brand-cyan)] hover:text-white hover:underline transition-colors uppercase tracking-widest font-mono cursor-pointer"
            >
              <FaBookOpen size={12} />
              <span>Read Details & Story</span>
            </button>
          </div>

          {/* Card Footer: Tech Badges & GitHub Link */}
          <div className="pt-4 border-t border-[#2a1d3d] flex items-center justify-between gap-3 flex-wrap mt-auto">
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
                  className="hover:scale-125 transition-transform duration-200"
                >
                  {el}
                </span>
              ))}
            </div>

            {/* Bottom center page number indicator (1/1 by default, 1/2 if multi-page) - non-performing text */}
            <span className="text-xs font-mono text-[#7a6890] select-none tracking-widest uppercase">
              {displayImages.length > 0 ? "1/2" : "1/1"}
            </span>

            <div className="flex items-center gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[var(--color-brand-cyan)] bg-[#091522] hover:bg-[var(--color-brand-cyan)] hover:text-black text-xs font-mono uppercase tracking-wider text-[var(--color-brand-cyan)] transition-all duration-200 shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000]"
                >
                  <span>Visit Site</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#36294a] bg-[#120a1c] hover:border-[var(--color-brand-pink)] hover:text-[var(--color-brand-pink)] text-xs font-mono uppercase tracking-widest text-[#a895be] transition-all duration-200 shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000]"
              >
                <FaGithub size={13} />
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
    </div>
  );
}

function Projects() {
  const [activeStoryProject, setActiveStoryProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[var(--color-brand-peach)] drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] mb-16 text-center uppercase"
        >
          Featured Projects
        </motion.h2>

        {/* Balanced Responsive Grid: All cards identical size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onOpenStory={(proj) => setActiveStoryProject(proj)}
            />
          ))}
        </div>

        {/* More Projects Coming Soon Footer Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border-2 border-dashed border-[#2a1d3d] bg-[#120a1c]/60 text-[#6b5a80] text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-cyan)] animate-ping"></span>
            <span>More experiments & systems currently in development</span>
          </div>
        </motion.div>
      </div>

      {/* ── Retro Project Story / Case Study Modal ── */}
      <AnimatePresence>
        {activeStoryProject && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStoryProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl glass-card bg-[#150d21] border-2 border-[var(--color-brand-pink)] shadow-[10px_10px_0_#000] p-6 sm:p-8 z-10"
            >
              {/* Modal Terminal Header */}
              <div className="flex items-center justify-between border-b border-[#36294a] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff2a6d]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffb07c]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#05d9e8]"></span>
                  <span className="ml-2 text-xs font-mono text-[#a895be] uppercase tracking-wider">
                    CASE_STUDY // {activeStoryProject.number}_{activeStoryProject.id}
                  </span>
                </div>
                <button
                  onClick={() => setActiveStoryProject(null)}
                  className="text-[#a895be] hover:text-[var(--color-brand-pink)] p-1 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-[var(--color-brand-cyan)]">
                    {activeStoryProject.number}
                  </span>
                  <span className="text-xs font-mono text-[#ffb07c]">
                    {activeStoryProject.year}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-[var(--color-brand-peach)] drop-shadow-[2px_2px_0_#000] mb-1">
                  {activeStoryProject.title}
                </h3>
                <p className="text-sm text-[#a895be] uppercase tracking-wider font-semibold mb-6">
                  {activeStoryProject.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeStoryProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#1a1025] border border-[#36294a] text-xs font-mono text-[var(--color-brand-cyan)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Deep-dive Story */}
                <div className="text-[#e5e5e5] text-base leading-relaxed space-y-4 mb-8 bg-[#0b0614]/60 p-5 rounded-lg border border-[#2a1d3d]">
                  <p>{activeStoryProject.story}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 flex-wrap">
                  <button
                    onClick={() => setActiveStoryProject(null)}
                    className="px-5 py-2 rounded border border-[#36294a] text-[#a895be] hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href={activeStoryProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#36294a] bg-[#120a1c] hover:border-[var(--color-brand-pink)] hover:text-[var(--color-brand-pink)] text-xs font-mono uppercase tracking-wider text-[#a895be] transition-all duration-200 shadow-[2px_2px_0_#000]"
                  >
                    <FaGithub size={14} />
                    <span>View Repository</span>
                  </a>
                  {activeStoryProject.live && (
                    <a
                      href={activeStoryProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 pixel-btn text-xs font-mono uppercase tracking-wider"
                    >
                      <span>Visit Site</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;