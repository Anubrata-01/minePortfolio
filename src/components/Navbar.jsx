
import { AlignJustify, X } from "lucide-react";
import { useMemo, useState } from "react";

const Navbar = () => {
  const [displayNavItems, setDisplayNavItems] = useState(false);

  const handleMenu = () => {
    console.log("button clicked");
    setDisplayNavItems((prev) => !prev);
  };
  const titleLogo = useMemo(() => {
    return "src/components/myimg.gif"
  }, []);
  return (
    <div className="w-full p-4 ">
      <div className="flex justify-between items-center w-[95%] ml-4 relative">
      <div className="ml-[6%] md:ml-[5%] cursor-pointer">
  <picture className="text-orange-950 box-border">
    <source
      srcSet="src\components\myimg.gif"
      media="(min-width: 1000px)"
      width="1000"
      height="400"
    />
    <img 
      src={titleLogo} 
      alt="Title Logo" 
      className="w-[40%] md:w-[200px] p-0 bg-black" 
    />
  </picture>
</div>


        {/* Hidden on large screens, visible on medium and smaller screens */}
        <button
        className="lg:hidden bg-violet-600 rounded-md mr-[5%]"
        onClick={handleMenu}
        aria-label={displayNavItems ? "Close menu" : "Open menu"}
      >
        {!displayNavItems ? <AlignJustify /> : <X />}
      </button>

        {/* Nav items for large screens */}
        <div className="hidden lg:flex gap-4 md:mr-[5%]">
  <a href="#home" className="p-2 text-orange-500 uppercase cursor-pointer" aria-label="Home">
    Home
  </a>
  <a href="#about" className="p-2 text-orange-500 uppercase" aria-label="About">
    About
  </a>
  <a href="#project" className="p-2 text-orange-500 uppercase" aria-label="Project">
    Project
  </a>
  <a href="#contact" className="p-2 text-orange-500 uppercase" aria-label="Contact">
    Contact
  </a>
</div>

{/* Nav items for medium and smaller screens */}
{displayNavItems && (
  <div className="lg:hidden w-[400px] md:w-[300px] mt-72 p-4 flex flex-col absolute -right-4 gap-3 bg-emerald-800" role="menu">
    <a href="#home" className="navmenu p-2 text-orange-500 uppercase" aria-label="Home" role="menuitem">
      Home
    </a>
    <a href="#about" className="navmenu p-2 text-orange-500 uppercase delay-200 ease-in-out" aria-label="About" role="menuitem">
      About
    </a>
    <a href="#project" className="navmenu p-2 text-orange-500 uppercase" aria-label="Project" role="menuitem">
      Project
    </a>
    <a href="#contact" className="navmenu p-2 text-orange-500 uppercase" aria-label="Contact" role="menuitem">
      Contact
    </a>
  </div>
)}

      </div>
    </div>
  );
};

export default Navbar;
