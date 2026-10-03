function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm">
            © {currentYear} Kamrul Hassan Anik. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Back to top
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;