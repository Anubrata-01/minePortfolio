
import { AlignJustify, X } from "lucide-react";
import { useMemo, useState } from "react";

const Navbar = () => {
  const [displayNavItems, setDisplayNavItems] = useState(false);

  const handleMenu = () => {
    console.log("button clicked");
    setDisplayNavItems((prev) => !prev);
  };
  const titleLogo = useMemo(() => {
    return "src/assets/myimg.gif";
  }, []);
  return (
    <div className="w-full p-4 ">
      <div className="flex justify-between items-center w-[95%] ml-4 relative">
        <div className="ml-[6%] md:ml-[5%] cursor-pointer ">
          <span className=" text-orange-950 box-border">
          <img src={titleLogo} alt="titleLogo" className=" w-[40%] md:w-[200px] p-0"/>
          </span>
        </div>

        {/* Hidden on large screens, visible on medium and smaller screens */}
        <button className="lg:hidden bg-violet-600 rounded-md mr-[5%]" onClick={handleMenu}>
          {!displayNavItems ? <AlignJustify /> : <X />}
        </button>

        {/* Nav items for large screens */}
        <div className="hidden lg:flex gap-4 md:mr-[5%]">
          <span className=" p-2 text-orange-500 uppercase cursor-pointer">
            Home
          </span>
          <span className=" p-2 text-orange-500 uppercase">About</span>
          <span className=" p-2 text-orange-500 uppercase">Project</span>
          <span className=" p-2 text-orange-500 uppercase">Contact</span>
        </div>

        {/* Nav items for medium and smaller screens */}
        {displayNavItems && (
          <div className="lg:hidden w-[400px] md:w-[300px]  mt-72 p-4  flex flex-col absolute -right-4 gap-3 bg-emerald-800">
            <span className="navmenu p-2 text-orange-500 uppercase">Home</span>
            <span className="navmenu p-2 text-orange-500 uppercase">About</span>
            <span className="navmenu p-2 text-orange-500 uppercase">
              Project
            </span>
            <span className="navmenu p-2 text-orange-500 uppercase">
              Contact
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
