import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "NetflixGPT",
      description: "A Netflix-inspired movie website with AI-powered recommendations using GPT.",
      image: "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg",
      github: "https://github.com/Anubrata-01/netflix-gpt1",
      live: "https://netflix-gpt1-0ajb.onrender.com",
      tags: ["React", "GPT API", "Firebase", "Tailwind CSS","Redux Toolkit"]
    },
    {
      title: "Food Delivery Website",
      description: "A Swiggy-like food delivery platform with real-time order tracking and restaurant management.",
      image: "./foodstore.png",
      github: "https://github.com/Anubrata-01/foodStore",
      live: "https://foodmaniaclient.onrender.com/",
      tags: ["React","Tailwind CSS", "Node.js", "MongoDB", "Jotai","RazorPay","Appwrite"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with detailed forecasts, interactive maps, and location-based services.",
      image: "https://placehold.co/600x400?text=Weather+Dashboard",
      github: "https://github.com/yourusername/weather-dashboard",
      live: "http://localhost:5173/",
      tags: ["React", "OpenWeatherMap API", "Chart.js", "Geolocation API"]
    },
  ];

  return (

    <section className="py-16 bg-[#D9E4E0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                    <FaGithub className="inline mr-2" />
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <FaExternalLinkAlt className="inline mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
