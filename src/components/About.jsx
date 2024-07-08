// import React from 'react'

const About = () => {
  return (
    <div className="  mt-4 md:mt-10 text-white flex-col relative top-0 left-0 ">
      <p className=" flex justify-center font-bold text-yellow-400 text-2xl md:text-5xl ">About Me</p>
      <div className="w-full md:w-[90%] h-[35%] md:relative md:left-10 md:h-auto p-2 md:p-3 flex flex-col justify-center md:flex-row-reverse md:justify-evenly items-center md:items-start font-bold border-2">
        <div className="w-[95%] box-border p-5 text-white md:w-[45%] md:mt-4 mt-0 flex-col justify-center items-center border-2">
         <p>Hii There!
          I am Anubrata Chanda
         </p>
         <p>I am a Passionate Front End Developer from Kolkata, West Bengal</p>
        </div>
        <div className="w-[95%] mt-16 md:mt-0 p-3 text-white md:w-[50%]">
          <picture>
            <img
              src="src/assets/AnubrataImage.jpg"
              alt="myAnubrataImage"
              className="w-full h-[50%] rounded-md object-cover md:w-full md:h-[500px] md:object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default About;
