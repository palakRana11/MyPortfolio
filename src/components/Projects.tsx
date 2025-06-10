import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  live: string | null;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'GymGuru AI Fitness System',
      description: 'An AI-powered fitness application that provides real-time pose estimation and form correction during workouts. Features include exercise tracking, personalized workout plans, and detailed analytics for performance monitoring.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'Flask', 'React'],
      github: 'https://github.com/palakRana11/gymguru2',
      live: null,
    },
    {
      title: 'NIC Eats - Food Delivery Platform',
      description: 'Developed during my internship at National Informatics Centre (NIC) India, NIC Eats is a food delivery platform designed for government organizations. Implemented key features including real-time order tracking, vendor management, and secure payment integration.',
      technologies: ['Full Stack Development', 'Database Management', 'API Integration', 'Security Implementation', 'UI/UX Design'],
      github: null,
      live: null,
    },
    {
      title: 'Salary Calculator',
      description: 'A comprehensive salary calculation tool that helps users understand their take-home pay by factoring in various deductions, taxes, and benefits. Features an intuitive interface and detailed breakdown of calculations.',
      technologies: ['React', 'TypeScript', 'Material-UI', 'Financial Calculations'],
      github: null,
      live: null,
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-8">Projects</h2>
        </motion.div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card p-6 rounded-lg relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10">
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-[#ccd6f6] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm text-[#C770F0]"
                      >
                        {tech}
                        {techIndex < project.technologies.length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8892b0] hover:text-[#C770F0] transition-colors"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8892b0] hover:text-[#C770F0] transition-colors"
                      >
                        <OpenInNewIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;