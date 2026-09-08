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
            One of my recent projects is <strong>Buddy Punching</strong> — a mobile attendance system I built after testing every existing solution on the market and realizing they could all be beaten in under two minutes. Fake GPS apps from the Play Store, handing your phone to a coworker to clock in for you — the standard tricks that make GPS-only attendance useless.
          </p>

          <p>
            So I built something harder to cheat. The app layers OS-native geofencing with Wi-Fi router BSSID verification — it checks that you're actually connected to the office's physical router hardware, which you can't spoof from home. Each account is locked to one physical device through hardware fingerprint binding, so logging in from a coworker's phone won't work either. A PostgreSQL cron job auto-settles any open session at midnight to prevent orphan check-ins from breaking payroll. The admin side is a Vite + React dashboard with a live Mappls radar map for configuring geofences and monitoring attendance in real time.
          </p>

          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--color-brand-pink)] to-transparent my-4 opacity-50"></div>

          <p>
            Technically, it worked. None of the anti-spoofing could be faked. But the app still failed — three times over. First, legality: you cannot silently monitor an employee's device without explicit, informed consent, and privacy regulations make continuous location tracking a legal minefield. Second, Android itself: no matter how robust the background monitoring was — heartbeat checks, Firebase push wakeups, foreground services — Android's battery optimization would eventually kill it. I engineered around every restriction, and the OS kept finding new ways to shut it down. Third, and the one I didn't see coming: trust. Employees started viewing the app with suspicion, not because of any malicious intent on my end, but because they understood that once this kind of tool exists in the public domain, any employer could misuse it. And they were right.
          </p>

          <p>
            So I shelved it. What I took away is that building something technically sound is only part of the job — legality, platform constraints, and public trust are just as much engineering problems as the code itself, and ignoring them means shipping something that works in a vacuum but breaks in the real world.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;