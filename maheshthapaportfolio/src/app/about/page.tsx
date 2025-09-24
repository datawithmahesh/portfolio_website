"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import myDetail from "../myDetail";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-black min-h-screen">

      {/* Banner */}
      <section className="relative w-full h-20 md:h-50 lg:h-50 justify-center items-center overflow-hidden mt-20">

<div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/60 to-blue-700/40 flex items-center justify-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg"
          >
            About Me
          </motion.h1>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src={myDetail.profile}
            alt={myDetail.name}
            fill
            className="object-cover rounded-xl transition-transform hover:scale-105"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Who I Am</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{myDetail.about}</p>

        </motion.div>
      </section>

      {/* Education Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
          Education
        </h2>
        <div className="relative">
          {/* Vertical line only on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

          {myDetail.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              className={`mb-8 flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              {/* Card */}
              <div className="relative bg-white shadow-lg rounded-xl p-5 md:w-1/2 border-l-4 border-indigo-500 hover:shadow-2xl transition transform hover:-translate-y-1">
                {/* Icon */}
                <div className="absolute -top-5 left-5 bg-indigo-500 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md">
                  <FaGraduationCap />
                </div>

                <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
                <p className="text-indigo-600 font-medium">{edu.university}</p>
                <p className="text-gray-700">{edu.school}</p>
                <p className="text-gray-500 italic">{edu.location}</p>
                <p className="text-gray-500 mt-1">{edu.description}</p>
                <p className="text-sm text-gray-400 mt-1 font-mono">{edu.startDate} - {edu.endDate}</p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
