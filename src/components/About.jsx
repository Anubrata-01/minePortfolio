// import React from 'react'

import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  const[show,setShow]=useState(false);
  const handleToggle=()=>{
    setShow(!show)
  }
  return (
    <section className="  mt-4 md:mt-10 text-white flex-col relative top-0 left-0 transition " id="about">
      <p className=" flex justify-center font-bold text-yellow-400 text-2xl md:text-5xl ">About Me</p>
      <div className="w-full md:w-[90%] h-[35%] md:relative md:left-10 md:h-auto p-2 md:p-3 flex flex-col justify-center md:flex-row-reverse md:justify-evenly items-center md:items-start font-bold ">
        <div className="w-[95%] box-border p-5 text-white md:w-[50%] md:mt-0 mt-0  flex-col justify-center items-center">
         <section className="w-[95%] md:w-[90%] mt-0 md:-mt-2 ml-2 md:ml-8">
            <div className="flex justify-around  ">
              <button className="btn" style={{ color: !show ? "" : 'red' }} onClick={()=> handleToggle()}>Education</button>

              <button className=" btn" style={{ color: show ? "" : 'red' }} onClick={()=>handleToggle()}>Skills</button>
            </div>
          </section>
          <section className=" w-[99%] md:w-[98%]   mt-[1%]">
            {
              show?(<Education/>):(<Skills/>)
            }
          </section>
        </div>
        <section className="w-[95%] mt-16 md:mt-0 p-3 text-white md:w-[50%]">
          <picture>
            <img
              src="src/assets/AnubrataImage.jpg"
              alt="myAnubrataImage"
              className="w-full h-[50%] rounded-md object-cover md:w-full md:h-[500px] md:object-cover"
            />
          </picture>
         
        </section>
      </div>
    </section>
  );
};

export default About;
