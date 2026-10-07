import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold">
            Anik
          </a>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-6">
            <a
              href="#home"
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 cursor-pointer"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? (
              <IoClose size={24} />
            ) : (
              <IoMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="sm:hidden flex flex-col gap-4 pt-6">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMobileMenu}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMobileMenu}
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;