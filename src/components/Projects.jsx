import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import dashboard from "../assets/images/Dashboard.png";
import students from "../assets/images/Student_records.png";
import fees from "../assets/images/Fees_management.png";
import batches from "../assets/images/Batch_management.png";
import staff from "../assets/images/Staff_management.png";
import admission from "../assets/images/Admission_request.png";
import login from "../assets/images/Login.png";

function Projects() {

  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    { src: login, alt: "Login Page" },
    { src: dashboard, alt: "Dashboard" },
    { src: students, alt: "Student Records" },
    { src: fees, alt: "Fees Management" },
    { src: batches, alt: "Batch Management" },
    { src: staff, alt: "Staff Management" },
    { src: admission, alt: "Admission Requests" }
    
  ];

  return (
    <section id="projects" className="py-32 px-6 text-white">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-yellow-400 mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="glass-card p-8 bg-gray-800/50">

          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Coaching Institute Management System (CIMS)
          </h3>

          <p className="text-gray-300 mb-6">
            A complete management system designed for coaching institutes to
            manage student admissions, fee installments, batch organization,
            and staff administration through a structured admin dashboard.
            The system simplifies daily administrative operations and provides
            organized data management using PHP and MySQL.
          </p>

         <div className="mb-10">

  <span className="text-yellow-400 font-semibold block mb-6">
    Tech Stack
  </span>

  <div className="tech-stack-container flex justify-center items-center gap-12 text-4xl text-gray-300 mb-6">
    
    <div className="tech-bounce text-indigo-400 cursor-pointer hover:drop-shadow-[0_0_12px_yellow]">
      <FaPhp className="tech-icon" title="PHP" />
    </div>
    <div className="tech-bounce text-yellow-400 cursor-pointer hover:drop-shadow-[0_0_12px_yellow]">
      <SiMysql className="tech-icon" title="MySQL" />
    </div>
    <div className="tech-bounce text-orange-500 cursor-pointer hover:drop-shadow-[0_0_12px_yellow]">
      <FaHtml5 className="tech-icon" title="HTML5" />
    </div>
    <div className="tech-bounce text-blue-500 cursor-pointer hover:drop-shadow-[0_0_12px_yellow]">
      <FaCss3Alt className="tech-icon" title="CSS3" />
    </div>
    
  </div>

</div>

          {/* Screenshot Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {screenshots.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer border border-transparent hover:border-yellow-400 transition"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full hover:scale-105 transition duration-300"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Lightbox Viewer */}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full rounded-lg shadow-2xl border border-yellow-400/50"
          />
        </div>
      )}

    </section>
  );
}

export default Projects;