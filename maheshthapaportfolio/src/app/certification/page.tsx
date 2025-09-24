"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import myDetail from "../myDetail";
export default function CertificationsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen px-6 py-12 md:py-16 text-black mt-18">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Certifications</h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Achievements and professional certifications in Data Science and IT.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {myDetail.certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
              <FaCertificate />
            </div>

            <h3 className="text-2xl font-semibold mt-2">{cert.title}</h3>
            <p className="text-indigo-600 font-medium">{cert.issuer}</p>
            <p className="text-gray-500 italic mt-1">{cert.date}</p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition"
              >
                Verify
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
