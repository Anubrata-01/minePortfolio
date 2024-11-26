import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div className="pt-10 flex justify-center bg-[#D9E4E0]">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="w-full md:w-5/12 p-3 text-gray-900 md:mt-20 ml-[2%] md:ml-[6%]">
          <h1 className="text-5xl md:text-7xl text-center md:text-left text-blue-600 font-bold">
            Welcome!
          </h1>
          <div className="text-3xl mt-5 text-center md:text-left font-semibold">
            <ReactTypingEffect
              text={[
                "I am a Frontend Developer",
                "From Kolkata, WB",
              ]}
              speed={50}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
              cursorClassName="text-blue-600"
            />
            <div className="mt-16 flex justify-center md:justify-start">
              <a 
                href="/AnubrataFrontend.pdf" 
                download 
                className="bg-teal-500 text-white px-5 py-3 text-lg rounded-md shadow-md hover:bg-teal-600 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12 mt-16 md:mt-0 p-3">
          <img
            src="/mynewImage.avif"
            alt="Developer"
            className="w-full h-auto md:h-[500px] rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;


