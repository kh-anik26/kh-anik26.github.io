import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Kamrul Hassan Anik. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <p className="text-gray-400 text-sm">
              Get in touch
            </p>

            {/* GitHub */}
            <a
              href="https://github.com/kh-anik26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IoLogoGithub size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kamrul-hassan-anik-631841362"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IoLogoLinkedin size={22} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/kh-anik26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IoLogoInstagram size={22} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/kh-anik26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IoLogoFacebook size={22} />
            </a>

            {/* Back to top */}
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors text-sm"
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