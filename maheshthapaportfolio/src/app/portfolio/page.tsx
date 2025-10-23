"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import myDetail from "../myDetail";

interface ProjectCarouselProps {
  images: string[];
  alt: string;
  interval?: number;
}

function ProjectCarousel({ images, alt, interval = 3000 }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-100 ${
            idx === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function ProjectsPage() {
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
          Projects & Work
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Showcasing my work in Data Analysis, Data Science, Machine learning.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {myDetail.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border-l-4 border-indigo-600 hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Project Carousel */}
            {project.images && project.images.length > 0 && (
              <ProjectCarousel images={project.images} alt={project.title} />
            )}

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.shortDescription}</p>
              <p className="text-gray-400 text-sm mb-4">
                {project.tech?.join(" • ")}
              </p>

              <div className="flex gap-4 flex-wrap">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition"
                  >
                    Demo
                  </Link>
                )}
                {project.repoUrl && (
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    className="px-4 py-2 bg-gray-200 text-black rounded-full font-medium shadow hover:bg-gray-300 transition"
                  >
                    Code
                  </Link>
                )}
                {project.website_link && (
                  <Link
                    href={project.website_link}
                    target="_blank"
                    className="px-4 py-2 bg-gray-200 text-black rounded-full font-medium shadow hover:bg-gray-300 transition"
                  >
                    site_link
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
