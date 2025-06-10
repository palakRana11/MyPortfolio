import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
  const projects = [
    {
      title: 'GymGuru',
      description: 'An AI-powered fitness and nutrition guide that generates personalized weekly workout and diet plans using Google\'s Gemini API. Features include BMI calculation, intake tracking, and diet monitoring.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'TailwindCSS'],
      github: 'https://github.com/palakRana11/gymguru2',
      live: null,
    },
    {
      title: 'AI-Driven Fitness System',
      description: 'Developed a fitness and nutrition recommendation system using MERN stack and Machine Learning Regression Models. Implemented real-time epidemic outbreak prediction using R programming.',
      technologies: ['MERN Stack', 'Machine Learning', 'R Programming', 'REST API'],
      github: null,
      live: null,
    },
    {
      title: 'Salary Calculator',
      description: 'Created a program to calculate salary based on shift timings in C++, demonstrating strong programming fundamentals and problem-solving skills.',
      technologies: ['C++', 'Data Structures', 'Algorithms'],
      github: null,
      live: null,
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8">My Projects</h2>
          
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#ccd6f6]">{project.title}</h3>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8892b0] hover:text-[#64ffda]"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8892b0] hover:text-[#64ffda]"
                      >
                        <OpenInNewIcon />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-[#8892b0] mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm text-[#64ffda]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 