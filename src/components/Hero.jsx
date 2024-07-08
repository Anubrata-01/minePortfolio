
const Hero = () => {

  return (
    <div className="  pt-10  flex  md:justify-evenly  ">
      <div className="w-full md:w-[90%] h-[35%] md:h-auto border-box  flex flex-col justify-center md:flex-row md:justify-evenly items-center md:items-start font-bold">
        <div className=" w-[95%] box-border p-3 text-white md:w-[45%] md:mt-20 mt-0 flex-col justify-center items-center">
          <h1 className=" text-5xl text-center md:text-start  md:text-7xl break-words text-[rgb(255,0,79)]">
            Welcome !
          </h1>
          <div className=" md:text-3xl text-3xl mt-5 text-center md:text-start">
            <span className=" text-[#ff004f]">I</span>{" "}
            <span className="">am a</span>{" "}
            <span className=" text-[#ff004f]">FrontEnd</span>{" "}
            <span className="">Developer</span>
            <p className="mt-5 text-[#ff004f]">
              From <span className=" text-white">Kolkata,</span>{" "}
              <span className="">WB</span>
            </p>
          </div>
        </div>
        <div className="w-[95%] mt-16 md:mt-0 p-3 text-white md:w-[50%]">
          <picture>
          <img
              src="src/assets/mynewImage.avif"
              alt="myImage"
              className="w-full h-[50%] rounded-md object-cover md:w-full md:h-[500px] md:object-cover"
            />
            <source
              srcSet="src/assets/mynewImage.avif"
              // media="(min-width: 768px)"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;
