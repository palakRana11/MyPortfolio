import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const About: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <p className="text-[#8892b0] mb-4">
                    I am a passionate software engineer with a strong foundation in AI and Machine Learning. 
                    Currently pursuing B.Tech in AI&ML at Amity University Haryana with a CGPA of 9.33.
                  </p>
                  <p className="text-[#8892b0] mb-4">
                    My journey in tech has led me to work on various exciting projects, 
                    including GymGuru - an AI-powered fitness and nutrition guide, and 
                    several machine learning applications.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Education</h3>
                  <div className="mb-4">
                    <p className="text-[#C770F0]">Amity University Haryana</p>
                    <p className="text-[#8892b0]">B.Tech in AI & ML</p>
                    <p className="text-[#8892b0]">2022-2026 | CGPA: 9.33</p>
                  </div>
                  <div>
                    <p className="text-[#C770F0]">St Martin's Diocesan School</p>
                    <p className="text-[#8892b0]">XII | CBSE</p>
                    <p className="text-[#8892b0]">2022 | Percentage: 79.6</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#ccd6f6] mb-8">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillCategories).map(([category, { icon, skills }]) => (
                <motion.div
                  key={category}
                  className="relative h-64 group"
                  onHoverStart={() => setHoveredCategory(category)}
                  onHoverEnd={() => setHoveredCategory(null)}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#112240] rounded-lg p-6 flex flex-col items-center justify-center"
                    animate={{
                      scale: hoveredCategory === category ? 0.95 : 1,
                      opacity: hoveredCategory === category ? 0 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-[#C770F0] mb-4">
                      {icon}
                    </div>
                    <h4 className="text-[#ccd6f6] font-medium text-center">{category}</h4>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-[#112240] rounded-lg p-6"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      scale: hoveredCategory === category ? 1 : 1.1,
                      opacity: hoveredCategory === category ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-[#C770F0] font-medium mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-2 overflow-y-auto custom-scrollbar">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#112240] text-[#8892b0] rounded-full text-sm hover:text-[#C770F0] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 