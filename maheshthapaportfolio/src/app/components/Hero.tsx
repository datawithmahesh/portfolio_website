"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

import myDetail from "../myDetail";

// Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-indigo-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Glowing blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <motion.div variants={item} className="mb-6 relative">
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src={myDetail.logo} alt={myDetail.name} fill className="object-cover" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-indigo-400"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="text-5xl font-extrabold mb-2 text-white drop-shadow-lg">
          {myDetail.name}
        </motion.h1>

        {/* Tagline */}
        <motion.h2 variants={item} className="text-xl font-light mb-4 text-gray-200">
          {myDetail.tagline}
        </motion.h2>

        {/* About */}
        <motion.p variants={item} className="max-w-2xl text-gray-300 mb-6 leading-relaxed">
          {myDetail.homeDesc}
        </motion.p>

{/* Socials */}
<motion.div variants={item} className="flex flex-col items-center mb-6">
  <h3 className="text-lg font-semibold text-gray-200 mb-3">
    <u>Find me on</u>
  </h3>
  <div className="flex gap-6 text-white text-2xl">
    {myDetail.socials.map((social) => (
      <Link key={social.url} href={social.url} target="_blank" aria-label={social.name}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          {social.icon}
        </motion.div>
      </Link>
    ))}
  </div>
</motion.div>

        {/* Resume Button */}
        <motion.div variants={item}>
          <Link
            href={myDetail.resumeUrl}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-white text-black hover:bg-indigo-500 hover:text-white shadow-lg transition"
          >
            <FaDownload />
            Download Resume
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
