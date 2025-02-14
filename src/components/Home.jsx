import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";

export default function PortfolioHomepage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold mb-3">Hi, I'm [Saumya Srivastava]</h1>
        <p className="text-xl text-gray-400">Building web & mobile apps with React and React Native</p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="mt-6 flex gap-5"
      >
        <a href="/resume.pdf" download>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl font-semibold transition">
            <Download size={18} /> Resume
          </button>
        </a>
        <a href="https://github.com/saumya048" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 border border-gray-500 px-5 py-3 rounded-xl hover:bg-gray-700 transition">
            <Github size={18} /> GitHub
          </button>
        </a>
        <a href="https://www.linkedin.com/in/saumya-srivastava-98a637249/" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 border border-gray-500 px-5 py-3 rounded-xl hover:bg-gray-700 transition">
            <Linkedin size={18} /> LinkedIn
          </button>
        </a>
      </motion.div>

      {/* About Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
        className="mt-12 max-w-3xl p-6 bg-gray-800 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-400">
          I am a passionate React and React Native developer with expertise in creating high-performance applications.
          I love working with modern UI/UX trends, animations, and scalable architectures to build engaging user experiences.
        </p>
      </motion.div>
    </div>
  );
}
