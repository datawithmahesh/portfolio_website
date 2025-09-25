"use client";

import { motion } from "framer-motion";
import myDetail from "../myDetail";

export default function SkillsPage() {
  // Get unique categories
  const categories = Array.from(
    new Set(myDetail.skillsByCategory.map((s) => s.category))
  );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen text-black px-6 py-12 md:py-16 mt-18">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Skills & Expertise
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          My core competencies, tools, and technologies I excel in.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {categories.map((cat) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">{cat}</h2>
            <div className="flex flex-wrap gap-3">
              {myDetail.skillsByCategory
                .filter((s) => s.category === cat)
                .flatMap((s) => s.skills)
                .map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white shadow-md rounded-lg border border-gray-200 text-gray-800 text-sm font-medium hover:shadow-xl transition"
                  >
                    {skill}
                  </motion.span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
