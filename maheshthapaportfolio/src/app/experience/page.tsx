"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import myDetail from "../myDetail";

export default function ExperiencesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen px-6 py-12 md:py-16 text-black mt-18">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Experience
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          My professional journey and work history in Data Science, Machine learning and IT.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <section className="max-w-6xl mx-auto relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {myDetail.experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`mb-10 flex flex-col md:flex-row items-start ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Card */}
            <div className="relative bg-white shadow-xl rounded-xl p-6 md:w-1/2 border-l-4 border-indigo-500 hover:shadow-2xl transition transform hover:-translate-y-2">
              {/* Icon */}
              <div className="absolute -top-6 left-6 bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
                <FaBriefcase />
              </div>

              <h3 className="text-2xl font-semibold mt-2">{exp.role}</h3>
              <p className="text-indigo-600 font-medium">{exp.company}</p>
              {exp.location && <p className="text-gray-500 italic">{exp.location}</p>}
              <p className="text-gray-400 mt-1 font-mono">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
              {exp.bullets && exp.bullets.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Spacer for alternating layout */}
            <div className="md:w-1/2"></div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
