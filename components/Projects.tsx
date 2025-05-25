import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "PlutoGPT – AI Chatbot Android Application",
    description: "Developed a feature-rich Android chatbot app integrating Gemini API for real-time text and image-based conversations. Implemented RecyclerView with dynamic message rendering (text/image), Glide for image loading, and an intuitive dual-sided chat UI.",
    technologies: ["Java", "Android", "Gemini API", "RecyclerView", "Glide"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Bidding System (Python Full Stack Development)",
    description: "Developed an e-commerce platform for online shopping utilizing Python and MySQL, leveraging Django technology to ensure efficient website functionality and user experience. Served as the frontend developer for this project.",
    technologies: ["Python", "Django", "MySQL", "HTML/CSS", "JavaScript"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Serverless Music App using AWS Services",
    description: "Developed a serverless music app using AWS S3 for scalable storage and CloudFront for low-latency delivery. Implemented a responsive frontend with React and managed user authentication with AWS Cognito.",
    technologies: ["AWS S3", "AWS CloudFront", "AWS Lambda", "React", "Node.js"],
    links: {
      github: "#",
      demo: "#"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">
                  {project.title.split(' ')[0].charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
