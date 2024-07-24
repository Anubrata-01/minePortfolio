import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <section className="mt-4 md:mt-10 text-white" id="about">
      <h2 className="text-center font-bold text-yellow-400 text-2xl md:text-5xl">About Me</h2>
      <div className="w-full md:w-[90%] md:mx-auto p-2 md:p-3 flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start font-bold">
        <div className="w-full md:w-[48%] box-border p-5">
          <div className="flex justify-around mb-4">
            <button 
              className={`btn ${showEducation ? 'text-red-500' : ''}`}
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button 
              className={`btn ${!showEducation ? 'text-red-500' : ''}`}
              onClick={() => setShowEducation(false)}
            >
              Skills
            </button>
          </div>
          {showEducation ? <Education /> : <Skills />}
        </div>
        <div className="w-full md:w-[48%] mt-16 md:mt-0 p-3">
          <img
            src="src\components\AnubrataImage.jpg"
            alt="Anubrata"
            className="w-full h-auto md:h-[500px] rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
