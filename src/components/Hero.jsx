import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div className="pt-10 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="w-full md:w-5/12 p-3 text-white md:mt-20">
          <h1 className="text-5xl md:text-7xl text-center md:text-left text-[#ff004f] font-semibold">
            Welcome!
          </h1>
          <div className="text-3xl mt-5 text-center md:text-left font-extrabold">
            <ReactTypingEffect
              text={[
                "I am a FrontEnd Developer",
                "From Kolkata, WB",
              ]}
              speed={50}
              eraseSpeed={50} 
              eraseDelay={1000}
              typingDelay={500}
              cursorClassName="text-[#ff004f]"
            />
            <div className="mt-16 flex justify-center md:justify-start">
              <a 
                href="public\AnubrataResumeTemplate.docx" 
                download 
                className=" bg-cyan-500 text-white p-2 text-lg rounded-md shadow-md hover:bg-[#e7a4b6] transition-all duration-300"
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


