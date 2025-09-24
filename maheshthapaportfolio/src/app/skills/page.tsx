"use client";

import { motion } from "framer-motion";
import myDetail from "../myDetail";

export default function SkillsPage() {
  const levelColors: Record<string, string> = {
    Beginner: "bg-red-400",
    Intermediate: "bg-yellow-400",
    Advanced: "bg-green-500",
    Expert: "bg-blue-600",
  };

  // Get unique categories
  const categories = Array.from(new Set(myDetail.skills.map((s) => s.category)));

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
            <div className="flex flex-col gap-4">
              {myDetail.skills
                .filter((s) => s.category === cat)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`p-4 bg-white shadow-lg rounded-xl border-l-4 border-[${myDetail.theme.primary}] hover:shadow-2xl transition transform hover:-translate-y-1`}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${Math.min(
                            ((skill.years ?? 0) / 5) * 100,
                            100
                          )}%`,
                        }}
                        transition={{ duration: 1 }}
                        className={`${levelColors[skill.level ?? "Beginner"]} h-2 rounded-full`}
                      />
                    </div>
                    <p className="text-gray-400 mt-1 text-sm">
                      {skill.years ?? 0} {skill.years === 1 ? "year" : "years"} experience
                    </p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
