import { motion } from 'framer-motion';
import React from 'react';
import { FaLaptopCode, FaServer } from 'react-icons/fa';

const experiences = [
  {
    title: "AWS Cloud Virtual Internship",
    company: "AICTE",
    period: "Dec 2022 - Feb 2023",
    description: "As an intern at AICTE, I focused on AWS Cloud, managing diverse cloud computing tasks such as infrastructure optimization.",
    icon: <FaLaptopCode className="text-2xl text-indigo-600" />,
    tags: ["AWS", "Cloud Computing", "Infrastructure"]
  },
  {
    title: "Juniper Networking Virtual Internship",
    company: "AICTE",
    period: "May 2023 - Jul 2023",
    description: "Focused on networking solutions for cloud workloads, understanding IT infrastructure principles comprehensively.",
    icon: <FaServer className="text-2xl text-indigo-600" />,
    tags: ["Networking", "Cloud Infrastructure", "IT Solutions"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                    {exp.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-lg text-indigo-600">{exp.company}</p>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
