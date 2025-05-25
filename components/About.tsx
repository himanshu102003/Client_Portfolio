import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import styles from '../styles/ProgressBar.module.css';

interface Skill {
  name: string;
  level: number;
}

interface Language {
  name: string;
  level: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface ProgressBarProps {
  value: number;
  label: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, className = '' }) => (
  <div className={`${styles.progressBar} ${className}`}>
    <div 
      className={styles.progressBarFill}
      style={{ '--progress': `${value}%` } as React.CSSProperties}
      role="presentation"
      aria-hidden="true"
    />
    <span className="sr-only">{label}: {value}%</span>
  </div>
);

export default function About() {
  const skills: Skill[] = [
    { name: 'Java', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'AWS', level: 70 },
  ];

  const languages: Language[] = [
    { name: 'Telugu', level: 'Native' },
    { name: 'English', level: 'Professional' },
  ];

  const certifications: Certification[] = [
    { name: 'AWS Cloud Practitioner', issuer: 'AWS', year: '2022' },
    { name: 'AWS Developer Associate', issuer: 'AWS', year: '2022' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a Computer Science student at KL University with a passion for software development and cloud technologies. 
            I'm always eager to learn new technologies and apply my skills to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              <span>Skills</span>
            </h3>
            <section aria-labelledby="skills-heading">
              <h3 id="skills-heading" className="sr-only">Technical Skills</h3>
              <ul className="space-y-4 list-none p-0 m-0">
                {skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <ProgressBar 
                      value={skill.level} 
                      label={`${skill.name} skill level`}
                      className="mt-1"
                    />
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-800">{lang.name}</span>
                      <span className="text-indigo-600">{lang.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.article 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-3 bg-indigo-50 p-3 rounded-lg"
                    aria-labelledby={`cert-${index}-title`}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <h4 id={`cert-${index}-title`} className="font-medium text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
