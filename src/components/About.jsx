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
            Recently, I developed <strong>Dancing Keys</strong>, an audio-reactive RGB strobe controller for the EvoFox Phantom Gaming Mouse. The program reverse-engineers proprietary USB HID protocols from scratch to flash the mouse's LED in perfect sync with any music or system audio in real-time. By capturing USB traffic with Wireshark and USBPcap, I mapped out the 8-byte HID feature reports to gain low-level hardware control over the device.
          </p>

          <p>
            To keep the mouse fully functional, I bypassed exclusive-access cursor locking by implementing non-exclusive communication using the Windows HID API with <code>pywinusb</code>. I also engineered a creative workaround for a physical hardware limitation: since the mouse's colors are tied directly to DPI sensitivity profiles, I designed high-frequency ON/OFF strobe commands (<code>0x13</code>/<code>0x17</code>) that preserve user sensitivity while producing a high-performance visual display.
          </p>

          <p>
            The software features a low-latency (<span className="text-[var(--color-brand-pink)] font-semibold">&lt;20ms</span>) audio engine leveraging Windows WASAPI loopback, and a self-tuning beat detection pipeline utilizing a custom NumPy implementation of the Spectral Flux onset detection algorithm. The backend streams real-time frequency data via WebSockets to a React-based circular ribbon spectrum visualizer, all wrapped inside a native PyQt6 desktop app.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;