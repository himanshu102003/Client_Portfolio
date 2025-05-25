import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

interface NavItem {
  name: string;
  href: string;
  title: string;
  ariaLabel: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { 
      name: 'About', 
      href: '#about',
      title: 'About Me',
      ariaLabel: 'Go to About Me section'
    },
    { 
      name: 'Education', 
      href: '#education',
      title: 'My Education',
      ariaLabel: 'View my education history'
    },
    { 
      name: 'Experience', 
      href: '#experience',
      title: 'My Experience',
      ariaLabel: 'View my work experience'
    },
    { 
      name: 'Projects', 
      href: '#projects',
      title: 'My Projects',
      ariaLabel: 'View my projects'
    },
    { 
      name: 'Contact', 
      href: '#contact',
      title: 'Contact Me',
      ariaLabel: 'Get in touch with me'
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub size={20} />,
      href: 'https://github.com/yourusername',
      label: 'GitHub Profile',
      title: 'View my GitHub profile'
    },
    {
      icon: <FaLinkedin size={20} />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn Profile',
      title: 'View my LinkedIn profile'
    },
    {
      icon: <FaEnvelope size={20} />,
      href: 'mailto:your.email@example.com',
      label: 'Email Me',
      title: 'Send me an email'
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-indigo-600"
          >
            <Link 
              href="/" 
              className="text-2xl font-bold text-indigo-600"
              title="Home"
              aria-label="Go to home page"
            >
              Jahnavi K
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link 
                  href={item.href} 
                  className="text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors duration-300"
                  title={item.title}
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="flex space-x-4 ml-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                  aria-label={link.label}
                  title={link.title}
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  title={item.title}
                  aria-label={item.ariaLabel}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                    aria-label={link.label}
                    title={link.title}
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
