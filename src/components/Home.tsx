import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#C770F0] mb-5">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
            Palak Rana
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6">
            I build things for the web.
          </h2>
          <p className="text-lg text-[#8892b0] max-w-xl mb-8">
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently focused on AI and ML development with expertise in full-stack web development.
          </p>
          
          <div className="flex gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 border-2 border-[#C770F0] text-[#C770F0] rounded hover:bg-[#C770F0]/10 transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#C770F0] text-[#0a192f] rounded hover:bg-[#C770F0]/90 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 