import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Anubrata Chanda</h3>
            <p className="text-gray-400">Front End Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Anubrata-01" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anubrata-chanda-090408246/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:anubrata3604@gmail.com" className="hover:text-blue-400 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Anubrata Chanda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;