import { useState } from "react";
import { motion } from "framer-motion";

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
          className="text-4xl font-bold text-cyan-400 mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-8">

          <h3 className="text-2xl font-semibold mb-4">
            Coaching Institute Management System (CIMS)
          </h3>

          <p className="text-gray-300 mb-6">
            A complete management system designed for coaching institutes to
            manage student admissions, fee installments, batch organization,
            and staff administration through a structured admin dashboard.
            The system simplifies daily administrative operations and provides
            organized data management using PHP and MySQL.
          </p>

          <div className="mb-8">
            <span className="text-cyan-400 font-semibold">Tech Stack:</span>
            <p className="text-gray-300">
              PHP • MySQL • HTML • CSS
            </p>
          </div>

          {/* Screenshot Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {screenshots.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
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
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}

export default Projects;