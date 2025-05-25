import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Jahnavi Kanduri</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Computer Science Student & Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I'm passionate about creating innovative solutions and continuously expanding my knowledge in software development and cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 mr-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Contact Me"
                aria-label="Contact Me"
                rel="noopener noreferrer"
              >
                Contact Me
                <span className="sr-only">Contact Me</span>
              </motion.a>
              <a
                href="/resume.pdf"
                download="Jahnavi_Kanduri_Resume.pdf"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                aria-label="Download Resume"
                title="Download my resume (PDF)"
                rel="noopener noreferrer"
              >
                Download Resume
                <FaFileDownload className="ml-2" aria-hidden="true" />
                <span className="sr-only">Download Resume (PDF)</span>
              </a>
              <motion.a
                href="#projects"
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="View My Work"
                aria-label="View My Projects"
                rel="noopener noreferrer"
              >
                View My Work
                <span className="sr-only">View My Projects</span>
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="GitHub profile"
                title="GitHub Profile"
              >
                <FaGithub size={24} />
                <span className="sr-only">GitHub Profile</span>
              </a>
              <a 
                href="https://linkedin.com/in/jahnavi-kanduri-346239226/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="LinkedIn profile"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn Profile</span>
              </a>
              <a 
                href="mailto:jahnavikanduri31@gmail.com" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="Send email"
                title="Email Me"
              >
                <FaEnvelope size={24} />
                <span className="sr-only">Email Me</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-indigo-100 rounded-full overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-indigo-300">JK</div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-indigo-200 rounded-full z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-indigo-100 rounded-full z-0"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <a 
            href="#about" 
            className="text-gray-500 hover:text-indigo-600"
            title="Scroll down to About section"
            aria-label="Scroll down to About section"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <title>Scroll down</title>
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                aria-hidden="true"
              />
            </svg>
            <span className="sr-only">Scroll down to About section</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
