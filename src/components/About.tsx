import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'React.js',
    'Node.js', 'Express.js', 'HTML', 'CSS', 'SQL', 'MongoDB',
    'Git', 'Linux', 'Machine Learning', 'Deep Learning', 'NLP'
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
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
            
            <div>
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Education</h3>
              <div className="mb-4">
                <p className="text-[#64ffda]">Amity University Haryana</p>
                <p className="text-[#8892b0]">B.Tech in AI & ML</p>
                <p className="text-[#8892b0]">2022-2026 | CGPA: 9.33</p>
              </div>
              <div>
                <p className="text-[#64ffda]">St Martin's Diocesan School</p>
                <p className="text-[#8892b0]">XII | CBSE</p>
                <p className="text-[#8892b0]">2022 | Percentage: 94.6</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#112240] text-[#8892b0] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 