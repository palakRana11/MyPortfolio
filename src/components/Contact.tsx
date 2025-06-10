import React from 'react';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'palakranag99@gmail.com',
      link: 'mailto:palakranag99@gmail.com'
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+91 9958860902',
      link: 'tel:+919958860902'
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: 'Palak Rana',
      link: 'https://www.linkedin.com/in/palak-rana-6a2172334'
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      value: 'palakRana11',
      link: 'https://github.com/palakRana11'
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
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8">Get In Touch</h2>
          
          <p className="text-[#8892b0] mb-12 max-w-xl">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card p-6 rounded-lg flex items-center gap-4 hover:border-[#C770F0] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[#C770F0]">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[#ccd6f6] font-medium">{info.label}</p>
                  <p className="text-[#8892b0]">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 