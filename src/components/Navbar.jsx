function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          Anik
        </a>

        {/* Navigation links */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-blue-400 transition-colors">
            Home
          </a>

          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;