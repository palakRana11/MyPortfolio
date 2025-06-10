import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';

interface SkillCategory {
  icon: React.ReactNode;
  skills: string[];
}

interface SkillCategories {
  [key: string]: SkillCategory;
}

export const skillCategories: SkillCategories = {
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