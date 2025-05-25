import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description?: string;
  achievements?: string[];
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'KL University',
      year: '2021 - 2025',
      description: 'Specialization in Cloud Computing and Networking',
      achievements: [
        'CGPA: 9.2/10',
        'Recipient of Merit Scholarship for Academic Excellence',
        'Active member of Coding Club and Hackathon Society'
      ]
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Narayana Junior College',
      year: '2019 - 2021',
      achievements: [
        'Percentage: 97.6%',
        'Top 1% in State Board Examinations'
      ]
    },
    {
      degree: 'Secondary School (10th Grade)',
      institution: 'Bharatiya Vidya Bhavans Public School',
      year: '2018 - 2019',
      achievements: [
        'CGPA: 10/10',
        'School Topper in Board Examinations'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50" aria-label="Education">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto" aria-hidden="true"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="space-y-10">
              {educationData.map((edu, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative pl-12 pb-10 border-l-2 border-indigo-200 ${index !== educationData.length - 1 ? 'mb-10' : ''}`}
                  aria-labelledby={`education-${index}-title`}
                >
                  <div 
                    className="absolute -left-3.5 top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <FaGraduationCap className="text-white text-sm" />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 id={`education-${index}-title`} className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{edu.institution}</p>
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full mb-4">
                      {edu.year}
                    </span>
                    {edu.description && (
                      <p className="text-gray-600 mb-4">{edu.description}</p>
                    )}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <FaAward className="mr-2 text-yellow-500" />
                          Key Achievements:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {edu.achievements.map((achievement, i) => (
                            <li key={`${index}-${i}`} className="text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
