import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <section className="mt-4 md:mt-10 bg-[#D9E4E0] text-white" id="about">
      <h2 className="text-center font-bold text-teal-500 text-2xl md:text-3xl">About Me</h2>
      <div className="w-full md:w-[90%] md:mx-auto p-2 md:p-3 flex flex-col md:flex-row-reverse md:justify-between items-center md:items-start font-bold">
        <div className="w-full md:w-[48%] box-border p-5">
          <div className="flex justify-around mb-4">
             <button
               className={`px-6 py-2 rounded-md font-semibold transition-all ${
                 showEducation
                   ? "bg-teal-500 text-white"
                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
               }`}
               onClick={() => setShowEducation(true)}
             >
               Education
             </button>
             <button
               className={`px-6 py-2 rounded-md font-semibold transition-all ${
                 !showEducation
                   ? "bg-teal-500 text-white"
                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
               }`}
               onClick={() => setShowEducation(false)}
             >
               Skills
             </button> 
          </div>
          {showEducation ? <Education /> : <Skills />}
        </div>
        <div className="w-full md:w-[48%] mt-16 md:mt-0 p-3">
          <img
            src="\AnubrataImage.jpg"
            alt="Anubrata"
            className="w-full h-auto md:h-[500px] rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;


