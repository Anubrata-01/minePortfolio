import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAngular, FaSass, FaGitAlt, FaNpm, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiWebpack, SiBabel, SiJest, SiRedux, SiNextdotjs, SiGraphql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
    { name: 'Webpack', icon: <SiWebpack className="text-blue-500" /> },
    { name: 'Babel', icon: <SiBabel className="text-yellow-500" /> },
    { name: 'Jest', icon: <SiJest className="text-red-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'npm', icon: <FaNpm className="text-red-500" /> },
    { name: 'Redux ToolKit', icon: <SiRedux className="text-purple-500" /> },
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">Front-End Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;