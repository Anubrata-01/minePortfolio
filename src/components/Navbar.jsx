
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [displayNavItems, setDisplayNavItems] = useState(false);

  const handleMenu = () => {
    setDisplayNavItems((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-[#A9C6C1] to-[#8FAEAC] shadow-md w-full p-4 relative z-10">
      <div className="w-[85%] mx-auto flex justify-between gap-12 items-center my-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-lg md:text-xl text-teal-900 font-bold tracking-wide">
            <span className="title bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent">
              Anubrata Chanda
            </span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex justify-center items-center space-x-6">
          <a href="#home" className="text-teal-900 hover:text-gray-700" aria-label="Home">
            Home
          </a>
          <a href="#about" className="text-teal-900 hover:text-gray-700" aria-label="About">
            About
          </a>
          <a href="#project" className="text-teal-900 hover:text-gray-700" aria-label="Project">
            Project
          </a>
          <a href="#contact" className="text-teal-900 hover:text-gray-700" aria-label="Contact">
            Contact
          </a>
        </div>

        {/* Menu Button for Small Screens */}
        <button
          className="lg:hidden p-2 bg-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          onClick={handleMenu}
          aria-label={displayNavItems ? "Close menu" : "Open menu"}
          aria-controls="nav-items"
        >
          {!displayNavItems ? <AlignJustify className="w-4 h-4 md:w-4 md:h-4" /> : <X className="w-4 h-4 md:w-4 md:h-4" />}
        </button>
      </div>

      {/* Navigation Links for Small Screens */}
      {displayNavItems && (
        <div id="nav-items" className="lg:hidden w-full p-4 mt-2 bg-gradient-to-b from-teal-100 to-teal-300">
          <a href="#home" className="block p-2 text-teal-900" aria-label="Home">
            Home
          </a>
          <a href="#about" className="block p-2 text-teal-900" aria-label="About">
            About
          </a>
          <a href="#project" className="block p-2 text-teal-900" aria-label="Project">
            Project
          </a>
          <a href="#contact" className="block p-2 text-teal-900" aria-label="Contact">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

