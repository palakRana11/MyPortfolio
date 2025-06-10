import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';

const About = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = {
    'Programming': {
      icon: <CodeIcon className="text-4xl" />,
      skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'R']
    },
    'Frontend Development': {
      icon: <WebIcon className="text-4xl" />,
      skills: ['React.js', 'HTML5', 'CSS3', 'TailwindCSS', 'Material-UI', 'Responsive Design']
    },
    'Backend Development': {
      icon: <StorageIcon className="text-4xl" />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'API Design']
    },
    'Machine Learning': {
      icon: <PsychologyIcon className="text-4xl" />,
      skills: ['TensorFlow', 'Scikit-learn', 'Neural Networks', 'NLP', 'Computer Vision', 'Deep Learning']
    },
    'Developer Tools': {
      icon: <BuildIcon className="text-4xl" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Linux', 'Command Line']
    },
    'Professional Skills': {
      icon: <GroupsIcon className="text-4xl" />,
      skills: ['Problem Solving', 'Team Leadership', 'Project Management', 'Communication', 'Time Management', 'Agile']
    }
  };

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-1 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
          
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-[#C770F0] relative">
              <img
                src="https://via.placeholder.com/400x400.png?text=Profile+Photo"
                alt="Palak Rana"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#C770F0]/10"></div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#ccd6f6] mb-6">Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, { icon, skills }]) => (
              <motion.div
                key={category}
                className="relative h-64 group cursor-pointer"
                onHoverStart={() => setHoveredCategory(category)}
                onHoverEnd={() => setHoveredCategory(null)}
              >
                <div 
                  className={`absolute inset-0 bg-[#112240] rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out transform 
                    ${hoveredCategory === category ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
                >
                  <div className="text-[#C770F0] mb-4">
                    {icon}
                  </div>
                  <h4 className="text-[#ccd6f6] font-medium text-lg">{category}</h4>
                  <p className="text-[#8892b0] text-sm mt-2">Hover to see skills</p>
                </div>

                <motion.div
                  className="absolute inset-0 bg-[#233554] rounded-lg p-6 flex flex-col"
                  initial={false}
                  animate={{
                    opacity: hoveredCategory === category ? 1 : 0,
                    scale: hoveredCategory === category ? 1 : 0.9,
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
  );
};

export default About; 