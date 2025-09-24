"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import myDetail from "../myDetail";
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const { contact, socials } = myDetail;

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResponseMsg(data);
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setResponseMsg({ success: false, message: "Unexpected error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen px-4 sm:px-6 lg:px-12 py-12 text-black mt-18">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Contact Me</h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          Get in touch for collaborations, projects, or just to say hello.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h2>

          {contact.email && (
            <div className="flex items-center gap-3 text-gray-700 text-base sm:text-lg">
              <FaEnvelope className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" />
              <a href={`mailto:${contact.email}`} className="hover:text-indigo-600 transition">
                {contact.email}
              </a>
            </div>
          )}
          {contact.phone && (
            <div className="flex items-center gap-3 text-gray-700 text-base sm:text-lg">
              <FaPhone className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" />
              <a href={`tel:${contact.phone}`} className="hover:text-indigo-600 transition">
                {contact.phone}
              </a>
            </div>
          )}
          {contact.website && (
            <div className="flex items-center gap-3 text-gray-700 text-base sm:text-lg">
              <FaGlobe className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" />
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition"
              >
                {contact.website}
              </a>
            </div>
          )}
          {contact.location && (
            <div className="flex items-center gap-3 text-gray-700 text-base sm:text-lg">
              <FaMapMarkerAlt className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" />
              <span>{contact.location}</span>
            </div>
          )}

          {/* Social Links */}
          <motion.div className="flex flex-wrap gap-4 mt-6 text-xl sm:text-2xl">
            {socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition"
                aria-label={social.name || "social link"}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-xl p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send a Message</h2>

          {responseMsg && (
            <div
              className={`p-4 mb-4 rounded text-sm sm:text-base ${
                responseMsg.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {responseMsg.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center gap-2 bg-indigo-600 text-white font-medium py-3 rounded-lg shadow hover:bg-indigo-700 transition transform hover:scale-105 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
